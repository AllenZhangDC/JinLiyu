'use client';

import { useState } from 'react';

interface ZipCheckerProps {
  lang: 'en' | 'zh';
}

const validZipCodes = [
  '17043', '17011', '17012', '17101', '17102', '17103', '17104',
  '17025', '17050', '17055', '17070', '17339', '17019', '17033', '17036'
];

const translations = {
  en: {
    title: 'Check Service Availability',
    description: 'We provide premium onsite services within a 1-hour active range of Lemoyne. Enter your Zip Code to see if we cover your area.',
    placeholder: 'Enter Zip Code (e.g. 17043)',
    button: 'Check Availability',
    success: (zip: string) => `Congratulations! You are within our 1-Hour White Glove Service Range!`,
    fail: (zip: string) => `Sorry, ${zip} is currently outside our standard service area. Please contact us directly to confirm.`,
    empty: 'Please enter a valid Zip Code.',
    invalid: 'Invalid format. Please enter a 5-digit Zip Code.',
  },
  zh: {
    title: '查看服务覆盖范围',
    description: '我们在 Lemoyne 周围一小时车程范围内提供优质的现场服务。输入您的邮编，了解我们是否覆盖您所在地区。',
    placeholder: '输入邮编（例如 17043）',
    button: '查看覆盖',
    success: (zip: string) => `恭喜！您在我们1小时白手套服务范围内！`,
    fail: (zip: string) => `抱歉，${zip} 目前不在我们的标准服务范围内。请直接联系我们确认。`,
    empty: '请输入有效的邮编。',
    invalid: '格式无效。请输入5位数邮编。',
  },
};

export default function ZipChecker({ lang }: ZipCheckerProps) {
  const [zip, setZip] = useState('');
  const [result, setResult] = useState<{ type: 'success' | 'fail'; message: string } | null>(null);
  const t = translations[lang];

  const validateZip = () => {
    const trimmed = zip.trim();
    if (!trimmed) {
      setResult({ type: 'fail', message: t.empty });
      return;
    }
    if (!/^\d{5}$/.test(trimmed)) {
      setResult({ type: 'fail', message: t.invalid });
      return;
    }
    if (validZipCodes.includes(trimmed)) {
      setResult({ type: 'success', message: t.success(trimmed) });
    } else {
      setResult({ type: 'fail', message: t.fail(trimmed) });
    }
  };

  return (
    <section id="service-check" className="service-check-section">
      <div className="container">
        <div className="check-box">
          <h2>{t.title}</h2>
          <p>{t.description}</p>
          <div className="input-group">
            <input
              type="text"
              placeholder={t.placeholder}
              maxLength={5}
              value={zip}
              onChange={(e) => setZip(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && validateZip()}
            />
            <button className="btn btn-primary" onClick={validateZip}>{t.button}</button>
          </div>
          <div className="result-message">
            {result && (
              <span className={result.type === 'success' ? 'result-success' : 'result-fail'}>
                <i className={`fa-solid ${result.type === 'success' ? 'fa-star' : 'fa-circle-xmark'}`}></i>{' '}
                {result.message}
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
