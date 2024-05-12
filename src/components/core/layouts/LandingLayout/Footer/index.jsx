import styles from './styles.module.scss';
import Image from 'next/image';

function Footer() {
  return (
    <footer className={styles['footer']}>
      <div className={styles['tittle']}>
        Đăng ký tham gia CSS Battle 2024 để chinh phục ngôi vương “The king of
        CSS 2024”!
      </div>
      <a href="" className={styles['register']}>
        Đăng ký ngay
      </a>
      <div className={styles['footer_tittle']}></div>
      <div className={styles['footer_tittle']}></div>
      <div className={styles['footer_tittle']}></div>
    </footer>
  );
}

export default Footer;
