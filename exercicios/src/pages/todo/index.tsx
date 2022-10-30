import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";
import LayoutPadrao from "../../componentes/shared/LayoutPadrao";
import Tarefa from "../../domain/tarefa";
import {
  atualizarTarefa,
  obterTarefa,
  obterTodasTarefas,
  removerTarefa,
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

  const removerTarefaStorage = (id?: string) => {
    const confirmado = window.confirm(
      "Tem deseja que deseja excluir a tarefa?"
    );

    if (!confirmado || eNuloOuUndefined(id)) return;

    const tarefa: Tarefa | undefined = obterTarefa(id);

    if (eNuloOuUndefined(tarefa)) return;

    removerTarefa(tarefa);

    router.push("/todo");

    carregarInformacoes();
  };

  const todasTarefas = tarefas.map((tarefa, i) => (
    <li key={i}>
      <input
        type="checkbox"
        checked={tarefa.status}
        onChange={(ev) => concluirTarefa(ev, tarefa)}
      />
      <span className={tarefa.status ? "text-through" : ""}>
        {tarefa.descricao}
      </span>
      {!tarefa.status ? (
        <button
          onClick={() => redirecionarParaEditarTarefa(tarefa.id as string)}
        >
          Editar
        </button>
      ) : null}
      <button
        className="cor-perigo"
        onClick={() => removerTarefaStorage(tarefa.id)}
      >
        Remover
      </button>
    </li>
  ));

  return (
    <LayoutPadrao>
      <div>
        <h1>App exercício - ToDo</h1>
        <div>
          <ul>{todasTarefas}</ul>
        </div>
        <button onClick={redirecionarParaNovaTarefa}>Nova tarefa</button>
        <br />
      </div>
    </LayoutPadrao>
  );
}
