module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.sequelize.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";')
    .then(async () => queryInterface.createTable('Cidades', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.DataTypes.UUID,
        defaultValue: Sequelize.literal('uuid_generate_v4()'),
      },
      nome: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      uf: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })),
  down: async (queryInterface) => {
    await queryInterface.dropTable('Cidades');
  },
};
