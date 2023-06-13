const data = require("./fakeData");

const getUser = (req, res, next) => {
  const name = req.query.name;

  if (!name) return res.status(400).send("Falta o parametro name");

  const user = data.find((user) => user.name === name);

  if (user) {
    user.count = (user.count || 0) + 1;
    return res.send(user);
  } else {
    return res.status(404).send("Usuário não encontrado");
  }
};

const getUsers = (req, res, next) => {
  return res.send(data);
};

module.exports = {
  getUser,
  getUsers,
};
