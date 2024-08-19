import * as styles from './styles.module.scss';

function TimelineSection() {
  return (
    <section className={styles['timeline']}>
      <div className="container">
        <div className={styles['timeline__frame']}>
          <div className={styles['timeline__hinh']}></div>
          <div className={styles['timeline__title']}>
            <div className={styles['timeline__title1']}>TIMELINE CUỘC THI</div>
            <span className={styles['timeline__title2']}>Các giai đoạn cuộc thi</span>
          </div>
        </div>

        <div className={styles['timeline__group']}>

          <div className={styles['timeline__container-1']}>
            <div className={styles['timeline__group-up1']}>
              <div className={styles['timeline__circle-1']}>
                <span className={styles['timeline__number_1']}>1</span>
              </div>
              <div className={styles['timeline__line1']}></div>
            </div>
            <div className={styles['timeline__group-up2']}>
              <b>II. Giai đoạn 2</b>
              <div className={styles['timeline__date1']}>09/06</div>
              <span className={styles['timeline__content_1']}>
                <h6 className={styles['timeline__title3']}>Workshop hướng dẫn thi đấu</h6>
                <p className={styles['timeline__title4']}> Tại đây, bạn sẽ được tìm hiểu về quy tắc cuộc thi, cách thức nộp bài và những mẹo quan trọng để vượt qua các thử thách CSS.
                </p>
              </span>
            </div>
            <div className={styles['timeline__group-up3']}>
              <div className={styles['timeline__circle-2']}>
                <span className={styles['timeline__number_2']}>3</span>
              </div>
              <div className={styles['timeline__line2']}></div>
            </div>
            <div className={styles['timeline__group-up4']}>
              <b>IV. Giai đoạn 4</b>
              <div className={styles['timeline__date2']}>23/06</div>
              <span className={styles['timeline__content_1']}>
                <h6 className={styles['timeline__title5']}>Vòng chung kết giải đấu</h6>
                <p className={styles['timeline__title4']}>Vòng chung kết sẽ là cuộc đối đầu quyết định, nơi những "Chiến thần CSS" tài ba nhất sẽ tranh tài để tìm ra vị vua CSS thực sự của "CSS Battle".
                </p>
              </span>
            </div>
          </div>

          <div className={styles['timeline__container-2']}>
            <div className={styles['timeline__bar_1']}>
              <div className={styles['timeline__rectangle1']}></div>
              <div className={styles['timeline__triangle1']}></div>
            </div>
            <div className={styles['timeline__bar_2']}>
              <div className={styles['timeline__triangle2']}></div>
              <div className={styles['timeline__rectangle2']}></div>
            </div>
            <div className={styles['timeline__bar_1']}>
              <div className={styles['timeline__rectangle3']}></div>
              <div className={styles['timeline__triangle3']}></div>
            </div>
            <div className={styles['timeline__bar_2']}>
              <div className={styles['timeline__triangle4']}></div>
              <div className={styles['timeline__rectangle4']}></div>
            </div>
          </div>

          <div className={styles['timeline__container-3']}>
            <div className={styles['timeline__group-up6']}>
              <b>I. Giai đoạn 1</b>
              <div className={styles['timeline__date3']}>25/05 - 05/06</div>
              <span className={styles['timeline__content_1']}>
                <h6 className={styles['timeline__title6']}>Nhận đơn đăng ký</h6>
                <p className={styles['timeline__title4']}>Hãy tranh thủ đăng ký ngay để không bỏ lỡ cơ hội tham gia cuộc thi đầy hấp dẫn này. Đơn đăng ký sẽ được tiếp nhận trong khoảng thời gian trên để đảm bảo mọi người có đủ thời gian chuẩn bị và tham gia.
                </p>
              </span>
            </div>
            <div className={styles['timeline__group-up5']}>
              <div className={styles['timeline__line3']}></div>
              <div className={styles['timeline__circle-3']}>
                <span className={styles['timeline__number_3']}>2</span>
              </div>
            </div>
            <div className={styles['timeline__group-up7']}>
              <b>III. Giai đoạn 3</b>
              <div className={styles['timeline__date4']}>16/06</div>
              <span className={styles['timeline__content_1']}>
                <h6 className={styles['timeline__title7']}>Vòng loại và bán kết giải đấu</h6>
                <p className={styles['timeline__title4']}>Bước vào vòng loại và bán kết, các bạn sẽ đối mặt với những thử thách CSS đầy kịch tính và căng thẳng. Hãy chuẩn bị tinh thần và sẵn sàng để thể hiện tài năng của mình trong việc sử dụng CSS và chiến đấu để giành vé vào vòng chung kết.
                </p>
              </span>
            </div>
            <div className={styles['timeline__group-up8']}>
              <div className={styles['timeline__line4']}></div>
              <div className={styles['timeline__circle-4']}>
                <span className={styles['timeline__number_4']}>4</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TimelineSection;
