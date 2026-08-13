# Clerk Auth

A small, neutral authentication portal built with Next.js and Clerk.

## Features

- Clerk sign-in and sign-up flows
- Protected dashboard
- User profile and security management
- Email verification status
- Responsive and accessible interface
- No database or application-specific branding

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Add your Clerk development keys to `.env.local`, then open
[http://localhost:3000](http://localhost:3000).

## Environment variables

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/dashboard
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/dashboard
```

Never commit `.env.local` or a real secret key.

## Commands

```bash
npm run dev
npm run lint
npm run build
clerk doctor
```

## Stack

- Next.js 16
- React 19
- Clerk
- TypeScript

## License

[MIT](LICENSE)
