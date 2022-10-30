import styles from "../../styles/Xadrez.module.css";
import Casa from "./Casa";

interface LinhaProps {
  par?: boolean;
}

export default function Linha(props: LinhaProps) {
  const { par } = props;
  let casas: any[] = [];

  for (let i: number = 1; i <= 8; i++) {
    casas.push(<Casa par={i % 2 == 0} key={i}></Casa>);
  }

  return (
    <div className={par ? styles.linha : styles.linhaInvertida}>{casas}</div>
  );
}
