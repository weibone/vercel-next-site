// app/layout.tsx
import "./globals.css";
import { Inter } from "next/font/google";
import { siteConfig } from "@/config/site";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// 企业级字体（可选：替换为公司品牌字体）
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  icons: {
    icon: "/favicon.ico", // 企业favicon
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>
        {/* 全局导航栏 */}
        <Header />
        {/* 页面内容 */}
        <main className="min-h-screen">{children}</main>
        {/* 全局页脚 */}
        <Footer />
      </body>
    </html>
  );
}
