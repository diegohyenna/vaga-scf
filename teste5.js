const data = require("./fakeData");

module.exports = function (req, res) {
  const name = req.query.name;

  if (!name) return res.status(400).send("Falta o parametro name");

  const user = data.find((user) => user.name === name);

  if (!user) return res.status(404).send("O usuário não existe!");

  return res.send(`Usuário ${name} foi lido ${user?.count || 0} vezes.`);
};
