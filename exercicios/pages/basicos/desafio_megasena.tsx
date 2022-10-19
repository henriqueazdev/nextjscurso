import { ChangeEvent, useState } from "react";
import Botao from "../../src/componentes/megasena/Botao";
import Input from "../../src/componentes/megasena/Input";
import Numero from "../../src/componentes/megasena/Numero";
import styles from "../../styles/Megasena.module.css";

function gerarNumerosAleatorios(quantidade: number): number[] {
  let valores: number[] = [];

  while (valores.length < quantidade) {
    let valor: number = Math.floor(Math.random() * 99) + 1;

    if (!valores.includes(valor)) valores.push(valor);
  }

  valores.sort((a, b) => a - b);

  return valores;
}

export default function Megasena() {
  const [qtdASerGerada, setQtdASerGerada] = useState<number>(6);
  const [numeros, setNumeros] = useState<number[]>([]);

  const toggleQtdASerGerada = (e: ChangeEvent<HTMLInputElement>) => {
    const valorASerUtilizado = parseInt(e.target.value);

    if (
      !Number.isNaN(valorASerUtilizado) &&
      valorASerUtilizado > 5 &&
      valorASerUtilizado < 16
    )
      setQtdASerGerada(valorASerUtilizado);

    if (e.target.value === "") setQtdASerGerada(0);
  };

  const gerarNumeros = () => {
    setNumeros(gerarNumerosAleatorios(qtdASerGerada));
  };

  return (
    <div className={styles.megasena}>
      <div className={styles.container}>
        {numeros.length > 0 ? (
          <>
            <h1 style={{ textAlign: "center" }}>Números gerados</h1>
            <div className={styles.containerNumeros}>
              {numeros.map((numero) => (
                <Numero numero={numero} key={numero} />
              ))}
            </div>
          </>
        ) : null}
        <Input valor={qtdASerGerada} toggleValor={toggleQtdASerGerada}>
          Quantidade de números a serem gerados
        </Input>
        <Botao acao={gerarNumeros} />
      </div>
    </div>
  );
}
