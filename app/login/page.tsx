import Logo from "../ui/logo";
import LoginForm from "../ui/login-form";

export const metadata = {
  title: "Login",
}

export default function Page() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full items-end rounded-lg bg-orange-500 p-3 md:h-36">
          <div className="w-32 text-white md:w-36">
            <Logo />
          </div>
        </div>
        <LoginForm />
        <h4 className="text-sm text-orange-600 bg-blue-50 rounded-md px-6 py-2">Use user@dandelion.com/P@55word as credentials for demo purposes.</h4>
      </div>
    </main>
  )
}