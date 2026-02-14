import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ethereum Product Builder | Cube",
  description:
    "경영학과 인문학 기반의 프론트엔드 개발자. 이더리움 생태계에서 사람과 기술, 비즈니스를 연결하는 실행 기록.",
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
