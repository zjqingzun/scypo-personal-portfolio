import React from 'react';
import Weather from '../../components/ui/Weather';
import './Home.css';

const translations = {
  en: {
    welcome: '天狐',
    subtitle: 'The website is copyrighted © 2025 by zjqingzun. The target user group belongs to the fields of technology, security, and data.',
    recentPosts: 'Note',
    note: 'The website is still in the development phase. We appreciate your understanding!'
  },
  vi: {
    welcome: '天狐',
    subtitle: 'Trang web thuộc bản quyền Copyright © 2025 zjqingzun. Nhóm người dùng được hướng đến thuộc các lĩnh vực công nghệ, bảo mật và dữ liệu.',
    recentPosts: 'Lưu ý',
    note: 'Trang web hiện vẫn còn đang trong giai đoạn phát triển. Mong quý khách thông cảm !'
  },
  zh: {
    welcome: '天狐',
    subtitle: '本网站版权 © 2025 属于 zjqingzun。目标用户群体属于技术、安全和数据领域。',
    recentPosts: '注意',
    note: '本网站仍在开发阶段。感谢您的理解！'
  }
};

const Home = ({ language = 'en' }) => {
  const t = translations[language];

  return (
    <div className="home-container">
      <div className="home-content">
        <h1>{t.welcome}</h1>
        <p className="subtitle">{t.subtitle}</p>
        
        <div className="weather-section">
          <Weather language={language} />
        </div>
        
        <div className="recent-posts">
          <h2>{t.recentPosts}</h2>
          <p className="note">{t.note}</p>
          <div className="posts-grid">
            {/*  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 