/* eslint-disable @next/next/no-img-element */
import styles from './styles.module.scss';
import React from 'react';
import image from '@img/hero_section/image.png';
import Image from 'next/image';

function HeroSection() {
  return (
    <section id="Introduction" className={styles['hero']}>
      <Image
        className={styles['hero_img']}
        src={image}
        alt="hero_image"
        width={1600}
        height={900}
      />
    </section>
  );
}

export default HeroSection;
