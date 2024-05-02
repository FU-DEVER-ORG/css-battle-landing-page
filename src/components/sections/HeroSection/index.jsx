import React from 'react';
import styles from './styles.module.scss';

function HeroSection() {
  return (
    <section className={styles['hero']}>
      <div className="container">
        <h3 className={styles['hero__title']}>title</h3>
        <div className={styles['hero__image']}>image</div>
      </div>
    </section>
  );
}

export default HeroSection;
