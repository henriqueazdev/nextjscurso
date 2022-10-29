import styles from "../../styles/Megasena.module.css";

interface BotaoMegasenaProps {
  acao: () => void;
}

export default function Botao(props: BotaoMegasenaProps) {
  return (
    <button className={styles.botao} onClick={props.acao}>
      Gerar
    </button>
  );
}
