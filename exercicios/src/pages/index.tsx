import type { NextPage } from "next";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();

  const redirecionar = (rota: string) => {
    router.push(rota);
  };

  return (
    <>
      <div>
        Rotas
        <ul>
          <li>
            api
            <ul>
              <li>
                <a onClick={() => redirecionar("/api/hello")}>hello</a>
              </li>
            </ul>
          </li>

          <li>
            basicos
            <ul>
              <li>
                <a onClick={() => redirecionar("/basicos/desafio_contador")}>
                  desafio_contador
                </a>
              </li>
              <li>
                <a onClick={() => redirecionar("/basicos/desafio_lista")}>
                  desafio_lista
                </a>
              </li>
              <li>
                <a onClick={() => redirecionar("/basicos/desafio_megasena")}>
                  desafio_megasena
                </a>
              </li>
              <li>
                <a onClick={() => redirecionar("/basicos/desafio_xadrez")}>
                  desafio_xadrez
                </a>
              </li>
              <li>
                <a onClick={() => redirecionar("/basicos/primeiro")}>
                  primeiro
                </a>
              </li>
              <li>
                <a onClick={() => redirecionar("/basicos/segundo")}>segundo</a>
              </li>
            </ul>
          </li>

          <li>
            <a onClick={() => redirecionar("/todo")}>todo</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Home;
