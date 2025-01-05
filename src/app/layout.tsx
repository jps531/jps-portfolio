import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

/**
 * The base font for the app.
 */
const montserrat = Montserrat({
  variable: "--font-montserrat-sans",
  subsets: ["latin"],
});

/**
 * The metadata for the app.
 */
export const metadata: Metadata = {
  title: "Paul Sullivan",
  description: "Professional Portfolio for Paul Sullivan",
};

/**
 * The root layout for the app.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased`}>{children}</body>
    </html>
  );
}
