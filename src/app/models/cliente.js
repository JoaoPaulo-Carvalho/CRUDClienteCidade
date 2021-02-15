const Cidade = require('./cidade');

module.exports = (sequelize, DataTypes) => {
  const Cliente = sequelize.define('Cliente', {
    nome: DataTypes.STRING,
    sexo: DataTypes.STRING,
    dataNascimento: DataTypes.DATE,
    idade: DataTypes.INTEGER,
  });

  Cliente.belongsTo(Cidade, { onUpdate: 'CASCADE', onDelete: 'RESTRICT', foreignKey: 'cidadeId' });

  return Cliente;
};
