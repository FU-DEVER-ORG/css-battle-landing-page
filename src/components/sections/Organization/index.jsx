import Image from 'next/image';

import logoICPDP from '/public/Organization/logoICPDP.png';
import logoCSSBattle from '/public/Organization/CSSBattle.png';
import logoDever from '/public/Organization/logoDever.png';
import logoFPT from '/public/Organization/logoFPT.png';

import * as styles from './styles.module.scss';

function Organization() {
  return (
    <section className={styles['org']}>
      <div className={styles['container']}>
        <h3 className={styles['org__title']}>ĐƠN VỊ TỔ CHỨC</h3>

        <div className={styles['org__image']}>
          <Image
            className={styles['image__logo--content']}
            src={logoCSSBattle}
            alt="Logo CSS Battle"
            priority
          />
          <Image
            className={styles['image__logo']}
            src={logoDever}
            alt="Logo DEVER"
          />
          <Image
            className={styles['image__logo']}
            src={logoICPDP}
            alt="Logo ICPDP"
          />
          <Image
            className={styles['image__logo--content']}
            src={logoFPT}
            alt="Logo FPT"
          />
        </div>
      </div>
    </section>
  );
}

export default Organization;
