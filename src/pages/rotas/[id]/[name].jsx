import Link from "next/link";
import { useRouter } from "next/router";

export default function Name() {
  const router = useRouter();
  const codigo = router.query.id;
  const name = router.query.name;

  return (
    <div>
      <h1>
        rotas / {codigo} / {name}
      </h1>
      <Link href="/rotas/" passHref>
        <button>Voltar</button>
      </Link>
    </div>
  );
}
