import { redirect } from 'next/navigation';

import { api } from '@/lib/services/api';
import { Header } from './_components/header/header';

export default async function HomeLayout({ children }: { children: React.ReactNode }) {
  const isAuth = await api.isExistAccessToken();

  if (!isAuth) {
    return redirect('/sign-in');
  }

  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
