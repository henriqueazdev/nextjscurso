import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import FormTarefa from "../../componentes/todo/FormTarefa";

export default function NovaTarefa() {
  const [descricao, setDescricao] = useState<string>("");
  const router = useRouter();

  const handleDescricao = (ev: ChangeEvent<HTMLInputElement>) => {
    setDescricao(ev.target.value);
  };

  const redirecionarParaInicio = () => {
    router.push("/todo");
  };

  return (
    <>
      <div>
        <FormTarefa descricao={descricao} handleDescricao={handleDescricao} />
      </div>
      <div>
        <button onClick={redirecionarParaInicio}>Voltar</button>
      </div>
    </>
  );
}
