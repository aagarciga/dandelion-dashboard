import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import { z } from 'zod'
import type { User } from "./app/lib/definitions";
import { sql } from "@vercel/postgres";
import bcrypt from 'bcrypt'


async function getUser(email: string): Promise<User | undefined> {
  try {
    const queryResult = await sql<User>`SELECT * FROM users WHERE email=${email}`
    return queryResult.rows[0]
  } catch (error) {
    console.error('Failed to fetch user:', error)
    throw new Error('Failed to fetch user.')
  }
}
export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z.object(
          {
            email: z.string()
              .min(1, "Email is required")
              .email("Invalid email"),
            password: z.string({ required_error: "Password is required" })
              .min(6, "Password must be more than 6 characters")
              .max(32, "Password must be less than 32 characters")
          }
        ).safeParse(credentials)

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data
          const user = await getUser(email)
          if (!user) return null
          const passwordsMatch = await bcrypt.compare(password, user.password)
          if (passwordsMatch) return user
        }
        console.log('Invalid credentials')
        return null
      }
    })]
})