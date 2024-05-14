import styles from './styles.module.scss';
import Image from 'next/image';

function Footer() {
  return (
    <footer className={styles['footer']}>
      <div className="container">Đây là footer</div>
    </footer>
  );
}

export default Footer;
