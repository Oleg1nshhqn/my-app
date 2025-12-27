import React from 'react';
import { useBasket } from '../../../context/BasketContext';
import styles from './ProductCard.module.css';

const ProductCard = ({ product }) => {
  const { addToBasket } = useBasket();

  const handleAddToBasket = () => {
    addToBasket(product);
    alert(`${product.name} добавлен в корзину!`);
  };

  return (
    <div className={styles.card}>
      <img 
        src={`/products/${product.image}`} 
        alt={product.name} 
        className={styles.image}
      />
      <div className={styles.info}>
        <div className={styles.name}>
          <p>{product.name}</p>
        </div>
        <p className={styles.brand}>{product.brand}</p>
        <div className={styles.description}>
          <p>{product.description}</p>
        </div>
        <p className={styles.price}>${product.price.toLocaleString()}</p>
        <button onClick={handleAddToBasket} className={styles.button}>
          Добавить в корзину
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
