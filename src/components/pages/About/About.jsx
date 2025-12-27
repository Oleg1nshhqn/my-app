import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1 className={styles.title}>О нас</h1>

        <div className={styles.userInfoPanel}>
          <div className={styles.userInfoContent}>
            <div className={styles.content}>
              <h2>Timeless — искусство вечного времени</h2>
              <p>
                Компания Timeless создаёт элегантные наручные часы, сочетающие в себе безупречный дизайн,
                высокое качество и точность. Мы верим, что время — это не просто цифры на циферблате,
                а отражение стиля, статуса и индивидуальности.
              </p>

              <h3>Наша философия</h3>
              <ul>
                <li>
                  <strong>Традиции и инновации</strong> — в каждой модели гармонично сочетаются классические
                  элементы и современные технологии.
                </li>
                <li>
                  <strong>Долговечность</strong> — мы используем только премиальные материалы, чтобы часы служили
                  вам десятилетиями.
                </li>
                <li>
                  <strong>Уникальный стиль</strong> — от минималистичных моделей до сложных механизмов с автоподзаводом.
                </li>
              </ul>

              <h3>Почему выбирают Timeless?</h3>
              <ul className={styles.checkList}>
                <li>✔ <strong>Швейцарское качество</strong> — точность и надёжность в каждой детали.</li>
                <li>✔ <strong>Ручная сборка</strong> — внимание к мелочам, которое делает часы произведением искусства.</li>
                <li>✔ <strong>Эксклюзивные коллекции</strong> — ограниченные серии для истинных ценителей.</li>
              </ul>

              <p className={styles.conclusion}>
                Timeless — не просто часы, это наследие, которое вы передадите следующим поколениям.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
