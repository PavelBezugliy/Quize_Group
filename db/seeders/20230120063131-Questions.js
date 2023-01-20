module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Questions',
      [
        {
          question: 'Кто самый тупой в семье Букиных?',
          answer: 'Света',
          task_id: 1,
          point: 1,
        },
        {
          question: 'Как звали первого мужа Лены (соседки Букиных)? Женя или Толик?',
          answer: 'Женя',
          task_id: 1,
          point: 1,
        },
        {
          question: 'В каком году вышел сериал? 2006 или в 2007?',
          answer: '2006',
          task_id: 1,
          point: 1,
        },
        {
          question: 'Кого играет Александр Якин? Гену или Рому?',
          answer: 'Рому',
          task_id: 1,
          point: 1,
        },
        {
          question: 'Кем работает Гена Букин?',
          answer: 'Продавцом обуви',
          task_id: 1,
          point: 1,
        },
        {
          question: 'Какая машина у Гены?',
          answer: 'Пятёрка',
          task_id: 1,
          point: 1,
        },
        {
          question: 'Какого цвета волосы у Даши?',
          answer: 'Рыжие',
          task_id: 1,
          point: 1,
        },
        {
          question: 'Где работает Лена? В кафе или в банке?',
          answer: 'В банке',
          task_id: 1,
          point: 1,
        },
        {
          question: 'Даша любит готовить?',
          answer: 'Нет',
          task_id: 1,
          point: 1,
        },
        {
          question: 'Как зовут нового сына Гены и Даши? Паша или Сема?',
          answer: 'Сема',
          task_id: 1,
          point: 1,
        },
        {
          question: 'Начнём с простого. Сколько у котов лап?',
          answer: '4',
          task_id: 2,
          point: 1,
        },
        {
          question: 'А сколько усиков? (На одной стороне)? 24, 6 или 12?',
          answer: '12',
          task_id: 2,
          point: 1,
        },
        {
          question: 'Почему кот точит когти, когда хозяин приходит домой?',
          answer: 'Радуется',
          task_id: 2,
          point: 1,
        },
        {
          question: 'Какие цвета котики НЕ различают?',
          answer: 'оранжевый, желтый и красный',
          task_id: 2,
          point: 1,
        },
        {
          question: 'Кошки умны, как... ребеное в 1 год, в 3 года или в 7 лет?',
          answer: 'В 3 года',
          task_id: 2,
          point: 1,
        },
        {
          question: '🍔🧑🏿‍🦱🧑🏻: «Двойная порция», «Криминальное чтиво», «Основатель»?',
          answer: 'Криминальное чтиво',
          task_id: 3,
          point: 1,
        },
        {
          question: '👨🏻‍✈️🥄🌳: «Зеленая миля», «Побег из Шоушенка», «Древо жизни»?',
          answer: 'Побег из Шоушенка',
          task_id: 3,
          point: 1,
        },
        {
          question: '👴🏻⏳👶🏻: «Отцы и дети», «Назад в будущее», «Загадочная история Бенджамина Баттона»?',
          answer: 'Загадочная история Бенджамина Баттона',
          task_id: 3,
          point: 1,
        },
        {
          question: '🧢👟🍫: «Форрест Гамп», «Чарли и шоколадная фабрика», «Убойный футбол»?',
          answer: 'Форрест Гамп',
          task_id: 3,
          point: 1,
        },
        {
          question: '🤠🤠🐎: «Скачки», «Горбатая гора», «1+1» ?',
          answer: 'Горбатая гора',
          task_id: 3,
          point: 1,
        },
        {
          question: '💊🕶🖥: «Социальная сеть», «Матрица», «Области тьмы» ?',
          answer: 'Матрица',
          task_id: 3,
          point: 1,
        },
        {
          question: '🦫⏰🦫: «День сурка», «Мы купили зоопарк», «Крутые бобры» ?',
          answer: 'День сурка',
          task_id: 3,
          point: 1,
        },
        {
          question: '🫀🗝🏝 : «Изгой», «Пираты Карибского моря: Сундук мертвеца», «Голубая лагуна» ?',
          answer: 'Пираты Карибского моря: Сундук мертвеца',
          task_id: 3,
          point: 1,
        },
      ],
      {},
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Questions', null, {});
  },
};
