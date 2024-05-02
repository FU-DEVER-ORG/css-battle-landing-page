import styles from './styles.module.scss';

function ContactSection() {
  return (
    <section className={styles['contact']}>
      <div className="container">
        <h3 className={styles['contact__title']}>Contact</h3>
        <h3 className={styles['contact__title']}>Contact</h3>
        <h3 className={styles['contact__title']}>Contact</h3>
        <h3 className={styles['contact__title']}>Contact</h3>

        <div className={styles['contact__image']}>Image</div>
      </div>
    </section>
  );
}

export default ContactSection;
