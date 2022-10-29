import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";
import Inicio from "../../componentes/shared/Inicio";
import Tarefa from "../../domain/tarefa";
import {
  obterTodasTarefas,
  atualizarTarefa,
} from "../../services/todo-storage";
import { eNuloOuUndefined } from "../../utils";

export default function Todo() {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);
  const router = useRouter();

  useEffect(() => {
    carregarInformacoes();
  }, []);

  const carregarInformacoes = () => {
    const tarefasRegistradas: Tarefa[] | undefined = obterTodasTarefas();

    if (eNuloOuUndefined(tarefasRegistradas)) {
      setTarefas([]);

      return;
    }

    setTarefas(tarefasRegistradas);
  };

  const concluirTarefa = (
    ev: ChangeEvent<HTMLInputElement>,
    tarefa: Tarefa
  ) => {
    tarefa.status = ev.target.checked;

    atualizarTarefa(tarefa);

    carregarInformacoes();
  };

  const redirecionarParaNovaTarefa = () => {
    router.push("/todo/nova-tarefa");
  };

  const redirecionarParaEditarTarefa = (id: string) => {
    router.push(`/todo/${id}`);
  };

  const todasTarefas = tarefas.map((tarefa, i) => (
    <li key={i}>
      <input
        type="checkbox"
        checked={tarefa.status}
        onChange={(ev) => concluirTarefa(ev, tarefa)}
      />
      {tarefa.descricao}
      <button onClick={() => redirecionarParaEditarTarefa(tarefa.id as string)}>
        Editar
      </button>
    </li>
  ));

  return (
    <>
      <div>
        <h1>App exercício - ToDo</h1>
        <div>
          <ul>{todasTarefas}</ul>
        </div>
        <button onClick={redirecionarParaNovaTarefa}>Nova tarefa</button>
        <br />
        <Inicio />
      </div>
    </>
  );
}
