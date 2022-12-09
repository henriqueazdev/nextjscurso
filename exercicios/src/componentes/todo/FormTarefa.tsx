import { useRouter } from "next/router";
import { ChangeEvent } from "react";
import Tarefa from "../../domain/interface/tarefa";
import {
  atualizarTarefa,
  novaTarefa,
  obterTarefa,
  removerTarefa,
} from "../../services/todo-storage";
import { eNuloOuUndefined } from "../../utils";

interface PropsFormTarefa {
  handleDescricao: (ev: ChangeEvent<HTMLInputElement>) => void;
  descricao: string;
  id?: string;
}

export default function FormTarefa(props: PropsFormTarefa) {
  const { handleDescricao, descricao, id } = props;
  const router = useRouter();

  const salvarTarefa = () => {
    if (id) atualizarTarefa({ descricao, status: false, id });
    else novaTarefa({ descricao, status: false });

    router.push("/todo");
  };

  const removerTarefaStorage = () => {
    const confirmado = window.confirm(
      "Tem deseja que deseja excluir a tarefa?"
    );

    if (!confirmado || eNuloOuUndefined(id)) return;

    const tarefa: Tarefa | undefined = obterTarefa(id);

    if (eNuloOuUndefined(tarefa)) return;

    removerTarefa(tarefa);

    router.push("/todo");
  };

  return (
    <>
      <label htmlFor="descricao">Descrição</label>
      <input
        type="text"
        name="descricao"
        id="descricao"
        onChange={handleDescricao}
        value={descricao}
      />
      <button onClick={salvarTarefa}>Salvar</button>
      {eNuloOuUndefined(id) ? null : (
        <button className="cor-perigo" onClick={removerTarefaStorage}>
          Remover
        </button>
      )}
    </>
  );
}
