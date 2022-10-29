import { ChangeEvent, useState } from "react";
import styles from "../../styles/Contador.module.css";

interface InputProps {
  valor: number;
  toggle: (e: ChangeEvent<HTMLInputElement>) => void;
  label: string;
}

export default function Input(props: InputProps) {
  const { valor, toggle, label } = props;

  return (
    <>
      <label htmlFor="input-contador">{label}</label>
      <input
        id="input-contador"
        className={styles.input}
        onChange={toggle}
        value={valor}
      />
    </>
  );
}
