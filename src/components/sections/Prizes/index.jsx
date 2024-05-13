import styles from './styles.module.scss';

function Prizes() {
  return (
    <section className={styles['contact']}>
      <div className="container">
        <div className={styles['contact__title']}>
        <h3 className={styles['contact__title1']}>CƠ CẤU GIẢI THƯỞNG</h3>
        <h3 className={styles['contact__title2']}>Phần thưởng đầy hấp dẫn cho các chiến binh</h3>
        </div>
       <div > 
        <img src="/photo prizes/Rectangle 143.png" alt="prizes" className={styles['image']} />
        <img src="/photo prizes/Rectangle 142.png" alt="prizes" className={styles['image1']} />
        <img src="/photo prizes/Rectangle 141.png" alt="prizes" className={styles['image2']} />
       </div>
      </div>
    </section>
  );
}

export default Prizes;
