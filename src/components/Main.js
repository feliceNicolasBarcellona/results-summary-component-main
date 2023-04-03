import styles from "./Main.module.css";
import Card from "./UI/Card";

const Main = props => {
  return (
    <main className={styles.main}>
      <Card items={props.items}/>
    </main>
  );
};

export default Main;
