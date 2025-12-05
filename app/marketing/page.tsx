// app/(marketing)/page.tsx
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import HeroBanner from "@/components/sections/HeroBanner";
import CoreAdvantage from "@/components/sections/CoreAdvantage";
import ProductCard from "@/components/sections/ProductCard";
import CaseSnippet from "@/components/sections/CaseSnippet";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: `${siteConfig.name} - 首页`,
  description: siteConfig.description,
};

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      {/* Hero Banner（核心视觉区） */}
      <HeroBanner
        title="XX科技 - 让企业数字化更简单"
        subtitle="专注XX领域10年，服务500+头部企业"
        ctaText="立即咨询"
        ctaLink="/contact"
        image="/assets/banner/hero-bg.png" // 企业Banner图
      />

      {/* 核心优势（3-4个） */}
      <CoreAdvantage
        items={[
          {
            icon: "/assets/icons/advantage-1.svg",
            title: "技术领先",
            desc: "自主研发核心引擎，获10+项专利",
          },
          {
            icon: "/assets/icons/advantage-2.svg",
            title: "定制化方案",
            desc: "按需定制，适配不同企业规模需求",
          },
          {
            icon: "/assets/icons/advantage-3.svg",
            title: "7×24服务",
            desc: "专业售后团队，快速响应问题",
          },
        ]}
      />

      {/* 核心产品入口 */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-10">核心产品</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProductCard
            title="XX云平台"
            desc="一站式企业数字化管理平台"
            image="/assets/products/product-1.png"
            link="/products/cloud-platform"
          />
          <ProductCard
            title="XX数据分析系统"
            desc="实时可视化数据分析，驱动决策"
            image="/assets/products/product-2.png"
            link="/products/analytics"
          />
          <ProductCard
            title="XX安全解决方案"
            desc="全方位保障企业数据安全"
            image="/assets/products/product-3.png"
            link="/products/security"
          />
        </div>
        <div className="text-center mt-8">
          <Button variant="primary" href="/products">查看全部产品</Button>
        </div>
      </section>

      {/* 案例亮点 */}
      <CaseSnippet
        title="成功案例"
        cases={[
          { client: "XX集团", desc: "数字化转型项目", image: "/assets/cases/case-1.png" },
          { client: "XX上市公司", desc: "数据中台搭建", image: "/assets/cases/case-2.png" },
        ]}
        link="/cases"
      />

      {/* 联系CTA */}
      <section className="py-12 bg-blue-50 rounded-lg my-16">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">开启企业数字化新征程</h2>
          <p className="mb-6">立即联系我们，获取专属解决方案</p>
          <Button variant="primary" href="/contact" size="lg">
            400-XXXX-XXXX
          </Button>
        </div>
      </section>
    </div>
  );
}
