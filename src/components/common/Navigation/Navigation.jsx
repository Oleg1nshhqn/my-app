import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useBasket } from '../../../context/BasketContext';
import styles from './Navigation.module.css';

const Navigation = () => {
  const location = useLocation();
  const { getTotalItems } = useBasket();
  const totalItems = getTotalItems();

  const isActive = (path) => location.pathname === path ? styles.active : '';

  return (
    <nav className={styles.cap}>
      <div className={styles.brand}>
        <Link to="/"><span>Timeless</span></Link>
      </div>

      <div className={styles.inputContainer}>
        <input placeholder="" className={styles.input} name="text" type="text" />
      </div>

      <div className={styles.icons}>
        <Link to="/profile">
          <img src="svg/profile.svg" alt="profile" width="35px" className={styles.icon} />
        </Link>
        <Link to="/basket">
          <img src="/svg/basket.svg" alt="basket" width="30px" className={styles.icon} />
          {totalItems > 0 && <span className={styles.badge}>{totalItems}</span>}
        </Link>
      </div>
      <div className={styles.registration}>
        <Link to="/registration">Регистрация</Link>
      </div>
    </nav>
  );
};

export default Navigation;
