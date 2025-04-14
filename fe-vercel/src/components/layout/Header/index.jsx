import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ onLanguageChange, currentLang }) => {
  return (
    <header className="header">
      <div className="header-content">
        <nav className="nav-links">
          <Link to="/home" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
        </nav>
        
        <div className="language-selector">
          <img 
            src="/src/assets/icon/language.png" 
            alt="Language" 
            className="language-icon"
          />
          <select 
            value={currentLang} 
            onChange={(e) => onLanguageChange(e.target.value)}
            className="language-select"
          >
            <option value="en">English</option>
            <option value="vi">Tiếng Việt</option>
            <option value="zh">中文</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header; 