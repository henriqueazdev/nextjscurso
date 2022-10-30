import LayoutPadrao from "../../componentes/shared/LayoutPadrao";
import Inicio from "../../componentes/shared/LayoutPadrao";

export default function Lista() {
  let lista: any[] = [];

  for (let x = 1; x <= 10; x++) {
    lista.push(<span key={x}>{x}</span>);
  }

  return (
    <>
      <LayoutPadrao>{lista}</LayoutPadrao>
    </>
  );
}
