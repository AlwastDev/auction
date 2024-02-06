import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'sonner';

import StyledComponentsRegistry from '../lib/registry';
import StoreProvider from '../lib/store-provider';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

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
        <body className={inter.className}>
          <StyledComponentsRegistry>
            {children}
            <Toaster />
          </StyledComponentsRegistry>
        </body>
      </html>
    </StoreProvider>
  );
}
