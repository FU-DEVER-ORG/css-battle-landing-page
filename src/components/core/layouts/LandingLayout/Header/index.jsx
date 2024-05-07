import styles from './styles.module.scss';

function Header() {
  return (
    <header className={styles['header']}>
      <div className="container">
        <div>Hero Section</div>
      </div>
    </header>
  );
}

export default Header;
