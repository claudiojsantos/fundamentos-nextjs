export default function dado(req, res) {
  res.status(200).send({
    params: req.query,
  });
}
