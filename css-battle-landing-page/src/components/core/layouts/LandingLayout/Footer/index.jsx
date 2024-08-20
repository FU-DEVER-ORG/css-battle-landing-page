import styles from './styles.module.scss';

function Footer() {
  return (
    <footer className={styles['footer']}>
      <div className="container">
        <div className={styles['main']}>
          <p className={styles['main_title']}>
            Đăng ký tham gia CSS Battle 2024 để chinh phục ngôi vương “The king
            of CSS 2024”!
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSc1KNczkcH68Uxgk09WR6eEpbqUyk5ASEVzLDFCZGKNA3pQ7A/viewform?usp=sf_link"
            className={styles['main_register']}
          >
            Đăng ký ngay
          </a>
        </div>
        <div className={styles['detail']}>
          <div className={styles['copywrite']}>
            <div className={styles['copywrite_logo']}>
              <div className={styles['copywrite_logo_element_1']}>
                CSS BATTLE
              </div>
              <div className={styles['copywrite_logo_element_2']}>--2024--</div>
            </div>
            <div className={styles['copywrite_author']}>
              © Được Tổ Chức Bởi Câu lạc bộ lập trình FU-DEVER
            </div>
          </div>
          <div className={styles['contact']}>
            <div className={styles['contact_idea']}>
              <div className="contact_idea_element_1">Website:</div>
              <div className="contact_idea_element_2">Facebook:</div>
              <div className="contact_idea_element_3">Email:</div>
              <div className="contact_idea_element_4">SĐT:</div>
            </div>
            <div className={styles['contact_content']}>
              <a
                href="https://www.fu-dever.com/"
                className="contact_content_element_1"
              >
                https://www.fu-dever.com/
              </a>
              <a
                href="https://www.facebook.com/FPTUDever"
                className="contact_content_element_2"
              >
                https://www.facebook.com/FPTUDever
              </a>
              <a
                href="mailto:club.dever@gmail.com"
                className="contact_content_element_3"
              >
                club.dever@gmail.com
              </a>
              <a
                href="tel:+84 828 828 497"
                className="contact_content_element_4"
              >
                +84 828 828 497
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
