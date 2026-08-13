import Link from 'next/link';
import { currentUser } from '@clerk/nextjs/server';

export default async function DashboardPage() {
  const user = await currentUser();
  const name = user?.firstName || user?.username || 'there';
  const email = user?.primaryEmailAddress?.emailAddress || 'No primary email';
  const verified = user?.primaryEmailAddress?.verification?.status === 'verified';

  return (
    <>
      <section className="dashboard-intro">
        <p className="eyebrow">Dashboard</p>
        <h1>Hello, {name}.</h1>
        <p>Your account is active and this page is protected.</p>
      </section>
      <section className="account-grid">
        <article className="account-card account-card-wide">
          <div><span className="field-label">Primary email</span><strong>{email}</strong></div>
          <span className={verified ? 'status status-success' : 'status'}>{verified ? 'Verified' : 'Pending verification'}</span>
        </article>
        <article className="account-card">
          <span className="field-label">Profile</span><h2>Keep your details current</h2>
          <p>Update your name, photo, email addresses, and connected accounts.</p>
          <Link className="text-link" href="/dashboard/account">Manage profile →</Link>
        </article>
        <article className="account-card">
          <span className="field-label">Security</span><h2>Review account security</h2>
          <p>Change your password and review active devices and sessions.</p>
          <Link className="text-link" href="/dashboard/account/security">Open security →</Link>
        </article>
      </section>
    </>
  );
}
