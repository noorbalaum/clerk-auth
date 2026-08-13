# Contributing

Thanks for improving Clerk Auth.

## Workflow

1. Fork or branch from `main`.
2. Install dependencies with `npm install`.
3. Copy `.env.example` to `.env.local` and add your own Clerk development keys.
4. Keep changes focused and avoid committing generated files or credentials.
5. Run `npm run lint` and `npm run build` before opening a pull request.

## Pull requests

Describe what changed, why it changed, and how you verified it. Include screenshots for visible UI
work and call out any environment or migration requirements.

## Style

- Prefer strict TypeScript and server components when client state is unnecessary.
- Keep authentication and authorization checks on the server.
- Use clear interface language and accessible, semantic controls.
- Keep the interface neutral and avoid application-specific branding.
