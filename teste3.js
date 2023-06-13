var data = require("./fakeData");

module.exports = function (req, res) {
  const name = req.query.name;

  if (!name) return res.status(400).send("Falta o parametro name");

  data.forEach((user, index) => {
    if (user.name === name) {
      data.splice(index, 1);
      return res.send("success");
    }
  });

  return res.status(404).send("usuário não encontrado!");
};
