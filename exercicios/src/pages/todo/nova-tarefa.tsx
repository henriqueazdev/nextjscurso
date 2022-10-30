import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import LayoutPadrao from "../../componentes/shared/LayoutPadrao";
import FormTarefa from "../../componentes/todo/FormTarefa";

export default function NovaTarefa() {
  const [descricao, setDescricao] = useState<string>("");
  const router = useRouter();

  const handleDescricao = (ev: ChangeEvent<HTMLInputElement>) => {
    setDescricao(ev.target.value);
  };

  const redirecionarParaTodo = () => {
    router.push("/todo");
  };

  return (
    <LayoutPadrao>
      <div>
        <FormTarefa descricao={descricao} handleDescricao={handleDescricao} />
      </div>
      <div>
        <button onClick={redirecionarParaTodo}>Voltar</button>
      </div>
    </LayoutPadrao>
  );
}
