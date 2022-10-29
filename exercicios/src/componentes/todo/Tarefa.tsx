interface TarefaProps {
  descricao: string;
  status: boolean;
}

export default function Tarefa(props: TarefaProps) {
  const { descricao, status } = props;

  return (
    <>
      <div>
        <input type="checkbox" checked={status} />
        <h1>{descricao}</h1>
      </div>
    </>
  );
}
