export default function questaos(req, res) {
  if (req.method === "GET") {
    get(req, res);
  } else {
    res.status(405).send();
  }
}

function get(req, res) {
  const id = req.query.id;

  res.status(200).send({
    id,
    enunciado: "Qual sua linguagem de Programação preferida?",
    respostas: ["Java", "JavaScript", "Ruby", "C#", "Lua"],
  });
}
