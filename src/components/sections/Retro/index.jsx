import Image from 'next/image'

import Player2 from '@/public/cam_nghi/player2.png';
import PLayer1 from '@/public/cam_nghi/player1.png';
import PLayer3 from '@/public/cam_nghi/player3.png';

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
          <Image
          className={styles['contact__image']} width={400} height={400} 
          src={Player2}
          alt="Top2" />

          <Image 
          src={PLayer1}
          className={styles['contact__image']} width={400} height={400} 
          alt="Top1" />

          <Image 
          src={PLayer3} 
          className={styles['contact__image']} width={400} height={400} 
          alt="Top3" />
        
        </div>

        <h3 className={styles['contact__title']}>
          Cảm nghĩ của những chiến binh CSS Battle 2023
        </h3>
      </div>
    </section>
  );
}

export default Retro;
