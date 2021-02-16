module.exports = (sequelize, DataTypes) => {
  const Clientes = sequelize.define('Clientes', {
    nome: DataTypes.STRING,
    sexo: DataTypes.STRING,
    dataNascimento: DataTypes.DATE,
    idade: DataTypes.INTEGER,
    cidadeId: DataTypes.UUID,
  });

  return Clientes;
};
