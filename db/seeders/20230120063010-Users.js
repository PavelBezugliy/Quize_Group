module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'Pasha',
          password: '00000',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Pashok',
          password: '77777',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Dima',
          password: '666',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Tan4ik',
          password: '111',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
