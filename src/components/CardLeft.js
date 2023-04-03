import styles from "./CardLeft.module.css";

const CardLeft = () => {
  return (
    <div className={styles.card__left}>
      <div className={styles.card__left__container}>
        <p>Your Result</p>
        <div className={styles.circle}>
          <p className={styles.score}>76</p>
          <p className={styles.of}>of 100</p>
        </div>
        <p className={styles.great}>Great</p>
        <p className={styles.description}>
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </div>
  );
};

export default CardLeft;
