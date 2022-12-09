import Tarefa from "../domain/interface/tarefa";
import { eNuloOuUndefined } from "../utils";

export function novaTarefa(tarefa: Tarefa): void {
  let tarefas: Tarefa[] = obterTodasTarefas() ?? [];

  let novoId: string = (obterUltimoId(tarefas) + 1).toString();

  tarefa.id = novoId;

  tarefas.push(tarefa);

  localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

export function atualizarTarefa(tarefa: Tarefa): void {
  if (eNuloOuUndefined(tarefa.id)) return;

  let tarefasStorage: Tarefa[] | undefined = obterTodasTarefas();

  if (eNuloOuUndefined(tarefasStorage)) return;

  if (tarefasStorage.some((t: Tarefa) => t.id === tarefa.id)) {
    tarefasStorage[
      tarefasStorage.findIndex((t: Tarefa) => t.id === tarefa.id)
    ] = tarefa;
  }
  localStorage.setItem("tarefas", JSON.stringify(tarefasStorage));
}

export function removerTarefa(tarefa: Tarefa): void {
  if (eNuloOuUndefined(tarefa.id)) return;

  let tarefasStorage: Tarefa[] | undefined = obterTodasTarefas();

  if (eNuloOuUndefined(tarefasStorage)) return;

  if (tarefasStorage.some((t: Tarefa) => t.id === tarefa.id)) {
    tarefasStorage.splice(
      tarefasStorage.findIndex((t: Tarefa) => t.id === tarefa.id),
      1
    );
  }

  localStorage.setItem("tarefas", JSON.stringify(tarefasStorage));
}

export function obterTarefa(id: string): Tarefa | undefined {
  const tarefasStorage: Tarefa[] | undefined = obterTodasTarefas();

  if (eNuloOuUndefined(tarefasStorage)) return;

  const tarefa: Tarefa | undefined = tarefasStorage.filter(
    (t: Tarefa) => t.id === id
  )[0];

  if (eNuloOuUndefined(tarefa)) return;

  return tarefa;
}

export function obterTodasTarefas(): Tarefa[] | undefined {
  if (localStorage.length === 0) return;

  const tarefasStorage: string | null = localStorage.getItem("tarefas");

  if (eNuloOuUndefined(tarefasStorage)) return;

  return JSON.parse(tarefasStorage);
}

function obterUltimoId(tarefas: Tarefa[]): number {
  return tarefas.length
    ? parseInt(tarefas[tarefas.length - 1].id as string)
    : 0;
}
