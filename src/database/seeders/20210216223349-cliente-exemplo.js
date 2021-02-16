module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('Clientes', [{
    id: 'aa2f80ee-5795-47ee-8905-3130cc110fb9',
    nome: 'João Paulo de Carvalho Araújo',
    sexo: 'M',
    dataNascimento: '1997-02-03',
    idade: 24,
    cidadeId: '9504c15d-1d6f-440e-a350-c00234c14408',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 'df47416e-2ce9-4b8a-8123-8915569bb0b3',
    nome: 'José da Silva',
    sexo: 'M',
    dataNascimento: '1990-01-01',
    idade: 35,
    cidadeId: '04bc033c-77cc-4a7a-b41a-b04f47cc685e',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  ]),

  down: async (queryInterface) => queryInterface.bulkDelete('Clientes', null, {}),
};
