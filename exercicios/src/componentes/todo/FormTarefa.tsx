import { useRouter } from "next/router";
import { ChangeEvent } from "react";
import { newTarefa } from "../../services/todo-storage";

interface PropsFormTarefa {
  handleDescricao: (ev: ChangeEvent<HTMLInputElement>) => void;
  descricao: string;
}

export default function FormTarefa(props: PropsFormTarefa) {
  const { handleDescricao, descricao } = props;
  const router = useRouter();

  const salvarTarefa = () => {
    newTarefa({ descricao, status: false });

    router.push("/todo");
  };

  return (
    <>
      <label htmlFor="descricao">Descrição</label>
      <input
        type="text"
        name="descricao"
        id="descricao"
        onChange={handleDescricao}
        value={descricao}
      />
      <button onClick={salvarTarefa}>Salvar</button>
    </>
  );
}
