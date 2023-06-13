var data = require("./fakeData");

module.exports = function (req, res) {
  const name = req.body.name;
  const job = req.body.job;

  if (!name) return res.status(400).send("Falta o parametro name");
  if (!job) return res.status(400).send("Falta o parametro job");

  const id = data.at(-1).id + 1;

  const newUser = {
    id,
    name,
    job,
  };

  data.push(newUser);

  return res.send(newUser);
};
