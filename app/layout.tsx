import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'GRACO — Built for the Long Haul',
  description: 'Discover GRACO, a heavy-duty automotive components brand founded in Graz, Austria in 1986.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
