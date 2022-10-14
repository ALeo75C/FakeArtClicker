export const upgrade = [
  {
    title: 'Статья по истории искусств',
    cost: 50,
    modifier: 0.1,
    prop: 'factor',
    text: 'Увеличивает стоимость копий на 10%',
    requirement: ['totalMoneys', 30],
    isOpen: false,
    itPurchased: false
  },
  {
    title: 'Счастливый четвертак',
    cost: 100,
    modifier: 2,
    prop: 'luck',
    text: 'Увеличивает удачу',
    requirement: ['totalPainting', 100],
    isOpen: false,
    itPurchased: false
  },
  {
    title: 'Аренда соседней комнаты',
    cost: 600,
    modifier: 10,
    prop: 'students',
    text: 'Увеличивает вместительность студии',
    requirement: ['totalPainting', 10000],
    isOpen: false,
    itPurchased: false
  },
  {
    title: 'Курсы по продажам',
    cost: 10000,
    modifier: 0.5,
    prop: 'dealer',
    text: 'Увеличивает скорость продажи дилеров',
    requirement: ['totalAutoSales', 10],
    isOpen: false,
    itPurchased: false
  },
  {
    title: 'Автоматический кнут',
    cost: 1000,
    modifier: 2,
    prop: 'offline',
    text:
      'Ваши работники меньше ленятся и пока вас нет скорость продажи и рисования увеличивается вдвое',
    requirement: ['totalSales', 10000],
    isOpen: false,
    itPurchased: false
  },
  {
    title: 'Пустой ангар',
    cost: 1500000,
    modifier: 1,
    prop: 'gallery',
    text: 'Дает возможность открыть еще одну экспозицию',
    requirement: ['totalMoneys', 1000000],
    isOpen: false,
    itPurchased: false
  }
]
