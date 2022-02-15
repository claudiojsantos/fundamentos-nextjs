import Link from "next/link";
import Router from "next/router";

export default function rotas() {
  function navegacaoSimples(url) {
    Router.push(url);
  }

  function navegacaoComParams() {
    Router.push({
      pathname: "rotas/params",
      query: {
        id: "12345",
        name: "Antonio",
      },
    });
  }

  return (
    <div>
      <h1>Rotas Index</h1>
      <div>
        <ul>
          <Link href="rotas/123/buscar" passHref>
            <li>buscar</li>
          </Link>
          <Link href="rotas/1234/Aldinho" passHref>
            <li>ID e Nome</li>
          </Link>
          <Link href="rotas/params?id=12345&name=Antonio" passHref>
            <li>Params</li>
          </Link>
        </ul>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <button onClick={() => Router.push("rotas/123/buscar")}>Buscar</button>
        <button onClick={() => navegacaoSimples("rotas/1234/Aldinho")}>
          ID e Nome
        </button>
        <button onClick={() => navegacaoComParams()}>Params</button>
      </div>
    </div>
  );
}
