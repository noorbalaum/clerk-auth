import { UserProfile } from '@clerk/nextjs';

export default function AccountPage() {
  return (
    <section className="profile-page">
      <div className="page-heading">
        <p className="eyebrow">Account</p><h1>Manage your account.</h1>
        <p>Update your profile, security settings, and active sessions.</p>
      </div>
      <UserProfile path="/dashboard/account" routing="path" />
    </section>
  );
}
