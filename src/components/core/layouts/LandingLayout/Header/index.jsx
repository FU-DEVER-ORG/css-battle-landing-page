'use client';
import styles from './styles.module.scss';
import { useState } from 'react';
import HamburgerMenuIcon from './HamburgerMenu';
import Link from 'next/link';

function Header() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <header className={styles['header']}>
      <div className={styles['container_header']}>
        <a href="" className={styles['logo']}>
          <div className={styles['logo_element_1']}>CSS BATTLE</div>
          <div className={styles['logo_element_2']}>--2024--</div>
        </a>
        <nav className={styles['menubar_lg']}>
          <a href="#Introduction" className={styles['menubar_lg_element']}>
            Giới thiệu
          </a>
          <a href="#Prizes" className={styles['menubar_lg_element']}>
            Giải thưởng
          </a>
          <a href="#TimelineSection" className={styles['menubar_lg_element']}>
            Timeline cuộc thi
          </a>
          <a href="#CompetitionForm" className={styles['menubar_lg_element']}>
            Thể lệ thi
          </a>
        </nav>
        <div className={styles['button']}>
          <Link
            target="_blank"
            href="https://docs.google.com/forms/d/e/1FAIpQLSc1KNczkcH68Uxgk09WR6eEpbqUyk5ASEVzLDFCZGKNA3pQ7A/viewform?usp=sf_link"
            className={styles['register']}
          >
            Đăng ký ngay
          </Link>
          <button className={styles['icon']} onClick={handleClick}>
            <HamburgerMenuIcon open={open} />
          </button>
        </div>
      </div>
      <nav
        className={`${styles[`menubar_sm_${open ? 'open' : 'close'}`]} ${
          styles.menubar_sm
        }`}
      >
        <a href="#Introduction" className={styles['menubar_sm_element']}>
          Giới thiệu
        </a>
        <a href="#Prizes" className={styles['menubar_sm_element']}>
          Giải thưởng
        </a>
        <a href="#TimelineSection" className={styles['menubar_sm_element']}>
          Timeline cuộc thi
        </a>
        <a href="#CompetitionForm" className={styles['menubar_sm_element']}>
          Thể lệ thi
        </a>
      </nav>
    </header>
  );
}

export default Header;
