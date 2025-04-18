import React from 'react';
import './AttentionBar.css';
import attentionIcon from '../../../assets/icon/attention.png';

const AttentionBar = () => {
  return (
    <div className="attention-bar">
      <img src={attentionIcon} alt="Attention" className="attention-icon" />
      <span className="attention-text">
      The website is still in the development phase. We appreciate your understanding!
      </span>
    </div>
  );
};

export default AttentionBar; 