import Tarefa from "../domain/tarefa";
import { eNuloOuUndefined } from "../utils";

export function newTarefa(tarefa: Tarefa): void {
  const novoId = (localStorage.length + 1).toString();

  tarefa.id = novoId;

  localStorage.setItem(novoId, JSON.stringify(tarefa));
}

export function updateTarefa(tarefa: Tarefa): void {
  if (eNuloOuUndefined(tarefa.id)) return;

  localStorage.setItem(tarefa.id, JSON.stringify(tarefa));
}

export function getTarefa(id: string): Tarefa | undefined {
  const tarefa = localStorage.getItem(id);

  if (eNuloOuUndefined(tarefa)) return;

  return JSON.parse(tarefa);
}

export function getTodasTarefas(): Array<Tarefa> | undefined {
  if (localStorage.length === 0) return;

  let tarefas: Array<Tarefa> = [];

  for (let index = 1; index <= localStorage.length; index++) {
    const tarefa = localStorage.getItem(index.toString());

    if (eNuloOuUndefined(tarefa)) return;

    tarefas.push(JSON.parse(tarefa));
  }

  return tarefas;
}
