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

export const metadata: Metadata = {
  title: {
    default: "Lemoyne KOBE KOI | Premium Japanese Koi & Pond Supplies",
    template: "%s | Lemoyne KOBE KOI",
  },
  description:
    "Lemoyne KOBE KOI - Premium imported Japanese Koi fish for sale in Lemoyne, PA. Serving Harrisburg, Mechanicsburg, Carlisle, York, Lancaster, Hershey and Central Pennsylvania. 锦鲤专卖 | 宾州锦鲤 | 日本进口锦鲤。Shop top breeders: Dainichi, Sakai FF, Isa, Omosako. Pond supplies, filtration, koi food & delivery within 1 hour of Lemoyne.",
  keywords: [
    // === English - Core Product Keywords ===
    "koi fish for sale",
    "Japanese koi for sale",
    "buy koi fish online",
    "live koi fish for sale",
    "premium koi fish",
    "imported Japanese koi",
    "butterfly koi for sale",
    "jumbo koi for sale",
    "baby koi for sale",
    "koi fish delivery",
    // === English - Koi Varieties ===
    "Kohaku koi",
    "Showa Sanshoku koi",
    "Taisho Sanke koi",
    "Tancho koi",
    "Shiro Utsuri koi",
    "Ogon koi",
    "Asagi koi",
    "Shusui koi",
    "Bekko koi",
    "Kujaku koi",
    "Hariwake koi",
    "Matsuba koi",
    "Doitsu koi",
    // === English - Local / Geographic ===
    "koi fish Lemoyne PA",
    "koi fish Harrisburg PA",
    "koi dealer Central Pennsylvania",
    "koi fish store Mechanicsburg PA",
    "koi fish Camp Hill PA",
    "koi fish Carlisle PA",
    "koi fish York PA",
    "koi fish Lancaster PA",
    "koi fish Hershey PA",
    "koi pond supplies Pennsylvania",
    "koi fish West Shore Harrisburg",
    // === English - Pond & Supplies ===
    "koi pond supplies",
    "pond filtration system",
    "koi food",
    "koi pond maintenance",
    "koi health treatment",
    "pond fish for sale PA",
    // === English - Breeders ===
    "Dainichi koi",
    "Sakai Fish Farm koi",
    "Isa koi breeder",
    "Omosako koi",
    // === Chinese - 中文关键词 ===
    "锦鲤",
    "日本锦鲤",
    "锦鲤出售",
    "宾州锦鲤",
    "锦鲤鱼",
    "买锦鲤",
    "锦鲤专卖店",
    "红白锦鲤",
    "大正三色",
    "昭和三色",
    "锦鲤鱼塘",
    "锦鲤饲料",
    "锦鲤鱼池过滤",
    "美国锦鲤",
    "宾夕法尼亚锦鲤",
    "Lemoyne KOBE KOI",
  ],
  authors: [{ name: "PureDigits.us", url: "https://puredigits.us" }],
  creator: "PureDigits.us",
  metadataBase: new URL("https://lemoynekobekois.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lemoynekobekois.com",
    siteName: "Lemoyne KOBE KOI",
    title: "Lemoyne KOBE KOI | Premium Japanese Koi Fish for Sale in PA | 宾州锦鲤专卖",
    description:
      "Premium imported Japanese Koi fish for sale in Lemoyne, PA. Delivery to Harrisburg, Mechanicsburg, York, Lancaster, Carlisle, Hershey. 宾州锦鲤专卖店 | 日本进口锦鲤。",
    images: [
      {
        url: "/assets/images/hero_bg.png",
        width: 1200,
        height: 630,
        alt: "Lemoyne KOBE KOI - Premium Japanese Koi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lemoyne KOBE KOI | Japanese Koi Fish for Sale in PA | 锦鲤专卖",
    description:
      "Premium Japanese Koi fish, butterfly koi, pond supplies in Lemoyne PA. Delivery to Harrisburg, York, Lancaster & Central PA. 锦鲤出售 | 宾州锦鲤。",
    images: ["/assets/images/hero_bg.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
