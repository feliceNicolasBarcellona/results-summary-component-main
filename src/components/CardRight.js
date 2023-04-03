import styles from "./CardRight.module.css";
import Button from "./UI/Button";
import SummaryItems from "./SummaryItems";

const CardRight = (props) => {
  return (
    <div className={styles.card__right}>
      <div className={styles.card__right__container}>
        <p className={styles.summary}>Summary</p>
        {props.items.map((item) => (
          <SummaryItems
            key={item.category}
            category={item.category}
            score={item.score}
            icon={item.icon}
          />
        ))}
        <Button />
      </div>
    </div>
  );
};

export default CardRight;
