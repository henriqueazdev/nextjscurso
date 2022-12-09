import Link from "next/link";
import { useState } from "react";
import styles from "../../styles/MontyHall.module.css";

export default function Jogo() {
  const [qtdPortas, setQtdPortas] = useState<number>(2);
  const [premiada, setPremiada] = useState<number>(1);

  const classeBotaoIniciar: string = [styles.opcao, styles.verde].join(" ");
  const classeMenu: string = [styles.opcao, styles.roxo].join(" ");

  const atualizarPortas = (operacao: "+" | "-") => {
    if (qtdPortas === 2 && operacao === "-") return;

    if (operacao === "-" && qtdPortas - 1 < premiada) setPremiada(premiada - 1);

    operacao === "+"
      ? setQtdPortas(qtdPortas + 1)
      : setQtdPortas(qtdPortas - 1);
  };

  const atualizarPremiada = (operacao: "+" | "-") => {
    if (premiada === 1 && operacao === "-") return;

    if (operacao === "+" && premiada + 1 > qtdPortas) return;

    operacao === "+" ? setPremiada(premiada + 1) : setPremiada(premiada - 1);
  };

  return (
    <div className={styles.menu}>
      <div className="row">
        <div className={classeMenu}>Monty Hall</div>
        <div className={styles.opcao}>
          Portas
          <div className="row">
            <span className={styles.botao} onClick={() => atualizarPortas("+")}>
              +
            </span>
            <span className={styles.botao} onClick={() => atualizarPortas("-")}>
              -
            </span>
          </div>
          <span style={{ fontSize: 20 }}>{qtdPortas}</span>
        </div>
      </div>
      <div className="row">
        <div className={styles.opcao}>
          Prêmio
          <div className="row">
            <span
              className={styles.botao}
              onClick={() => atualizarPremiada("+")}
            >
              +
            </span>
            <span
              className={styles.botao}
              onClick={() => atualizarPremiada("-")}
            >
              -
            </span>
          </div>
          <span style={{ fontSize: 20 }}>{premiada}</span>
        </div>
        <div className={classeBotaoIniciar}>
          <Link href={`/montyhall/${qtdPortas}/${premiada}`} passHref>
            Iniciar
          </Link>
        </div>
      </div>
    </div>
  );
}
