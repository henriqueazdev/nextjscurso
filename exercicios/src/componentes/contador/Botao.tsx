import { PropsWithChildren } from "react";

interface BotaoProps extends PropsWithChildren {
  acao: () => void;
}

export default function Botao(props: BotaoProps) {
  const { children } = props;

  return (
    <>
      <button onClick={props.acao}>{children}</button>
    </>
  );
}
