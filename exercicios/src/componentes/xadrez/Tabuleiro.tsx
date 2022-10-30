import styles from "../../styles/Xadrez.module.css";
import Linha from "./Linha";

export default function Tabuleiro() {
  let linhas = [];

  for (let i: number = 1; i <= 8; i++) {
    linhas.push(<Linha par={i % 2 == 0} key={i}></Linha>);
  }

  return <div className={styles.tabuleiro}>{linhas}</div>;
}
