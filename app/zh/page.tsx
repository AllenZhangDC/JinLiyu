import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "../components/Navbar";
import ZipChecker from "../components/ZipChecker";
import ShopModal from "../components/ShopModal";

export const metadata: Metadata = {
  title: "高档锦鲤出售 Lemoyne PA | 日本锦鲤繁殖商 & 鱼塘维护",
  description:
    "Lemoyne KOBE KOI - 高档日本锦鲤出售、鱼塘清洁、维护服务和水景园林设计。网上购买活体锦鲤或预订专业上门支持服务。",
  keywords:
    "锦鲤、日本锦鲤、高档锦鲤、活体锦鲤出售、网上购买锦鲤、鱼塘设计、鱼塘维护、鱼塘清洁、锦鲤养护、水景园林设计、锦鲤咨询、红白锦鲤、昭和锦鲤、三色锦鲤、Lemoyne PA",
  authors: [{ name: "Lemoyne KOBE KOI" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    title: "高档锦鲤出售 Lemoyne PA | Lemoyne KOBE KOI",
    description: "高档日本锦鲤、鱼塘维护和水景园林设计服务。",
    url: "https://lemoynekobekois.com/zh",
    siteName: "Lemoyne KOBE KOI",
  },
  twitter: {
    card: "summary_large_image",
    title: "高档锦鲤出售 - Lemoyne KOBE KOI",
    description: "日本锦鲤出售、鱼塘维护和水景园林设计服务。",
  },
  alternates: {
    canonical: "https://lemoynekobekois.com/zh",
    languages: {
      en: "https://lemoynekobekois.com/",
      "zh-CN": "https://lemoynekobekois.com/zh",
    },
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Lemoyne KOBE KOI",
    image: "https://lemoynekobekois.com/images/Logo.jpg",
    description: "高档日本锦鲤出售、鱼塘维护和水景园林设计服务。",
    url: "https://lemoynekobekois.com/zh",
    telephone: "(555) 123-4567",
    email: "contact@kobekoi.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "825 Market Street",
      addressLocality: "Lemoyne",
      addressRegion: "PA",
      postalCode: "17043",
      addressCountry: "US",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    priceRange: "$$",
    areaServed: { "@type": "City", name: "Lemoyne" },
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "锦鲤出售及鱼塘维护",
    provider: {
      "@type": "LocalBusiness",
      name: "Lemoyne KOBE KOI",
      url: "https://lemoynekobekois.com/zh",
    },
    description: "高档日本锦鲤出售、鱼塘清洁、水泵及过滤器维护、鱼类健康咨询和水景园林设计服务。",
    serviceType: "水产服务",
    areaServed: { "@type": "City", name: "Lemoyne" },
  },
];

export default function ZhHomePage() {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Noto+Sans+SC:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        {jsonLd.map((data, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
          />
        ))}
      </head>
      <body>
        <Navbar lang="zh" />

        {/* Hero Section */}
        <header id="home" className="hero">
          <div className="video-overlay"></div>
          <iframe
            className="back-video"
            src="https://www.youtube.com/embed/4oO41Qursn0?autoplay=1&mute=1&loop=1&playlist=4oO41Qursn0&controls=0&showinfo=0&rel=0&iv_load_policy=3&disablekb=1&modestbranding=1&playsinline=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <div className="hero-content">
            <h1>
              Lemoyne 独家活体锦鲤专家
              <br />
              <span className="text-sm">| 现场水质检测</span>
            </h1>
            <p>我们不仅仅销售鱼。我们为您的水景圣地精心策划生命。</p>
            <div className="hero-btns">
              <a href="#shop" className="btn btn-primary shop-trigger">
                <i className="fa-solid fa-fish"></i> 购买活体锦鲤
              </a>
              <a href="#service-check" className="btn btn-secondary">
                <i className="fa-solid fa-magnifying-glass-location"></i> 查看服务地区
              </a>
            </div>
          </div>
        </header>

        <ZipChecker lang="zh" />

        {/* Services Section */}
        <section id="services" className="section">
          <div className="container">
            <div className="section-title">
              <h2>我们的优质服务</h2>
              <p>从鱼缸清洁到完整的鱼塘生态系统管理。</p>
            </div>
            <div className="services-grid">
              <div className="service-card">
                <div className="icon-box"><i className="fa-solid fa-water"></i></div>
                <h3>鱼塘清洁与维护</h3>
                <p>完整的清洁、换水和过滤系统优化，确保水晶般清澈的水质。</p>
              </div>
              <div className="service-card">
                <div className="icon-box"><i className="fa-solid fa-pump-soap"></i></div>
                <h3>水泵及过滤服务</h3>
                <p>鱼类水泵和生物过滤器的专业维护和维修，延长使用寿命。</p>
              </div>
              <div className="service-card">
                <div className="icon-box"><i className="fa-solid fa-stethoscope"></i></div>
                <h3>鱼类健康与选择</h3>
                <p>为您的鱼塘选择合适锦鲤的专家建议和鱼类健康咨询。</p>
              </div>
              <div className="service-card">
                <div className="icon-box"><i className="fa-solid fa-seedling"></i></div>
                <h3>水景园林设计</h3>
                <p>水生植物与花卉的融合，创造平衡美观的生态系统。</p>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="section" style={{ backgroundColor: "#f4f4f4" }}>
          <div className="container">
            <div className="section-title">
              <h2>我们的生活图库</h2>
              <p>我们为您的鱼塘带来的生机活力一览。</p>
            </div>
            <div className="gallery-grid">
              <div className="gallery-item">
                <Image src="/images/koi_closeup.png" alt="红白锦鲤" fill style={{ objectFit: "cover" }} />
                <div className="gallery-overlay">
                  <h4>三大品系</h4><h3>红白锦鲤 (Kohaku)</h3>
                  <p>经典之美。纯白色身体配以鲜艳的红色标记。</p>
                </div>
              </div>
              <div className="gallery-item">
                <Image src="/images/koi_showa.png" alt="昭和锦鲤" fill style={{ objectFit: "cover" }} />
                <div className="gallery-overlay">
                  <h4>乌鸦系</h4><h3>昭和锦鲤 (Showa Sanshoku)</h3>
                  <p>令人惊艳的深黑色身体，点缀着动感的红色和白色图案。</p>
                </div>
              </div>
              <div className="gallery-item">
                <Image src="/images/koi_sanke.png" alt="三色锦鲤" fill style={{ objectFit: "cover" }} />
                <div className="gallery-overlay">
                  <h4>三大品系</h4><h3>三色锦鲤 (Taisho Sanke)</h3>
                  <p>优雅的白色基色，点缀着红色和细致的黑色。</p>
                </div>
              </div>
              <div className="gallery-item">
                <Image src="/images/water_lily.png" alt="粉红睡莲" fill style={{ objectFit: "cover" }} />
                <div className="gallery-overlay">
                  <h4>水生植物</h4><h3>皇家睡莲</h3>
                  <p>开花的水生植物，为您的鱼塘提供遮荫和平衡生态。</p>
                </div>
              </div>
              <div className="gallery-item">
                <Image src="/images/hero_bg.png" alt="鱼塘景观" fill style={{ objectFit: "cover" }} />
                <div className="gallery-overlay">
                  <h4>设计</h4><h3>宁静景观</h3>
                  <p>根据您的后花园量身定制的水景园林，营造宁静氛围。</p>
                </div>
              </div>
              <div className="gallery-item blue-water-item">
                <Image src="/images/water_caustics.png" alt="清澈水质" fill style={{ objectFit: "cover" }} className="water-texture" />
                <div className="gallery-overlay">
                  <h4>维护</h4><h3>清澈水质</h3>
                  <p>先进的水质净化服务，保持锦鲤健康快乐。</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="about-section">
          <div className="container about-grid">
            <div className="about-image composite-image">
              <Image src="/images/water_lily.png" alt="睡莲" width={600} height={400} className="base-img" />
              <div className="floating-logo">
                <Image src="/images/Logo.jpg" alt="Logo" width={90} height={90} />
              </div>
            </div>
            <div className="about-text">
              <h2>关于 Lemoyne KOBE KOI</h2>
              <p>我们位于 Lemoyne 的中心，专门经营高档日本锦鲤和水生植物。我们的热情是帮助您打造和维护您梦想中的水景天堂。</p>
              <ul className="feature-list">
                <li><i className="fa-solid fa-check"></i> <strong>精致锦鲤：</strong> 精选优质颜色和健康的锦鲤。</li>
                <li><i className="fa-solid fa-check"></i> <strong>丰茂植物：</strong> 在您的鱼塘中茁壮成长的水生植物。</li>
                <li><i className="fa-solid fa-check"></i> <strong>专家服务：</strong> 1小时范围内的现场支持。</li>
              </ul>
              <a href="#contact" className="btn btn-outline">联系我们</a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer id="contact">
          <div className="container">
            <div className="footer-content">
              <div className="footer-brand">
                <h3>Lemoyne KOBE KOI</h3>
                <p>您的本地专家，服务于一切锦鲤和水景需求。</p>
              </div>
              <div className="footer-links">
                <h4>快速链接</h4>
                <a href="#home">首页</a>
                <a href="#services">服务</a>
                <a href="#shop">购买</a>
              </div>
              <div className="footer-contact">
                <h4>联系方式 &amp; 营业时间</h4>
                <p><i className="fa-solid fa-location-dot"></i> 825 Market Street, Lemoyne, PA 17043</p>
                <p><i className="fa-solid fa-phone"></i> (555) 123-4567</p>
                <p><i className="fa-solid fa-envelope"></i> contact@kobekoi.com</p>
                <div className="footer-hours" style={{ marginTop: "1.5rem" }}>
                  <h5 style={{ color: "var(--secondary-color)", fontFamily: "var(--font-heading)", fontSize: "1rem", marginBottom: "0.5rem" }}>营业时间</h5>
                  <p style={{ fontSize: "0.9rem", opacity: 0.8, marginBottom: "3px" }}><strong>周二 - 周六：</strong> 上午8:00 - 下午6:00</p>
                  <p style={{ fontSize: "0.9rem", opacity: 0.6 }}><strong>周一 &amp; 周日：</strong> 休息</p>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <p>&copy; 2025 Lemoyne KOBE KOI. 版权所有。</p>
            </div>
          </div>
        </footer>

        <ShopModal lang="zh" />
      </body>
    </html>
  );
}
