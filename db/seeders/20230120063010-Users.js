module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'Pasha',
          password: '00000',
        },
        {
          login: 'Pashok',
          password: '77777',
        },
        {
          login: 'Dima',
          password: '666',
        },
        {
          login: 'Tan4ik',
          password: '111',
        },
      ],
      {},
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
