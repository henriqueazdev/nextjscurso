import styles from "../../../styles/Xadrez.module.css";

interface PropsCasa {
  par?: boolean;
}

export default function Casa(props: PropsCasa = { par: false }) {
  const { par } = props;

  return (
    <div
      className={`${styles.casa} + ${
        par ? styles.preta : styles.branca
      }`}></div>
  );
}
