import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "./components/Navbar";
import ZipChecker from "./components/ZipChecker";
import ShopModal from "./components/ShopModal";

export const metadata: Metadata = {
  title: "Premium Koi Fish for Sale Lemoyne PA | Japanese Koi Breeder & Pond Maintenance",
  description:
    "Lemoyne KOBE KOI - Premium Japanese koi fish for sale, pond cleaning, maintenance services, and water garden design. Buy live koi online or book expert on-site support in PA.",
  keywords:
    "koi fish for sale, premium koi, japanese koi, koi pond design, pond maintenance, koi dealer, live koi, pond cleaning service, water garden design, koi fish health, Lemoyne PA, kohaku koi, showa sanshoku, taisho sanke",
  authors: [{ name: "Lemoyne KOBE KOI" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    title: "Premium Koi Fish for Sale Lemoyne PA | Lemoyne KOBE KOI",
    description:
      "Premium Japanese koi fish, pond maintenance, and water garden design services in Lemoyne, Pennsylvania.",
    url: "https://lemoynekobekois.com",
    siteName: "Lemoyne KOBE KOI",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Koi Fish for Sale - Lemoyne KOBE KOI",
    description:
      "Japanese koi fish sales, pond maintenance, and water garden design in Lemoyne, PA.",
  },
  alternates: {
    canonical: "https://lemoynekobekois.com/",
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
    description:
      "Premium Japanese Koi fish sales, pond maintenance, and water garden design services.",
    url: "https://lemoynekobekois.com",
    email: "lemoynekobekois@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "825 Market Street",
      addressLocality: "Lemoyne",
      addressRegion: "PA",
      postalCode: "17043",
      addressCountry: "US",
    },
    priceRange: "$$",
    areaServed: {
      "@type": "City",
      name: "Lemoyne",
      address: { "@type": "PostalAddress", addressRegion: "PA", addressCountry: "US" },
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Koi Fish Sales & Pond Maintenance",
    provider: {
      "@type": "LocalBusiness",
      name: "Lemoyne KOBE KOI",
      url: "https://lemoynekobekois.com",
    },
    description:
      "Premium Japanese Koi fish sales, pond cleaning, pump and filter maintenance, fish health consultancy, and water garden design services.",
    serviceType: "Aquatic Services",
    areaServed: { "@type": "City", name: "Lemoyne" },
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Lemoyne KOBE KOI",
    url: "https://lemoynekobekois.com",
    logo: "https://lemoynekobekois.com/images/Logo.jpg",
    email: "lemoynekobekois@gmail.com",
    description:
      "Premium Japanese Koi specialist and aquatic services provider in Lemoyne, Pennsylvania",
  },
];

export default function HomePage() {
  return (
    <>
      {jsonLd.map((data, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}

      <Navbar lang="en" />

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
            Lemoyne&apos;s Exclusive Live Koi Specialist
            <br />
            <span className="text-sm">| On-Site Water Testing</span>
          </h1>
          <p>We don&apos;t just sell fish. We curate life for your aquatic sanctuary.</p>
          <div className="hero-btns">
            <a href="#shop" className="btn btn-primary shop-trigger">
              <i className="fa-solid fa-fish"></i> Shop Live Fish
            </a>
            <a href="#service-check" className="btn btn-secondary">
              <i className="fa-solid fa-magnifying-glass-location"></i> Check Service Area
            </a>
          </div>
        </div>
      </header>

      <ZipChecker lang="en" />

      {/* Services Section */}
      <section id="services" className="section">
        <div className="container">
          <div className="section-title">
            <h2>Our Premium Services</h2>
            <p>From tank cleaning to complete pond ecosystem management.</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="icon-box"><i className="fa-solid fa-water"></i></div>
              <h3>Pond Cleaning &amp; Maintenance</h3>
              <p>Complete cleaning, water changing, and filtration system optimization for crystal clear water.</p>
            </div>
            <div className="service-card">
              <div className="icon-box"><i className="fa-solid fa-pump-soap"></i></div>
              <h3>Pump &amp; Filter Service</h3>
              <p>Professional maintenance and repair of fish pumps and biological filters to ensure longevity.</p>
            </div>
            <div className="service-card">
              <div className="icon-box"><i className="fa-solid fa-stethoscope"></i></div>
              <h3>Fish Health &amp; Selection</h3>
              <p>Expert advice on selecting the right Koi for your pond and consultancy on fish health.</p>
            </div>
            <div className="service-card">
              <div className="icon-box"><i className="fa-solid fa-seedling"></i></div>
              <h3>Water Garden Design</h3>
              <p>Integration of aquatic plants and flowers to create a balanced, beautiful ecosystem.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="section" style={{ backgroundColor: "#f4f4f4" }}>
        <div className="container">
          <div className="section-title">
            <h2>Our Living Gallery</h2>
            <p>A glimpse into the vibrant life we bring to your ponds.</p>
          </div>
          <div className="gallery-grid">
            <div className="gallery-item">
              <Image src="/images/koi_closeup.png" alt="Kohaku Koi" fill style={{ objectFit: "cover" }} />
              <div className="gallery-overlay">
                <h4>Gosanke</h4><h3>Kohaku</h3>
                <p>The classic beauty. Pure snow-white body with vibrant hi (red) markings.</p>
              </div>
            </div>
            <div className="gallery-item">
              <Image src="/images/koi_showa.png" alt="Showa Sanshoku" fill style={{ objectFit: "cover" }} />
              <div className="gallery-overlay">
                <h4>Utsurimono</h4><h3>Showa Sanshoku</h3>
                <p>A stunning jet-black body adorned with dynamic red and white patterns.</p>
              </div>
            </div>
            <div className="gallery-item">
              <Image src="/images/koi_sanke.png" alt="Taisho Sanke" fill style={{ objectFit: "cover" }} />
              <div className="gallery-overlay">
                <h4>Gosanke</h4><h3>Taisho Sanke</h3>
                <p>Elegant white base pattern accented with red and delicate sumi (black).</p>
              </div>
            </div>
            <div className="gallery-item">
              <Image src="/images/water_lily.png" alt="Pink Water Lily" fill style={{ objectFit: "cover" }} />
              <div className="gallery-overlay">
                <h4>Aquatic Flora</h4><h3>Royal Water Lily</h3>
                <p>Blooming aquatic plants that provide shade and balance your pond&apos;s ecosystem.</p>
              </div>
            </div>
            <div className="gallery-item">
              <Image src="/images/hero_bg.png" alt="Pond Landscape" fill style={{ objectFit: "cover" }} />
              <div className="gallery-overlay">
                <h4>Design</h4><h3>Serene Landscape</h3>
                <p>Custom-designed water gardens tailored to your backyard&apos;s calming atmosphere.</p>
              </div>
            </div>
            <div className="gallery-item blue-water-item">
              <Image src="/images/water_caustics.png" alt="Crystal Clear Water" fill style={{ objectFit: "cover" }} className="water-texture" />
              <div className="gallery-overlay">
                <h4>Maintenance</h4><h3>Pristine Water</h3>
                <p>Advanced crystal-clear water filtration services for healthy, happy Koi.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container about-grid">
          <div className="about-image composite-image">
            <Image src="/images/water_lily.png" alt="Water Lily" width={600} height={400} className="base-img" />
            <div className="floating-logo">
              <Image src="/images/Logo.jpg" alt="Logo" width={90} height={90} />
            </div>
          </div>
          <div className="about-text">
            <h2>We Are Lemoyne KOBE KOI</h2>
            <p>Based in the heart of Lemoyne, we specialize in high-quality Japanese Koi and aquatic flora. Our passion is to help you build and maintain the aquatic paradise of your dreams.</p>
            <ul className="feature-list">
              <li><i className="fa-solid fa-check"></i> <strong>Exquisite Koi:</strong> Hand-picked for color and health.</li>
              <li><i className="fa-solid fa-check"></i> <strong>Lush Flora:</strong> Aquatic plants that thrive in your pond.</li>
              <li><i className="fa-solid fa-check"></i> <strong>Expert Care:</strong> 1-hour radius on-site support.</li>
            </ul>
            <a href="#contact" className="btn btn-outline">Contact Us</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>Lemoyne KOBE KOI</h3>
              <p>Your local experts for everything Koi and Water Gardens.</p>
            </div>
            <div className="footer-links">
              <h4>Quick Links</h4>
              <a href="#home">Home</a>
              <a href="#services">Services</a>
              <a href="#shop">Shop</a>
            </div>
            <div className="footer-contact">
              <h4>Contact &amp; Hours</h4>
              <p><i className="fa-solid fa-location-dot"></i> 825 Market Street, Lemoyne, PA 17043</p>
              <p><i className="fa-solid fa-envelope"></i> lemoynekobekois@gmail.com</p>
              <p><i className="fa-solid fa-language"></i> English and Chinese support available</p>
              <div className="footer-hours" style={{ marginTop: "1.5rem" }}>
                <h5 style={{ color: "var(--secondary-color)", fontFamily: "var(--font-heading)", fontSize: "1rem", marginBottom: "0.5rem" }}>Business Hours</h5>
                <p style={{ fontSize: "0.9rem", opacity: 0.8, marginBottom: "3px" }}><strong>Tue - Sat:</strong> 8:00 AM - 6:00 PM</p>
                <p style={{ fontSize: "0.9rem", opacity: 0.6 }}><strong>Mon &amp; Sun:</strong> Closed</p>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Lemoyne KOBE KOI. All Rights Reserved.</p>
          </div>
        </div>
      </footer>

      <ShopModal lang="en" />
    </>
  );
}
