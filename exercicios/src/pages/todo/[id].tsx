import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";
import FormTarefa from "../../componentes/todo/FormTarefa";
import { obterTarefa } from "../../services/todo-storage";
import { eNuloOuUndefined } from "../../utils";

export default function Editararefa() {
  const [descricao, setDescricao] = useState<string>("");
  const [id, setId] = useState<string>("");
  const router = useRouter();

  const idQuery: string | string[] | undefined = router.query.id;

  useEffect(() => {
    if (!eNuloOuUndefined(idQuery) && typeof idQuery === "string") {
      setId(idQuery);

      const tarefa = obterTarefa(idQuery);

      setDescricao(tarefa?.descricao as string);
    }
  }, []);

  const handleDescricao = (ev: ChangeEvent<HTMLInputElement>) => {
    setDescricao(ev.target.value);
  };

  const redirecionarParaInicio = () => {
    router.push("/todo");
  };

  return (
    <>
      <div>
        <FormTarefa
          descricao={descricao}
          handleDescricao={handleDescricao}
          id={id}
        />
      </div>
      <div>
        <button onClick={redirecionarParaInicio}>Voltar</button>
      </div>
    </>
  );
}
