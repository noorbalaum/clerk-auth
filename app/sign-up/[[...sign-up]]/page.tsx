import Link from 'next/link';
import { SignUp } from '@clerk/nextjs';

export default function SignUpPage() {
  return (
    <main className="auth-shell">
      <Link className="back-link" href="/">← Back</Link>
      <section className="auth-copy">
        <p className="eyebrow">New account</p>
        <h1>Create your account.</h1>
        <p>Set up secure access in a few steps.</p>
      </section>
      <div className="auth-form">
        <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" forceRedirectUrl="/dashboard" />
      </div>
    </main>
  );
}
