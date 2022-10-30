import LayoutPadrao from "../../componentes/shared/LayoutPadrao";
import Tabuleiro from "../../componentes/xadrez/Tabuleiro";
import styles from "../../styles/Xadrez.module.css";

export default function Xadrez() {
  return (
    <LayoutPadrao centralizado>
      <div className={styles.mesa}>
        <Tabuleiro></Tabuleiro>
      </div>
    </LayoutPadrao>
  );
}
