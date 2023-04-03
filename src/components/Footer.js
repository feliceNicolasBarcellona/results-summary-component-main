import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.attribution}>
      Challenge by{" "}
      <a href="https://www.frontendmentor.io?ref=challenge" target="">
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a href="https://www.frontendmentor.io/profile/feliceNicolasBarcellona">
        Felice Nicolas Barcellona
      </a>
      .
    </footer>
  );
};

export default Footer;
