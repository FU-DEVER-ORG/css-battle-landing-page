import styles from './styles.module.scss';

function Header() {
  return (
    <header className={styles['header']}>
      <div className="header__logo">
        <p className="header__logo__p">CSS BATTLE</p>
        <p className="header__logo__p">--2024--</p>
      </div>
      <nav className="header__menuBar">
        <a href="" className="menuBar">
          Giới thiệu
        </a>
        <a href="" className="menuBar">
          Giải thưởng
        </a>
        <a href="" className="menuBar">
          Timeline cuộc thi
        </a>
        <a href="" className="menuBar">
          Thể lệ thi
        </a>
      </nav>
      <div className="header__register">
        <button>Đăng ký ngay</button>
      </div>
    </header>
  );
}

export default Header;
