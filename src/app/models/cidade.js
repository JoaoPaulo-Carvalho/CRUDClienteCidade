module.exports = (sequelize, DataTypes) => {
  const Cidade = sequelize.define('Cidade', {
    nome: DataTypes.STRING,
    uf: DataTypes.STRING,
  });

  return Cidade;
};
