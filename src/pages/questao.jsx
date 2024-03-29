import { useEffect, useState } from "react";

export default function Questao() {
  const [questao, setQuestao] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/questao/2")
      .then((res) => res.json())
      .then(setQuestao);
  }, []);

  function renderizarRespostas() {
    if (questao) {
      return questao.respostas.map((resp, i) => {
        return <li key={i}>{resp}</li>;
      });
    }
  }

  return (
    <div>
      <h1>Questão</h1>
      <div>
        <span>{questao?.enunciado}</span>
        <ul>{renderizarRespostas()}</ul>
      </div>
    </div>
  );
}
