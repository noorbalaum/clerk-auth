import Link from 'next/link';
import { UserButton } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { userId } = await auth();
  if (!userId) redirect('/sign-in?redirect_url=/dashboard');

  return (
    <div className="dashboard-shell">
      <header className="dashboard-header">
        <Link className="site-name" href="/dashboard">Auth portal</Link>
        <nav aria-label="Dashboard navigation">
          <Link href="/dashboard">Overview</Link>
          <Link href="/dashboard/account">Manage account</Link>
        </nav>
        <UserButton />
      </header>
      <main className="dashboard-main">{children}</main>
    </div>
  );
}
