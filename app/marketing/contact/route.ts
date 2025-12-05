// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
// 可选：集成邮箱发送（如nodemailer）、企业微信机器人等
// import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.json();
    // 1. 验证表单数据（防XSS、空值）
    if (!formData.name || !formData.phone) {
      return NextResponse.json({ error: "姓名和电话为必填项" }, { status: 400 });
    }

    // 2. 对接企业系统（示例：发送到企业邮箱）
    // const transporter = nodemailer.createTransport({
    //   host: "smtp.qq.com",
    //   port: 465,
    //   secure: true,
    //   auth: { user: "your-email@qq.com", pass: "your-email-pass" },
    // });
    // await transporter.sendMail({
    //   from: "contact-form <your-email@qq.com>",
    //   to: siteConfig.contact.email,
    //   subject: `新的留言 - ${formData.name}`,
    //   text: `姓名：${formData.name}\n电话：${formData.phone}\n邮箱：${formData.email}\n留言：${formData.message}`,
    // });

    // 3. 对接企业微信机器人（可选）
    // await fetch("https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=xxx", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     msgtype: "text",
    //     text: { content: `新留言：\n姓名：${formData.name}\n电话：${formData.phone}\n留言：${formData.message}` },
    //   }),
    // });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("表单提交失败：", err);
    return NextResponse.json({ error: "服务器错误" }, { status: 500 });
  }
}
