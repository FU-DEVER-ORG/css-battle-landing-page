import styles from './styles.module.scss';

function Header() {
  return (
    <header className={styles['header']}>
      <a href="#HeroSection" className={styles['logo']}>
        <div className={styles['logo_element_1']}>CSS BATTLE</div>
        <div className={styles['logo_element_2']}>--2024--</div>
      </a>
      <nav className={styles['menubar']}>
        <a href="#Introduction" className={styles['menubar_element']}>
          Giới thiệu
        </a>
        <a href="#Prizes" className={styles['menubar_element']}>
          Giải thưởng
        </a>
        <a href="#TimelineSection" className={styles['menubar_element']}>
          Timeline cuộc thi
        </a>
        <a href="#CompetitionForm" className={styles['menubar_element']}>
          Thể lệ thi
        </a>
      </nav>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSc1KNczkcH68Uxgk09WR6eEpbqUyk5ASEVzLDFCZGKNA3pQ7A/viewform?usp=sf_link"
        className={styles['register']}
      >
        Đăng ký ngay
      </a>
    </header>
  );
}

export default Header;
