import Link from "next/link";
import { PropsWithChildren } from "react";

interface PropsLayoutPadrao extends PropsWithChildren {
  centralizado?: boolean;
}

export default function LayoutPadrao(props: PropsLayoutPadrao) {
  const { children, centralizado } = props;

  const classesDeConteudo = ["flex-expand", "conteudo"];

  if (centralizado) classesDeConteudo.push("centralizado");

  return (
    <div className="container">
      <nav className="navbar">
        <h1>App de revisão e capítulo 1</h1>
        <Link href="/" className="text-white">
          <a className="text-white">INÍCIO</a>
        </Link>
      </nav>

      <div className={classesDeConteudo.join(" ")}>{children}</div>

      <div className="footer">
        <span>
          Powered by{" "}
          <a
            href="https://github.com/henriqueazdev"
            target="_blank"
            rel="noreferrer"
          >
            @henriqueazdev
          </a>{" "}
          - {new Date().getFullYear()}
        </span>
      </div>
    </div>
  );
}
