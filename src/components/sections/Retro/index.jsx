import Image from 'next/image';

import Player2 from '@img/cam_nghi/player2.png';
import Player1 from '@img/cam_nghi/player1.png';
import Player3 from '@img/cam_nghi/player3.png';
import organizingUnit from '@img/cam_nghi/organizingUnit.png';

import * as styles from './styles.module.scss';

function Retro() {
  return (
    <section className={styles['contact']}>
      <div className="container">
        <div className={styles['contact__intro']}>
          <h3 className={styles['contact__intro1']}>RETRO</h3>
          <h3 className={styles['contact__intro2']}>Cảm nghĩ</h3>
        </div>

        <div className={styles['contact__outimage']}>
          <div className={styles['contact__image']}>
            <Image width={400} height={400} src={Player2} alt="Top2" />
          </div>
          <div className={styles['contact__image']}>
            <Image width={400} height={400} src={Player1} alt="Top1" />
          </div>
          <div className={styles['contact__image']}>
            <Image width={400} height={400} src={Player3} alt="Top3" />
          </div>
        </div>

        <h3 className={styles['contact__title']}>
          Cảm nghĩ của những chiến binh CSS Battle 2023
        </h3>
      </div>
      <div className={styles['contact__organizingUnit']}>
        <h3 className={styles['contact__organizingUnit__title']}>
          ĐƠN VỊ TỔ CHỨC
        </h3>
        <div className={styles['contact__organizingUnit__image']}>
          <Image
            src={organizingUnit}
            alt="đơn vị tổ chức"
            width={1000}
            height={100}
          ></Image>
        </div>
      </div>
    </section>
  );
}

export default Retro;
