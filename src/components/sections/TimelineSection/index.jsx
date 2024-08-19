import styles from './styles.module.scss';

function TimelineSection() {
  return (
    <section id="TimelineSection" className={styles['timeline']}>
      <div className="container">
        <h3 className={styles['timeline__title']}>Timeline</h3>
        <div className={styles['timeline__image']}>Image</div>
      </div>
    </section>
  );
}

export default TimelineSection;
