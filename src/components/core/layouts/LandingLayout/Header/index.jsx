import styles from './styles.module.scss';
import { FaBars } from 'react-icons/fa6';
import { FaTimes } from 'react-icons/fa';

function Header() {
  return (
    <header className={styles['header']}>
      <div className={styles['over_play']}></div>
      <a href="#HeroSection" className={styles['logo']}>
        <div className={styles['logo_element_1']}>CSS BATTLE</div>
        <div className={styles['logo_element_2']}>--2024--</div>
      </a>
      <nav className={styles['menubar_pc']}>
        <a href="#Introduction" className={styles['menubar_pc_element']}>
          Giới thiệu
        </a>
        <a href="#Prizes" className={styles['menubar_pc_element']}>
          Giải thưởng
        </a>
        <a href="#TimelineSection" className={styles['menubar_pc_element']}>
          Timeline cuộc thi
        </a>
        <a href="#CompetitionForm" className={styles['menubar_pc_element']}>
          Thể lệ thi
        </a>
      </nav>
      <FaBars className={styles['nav_show']} />
      <nav className={styles['menubar_mobile']}>
        <FaTimes className={styles['nav_close']} />

        <a href="#Introduction" className={styles['menubar_mobile_element']}>
          Giới thiệu
        </a>
        <a href="#Prizes" className={styles['menubar_mobile_element']}>
          Giải thưởng
        </a>
        <a href="#TimelineSection" className={styles['menubar_mobile_element']}>
          Timeline cuộc thi
        </a>
        <a href="#CompetitionForm" className={styles['menubar_mobile_element']}>
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
