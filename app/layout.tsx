import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Branding Blog",
  description: "Personal branding site and blog built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">{children}</body>
    </html>
  );
}
