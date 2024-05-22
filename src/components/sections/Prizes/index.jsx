import styles from './styles.module.scss';

function Prizes() {
  return (
    <section className={styles.contact}>
      <div className="container">
        <div className={styles.contact__title}>
          <h3 className={styles.contact__title1}>CƠ CẤU GIẢI THƯỞNG</h3>
          <h3 className={styles.contact__title2}>Phần thưởng đầy hấp dẫn cho các chiến binh</h3>
        </div>
        <div>
          <img src="/photo prizes/prizes.png" alt="prizes" className={styles.image} />  
        </div>
        <div className={styles.boxContainer}>
          <div className={styles.box}>
            <div className={styles.box__box1}>
              <h4 className={styles.top}>Giải nhì</h4>
              <h4 className={styles.award}>1.500.000 VNĐ</h4>
            </div>
            <div className={styles.box__box2}>
              <h4 className={styles.top}>Giải nhất</h4>
              <h4 className={styles.award}>2.000.000 VNĐ</h4>
            </div>
            <div className={styles.box__box3}>
              <h4 className={styles.top}>Giải ba</h4>
              <h4 className={styles.award}>1.000.000 VNĐ</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Prizes;
