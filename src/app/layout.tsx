import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'BMI Calculator Pro',
  description: 'A premium fitness calculator experience with BMI, BMR, TDEE, protein and hydration insights.',
  metadataBase: new URL('https://example.com')
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
