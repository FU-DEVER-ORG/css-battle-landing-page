import styles from './styles.module.scss';

function Introduction() {
  return (
    <section className={styles['contact']}>
      <div className="container">
        <div className={styles['contact__title']}>
         <h3 className={styles['contact__title1']}>CSS BATTLE 2024 LÀ GÌ?</h3>
         <h3 className={styles['contact__title2']}>Thông tin về cuộc thi</h3>
         </div>
         <div className={styles['contact__image']}>
           <div>
            <img src="/photo/introduction1.png" alt="CSS battle" />
           <div> <p className={styles['contact__content1']}>CSS Battle 2024 là cuộc thi dành cho sinh viên của Đại học FPT Đà Nẵng.Sau sự thành công của mùa 1 tổ chức vào năm 2023, 
CSS Battle mùa 2 hứa hẹn sẽ là sân chơi rực  dành cho những ai có đam mê trong lĩnh vực HTML/CSS</p> </div>
            <img src="/photo/introduction2.png" alt="CSS battle event" />
            <p className={styles['contact__content2']}>Cuộc thi sẽ yêu cầu bạn sử dụng HTML/CSS để tạo ra các kết quả giống đề bài nhất có thể trong thời gian ngắn nhất</p>
          </div>
         </div>
         
      </div>
    </section>
  );
}

export default Introduction;
