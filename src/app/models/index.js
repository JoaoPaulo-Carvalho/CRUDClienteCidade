const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const config = require('../../config/database.js');

const db = {};
const sequelize = new Sequelize(config);

fs
  .readdirSync(__dirname)
  .filter((file) => (file.indexOf('.') !== 0) && (file !== path.basename(__filename)) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Clientes.belongsTo(db.Cidades, { onUpdate: 'CASCADE', onDelete: 'RESTRICT', foreignKey: 'cidadeId' });
db.Cidades.hasMany(db.Clientes, { onUpdate: 'CASCADE', onDelete: 'RESTRICT', foreignKey: 'cidadeId' });

module.exports = db;
