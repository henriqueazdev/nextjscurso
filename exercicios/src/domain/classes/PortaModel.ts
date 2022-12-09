export default class PortaModel {
  private _numero: number;
  private _selecionada: boolean;
  private _aberta: boolean;
  private _temPresente: boolean;

  constructor(
    numero: number,
    selecionada = false,
    aberta = false,
    temPresente = false
    ) {
      this._numero = numero;
      this._selecionada = selecionada;
      this._aberta = aberta;
      this._temPresente = temPresente;
  }

  get numero(): number {
    return this._numero;
  }

  get selecionada(): boolean {
    return this._selecionada;
  }

  get aberta(): boolean {
    return this._aberta;
  }

  get temPresente(): boolean {
    return this._temPresente;
  }

  public selecionar(): PortaModel {
    return new PortaModel (this.numero, true, this.aberta, this.temPresente);
  }

  public desmarcarSelecao(): PortaModel {
    return new PortaModel (this.numero, false, this.aberta, this.temPresente);
  }

  public mudarSelecao(): PortaModel {
    return new PortaModel (this.numero, !this.selecionada, this.aberta, this.temPresente);
  }

  public abrir(): PortaModel {
    return new PortaModel (this.numero, this.selecionada, true, this.temPresente);
  }
}