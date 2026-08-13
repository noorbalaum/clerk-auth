import Link from 'next/link';
import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';

export default function HomePage() {
  return (
    <main className="home-shell">
      <nav className="topbar" aria-label="Main navigation">
        <Link className="site-name" href="/">Auth portal</Link>
        <div className="nav-actions">
          <Show when="signed-out">
            <SignInButton mode="modal" forceRedirectUrl="/dashboard">
              <button className="button button-secondary" type="button">Sign in</button>
            </SignInButton>
            <SignUpButton mode="modal" forceRedirectUrl="/dashboard">
              <button className="button button-primary" type="button">Create account</button>
            </SignUpButton>
          </Show>
          <Show when="signed-in">
            <Link className="button button-primary" href="/dashboard">Dashboard</Link>
            <UserButton />
          </Show>
        </div>
      </nav>

      <section className="hero">
        <p className="eyebrow">Next.js + Clerk</p>
        <h1>Authentication that stays simple.</h1>
        <p className="hero-copy">
          A small example portal with secure sign-in, account creation, protected pages, and
          self-service profile management.
        </p>
        <div className="hero-actions">
          <Show when="signed-out">
            <SignUpButton mode="modal" forceRedirectUrl="/dashboard">
              <button className="button button-primary button-large" type="button">
                Create your account
              </button>
            </SignUpButton>
            <Link className="text-link" href="/sign-in">I already have an account →</Link>
          </Show>
          <Show when="signed-in">
            <Link className="button button-primary button-large" href="/dashboard">
              Open dashboard
            </Link>
          </Show>
        </div>
      </section>

      <section className="feature-grid" aria-label="Features">
        <article><span>01</span><h2>Secure access</h2><p>Sign in with email or a configured social provider through Clerk.</p></article>
        <article><span>02</span><h2>Protected dashboard</h2><p>Unauthenticated visitors are redirected before private content is rendered.</p></article>
        <article><span>03</span><h2>User management</h2><p>Users can update their profile, email addresses, password, and active sessions.</p></article>
      </section>
    </main>
  );
}
