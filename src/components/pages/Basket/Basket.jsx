import React from 'react';
import { useBasket } from '../../../context/BasketContext';
import { useUser } from '../../../context/UserContext';
import styles from './Basket.module.css';

const Basket = () => {
  const { basketItems, updateQuantity, removeFromBasket, getTotalPrice } = useBasket();
  const { user } = useUser();

  if (basketItems.length === 0) {
    return (
      <div className={styles.container}>
        <div className={styles.main}>
          <h1 className={styles.title}>Корзина</h1>
          <div className={styles.emptyBasket}>
            <img src="/svg/basket.svg" alt="empty basket" width="100px" />
            <p>Ваша корзина пуста</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.favoritesHeader}>
      </div>
      <div className={styles.main}>
        <h1 className={styles.title}>Корзина</h1>

        {user && (
          <div className={styles.userInfoPanel}>
            <div className={styles.userInfoContent}>
              <div className={styles.userProfile}>
                <img src="/svg/Profile2.svg" alt="profile" width="140px" className={styles.icon} />
                <div className={styles.username}>{user.fullName || user.email || 'Имя пользователя'}</div>
              </div>
              <div className={styles.pickupPoint}>
                Пункт выдачи:<br />
                Ул. Московская 231к3
              </div>
            </div>
          </div>
        )}
      </div>

      <main className={styles.basketMain}>
        <div className={styles.basketGrid}>
          {basketItems.map(item => (
            <div key={item.id} className={styles.basketItem}>
              <img src={`/products/${item.image}`} alt={item.name} className={styles.itemImage} />
              <div className={styles.itemInfo}>
                <h3>{item.name}</h3>
                <p>{item.brand}</p>
                <p className={styles.price}>${item.price.toLocaleString()}</p>
                <div className={styles.quantityControl}>
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
                <button className={styles.removeBtn} onClick={() => removeFromBasket(item.id)}>
                  Удалить
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.totalSection}>
          <h2>Итого: ${getTotalPrice().toLocaleString()}</h2>
          <button className={styles.checkoutBtn}>Оформить заказ</button>
        </div>
      </main>
    </div>
  );
};

export default Basket;
