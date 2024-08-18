import Image from 'next/image';
import IMG from '@/public/photo/img_3_1.png';
import IMG1 from '@/public/photo/img35.svg';
import * as styles from './styles.module.scss';
function CompetitionForm() {
  return (
    <section className={styles.contact}>
      <div className="container">

        <div className="contact-section">
          <div className={styles['contact-header']}>
            <h3 className={styles['contact-header-text']}>HÌNH THỨC THI</h3>
            <p className={styles['contact-header-text1']}>Thể lệ và quy định thi đấu</p>
          </div>
        </div>
        <div className={styles['contact-main']}>
          <div className={styles['image']}>
            <Image src={IMG} alt='img' width={400} height={600} />
          </div>
          <div className={styles['contact-main_text-block']}>
            <h3 className={styles['contact-main_subheading']}>Thể lệ</h3>
            <div className={styles['contact-main_description']}>
              <li className={styles['contact-main_description1']}>
                Một bộ đề bao gồm 3 câu hỏi. Mỗi câu hỏi bao gồm 1 hình vẽ đơn giản. Các dạng hình vẽ các bạn có thể
                tham khảo ở trang web <span className={styles['contact-main_description2']}>https://cssbattle.dev/</span> nhé.
              </li>
              <div className={styles['contact-main_row']}>
                <li>
                  Mục tiêu của các bạn là sử dụng HTML/CSS để tạo ra một hình vẽ với độ chính xác cao nhất và tốc độ
                  nhanh nhất có thể.
                </li>
              </div>
              <div className={styles['contact-main_row']}>
                <li>
                  Kết quả được tính theo tỷ lệ trùng khớp giữa kết quả của bạn và đề thi (1% - 100%), với 1% tỉ lệ chính
                  xác bạn nhận về 1 điểm.
                </li>
              </div>
              <div className={styles['contact-main_row']}>
                <li>Giới hạn thời gian làm bài cho mỗi câu hỏi là 15 phút.</li>
              </div>
              <li>
                Kết quả sẽ được sắp xếp dựa trên tổng số điểm của toàn bộ đề, nếu các thí sinh có tổng điểm bằng nhau,
                tuyển thủ có tổng thời gian thấp nhất sẽ giành được thứ hạng cao hơn.
              </li>
            </div>
            <Image src={IMG1} alt="decorative" className={styles['image2']} />
            <p className={styles['contact-main_subheading']}>Quy định thi đấu</p>
            <div className={styles['contact-main_row1']}>
              <li className={styles['contact-main_row2']}>
                Tất cả tuyển thủ tham gia thi đầu chỉ được sử dụng internet để truy cập vào trang web làm bài do BTC
                cung cấp. Cần đảm bảo laptop luôn được kết nối internet.
              </li>
              <div className={styles['contact-main_row3']}>
                <li>Không trao đổi khi thi đấu, cấm toàn bộ sự can thiệp từ bên ngoài.</li>
              </div>
            </div>
            <a href='#' className={styles['contact-main_button1']}>
              <button className={styles['contact-main_button']}>
                Đăng ký ngay
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CompetitionForm;