import Link from "next/link";
import { useRouter } from "next/router";

export default function Params() {
  const router = useRouter();
  const id = router.query.id;
  const nameParam = router.query.name;

  console.log(router.query);

  return (
    <div>
      <h1>
        rotas / {id} / {nameParam}
      </h1>
      <Link href="/rotas/" passHref>
        <button>Voltar</button>
      </Link>
    </div>
  );
}
