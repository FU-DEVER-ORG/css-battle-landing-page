import styles from './styles.module.scss';

function Header() {
  return (
    <header className={styles['header']}>
      <div className={styles['logo']}>
        <div className={styles['logo_element_1']}>CSS BATTLE</div>
        <div className={styles['logo_element_2']}>--2024--</div>
      </div>
      <nav className={styles['menubar']}>
        <a href="" className={styles['menubar_element']}>
          Giới thiệu
        </a>
        <a href="" className={styles['menubar_element']}>
          Giải thưởng
        </a>
        <a href="" className={styles['menubar_element']}>
          Timeline cuộc thi
        </a>
        <a href="" className={styles['menubar_element']}>
          Thể lệ thi
        </a>
      </nav>
      <button className={styles['register']}>Đăng ký ngay</button>
    </header>
  );
}

export default Header;
