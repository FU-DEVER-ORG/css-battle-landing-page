import styles from './styles.module.scss';

function HeroSection() {
  return (
    <section className={styles['hero']}>
      <div className="container">
        <h3 className={styles['hero__title']}>Hero</h3>
        <div className={styles['hero__image']}>Image</div>
      </div>
    </section>
  );
}

export default HeroSection;
