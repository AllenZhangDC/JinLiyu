'use client';

import { useState, useEffect, useCallback } from 'react';

interface ShopModalProps {
  lang: 'en' | 'zh';
}

const translations = {
  en: {
    title: 'For the Dignity of Life',
    question: 'Do you promise your pond or tank water has been cycled for more than 10 days?',
    desc: 'We value the life of every Koi. Introducing fish to uncycled water is fatal.',
    promise: 'I Promise, Water is Safe',
    consult: 'Not Yet, I Need Advice',
  },
  zh: {
    title: '为了生命的尊严',
    question: '您保证您的鱼塘或鱼缸水已循环10天以上吗？',
    desc: '我们重视每一条锦鲤的生命。将鱼引入未循环的水中是致命的。',
    promise: '我保证，水质安全',
    consult: '还没有，我需要建议',
  },
};

export default function ShopModal({ lang }: ShopModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const t = translations[lang];

  const openModal = useCallback((e: Event) => {
    e.preventDefault();
    setIsOpen(true);
  }, []);

  useEffect(() => {
    const triggers = document.querySelectorAll('.shop-trigger');
    triggers.forEach((trigger) => {
      trigger.addEventListener('click', openModal);
    });
    return () => {
      triggers.forEach((trigger) => {
        trigger.removeEventListener('click', openModal);
      });
    };
  }, [openModal]);

  const handlePromise = () => {
    setIsOpen(false);
    const shopSection = document.querySelector('#shop');
    if (shopSection) {
      shopSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOutsideClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).classList.contains('modal')) {
      setIsOpen(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal active" onClick={handleOutsideClick}>
      <div className="modal-content">
        <span className="close-modal" onClick={() => setIsOpen(false)}>&times;</span>
        <div className="modal-header">
          <i className="fa-solid fa-triangle-exclamation"></i>
          <h2>{t.title}</h2>
        </div>
        <div className="modal-body">
          <p className="modal-question">{t.question}</p>
          <p className="modal-desc">{t.desc}</p>
          <div className="modal-actions">
            <button className="btn btn-primary" onClick={handlePromise}>{t.promise}</button>
            <a href="#contact" className="btn btn-outline-danger" onClick={() => setIsOpen(false)}>{t.consult}</a>
          </div>
        </div>
      </div>
    </div>
  );
}
