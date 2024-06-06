# Command History

## Project Creation

`npx create-next-app@latest dandelion-dashboard --use-npm --example "https://github.com/vercel/next-learn/tree/main/dashboard/starter-example"`

## TypeScript Plugin

Next.js includes a custom TypeScript plugin and type checker, which VSCode and other code editors can use for advanced type-checking and auto-completion.

You can enable the plugin in VS Code by:

1. Opening the command palette (Ctrl/⌘ + Shift + P)
2. Searching for "TypeScript: Select TypeScript Version"
3. Selecting "Use Workspace Version"

```js
    /**
     * Next.js will generate a link definition in .next/types that contains information
     * about all existing routes in your application, which TypeScript can then use to
     * provide feedback in your editor about invalid links.
     *
     * Currently, experimental support includes any string literal, including dynamic segments.
     * For non-literal strings, you currently need to manually cast the href with as Route:
     *
     * import type { Route } from 'next';
     */
    replace(`${pathname}?${params.toString()}` as Route)
```

## Including debounce npm library

`npm i use-debounce`

## Including NextAuth.js

Here, you're installing the beta version of NextAuth.js, which is compatible with Next.js 14.

`npm install next-auth@beta`

Next, generate a secret key for your application. This key is used to encrypt cookies, ensuring the security of user sessions. You can do this by running the following command in your terminal:

`openssl rand -base64 32`
