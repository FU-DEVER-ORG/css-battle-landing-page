/* eslint-disable @next/next/no-img-element */
import styles from './styles.module.scss';
import Image from 'next/image';

function Header() {
  return (
    <header className={styles['header']}>
      <div className="container">
        <div id="logo">
          <img
            id="logo-logo"
            src="logo-clb.jpg"
            width={500}
            height={500}
            alt="logoclb"
          />
          <span id="text-logo">CSS Battle</span>
          <span id="year-logo">--2024--</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
