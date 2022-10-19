import { ChangeEvent, useState } from "react";
import Botao from "../../src/componentes/contador/Botao";
import Input from "../../src/componentes/contador/Input";

export default function DesafioContador() {
  const [valorInput, setValorInput] = useState<number>(0);

  const toggleInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (!Number.isNaN(e.target.value)) setValorInput(parseInt(e.target.value));

    if (
      e.target.value === null ||
      e.target.value === undefined ||
      e.target.value === ""
    )
      setValorInput(0);
  };

  const somar = () => {
    setValorInput(valorInput + 1);
  };

  const subtrair = () => {
    setValorInput(valorInput - 1);
  };

  return (
    <>
      <Input valor={valorInput} toggle={toggleInput} label="Contador" />
      <Botao acao={somar}>+</Botao>
      <Botao acao={subtrair}>-</Botao>
    </>
  );
}
