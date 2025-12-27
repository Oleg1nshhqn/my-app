import React from 'react';
import { products } from '../../../utils/products';
import ProductCard from '../../common/ProductCard/ProductCard';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.homePage}>
      <header className={styles.header}>
        <div className={styles.slogan}>
          <h1>
            Время стильно
            <br />
            Точно
            <br />
            Эксклюзивно
          </h1>
        </div>
      </header>
      <main className={styles.main}>
        <h4>Продукция</h4>
        <div className={styles.items}>
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
