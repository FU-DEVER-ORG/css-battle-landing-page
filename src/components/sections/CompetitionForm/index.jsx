import styles from './styles.module.scss';

function CompetitionForm() {
  return (
    <section className={styles['contact']}>
      <div className="container">
        <h3 className={styles['contact__title']}>Hình thức thi</h3>
        <div className={styles['contact__image']}>Image</div>
      </div>
    </section>
  );
}

export default CompetitionForm;
