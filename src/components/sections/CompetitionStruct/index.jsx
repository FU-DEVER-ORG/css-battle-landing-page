import Image from 'next/image';
import IMG1 from '@/public/photo/img_group.svg';
import * as styles from './styles.module.scss';

function CompetitionStruct() {
  return (
    <section className={styles['contact']}>
      <div className="container">
        <div className="contact-section">
          <div className={styles['contact-header']}>
            <h3 className={styles['contact-header-text2']}>CƠ CẤU CUỘC THI</h3>
            <p className={styles['contact-header-text1']}>Các vòng thi đấu</p>
          </div>
        </div>
        <div className={styles['contact-section']}>
          <div className={styles['contact-section1']}>
            <div className={styles['contact-section-list']}>
              <h3 className={styles['contact-header-text']}> 1. Vòng loại </h3>
              <div className={styles['contact-section__round']}>
                <div className={styles['contact-section__rounds']}>
                  <li>45 tuyển thủ tham gia chia thành 9 bảng đấu, mỗi bảng 5 tuyển thủ.</li>
                </div>
                <div className={styles['contact-section__rounds']}>
                  <li>
                    Các tuyển thủ thi đấu cá nhân theo bảng và chọn ra 9 tuyển thủ xuất sắc nhất tiến tiếp vào vòng bán
                    kết.
                  </li>
                </div>
                <div className={styles['contact-section__rounds']}>
                  <li>
                    Các tuyển thủ chung bảng thi đấu chung một bộ đề bao gồm 3 câu hỏi (1 dễ, 1 vừa, 1 khó)
                  </li>
                </div>
              </div>
            </div>
            <div className={styles['contact-section-list']}>
              <h3 className={styles['contact-header-text']}>2. Vòng bán kết</h3>
              <div className={styles['contact-section__round']}>
                <div className={styles['contact-section__rounds']}>
                  <li> 9 tuyển thủ xuất sắc từ vòng loại sẽ tiếp tục hành trình vào vòng bán kết, chia thành 3 bảng đấu,
                    mỗi bảng gồm 3 tuyển thủ.
                  </li>
                </div>
                <div className={styles['contact-section__rounds']}>
                  <li>
                    Các tuyển thủ sẽ tiếp tục thi đấu cá nhân theo từng bảng, và chỉ có 3 tuyển thủ xuất sắc nhất từ mỗi
                    bảng sẽ tiến vào vòng chung kết.
                  </li>
                </div>
                <div className={styles['contact-section__rounds']}>
                  <li>
                    Các tuyển thủ chung bảng thi đấu chung một bộ đề bao gồm 3 câu hỏi (1 dễ, 1 vừa, 1 khó)
                  </li>
                </div>
              </div>
            </div>
            <div className={styles['contact-section-list']}>
              <h3 className={styles['contact-header-text']}>3. Vòng chung kết</h3>
              <div className={styles['contact-section__round']}>
                <div className={styles['contact-section__rounds']}>
                  <li>3 tuyển thủ xuất sắc từ vòng bán kết sẽ bước vào cuộc chiến cuối cùng.</li>
                </div>
                <div className={styles['contact-section__rounds']}>
                  <li>
                    Các tuyển thủ sẽ thi đấu cá nhân, tính điểm và chọn ra các giải Nhất, Nhì và Ba, để xưng danh “The
                    king of CSS”.
                  </li>
                </div>
                <div className={styles['contact-section__rounds']}>
                  <li>
                    Mỗi bộ đề thi đấu sẽ bao gồm 3 câu hỏi, bao gồm 1 câu dễ, 1 câu vừa và 1 câu khó.
                  </li>
                </div>
              </div>
            </div>
          </div>
          <div className={styles['contact-section__action']}>
            <a href='#' className={styles['contact-main_button1']}>
              <button className={styles['contact-main_button']}>
                Đăng ký ngay
              </button>
            </a>
            <div className={styles['contact-section__stack']}>
              <div className={styles['contact-section__stack1']}></div>
              <Image src={IMG1} alt="image" className={styles.image} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default CompetitionStruct;