import Link from 'next/link';
import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
  return (
    <main className="auth-shell">
      <Link className="back-link" href="/">← Back</Link>
      <section className="auth-copy">
        <p className="eyebrow">Account access</p>
        <h1>Welcome back.</h1>
        <p>Sign in to continue to your dashboard.</p>
      </section>
      <div className="auth-form">
        <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" forceRedirectUrl="/dashboard" />
      </div>
    </main>
  );
}
