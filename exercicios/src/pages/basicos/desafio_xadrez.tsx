import styles from "../../styles/Xadrez.module.css";
import Tabuleiro from "../../componentes/xadrez/Tabuleiro";
import Inicio from "../../componentes/shared/Inicio";

export default function Xadrez() {
  return (
    <>
      <div className={styles.mesa}>
        <Tabuleiro></Tabuleiro>
      </div>
      <Inicio />
    </>
  );
}
