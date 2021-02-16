module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('Cidades', [{
    id: '9504c15d-1d6f-440e-a350-c00234c14408',
    nome: 'Juiz de Fora',
    uf: 'MG',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '04bc033c-77cc-4a7a-b41a-b04f47cc685e',
    nome: 'São Paulo',
    uf: 'SP',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  ]),

  down: async (queryInterface) => queryInterface.bulkDelete('Cidades', null, {}),
};
