import styles from "./img.module.css";
export default function Img() {
  return (
    <img
      className={styles.img}
      src="../public/start-wars-card-01.jpg"
      alt="star-wars-card"
    />
  );
}
