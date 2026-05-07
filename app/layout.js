import "./globals.css";

export const metadata = {
  title: "爪爪泡泡 Pet Spa",
  description: "温柔洗护、精致修剪、皮肤护理与猫咪专区服务的宠物洗护店单页官网。"
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
