# Security Policy

## Reporting a vulnerability

Please do not include credentials or personal information in a public issue. Use GitHub's private
vulnerability reporting feature when it is available for this repository.

## Secrets

- Never commit `.env.local`, Clerk secret keys, or session tokens.
- `NEXT_PUBLIC_*` values are intentionally visible to browsers; server secrets must never use that
  prefix.
- Rotate any credential immediately if it is accidentally exposed.

## Supported version

Security fixes are applied to the current `main` branch.
