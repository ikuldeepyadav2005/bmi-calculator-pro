import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "BMI Calculator Pro",
  description:
    "A premium fitness calculator experience with BMI, BMR, TDEE, protein and hydration insights.",
  metadataBase: new URL("https://bmi-calculator-pro-3n24.vercel.app"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="1imq7mv0ijgjKCN7_qZYc9118p3xzvUp7rAROoVqPc4"
        />

        {/* Google AdSense Verification */}
        <meta
          name="google-adsense-account"
          content="ca-pub-2325172875255272"
        />
      </head>

      <body className="bg-black text-white min-h-screen flex flex-col">
        {/* Google AdSense Script */}
        <Script
          async
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2325172875255272"
          crossOrigin="anonymous"
        />

        {/* Navbar */}
        <nav className="border-b border-gray-800">
          <div className="max-w-5xl mx-auto px-6 py-4 flex items-center gap-6">
            <Link href="/" className="font-bold text-lg">
              BMI Calculator Pro
            </Link>

            <div className="ml-auto flex gap-6">
              <Link href="/about" className="hover:text-gray-300">
                About
              </Link>
              <Link href="/contact" className="hover:text-gray-300">
                Contact
              </Link>
              <Link href="/privacy-policy" className="hover:text-gray-300">
                Privacy
              </Link>
              <Link
                href="/terms-and-conditions"
                className="hover:text-gray-300"
              >
                Terms
              </Link>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="border-t border-gray-800 mt-10">
          <div className="max-w-5xl mx-auto px-6 py-6 text-center text-gray-400 text-sm">
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>{" "}
            |{" "}
            <Link href="/terms-and-conditions" className="hover:text-white">
              Terms &amp; Conditions
            </Link>{" "}
            |{" "}
            <Link href="/contact" className="hover:text-white">
              Contact
            </Link>

            <p className="mt-2">
              © 2026 BMI Calculator Pro. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
