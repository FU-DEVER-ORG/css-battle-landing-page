import Image from "next/image";
import styles from "./styles.module.scss";
import Image from 'next/image';
import styles from './styles.module.scss';

function CompetitionStruct() {
  return (
    <section className={styles['contact']}>
      <div className="container">
        <h3 className={styles['contact__title']}>Cơ cấu cuộc thi</h3>
        <div className={styles['contact__image']}>Image</div>
      </div>
    </section>
  );
}

export default CompetitionStruct;
export function Retro() {
  return (
    <section className={styles['contact']}>
      <div className="container">
        <div className={styles['contact__intro']}>

          <h3 className={styles['contact__intro1']}>RETRO</h3>
          <h4 className={styles['contact__intro2']}>Cảm nghĩ</h4>
          {/* <div className={styles['contact__line']}></div>           */}
        </div>

        <div className={styles['contact__outimage']}>

          <Image src="/imga/image5.jpg" className={styles['contact__image']} width={400} height={400} alt="Image5" />
          <Image src="/imga/image7.jpg" className={styles['contact__image']} width={400} height={400} alt="Image7" />
          <Image src="/imga/image6.jpg" className={styles['contact__image']} width={400} height={400} alt="Image6" />

        </div>

        <h3 className={styles['contact__title']}>Cảm nghĩ của những chiến binh CSS Battle 2023</h3>

      </div>
    </section>
  );
}
