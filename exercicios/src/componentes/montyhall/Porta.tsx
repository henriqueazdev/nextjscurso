import PortaModel from "../../domain/classes/PortaModel";
import styles from "../../styles/MontyHall.module.css";

export interface PropsPorta {
  valor: PortaModel;
  onChange: (porta: PortaModel) => void;
}

export default function Porta(props: PropsPorta) {
  const { valor, onChange } = props;

  const selecionada = valor.selecionada ? styles.selecionada : "";
  const aberta = valor.aberta ? styles.aberta : "";

  return (
    <div className={`${styles.porta} ${aberta} ${selecionada}`}>
      {aberta ? null : (
        <>
          <div
            className={styles.numero}
            onClick={() => onChange(valor.mudarSelecao())}
          >
            {valor.numero}
          </div>
          <div
            className={styles.macaneta}
            onClick={() => onChange(valor.abrir())}
          ></div>
        </>
      )}
      {valor.temPresente && valor.aberta ? (
        <div className={styles.presente}></div>
      ) : null}
    </div>
  );
}
