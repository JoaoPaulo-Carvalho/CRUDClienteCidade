module.exports = (sequelize, DataTypes) => {
  const Cidades = sequelize.define('Cidades', {
    nome: DataTypes.STRING,
    uf: DataTypes.STRING,
  });

  return Cidades;
};
