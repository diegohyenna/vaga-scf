module.exports = (req, res, next) => {
  if (req.headers.authorization === undefined) {
    res.status(400).send("Está faltando a autenticação basic");
  }

  var encoded = req.headers.authorization.split(" ")[1];

  var decoded = new Buffer(encoded, "base64").toString();

  var loginName = decoded.split(":")[0];
  var loginPassword = decoded.split(":")[1];

  if (loginName !== "diego" || loginPassword !== "1234")
    return res.status(401).send("Você não tem permissão para essa ação!");

  next();
};
