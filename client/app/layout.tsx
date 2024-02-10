import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { Toaster } from 'sonner';

import StyledComponentsRegistry from '../lib/registry';
import StoreProvider from '../lib/store-provider';

import './globals.css';

const montserrat = Montserrat({ weight: ['400', '500', '600', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Auction',
  description: 'Auction',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={montserrat.className}>
          <StyledComponentsRegistry>
            {children}
            <Toaster theme="light" position="bottom-center" />
          </StyledComponentsRegistry>
        </body>
      </html>
    </StoreProvider>
  );
}
