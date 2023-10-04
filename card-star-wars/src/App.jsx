import Img from "./imagem";
import { Content } from "./content";
import styles from "./App.module.css";
export default function App() {
  return (
    <div className={styles.container}>
      <div>
        <Img  />
      </div>
      <Content />
    </div>
  );
}
