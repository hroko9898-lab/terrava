import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Terrava | Планини, маршрути и карти в България",
  description:
    "Открий планини, маршрути, интерактивна карта, GPS локация и съвети за безопасност сред природата в България с Terrava.",
  keywords: [
    "Terrava",
    "планини в България",
    "маршрути в България",
    "туристически маршрути",
    "карта на България",
    "Рила",
    "Пирин",
    "Родопи",
    "Стара планина",
    "Витоша",
    "Странджа",
    "планинарство",
    "преходи",
  ],
  openGraph: {
    title: "Terrava | Планини, маршрути и карти в България",
    description:
      "Интерактивна карта, GPS локация, планински маршрути и съвети за безопасност сред природата в България.",
    url: "https://terravaapp.com",
    siteName: "Terrava",
    images: [
      {
        url: "/terrava-logo.png",
        width: 1200,
        height: 630,
        alt: "Terrava",
      },
    ],
    locale: "bg_BG",
    type: "website",
  },
  icons: {
    icon: "/terrava-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
