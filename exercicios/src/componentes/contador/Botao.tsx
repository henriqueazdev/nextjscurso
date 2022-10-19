import { PropsWithChildren } from "react";
import styles from "../../../styles/Contador.module.css";

interface BotaoProps extends PropsWithChildren {
  acao: () => void;
}

export default function (props: BotaoProps) {
  const { children } = props;

  return (
    <>
      <button onClick={props.acao} className={styles.botao}>
        {children}
      </button>
    </>
  );
}
