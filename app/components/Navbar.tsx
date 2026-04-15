'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface NavbarProps {
  lang: 'en' | 'zh';
}

const translations = {
  en: {
    home: 'Home',
    services: 'Services',
    pondCleaning: 'Pond Cleaning',
    pumpFilter: 'Pump & Filter',
    fishHealth: 'Fish Health',
    gardenDesign: 'Garden Design',
    shopLiveFish: 'Shop Live Fish',
    gallery: 'Gallery',
    contactUs: 'Contact Us',
    loginRegister: 'Login/Register',
    langLabel: 'EN',
    langSwitchUrl: '/zh',
    addressLabel: '825 Market Street, Lemoyne, PA 17043',
    emailLabel: 'lemoynekobekois@gmail.com',
  },
  zh: {
    home: '首页',
    services: '服务',
    pondCleaning: '鱼塘清洁',
    pumpFilter: '水泵和过滤',
    fishHealth: '鱼类健康',
    gardenDesign: '花园设计',
    shopLiveFish: '购买活体锦鲤',
    gallery: '图库',
    contactUs: '联系我们',
    loginRegister: '登录/注册',
    langLabel: '中文',
    langSwitchUrl: '/',
    addressLabel: '825 Market Street, Lemoyne, PA 17043',
    emailLabel: 'lemoynekobekois@gmail.com',
  },
};

export default function Navbar({ lang }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className="navbar"
      style={{
        background: scrolled ? 'rgba(15, 44, 62, 0.95)' : 'rgba(15, 44, 62, 0.85)',
        padding: scrolled ? '0.5rem 0' : '1rem 0',
      }}
    >
      <div className="container">
        <div className="nav-brand-group">
          <a href="#home" className="logo">
            <Image src="/images/Logo.jpg" alt="Lemoyne KOBE KOI Logo" width={40} height={40} style={{ borderRadius: '50%' }} />
            <div className="brand-info">
              <span className="brand-name">Lemoyne KOBE KOI</span>
              <div className="brand-contact-mini">
                <span><i className="fa-solid fa-location-dot"></i> {t.addressLabel}</span>
              </div>
            </div>
          </a>
        </div>

        <div className="nav-right">
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
          <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
            <li><a href="#home" className="nav-link" onClick={() => setMenuOpen(false)}>{t.home}</a></li>
            <li className="dropdown">
              <a href="#services" className="nav-link dropbtn">
                {t.services} <i className="fa-solid fa-chevron-down" style={{ fontSize: '0.7em' }}></i>
              </a>
              <div className="dropdown-content">
                <a href="#services"><i className="fa-solid fa-water"></i> {t.pondCleaning}</a>
                <a href="#services"><i className="fa-solid fa-pump-soap"></i> {t.pumpFilter}</a>
                <a href="#services"><i className="fa-solid fa-stethoscope"></i> {t.fishHealth}</a>
                <a href="#services"><i className="fa-solid fa-seedling"></i> {t.gardenDesign}</a>
              </div>
            </li>
            <li><a href="#shop" className="nav-link shop-trigger" onClick={() => setMenuOpen(false)}>{t.shopLiveFish}</a></li>
            <li><a href="#gallery" className="nav-link" onClick={() => setMenuOpen(false)}>{t.gallery}</a></li>
            <li><a href="#contact" className="nav-button" onClick={() => setMenuOpen(false)}>{t.contactUs}</a></li>
            <li>
              <a href="#login" className="nav-link login-link">
                <i className="fa-regular fa-user"></i> {t.loginRegister}
              </a>
            </li>
            <li className="lang-switch-item">
              <Link href={t.langSwitchUrl} className="nav-link lang-switch">
                <i className="fa-solid fa-globe"></i> <span>{t.langLabel}</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
