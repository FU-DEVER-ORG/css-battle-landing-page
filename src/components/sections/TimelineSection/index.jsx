import styles from './styles.module.scss';

function TimelineSection() {
  return (
    <section className={styles['timeline']}>
      <div className="container">
        <h3 className={styles['timeline__title']}>Timeline</h3>
        <h3 className={styles['timeline__title']}>12 32</h3>
        <h3 className={styles['timeline__title']}>236</h3>

        <div className={styles['timeline__image']}>Image</div>
      </div>
    </section>
  );
}

export default TimelineSection;
