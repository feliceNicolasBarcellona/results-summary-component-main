import styles from "./SummaryItems.module.css";

const SummaryItems = (props) => {
  return (
    <div
      className={`${styles.summary__items} + ${
        props.category === "Reaction" && styles.reaction
      } + ${props.category === "Memory" && styles.memory} + ${
        props.category === "Verbal" && styles.verbal
      } + ${props.category === "Visual" && styles.visual} 
      `}
    >
      <div className={styles.summary__items__body}>
        <img src={props.icon} alt={props.category} />
        <p
          className={`${styles.text} + ${
            props.category === "Reaction" && styles["reaction-text"]
          } + ${props.category === "Memory" && styles["memory-text"]} + ${
            props.category === "Verbal" && styles["verbal-text"]
          } + ${props.category === "Visual" && styles["visual-text"]}
        `}
        >
          {props.category}
        </p>
      </div>
      <p className={styles.score}>
        {props.score} <span className={styles.hundred_text}>/ 100</span>
      </p>
    </div>
  );
};

export default SummaryItems;
