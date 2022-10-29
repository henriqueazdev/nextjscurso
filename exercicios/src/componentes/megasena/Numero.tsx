import styles from "../../styles/Megasena.module.css";

interface NumeroProps {
  numero: number;
}

export default function Numero(props: NumeroProps) {
  const { numero } = props;

  return <div className={styles.numero}>{numero}</div>;
}
