import Link from "next/link";
import { useRouter } from "next/router";

export default function Buscar() {
  const router = useRouter();
  const codigo = router.query.id;

  return (
    <div>
      <h1>rotas / {codigo} / buscar</h1>
      <Link href="/rotas/" passHref>
        <button>Voltar</button>
      </Link>
    </div>
  );
}
