// app/(marketing)/contact/page.tsx
"use client";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input, Textarea } from "@/components/ui/Input";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: `联系我们 - ${siteConfig.name}`,
  description: `联系${siteConfig.name}：电话${siteConfig.contact.phone}，邮箱${siteConfig.contact.email}，地址${siteConfig.contact.address}`,
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      // 调用Next.js API接口处理表单
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSuccess(true);
        setFormData({ name: "", phone: "", email: "", message: "" });
      } else {
        alert("提交失败，请重试");
      }
    } catch (err) {
      alert("网络错误，请重试");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">联系我们</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* 联系方式 */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">联系方式</h2>
          <div className="space-y-4">
            <p className="flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              电话：{siteConfig.contact.phone}
            </p>
            <p className="flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              邮箱：{siteConfig.contact.email}
            </p>
            <p className="flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              地址：{siteConfig.contact.address}
            </p>
          </div>
          {/* 地图嵌入（可选：高德/百度地图） */}
          <div className="mt-8 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://map.baidu.com/xxx" // 替换为公司地址的地图链接
              width="100%"
              height="300"
              frameBorder="0"
              allowFullScreen
              title="公司地址"
            ></iframe>
          </div>
        </div>

        {/* 留言表单 */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">在线留言</h2>
          {success ? (
            <div className="bg-green-50 p-6 rounded-lg text-green-700">
              提交成功！我们将在1个工作日内联系您。
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block mb-2">姓名 *</label>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="请输入您的姓名"
                />
              </div>
              <div>
                <label className="block mb-2">电话 *</label>
                <Input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="请输入您的联系电话"
                />
              </div>
              <div>
                <label className="block mb-2">邮箱</label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="请输入您的邮箱"
                />
              </div>
              <div>
                <label className="block mb-2">留言内容 *</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="请输入您的需求/问题"
                />
              </div>
              <Button type="submit" variant="primary" disabled={loading}>
                {loading ? "提交中..." : "提交留言"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
