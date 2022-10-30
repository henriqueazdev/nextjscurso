import type { NextPage } from "next";
import Link from "next/link";
import LayoutPadrao from "../componentes/shared/LayoutPadrao";

const Home: NextPage = () => {
  return (
    <LayoutPadrao>
      <div>
        Rotas
        <ul>
          <li>
            api
            <ul>
              <li className="ml-1">
                <Link href="/api/hello" passHref>
                  hello
                </Link>
              </li>
            </ul>
          </li>

          <li>
            basicos
            <ul>
              <li className="ml-1">
                <Link href="/basicos/desafio_contador" passHref>
                  desafio_contador
                </Link>
              </li>
              <li className="ml-1">
                <Link href="/basicos/desafio_lista" passHref>
                  desafio_lista
                </Link>
              </li>
              <li className="ml-1">
                <Link href="/basicos/desafio_megasena" passHref>
                  desafio_megasena
                </Link>
              </li>
              <li className="ml-1">
                <Link href="/basicos/desafio_xadrez" passHref>
                  desafio_xadrez
                </Link>
              </li>
              <li className="ml-1">
                <Link href="/basicos/primeiro" passHref>
                  primeiro
                </Link>
              </li>
              <li className="ml-1">
                <Link href="/basicos/segundo" passHref>
                  segundo
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link href="/todo" passHref>
              todo
            </Link>
          </li>
        </ul>
      </div>
    </LayoutPadrao>
  );
};

export default Home;
