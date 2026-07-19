import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'BMI Calculator Pro',
  description: 'A premium fitness calculator experience with BMI, BMR, TDEE, protein and hydration insights.',
  metadataBase: new URL('https://bmi-calculator-pro-3n24.vercel.app'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="1imq7mv0ijgjKCn7_qZYc9118p3xzvUp7rARoOVqPc4" />
      </head>
      <body>{children}</body>
    </html>
  );
}
