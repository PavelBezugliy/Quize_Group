module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Tasks',
      [
        {
          title: 'Как хорошо ты знаешь сериал СЧАСТЛИВЫ ВМЕСТЕ???',
        },
        {
          title: 'Насколько хорошо ты знаешь котиков?🐱',
        },
        {
          title: 'Угадайте фильм по картинкам',
        },
      ],
      {},
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Tasks', null, {});
  },
};
