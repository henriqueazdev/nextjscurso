import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";
import Tarefa from "../../domain/tarefa";
import {
  getTarefa,
  getTodasTarefas,
  updateTarefa,
} from "../../services/todo-storage";
import { eNuloOuUndefined } from "../../utils";

export default function Todo() {
  const [tarefas, setTarefas] = useState<Array<Tarefa>>([]);
  const router = useRouter();

  useEffect(() => {
    carregarInformacoes();
  }, []);

  const carregarInformacoes = () => {
    const tarefasRegistradas: Array<Tarefa> | undefined = getTodasTarefas();

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

    updateTarefa(tarefa);

    carregarInformacoes();
  };

  const todasTarefas = tarefas.map((tarefa, i) => (
    <li key={i}>
      <input
        type="checkbox"
        checked={tarefa.status}
        onChange={(ev) => concluirTarefa(ev, tarefa)}
      />
      {tarefa.descricao}
    </li>
  ));

  const redirecionarParaNovaTarefa = () => {
    router.push("/todo/nova-tarefa");
  };

  return (
    <>
      <div>
        <h1>App exercício - ToDo</h1>
        <div>
          <ul>{todasTarefas}</ul>
        </div>
        <button onClick={redirecionarParaNovaTarefa}>Nova tarefa</button>
      </div>
    </>
  );
}
