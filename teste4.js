var data = require("./fakeData");

module.exports = function (req, res) {
  const id = req.query.id;
  const name = req.body.name;
  const job = req.body.job;

  if (!id) return res.status(400).send("Falta o parametro id");
  if (!name) return res.status(400).send("Falta o parametro name");
  if (!job) return res.status(400).send("Falta o parametro job");

  const reg = data.find((user) => user.id == id);
  reg.name = name;
  reg.job = job;
  reg.count = 0;

  return res.send(reg);
};
