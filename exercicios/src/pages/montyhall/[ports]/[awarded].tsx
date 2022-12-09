import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Porta from "../../../componentes/montyhall/Porta";
import LayoutPadrao from "../../../componentes/shared/LayoutPadrao";
import PortaModel from "../../../domain/classes/PortaModel";
import { atualizarPortas, criarPortas } from "../../../services/monty-hall";
import { eNuloOuUndefined } from "../../../utils";

export default function MontyHall() {
  const [portas, setPortas] = useState<PortaModel[]>([]);

  const router = useRouter();

  const renderizarPortas = function () {
    return portas.map((porta) => (
      <Porta
        valor={porta}
        key={porta.numero}
        onChange={(e) => {
          setPortas(atualizarPortas(portas, e));
        }}
      />
    ));
  };

  useEffect(() => {
    const { ports, awarded } = router.query;

    if (
      !isNaN(parseInt(ports as string)) &&
      !isNaN(parseInt(awarded as string))
    ) {
      const qtdPortas = parseInt(ports as string);
      const premiada = parseInt(awarded as string);

      setPortas(criarPortas(qtdPortas, premiada));
    }
  }, [router.query]);

  return (
    <LayoutPadrao>
      <div className="row wrap centralizado">{renderizarPortas()}</div>
    </LayoutPadrao>
  );
}
