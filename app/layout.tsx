import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "localhost:3000";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.startsWith("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;

  return {
    metadataBase: new URL(origin),
    title: {
      default: "Юрий Жильников — Product & Web Designer",
      template: "%s · Юрий Жильников",
    },
    description:
      "Портфолио Юрия Жильникова: продуктовый UX/UI-дизайн, современные сайты, дизайн-системы и интерфейсы.",
    icons: {
      icon: "/favicon.png",
      shortcut: "/favicon.png",
    },
    openGraph: {
      title: "Юрий Жильников — Product & Web Designer",
      description: "Продуктовый UX/UI-дизайн, сайты, дизайн-системы и интерфейсы.",
      images: [{ url: `${origin}/og-green.png`, width: 1792, height: 936 }],
      locale: "ru_RU",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Юрий Жильников — Product & Web Designer",
      description: "Продуктовый UX/UI-дизайн, сайты, дизайн-системы и интерфейсы.",
      images: [`${origin}/og-green.png`],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
