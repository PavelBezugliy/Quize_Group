module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Tasks',
      [
        {
          task: 'Как хорошо ты знаешь сериал СЧАСТЛИВЫ ВМЕСТЕ???',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: 'Насколько хорошо ты знаешь котиков?🐱',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: 'Угадай фильм по эмодзи',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Tasks', null, {});
  },
};
