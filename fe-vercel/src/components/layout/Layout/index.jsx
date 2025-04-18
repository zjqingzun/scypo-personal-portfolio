import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header';
import AttentionBar from '../../ui/AttentionBar/AttentionBar';
import './Layout.css';

const Layout = ({ language, onLanguageChange }) => {
  return (
    <div className="layout">
      <Header 
        currentLang={language}
        onLanguageChange={onLanguageChange}
      />
      <AttentionBar />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout; 