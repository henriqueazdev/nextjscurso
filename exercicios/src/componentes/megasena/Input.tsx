import { ChangeEvent, PropsWithChildren, useState } from "react";

interface InputMegasenaProps extends PropsWithChildren {
  valor: number;
  toggleValor: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function Input(props: InputMegasenaProps) {
  const { children, valor, toggleValor } = props;

  return (
    <>
      <label htmlFor="input-numeros">{children}</label>
      <input
        id="input-numeros"
        value={valor}
        onChange={toggleValor}
        type="number"
        min={6}
        max={15}
      />
    </>
  );
}
