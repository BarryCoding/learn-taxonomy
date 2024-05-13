# Learning Progress

## Setup

- pnpm `pnpm dlx create-next-app@latest`
  - Yes: TS, ESlint, Tailwind, App
  - No: src, alias
- clean up project

## Learning Progress

- git
  - `git switch --detach SHA`
- project node version control
  - specify the node version `v14.17.3` in .nvmrc configuration file at root
  - `nvm use` to load such version
- project structure
  - styles
  - types
- style guild
  - editorconfig
  - prettier `.prettierrc .prettierignore`
    - `pnpm add -D prettier prettier-plugin-tailwindcss`
  - eslint `.eslintrc.json`
    - `pnpm add -D eslint-config-prettier`
- Shadcn UI
  - `pnpm dlx shadcn-ui@latest init`
  - default zinc variable
- postcss autoprefixer
  - `pnpm add -D autoprefixer`
- commit lint
  - `pnpm add -D @commitlint/{cli,config-conventional}`
  - `pnpm add -D husky`
  - `pnpm husky init`
  - `echo "pnpm dlx commitlint --edit \$1" > .husky/commit-msg`
- [Vercel Analytics](https://vercel.com/docs/analytics/quickstart)
  - `pnpm add @vercel/analytics`
- next-theme `pnpm add next-themes`
  - stop: hydration warning is disturbing!!!

## Pending

- [ ] theme transition effect?
- [ ] deploy to Vercel and enable Analytics
- [ ] Authentication with [NextAuth](https://next-auth.js.org/)
- [ ] env.ts type-save .env\* variables
  - [t3 env](https://env.t3.gg/docs/nextjs)
