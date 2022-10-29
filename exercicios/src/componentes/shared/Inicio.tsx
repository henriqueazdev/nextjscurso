import { useRouter } from "next/router";

export default function Inicio() {
  const router = useRouter();

  return <button onClick={() => router.push("/")}>Início</button>;
}
