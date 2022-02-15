import { useState } from "react";

export default function Form() {
  const [nome, setNome] = useState();
  const [idade, setIdade] = useState(0);
  const [usuarios, setUsuarios] = useState([]);

  async function salvarUsuario() {
    await fetch("/api/form", {
      method: "POST",
      body: JSON.stringify({
        nome,
        idade,
      }),
    });

    const resp = await fetch("/api/form");
    const usuarios = await resp.json();
    setUsuarios(usuarios);
  }

  function renderizarUsuarios() {
    return usuarios.map((usuario, i) => {
      return (
        <li key={i}>
          {usuario.nome} - {usuario.idade}
        </li>
      );
    });
  }

  return (
    <div>
      <h1>Integrando com API</h1>
      <div>
        <input
          type="text"
          value={nome}
          onChange={(ev) => setNome(ev.target.value)}
        />
      </div>
      <div>
        <input
          type="number"
          value={idade}
          onChange={(ev) => setIdade(+ev.target.value)}
        />
        <div>
          <button onClick={salvarUsuario}>Salvar</button>
        </div>

        <ul>{renderizarUsuarios()}</ul>
      </div>
    </div>
  );
}
