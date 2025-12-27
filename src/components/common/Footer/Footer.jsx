import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <>
      <div className={styles.line}></div>
      <footer className={styles.footer}>
        <div className={styles.footerLogo}>
          <img src="svg/logo1.svg" alt="Logo"  className={styles.logo} />
        </div>
        <div className={styles.footerText}>
          <ul>
            <li><Link to="/about">О нас</Link></li>
            <li><Link to="/policy">Политика и Конфиденциальность</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/faq">Заказы и доставка</Link></li>
            <li><Link to="/faq">Возврат</Link></li>
          </ul>
        </div>
        <div className={styles.social}>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">INSTAGRAM</a>
          <a href="https://vk.com" target="_blank" rel="noopener noreferrer">VK</a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">YOUTUBE</a>
          <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">TELEGRAM</a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
