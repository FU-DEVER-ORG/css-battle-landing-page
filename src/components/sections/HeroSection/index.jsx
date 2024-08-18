import styles from './styles.module.scss';
import Image from 'next/image';

function HeroSection() {
  return (
    <section className={styles['hero']}>
      <div className={styles['cup']}>
        {/* <img src="/hero_section/cup.png" alt="Cup" /> */}
      </div>
      <div className={styles['title']}>
        <div className={styles['title_1']}>CSS BATTLE 2024</div>
        <div className={styles['title_2']}>Finding the king of CSS</div>
      </div>
      <div className="founder">Tổ chức bởi FU-DEVER</div>
    </section>
  );
}

export default HeroSection;
