import CardLeft from '../CardLeft';
import CardRight from '../CardRight';
import styles from './Card.module.css'

const Card = (props) => {
  return (
    <div className={styles.card}>
      <CardLeft />
      <CardRight items={props.items} />
    </div>
  );
};

export default Card;
