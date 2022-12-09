import PortaModel from "../domain/classes/PortaModel";

export function criarPortas(
  quantidade: number,
  premiada: number
): PortaModel[] {
  return Array.from(
    { length: quantidade },
    (porta: PortaModel, i) =>
      new PortaModel(i + 1, false, false, premiada === i + 1)
  );
}

export function atualizarPortas(
  portas: PortaModel[],
  portaModificada: PortaModel
): PortaModel[] {
  return portas.map((porta) =>
    porta.numero === portaModificada.numero
      ? portaModificada
      : portaModificada.aberta
      ? porta
      : porta.desmarcarSelecao()
  );
}
