import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "医式（IsShix）- 在宅医療の事務負担をゼロに",
  description: "FAX処理からカルテ記録まで、AIで完全自動化。導入翌日から業務改善を実感。医式が実現する医療現場のDX。",
  keywords: "医療AI, 在宅医療, FAX自動化, カルテ生成, 医療DX, 業務効率化",
  openGraph: {
    title: "医式（IsShix）- 在宅医療の事務負担をゼロに",
    description: "FAX処理からカルテ記録まで、AIで完全自動化。導入翌日から業務改善を実感。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
