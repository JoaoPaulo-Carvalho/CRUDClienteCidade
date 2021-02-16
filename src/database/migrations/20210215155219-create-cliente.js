module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.sequelize.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";')
    .then(async () => queryInterface.createTable('Clientes', {
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
      sexo: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      dataNascimento: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      idade: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      cidadeId: {
        type: Sequelize.UUID,
        references: {
          model: 'Cidades',
          key: 'id',
        },
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
    await queryInterface.dropTable('Clientes');
  },
};

// Cliente: nome completo, sexo, data de nascimento, idade e cidade onde mora.
