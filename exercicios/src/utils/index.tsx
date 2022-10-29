export function eNuloOuUndefined(valor: any): valor is null | undefined {
  return valor === null || valor === undefined;
}
