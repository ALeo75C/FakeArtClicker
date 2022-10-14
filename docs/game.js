/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 255:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ intFormat)
/* harmony export */ });
/* harmony import */ var _data_unitNames_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(697);

var intFormat = function intFormat(v) {
  var fin = '';

  if (v > 10000) {
    var total_digits = 3;
    var base = Math.log10(v);
    var unit_power = Math.floor(base / 3);
    var cur_unit = _data_unitNames_jsx__WEBPACK_IMPORTED_MODULE_0__/* .unit_names */ .w[unit_power] ? _data_unitNames_jsx__WEBPACK_IMPORTED_MODULE_0__/* .unit_names */ .w[unit_power] : _data_unitNames_jsx__WEBPACK_IMPORTED_MODULE_0__/* .unit_names[11] */ .w[11];
    var rem = v / Math.pow(10, unit_power * 3);
    var dec_digits = Math.min(total_digits, Math.ceil(Math.log10(rem) + 1e-4));
    var prec_digits = total_digits - dec_digits;
    fin = new Intl.NumberFormat('en', {
      style: 'decimal',
      maximumFractionDigits: prec_digits
    }).format(rem) + cur_unit;
  } else if (v < 10000) {
    fin = new Intl.NumberFormat('en', {
      style: 'decimal',
      maximumFractionDigits: 2
    }).format(v);
  } else {
    fin = new Intl.NumberFormat('en', {
      style: 'decimal',
      maximumFractionDigits: 0
    }).format(v);
  }

  return fin;
};

/***/ }),

/***/ 9:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "yw": () => (/* binding */ PAINT),
/* harmony export */   "uX": () => (/* binding */ SELL),
/* harmony export */   "AU": () => (/* binding */ STUDIOUPDATE),
/* harmony export */   "y1": () => (/* binding */ HIRING),
/* harmony export */   "Z$": () => (/* binding */ AUTOSELL),
/* harmony export */   "Re": () => (/* binding */ CHANGEBLOCK),
/* harmony export */   "Ze": () => (/* binding */ GALLERYWORKING),
/* harmony export */   "Dp": () => (/* binding */ CHANGEPAGE),
/* harmony export */   "g2": () => (/* binding */ GETORIGINAL),
/* harmony export */   "Bb": () => (/* binding */ CHANGEPHASE),
/* harmony export */   "Sy": () => (/* binding */ GETPHRASE),
/* harmony export */   "LE": () => (/* binding */ SAVE),
/* harmony export */   "VX": () => (/* binding */ LOAD),
/* harmony export */   "td": () => (/* binding */ RESET),
/* harmony export */   "Si": () => (/* binding */ STUDY),
/* harmony export */   "o2": () => (/* binding */ BUYUPGRADE),
/* harmony export */   "QT": () => (/* binding */ AUTOSALESSWITCH)
/* harmony export */ });
var PAINT = 'PAINT';
var SELL = 'SELL';
var STUDIOUPDATE = 'STUDIOUPDATE';
var HIRING = 'HIRING';
var AUTOSELL = 'AUTOSELL';
var CHANGEBLOCK = 'CHANGEBLOCK';
var GALLERYWORKING = 'GALLERYWORKING';
var CHANGEPAGE = 'CHANGEPAGE';
var GETORIGINAL = 'GETORIGINAL';
var CHANGEPHASE = 'CHANGEPHASE';
var GETPHRASE = 'GETPHRASE';
var SAVE = 'SAVE';
var LOAD = 'LOAD';
var RESET = 'RESET';
var STUDY = 'STUDY';
var BUYUPGRADE = 'BUYUPGRADE';
var AUTOSALESSWITCH = 'AUTOSALESSWITCH';

/***/ }),

/***/ 995:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "a": () => (/* binding */ baseState)
});

;// CONCATENATED MODULE: ./src/javascript/data/pictures.jsx
var pictures = [{
  id: 0,
  title: '???',
  author: '???',
  style: '???',
  year: 2022,
  cost: 1
}, {
  id: 1,
  title: 'Натюрморт с битой птицей, медной посудой...',
  author: 'Жан Батист Шарден',
  style: 'Рококо',
  year: 1728,
  cost: 68750,
  isSoldOut: false,
  position: 'vertical'
}, {
  id: 2,
  title: 'Святой Иероним в своей келье',
  author: 'Дюрер',
  style: 'Возрождение',
  year: 1514,
  cost: 10344,
  isSoldOut: false,
  position: 'horizontal'
}, {
  id: 3,
  title: 'Избиение младенцев',
  author: 'Питер Пауль Рубенс',
  style: 'Барокко',
  year: 1610,
  cost: 76700000,
  isSoldOut: false,
  position: 'square'
}, {
  id: 4,
  title: 'Маха одетая',
  author: 'Гойя',
  style: 'Романтизм',
  year: 1800,
  cost: 82752,
  isSoldOut: false,
  position: 'horizontal'
}, {
  id: 5,
  title: 'Обезьяна-художник',
  author: 'Жан Батист Шарден',
  style: 'Рококо',
  year: 1740,
  cost: 400000,
  isSoldOut: false,
  position: 'vertical'
}];
// EXTERNAL MODULE: ./src/javascript/data/phases.jsx
var phases = __webpack_require__(834);
;// CONCATENATED MODULE: ./src/javascript/data/upgrade.jsx
var upgrade = [{
  title: 'Статья по истории искусств',
  cost: 50,
  modifier: 0.1,
  prop: 'factor',
  text: 'Увеличивает стоимость копий на 10%',
  requirement: ['totalMoneys', 30],
  isOpen: false,
  itPurchased: false
}, {
  title: 'Счастливый четвертак',
  cost: 100,
  modifier: 2,
  prop: 'luck',
  text: 'Увеличивает удачу',
  requirement: ['totalPainting', 100],
  isOpen: false,
  itPurchased: false
}, {
  title: 'Аренда соседней комнаты',
  cost: 600,
  modifier: 10,
  prop: 'students',
  text: 'Увеличивает вместительность студии',
  requirement: ['totalPainting', 10000],
  isOpen: false,
  itPurchased: false
}, {
  title: 'Курсы по продажам',
  cost: 10000,
  modifier: 0.5,
  prop: 'dealer',
  text: 'Увеличивает скорость продажи дилеров',
  requirement: ['totalAutoSales', 10],
  isOpen: false,
  itPurchased: false
}, {
  title: 'Автоматический кнут',
  cost: 1000,
  modifier: 2,
  prop: 'offline',
  text: 'Ваши работники меньше ленятся и пока вас нет скорость продажи и рисования увеличивается вдвое',
  requirement: ['totalSales', 10000],
  isOpen: false,
  itPurchased: false
}, {
  title: 'Пустой ангар',
  cost: 1500000,
  modifier: 1,
  prop: 'gallery',
  text: 'Дает возможность открыть еще одну экспозицию',
  requirement: ['totalMoneys', 1000000],
  isOpen: false,
  itPurchased: false
}];
;// CONCATENATED MODULE: ./src/javascript/data/initialState.jsx



var cash = 0;
var pcituresSallin = cash;
var baseState = {
  saveTime: new Date().getTime(),
  loading: true,
  offlineSpeed: 0.1,
  pageid: 0,
  phase: null,
  phrase: null,
  phraseCounter: 0,
  saveCounter: 0,
  clicksToPainting: 1,
  clicksDone: 0,
  speedOfSale: 5,
  study: {
    // studyCoast: 10,
    studyCount: 0,
    skill: 0.01
  },
  luck: 0.01,
  factor: 0,
  moneyGained: cash,
  paintings: [[], [// {
    //   referense: pictures[1],
    //   status: 1,
    //   quality: 1
    // }
  ], [{
    size: 3,
    money: null,
    pictures: []
  }]],
  autoSale: true,
  galleriesIsActive: false,
  openGalleryId: null,
  originals: pictures,
  units: [{
    level: 0,
    text: 'Зачем рисовать самому, если можно свалить эту работу на подмастерье',
    baseCost: 10,
    cost: 10,
    size: 5,
    pps: 1,
    isActive: false
  }, {
    level: 0,
    text: 'Деньги, денежки. Продавайте дилеры скорей.',
    baseCost: 100,
    cost: 100,
    working: 0,
    speed: 60,
    isActive: false
  }],
  studioUpdate: [{
    level: 0,
    cost: 5,
    baseCost: 5,
    factor: 1
  }, {
    level: 0,
    cost: 100,
    baseCost: 100,
    factor: 10
  }, {
    level: 0,
    cost: 300,
    baseCost: 300,
    factor: 100
  }],
  upgrade: upgrade,
  phrases: [],
  statistics: {
    start: new Date().getTime(),
    totalClick: pcituresSallin,
    totalAutoClick: pcituresSallin,
    totalPainting: pcituresSallin,
    totalOriginals: 0,
    totalSales: pcituresSallin,
    totalAutoSales: pcituresSallin,
    totalMoneys: cash,
    totalGalleryEarned: 0,
    totalStyles: 4,
    totalAuthors: 4,
    totalYears: 4
  }
};

/***/ }),

/***/ 834:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ characters),
/* harmony export */   "k": () => (/* binding */ phases)
/* harmony export */ });
var characters = ['Блик', 'Краска', 'Клякса'];
var phrases = [{
  character: characters[0],
  text: 'Куплю гараж'
}, {
  character: characters[0],
  text: 'Тут могла быть ваша реклама'
}, {
  character: characters[0],
  text: 'Лучше быть последним — первым, чем первым — последним.'
}, {
  character: characters[0],
  text: 'Кем бы ты ни был, кем бы ты не стал, помни, где ты был и кем ты стал.'
}, {
  character: characters[0],
  text: 'Делай как надо, как не надо не делай.'
}, {
  character: characters[0],
  text: 'Работа не волк, работа это ворк, а волк — это ходить.'
}, {
  character: characters[0],
  text: 'За двумя зайцами погонишься — рыбку из пруда не выловишь, делу время, а отмеришь семь раз…'
}, {
  character: characters[0],
  text: 'Каждый думает, что не знает, что, но не каждый не знает, что знает, кто не я …'
}, {
  character: characters[0],
  text: 'Лучше один раз упасть, чем сто раз упасть.'
}];
var phases = {
  start: {
    text: phrases,
    story: [{
      character: characters[1],
      text: 'Кхм-кхм, для начала нажми сюда, чтобы я мог продолжить'
    }, {
      character: characters[1],
      text: 'Отлично! Видишь прямоугольник справа? Это твой холст. Кликни на него, чтобы нарисовать свою первую картину!'
    }, {
      character: characters[1],
      text: 'Это всего-лишь каракуля, она рисуется элементарно и стоит не дорого. Кликни по ней, в разделе «Продукция»'
    }, {
      character: characters[1],
      text: 'Поздравляю! Теперь ты можешь продавать свои каракули!'
    }, {
      character: characters[1],
      text: 'Кстати, заметил блок «Образцы»? Перетащив туда картину, ты будешь ее копировать. Количество мазков для создания копии зависит от качества оригинала'
    }, {
      character: characters[2],
      text: 'Если картины нет, но ты уверен, что на должна быть, переключись на любой пункт меню и вернись обратно'
    }, {
      character: characters[1],
      text: 'Конечно каракули копировать не лучшее решение, но если ты сильно хочешь, я тебе запрещать не буду'
    }, {
      character: characters[1],
      text: 'У тебя мог возникнуть вопрос, как получить что-то кроме каракуль. Нажми на Диего Веласкеса, выглядывающего из списков меню.'
    }, {
      character: characters[1],
      text: 'Тут ты сможешь научиться рисовать одну из картин знаменитых художников. Не бесплатно конечно.'
    }, {
      character: characters[1],
      text: 'На этом пока все, развлекайся!'
    }]
  },
  study: {
    text: [{
      character: characters[0],
      text: 'Недавно в город приехали знаменитые художники с мастер-классами.'
    }]
  },
  students: {
    text: [{
      character: characters[1],
      text: 'Недавно прошли отчисления в художественных школах и академиях'
    }, {
      character: characters[1],
      text: 'Множество молодых художников не знают как себя реализовать'
    }],
    story: [{
      character: characters[1],
      text: 'Поздравляю, теперь ты можешь нанять учеников и спихнуть грязную работу по копированию на них!'
    }, {
      character: characters[1],
      text: 'Но помни, что мастерская не резиновая, влезут не многие'
    }]
  },
  dealers: {
    text: [{
      character: characters[0],
      text: 'Тотальная безработица, может податься в торговлю *Случайный прохожий*'
    }],
    story: [{
      character: characters[2],
      text: 'Дай угадаю. Тебе надоело кликать и продавать картины? Если мои расчеты верны, то ты продал уже более 500 картин'
    }, {
      character: characters[1],
      text: 'Найми дилеров, чтобы они занимались этим за тебя и дело с концом'
    }]
  },
  predG: {
    text: [{
      character: characters[1],
      text: 'На окраине города пустует галерея. Как бы нам ее заполучить....'
    }]
  },
  fin: {
    text: [{
      character: characters[1],
      text: 'Мировые галереи сообщают, что их коллекции больше, чем наполовину состоят из подделок'
    }]
  }
};

/***/ }),

/***/ 697:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ unit_names)
/* harmony export */ });
var unit_names = [' ', 'K', 'M', 'B', 'T', 'Qa', 'Qi', 'Sx', 'Sp', 'Oc', 'No', 'WTF'];

/***/ }),

/***/ 925:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

if (true) {
  module.exports = __webpack_require__(517);
} else {}

/***/ }),

/***/ 517:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ configureStore_prod)
});

// EXTERNAL MODULE: ./node_modules/redux/es/redux.js
var redux = __webpack_require__(890);
// EXTERNAL MODULE: ./src/javascript/constants/ActionTypes.js
var ActionTypes = __webpack_require__(9);
// EXTERNAL MODULE: ./src/javascript/actions/intFormat.jsx
var intFormat = __webpack_require__(255);
// EXTERNAL MODULE: ./src/javascript/data/phases.jsx
var phases = __webpack_require__(834);
// EXTERNAL MODULE: ./src/javascript/data/initialState.jsx + 2 modules
var initialState = __webpack_require__(995);
;// CONCATENATED MODULE: ./src/javascript/reducers/general.js





var studioSize = 100;

var randn_bm = function randn_bm(min, max) {
  var u = 0,
      v = 0;

  while (u === 0) {
    u = Math.random();
  } //Converting [0,1) to (0,1)


  while (v === 0) {
    v = Math.random();
  }

  var num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
  num = num / 10.0 + 0.5; // Translate to 0 -> 1

  if (num > 1 || num < 0) // num = randn_bm(min, max, skew) // resample between 0 and 1 if out of range
    num = randn_bm(min, max); // resample between 0 and 1 if out of range
  else {
    // num = Math.pow(num, skew) // Skew
    num *= max - min; // Stretch to fill range

    num += min; // offset to min
  }
  return num; // return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v)
};

var getPictureCost = function getPictureCost(state, quality, refCost, study) {
  var factor = 0;
  var studioUpdate = state.studioUpdate;
  var cost = 0;

  if (refCost == 1) {
    cost = (1 + factor) * quality;
  } else {
    cost = Math.max(refCost * study * (1 + factor) * quality * 0.1, 1);
  }

  cost *= state.factor + cost;
  return cost;
};

var paint = function paint(ref, skill, luck) {
  var refQ = ref.quality ? ref.quality : 1;
  var qual = 0; //Чем больше скилл, тем меньше качество...(

  if (!ref.referense) {
    qual = Math.min(1, Math.random() * refQ); //(Math.floor(Math.random() * refQ * 1000) / 100) * skill
  } else {
    // const max = 0.3 - 0.25 * luck
    // qual = randn_bm(skill, max)
    // // console.log(qual)
    //
    // qual = refQ * Math.abs(qual)
    qual = Math.min(refQ - 0.001, Math.random() * refQ + skill / 10); // console.log(refQ, skill, qual)
  }

  return {
    status: 11,
    quality: Math.min(1, Math.max(1e-2, qual)),
    referense: ref.referense ? ref.referense : ref
  };
};

var measurement_id = 'G-NNC7JH0EBQ';
var api_secret = 'DZwUEUINTaWU-GkAO7MgSw';
var url = "https://www.google-analytics.com/mp/collect?measurement_id=".concat(measurement_id, "&api_secret=").concat(api_secret);

var track = function track(name, clientId) {
  fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      client_id: clientId,
      events: [{
        name: name,
        params: {}
      }]
    })
  });
};

var general_initialState = {};
function general() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : general_initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ActionTypes/* PAINT */.yw:
      {
        var newState = Object.assign({}, state);
        var paintings = newState.paintings[0];
        var references = newState.paintings[1];
        var ref = action.ref;
        var picture = {};
        var click = 0;

        if (newState.clicksDone == 0) {
          if (!ref) {
            //картина при обычнойм рисовании
            if (references.length == 0) {
              ref = Object.assign({}, newState.originals[0]);
              ref.type = Math.floor(Math.random() * 3 + 1);
              newState.clicksToPainting = 1;
            } else {
              var ref_id = Math.floor(Math.random() * references.length);
              ref = references[ref_id];
              newState.clicksToPainting = Math.floor(ref.quality * 200);
            }
          } else {
            //картина при обучении
            newState.clicksToPainting = Math.floor(500 * newState.study.skill);
          }

          picture = paint(ref, newState.study.skill, newState.luck);
          paintings.unshift(picture);
        }

        if (action.sourse == 0) {
          newState.statistics.totalClick += 1;
          click = 1;
        } else {
          click = newState.units[0].level * newState.units[0].pps;
          newState.statistics.totalAutoClick += click;
        }

        newState.clicksDone += click;

        if (newState.clicksDone >= newState.clicksToPainting && paintings.length < studioSize) {
          newState.statistics.totalPainting += 1;
          newState.clicksDone = 0;
          picture = paintings[0];
          picture.status = 0;
          newState.paintings[0].forEach(function (pic, i) {
            if (pic.status == 11) {
              newState.paintings[0].splice(i, 1);
            }
          });
          track('painting_created', newState.clientId);
        }

        return newState;
      }

    case ActionTypes/* SELL */.uX:
      {
        var _newState = Object.assign({}, state);

        var dealers = _newState.units[1];
        var _paint = _newState.paintings[0][action.id];

        if (_paint.status == 0) {
          _paint.status = 10;
          _paint.timeToSale = _newState.speedOfSale;
          _paint.timeFraction = _paint.timeToSale / _newState.speedOfSale;
        } else {
          var money = getPictureCost(_newState, _paint.quality, _paint.referense.cost, _newState.study.skill);
          _newState.moneyGained += money;

          if (_paint.autoSell) {
            dealers.working -= 1;
            _newState.statistics.totalAutoSales += 1;
            delete _paint.autoSell;
          }

          _newState.paintings[0].splice([action.id], 1);

          _newState.statistics.totalSales += 1;
          _newState.statistics.totalMoneys += money;
        }

        return _newState;
      }

    case ActionTypes/* STUDIOUPDATE */.AU:
      {
        var _newState2 = Object.assign({}, state);

        var studioUpdate = _newState2.studioUpdate[action.id];

        if (_newState2.moneyGained >= studioUpdate.cost) {
          _newState2.moneyGained -= studioUpdate.cost;
          studioUpdate.level += 1;
        } else {
          console.log('error', _newState2.moneyGained, studioUpdate.cost);
        }

        studioUpdate.cost = Math.floor(studioUpdate.baseCost * Math.pow(1.15, studioUpdate.level));
        return _newState2;
      }

    case ActionTypes/* HIRING */.y1:
      {
        var _newState3 = Object.assign({}, state);

        var unit = _newState3.units[action.id];
        var isActive = unit.isActive;
        isActive = action.id == 0 && unit.size <= unit.level ? false : isActive;

        if (isActive) {
          if (_newState3.moneyGained >= unit.cost) {
            _newState3.moneyGained -= unit.cost;
            unit.level += 1;
          } else {
            console.log('error', _newState3.moneyGained, unit.cost);
          }

          var modif = action.id == 0 ? 8.15 : 1.15;
          unit.cost = Math.floor(unit.baseCost * Math.pow(modif, unit.level));
        } else {
          console.log(unit, 'не доступен');
        }

        return _newState3;
      }

    case ActionTypes/* BUYUPGRADE */.o2:
      {
        var _newState4 = Object.assign({}, state);

        var upg = _newState4.upgrade[action.id];
        var obj = {};
        var mod = 0;

        if (upg.cost <= _newState4.moneyGained) {
          _newState4.moneyGained -= upg.cost;
          _newState4.upgrade[action.id].itPurchased = true;

          if (upg.prop == 'luck') {
            _newState4.luck *= upg.modifier;
          } else if (upg.prop == 'students') {
            _newState4.units[0].size += upg.modifier;
          } else if (upg.prop == 'dealer') {
            _newState4.units[1].speed *= upg.modifier;
          } else if (upg.prop == 'offline') {
            _newState4.offlineSpeed *= upg.modifier;
          } else if (upg.prop == 'gallery') {
            _newState4.paintings[2].push({
              size: 3,
              pictures: []
            });
          }
        }

        return _newState4;
      }

    case ActionTypes/* AUTOSELL */.Z$:
      {
        var _newState5 = Object.assign({}, state);

        var _dealers = _newState5.units[1];
        var pictures = _newState5.paintings[0];
        var _picture = {};

        if (_dealers.working < _dealers.level) {
          for (var i = 0; i < pictures.length; i++) {
            var j = pictures.length - i - 1;

            if (pictures[j].status == 0) {
              _dealers.working += 1;
              pictures[j].status = 10;
              pictures[j].timeToSale = _dealers.speed;
              pictures[j].autoSell = true;
              break;
            }
          }
        }

        return _newState5;
      }

    case ActionTypes/* AUTOSALESSWITCH */.QT:
      {
        var _newState6 = Object.assign({}, state);

        _newState6.autoSale = !_newState6.autoSale;

        _newState6.paintings[0].forEach(function (paint, i) {
          if (paint.autoSell) {
            _newState6.units[1].working -= 1;
            paint.status = 0;
            delete paint.autoSell;
            delete paint.timeFraction;
          }
        });

        return _newState6;
      }

    case ActionTypes/* CHANGEBLOCK */.Re:
      {
        var _newState7 = Object.assign({}, state);

        var fullId = action.id.split('/');
        var id = Number(fullId[fullId.length - 1]);
        var oldBlockId = fullId[0] == 'r' ? 1 : fullId[0] == 's' ? 0 : 2;
        var newBlockId = action.newBlock == 'r' ? 1 : action.newBlock == 's' ? 0 : 2;
        var oldBlock = {};
        var newBlock = {};

        if (oldBlockId != 2) {
          oldBlock = _newState7.paintings[oldBlockId];
        } else {
          oldBlock = _newState7.paintings[oldBlockId][action.id.split('/')[1]].pictures;
        }

        if (newBlockId != 2) {
          newBlock = _newState7.paintings[newBlockId];
        } else {
          newBlock = _newState7.paintings[2][action.newBlock.split('/')[1]].pictures;
        }

        newBlock.unshift(oldBlock[id]);
        oldBlock.splice(id, 1);

        if (oldBlockId != 2) {
          _newState7.paintings[oldBlockId] = oldBlock;
        } else {
          _newState7.paintings[oldBlockId][action.id.split('/')[1]].pictures = oldBlock;
        }

        if (newBlockId != 2) {
          _newState7.paintings[newBlockId] = newBlock;
        } else {
          _newState7.paintings[2][action.newBlock.split('/')[1]].pictures = newBlock;
        }

        return _newState7;
      }

    case ActionTypes/* STUDY */.Si:
      {
        var _newState8 = Object.assign({}, state);

        var study = _newState8.study;
        var cost = action.picture.cost * Math.pow(1.5, study.studyCount) / 200;

        if (_newState8.moneyGained >= cost) {
          _newState8.moneyGained -= cost;

          if (!(study.skill >= 1)) {
            study.skill += 0.05 * Math.pow(0.5, study.studyCount);
          }

          study.studyCount += 1;

          _newState8.paintings[0].forEach(function (item, i) {
            if (item.status == 11) {
              _newState8.paintings[0].splice(i, 1);
            }
          });

          _newState8.clicksDone = 0;
          var _ref = {
            status: 11,
            quality: Math.min(1, Math.random() * study.skill),
            referense: action.picture
          };
          _newState8 = general(_newState8, {
            type: ActionTypes/* PAINT */.yw,
            ref: _ref,
            sourse: 0
          });
        }

        return _newState8;
      }

    case ActionTypes/* GETORIGINAL */.g2:
      {
        var _newState9 = Object.assign({}, state);

        var original = _newState9.originals[action.id + 1];

        if (_newState9.moneyGained >= original.cost * 100) {
          var _picture2 = {
            status: 1,
            quality: 1,
            referense: original
          };

          _newState9.paintings[1].unshift(_picture2);

          _newState9.originals[action.id + 1].isSoldOut = true;
          _newState9.moneyGained -= original.cost;
          _newState9.statistics.totalOriginals += 1;
        } else {
          console.log('ERROR');
        }

        return _newState9;
      }

    case ActionTypes/* GALLERYWORKING */.Ze:
      {
        var _newState10 = Object.assign({}, state);

        var galleries = _newState10.paintings[2];
        var totalStyles = _newState10.statistics.totalStyles;
        var totalAuthors = _newState10.statistics.totalAuthors;
        var totalY = _newState10.statistics.totalYears;
        var c = 0;
        galleries.forEach(function (gallery, i) {
          var picturesInGallery = gallery.pictures.length;
          var galleryCost = 0;
          var styles = {};
          var style_entropy = 0;
          var authors = {};
          var author_entropy = 0;
          var years = {};
          var year_entropy = 0;
          gallery.pictures.forEach(function (picture, i) {
            galleryCost += getPictureCost(_newState10, picture.quality, picture.referense.cost, _newState10.study.skill);

            if (styles[picture.referense.style]) {
              styles[picture.referense.style] += 1;
            } else {
              styles[picture.referense.style] = 1;
            }

            if (authors[picture.referense.author]) {
              authors[picture.referense.author] += 1;
            } else {
              authors[picture.referense.author] = 1;
            }

            if (years[picture.referense.year]) {
              years[picture.referense.year] += 1;
            } else {
              years[picture.referense.year] = 1;
            }
          });

          for (var key in styles) {
            var style_i = styles[key] / picturesInGallery;
            style_entropy += style_i * Math.log(style_i);
          }

          for (var _key in authors) {
            var _style_i = authors[_key] / picturesInGallery;

            author_entropy += _style_i * Math.log(_style_i);
          }

          for (var _key2 in years) {
            var _style_i2 = years[_key2] / picturesInGallery;

            year_entropy += _style_i2 * Math.log(_style_i2);
          }

          style_entropy = 1 + style_entropy / 2 / Math.log(totalStyles);
          author_entropy = 1 + author_entropy / 2 / Math.log(totalAuthors);
          year_entropy = 1 + year_entropy / 2 / Math.log(totalY);
          var m = 0.01 * (0.6 * style_entropy + 0.3 * author_entropy + 0.1 * year_entropy) / 360 * galleryCost;
          gallery.money = gallery.money == m ? gallery.money : m;
          c += m;
        });
        _newState10.moneyGained += c;
        _newState10.statistics.totalMoneys += c;
        _newState10.statistics.totalGalleryEarned += c;
        return _newState10;
      }

    case ActionTypes/* CHANGEPAGE */.Dp:
      {
        var _newState11 = Object.assign({}, state);

        if (action.page_id == _newState11.pageid) {
          _newState11.pageid = 0;
        } else {
          _newState11.pageid = action.page_id;
          _newState11.openGalleryId = action.page_id ? action.galleryId : null;
        }

        return _newState11;
      }

    case ActionTypes/* CHANGEPHASE */.Bb:
      {
        var _newState12 = Object.assign({}, state);

        var phase = _newState12.phase;
        var statistics = _newState12.statistics;
        var skill = _newState12.study.skill;

        if (statistics.totalPainting > 20 && skill == 0.01 && phase == 'start') {
          _newState12.phase = Object.keys(phases/* phases */.k)[1];

          phases/* phases */.k[_newState12.phase].text.forEach(function (p, i) {
            _newState12.phrases.push(p);
          });

          if (phases/* phases */.k[_newState12.phase].story) {
            _newState12.story = true;
            _newState12.phrase = phases/* phases */.k[_newState12.phase].story[0];
          }
        } else if (_newState12.paintings[1].length >= 1 && _newState12.units[0].level == 0 && phase == 'study') {
          _newState12.units[0].isActive = true;
          _newState12.phase = Object.keys(phases/* phases */.k)[2];

          phases/* phases */.k[_newState12.phase].text.forEach(function (p, i) {
            _newState12.phrases.push(p);
          });

          if (phases/* phases */.k[_newState12.phase].story) {
            _newState12.story = true;
            _newState12.phrase = phases/* phases */.k[_newState12.phase].story[0];
          }
        } else if (statistics.totalSales > 250 && _newState12.units[1].level == 0 && phase == 'students') {
          _newState12.units[1].isActive = true;
          _newState12.phase = Object.keys(phases/* phases */.k)[3];

          phases/* phases */.k[_newState12.phase].text.forEach(function (p, i) {
            _newState12.phrases.push(p);
          });

          if (phases/* phases */.k[_newState12.phase].story) {
            _newState12.story = true;
            _newState12.phrase = phases/* phases */.k[_newState12.phase].story[0];
          }
        } else if (_newState12.units[1].level > 0 && phase == 'dealers') {
          _newState12.phase = Object.keys(phases/* phases */.k)[4];

          phases/* phases */.k[_newState12.phase].text.forEach(function (p, i) {
            _newState12.phrases.push(p);
          });

          if (phases/* phases */.k[_newState12.phase].story) {
            _newState12.story = true;
            _newState12.phrase = phases/* phases */.k[_newState12.phase].story[0];
          }
        } else if (statistics.totalOriginals > 0 && !_newState12.galleriesIsActive && phase == 'predG') {
          _newState12.galleriesIsActive = true;
          _newState12.phase = Object.keys(phases/* phases */.k)[5];

          phases/* phases */.k[_newState12.phase].text.forEach(function (p, i) {
            _newState12.phrases.push(p);
          });

          if (phases/* phases */.k[_newState12.phase].story) {
            _newState12.story = true;
            _newState12.phrase = phases/* phases */.k[_newState12.phase].story[0];
          }
        }

        return _newState12;
      }

    case ActionTypes/* GETPHRASE */.Sy:
      {
        var _newState13 = Object.assign({}, state);

        var st = phases/* phases */.k[_newState13.phase].story;

        if (_newState13.story && st) {
          if (action.sourse) {
            if (st) {
              for (var _i = 0; st.length > _i; _i++) {
                if (_newState13.phrase == st[_i]) {
                  if (st[_i + 1]) {
                    _newState13.phrase = st[_i + 1];
                  } else {
                    _newState13.story = false;
                    _newState13.phrase = _newState13.phrases[Math.floor(Math.random() * _newState13.phrases.length)];
                    _newState13.phraseCounter = 0;
                  }

                  break;
                }
              }
            }
          }
        } else if (_newState13.phraseCounter < 10 && !action.sourse) {
          _newState13.phraseCounter += 1;
          _newState13.story = false;
        } else {
          _newState13.phrase = _newState13.phrases[Math.floor(Math.random() * _newState13.phrases.length)];
          _newState13.phraseCounter = 0;
          _newState13.story = false;
        }

        return _newState13;
      }

    case ActionTypes/* SAVE */.LE:
      {
        var _newState14 = Object.assign({}, state);

        var f = function f() {
          _newState14.saveCounter = 0;
          _newState14.saveTime = new Date().getTime();
          localStorage.setItem('save', JSON.stringify(_newState14));
          _newState14.phraseCounter = 8;

          if (!_newState14.story) {
            _newState14.phrase = {
              character: phases/* characters.2 */.R[2],
              text: 'Сохранение'
            };
          }
        };

        if (action.isHandle) {
          f();
        } else if (_newState14.saveCounter == 60) {
          f();
        } else {
          _newState14.saveCounter += 1;
          general(_newState14, {
            type: ActionTypes/* GETPHRASE */.Sy
          });
        }

        var statistic = _newState14.statistics;

        _newState14.upgrade.forEach(function (upg, i) {
          if (statistic[upg.requirement[0]] >= upg.requirement[1]) {
            upg.isOpen = true;
          }
        });

        return _newState14;
      }

    case ActionTypes/* LOAD */.VX:
      {
        var _newState15 = Object.assign({}, state);

        if (localStorage.save) {
          _newState15 = JSON.parse(localStorage.save);
          _newState15.clientId = state.clientId;
        }

        var _colors = ['green', 'yellow', 'ping', 'blue'];

        var color = _colors[Math.floor(Math.random() * _colors.length)];

        var game = document.getElementsByClassName('Game')[0];
        game.classList.add(color);
        var offlineSpeed = _newState15.offlineSpeed; // const offlineSpeed = 1

        console.log('...');
        var seconds = Math.floor((new Date().getTime() - _newState15.saveTime) * 0.001 * offlineSpeed);

        if (seconds > 0) {
          var _ref2 = _newState15.originals[0]; // ref.referense = ref
          // ref.quality = 1

          var salesSpped = _newState15.units[1].speed * _newState15.units[1].level;
          var paintinsSales = salesSpped > 0 ? Math.floor(seconds / salesSpped) : 0;
          var secondsForNewSale = seconds - paintinsSales * salesSpped;
          var paintSpeed = _newState15.units[0].level * _newState15.units[0].pps;
          var clicks = paintSpeed > 0 ? Math.floor(seconds / paintSpeed) : 0;
          var picCkick = 0;
          var _references = _newState15.paintings[1];

          _references.map(function (paint) {
            picCkick += Math.floor(1 * paint.quality * 100);
          });

          picCkick = picCkick / _references.length; //средне количество кликов на картину

          var painting = picCkick > 0 ? Math.floor(seconds * paintSpeed / picCkick) : 0;
          var clickNewPicture = clicks > 0 ? clicks - painting * picCkick : 0;
          var _money = 0;

          for (var _i2 = 0; _i2 < paintinsSales && paintinsSales > 0; _i2++) {
            _ref2 = _references.length > 0 ? _references[Math.floor(Math.random() * _references.length)] : _ref2;
            var pic = paint(_ref2, _newState15.study.skill, _newState15.luck);
            _money += Math.floor(getPictureCost(_newState15, pic.quality, pic.referense.cost, _newState15.study.skill));
          }

          if (_newState15.clicksDone + clickNewPicture >= _newState15.clicksToPainting && _newState15.paintings[0].length < studioSize) {
            for (var _i3 = 0; _newState15.paintings[0][_i3].status == 11; _i3++) {
              _newState15.paintings[0][_i3].status = 0;
            }

            _newState15.clicksDone = _newState15.clicksDone + clickNewPicture - _newState15.clicksToPainting;
            _ref2 = _references.length > 0 ? _references[Math.floor(Math.random() * _references.length)] : _ref2;

            _newState15.paintings[0].unshift(paint(_ref2, _newState15.study.skill, _newState15.luck));

            _newState15.statistics.totalPainting += 1;
          } else if (_newState15.clicksDone + clickNewPicture <= _newState15.clicksToPainting) {
            _newState15.clicksDone = _newState15.clicksDone + clickNewPicture;
          }

          var paints = [];

          for (var _i4 = 0; _i4 < painting - paintinsSales && _newState15.paintings[0].length + paints.length < studioSize; _i4++) {
            _ref2 = _references.length > 0 ? _references[Math.floor(Math.random() * _references.length)] : _ref2;
            paints.push(paint(_ref2, _newState15.study.skill, _newState15.luck));
          }

          paints = paints.map(function (p) {
            p.status = 0;

            _newState15.paintings[0].unshift(p);
          }); //галерея

          if (clicks > 0 && !_newState15.story) {
            _newState15.phrase = {
              character: phases/* characters.2 */.R[2],
              text: 'Вы отсутствовали ' + (0,intFormat/* intFormat */.O)(seconds / offlineSpeed) + 'сек. Пока вас не было ученики нарисовали ' + painting + ' картин, а диллеры заработали F$' + (0,intFormat/* intFormat */.O)(_money)
            };
          }

          _newState15.phraseCounter = 5;
          _newState15.moneyGained += _money;
          _newState15.statistics.totalClick += clicks;
          _newState15.statistics.totalMoneys += _money;
          _newState15.statistics.totalSales += paintinsSales;
          _newState15.statistics.totalPainting += paints.length;
        }

        if (!_newState15.phase) {
          _newState15.phase = Object.keys(phases/* phases */.k)[0];
          console.log('...');

          phases/* phases */.k[_newState15.phase].text.forEach(function (p, i) {
            _newState15.phrases.push(p);
          });

          _newState15.phrase = phases/* phases */.k[_newState15.phase].story[0];
          _newState15.story = true;
          _newState15.phraseCounter = 0;
        }

        _newState15.loading = false;
        return _newState15;
      }

    case ActionTypes/* RESET */.td:
      {
        var _newState16 = Object.assign({}, initialState/* baseState */.a);

        localStorage.clear();
        localStorage.setItem('save', JSON.stringify(_newState16));
        return _newState16;
      }

    default:
      return state;
  }
}
;// CONCATENATED MODULE: ./src/javascript/reducers/index.js


var rootReducer = (0,redux/* combineReducers */.UY)({
  general: general
});
/* harmony default export */ const reducers = (rootReducer);
;// CONCATENATED MODULE: ./src/javascript/store/configureStore.prod.js



var configureStore = function configureStore(preloadedState) {
  console.log('We now use prod store');
  var store = (0,redux/* createStore */.MT)(reducers, preloadedState);
  return store;
};

/* harmony default export */ const configureStore_prod = (configureStore);

/***/ }),

/***/ 679:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var reactIs = __webpack_require__(864);

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ 418:
/***/ ((module) => {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ 448:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;
/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
var aa=__webpack_require__(294),m=__webpack_require__(418),r=__webpack_require__(840);function y(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!aa)throw Error(y(227));var ba=new Set,ca={};function da(a,b){ea(a,b);ea(a+"Capture",b)}
function ea(a,b){ca[a]=b;for(a=0;a<b.length;a++)ba.add(b[a])}
var fa=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),ha=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ia=Object.prototype.hasOwnProperty,
ja={},ka={};function la(a){if(ia.call(ka,a))return!0;if(ia.call(ja,a))return!1;if(ha.test(a))return ka[a]=!0;ja[a]=!0;return!1}function ma(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function na(a,b,c,d){if(null===b||"undefined"===typeof b||ma(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function B(a,b,c,d,e,f,g){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f;this.removeEmptyString=g}var D={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){D[a]=new B(a,0,!1,a,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];D[b]=new B(b,1,!1,a[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){D[a]=new B(a,2,!1,a.toLowerCase(),null,!1,!1)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){D[a]=new B(a,2,!1,a,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){D[a]=new B(a,3,!1,a.toLowerCase(),null,!1,!1)});
["checked","multiple","muted","selected"].forEach(function(a){D[a]=new B(a,3,!0,a,null,!1,!1)});["capture","download"].forEach(function(a){D[a]=new B(a,4,!1,a,null,!1,!1)});["cols","rows","size","span"].forEach(function(a){D[a]=new B(a,6,!1,a,null,!1,!1)});["rowSpan","start"].forEach(function(a){D[a]=new B(a,5,!1,a.toLowerCase(),null,!1,!1)});var oa=/[\-:]([a-z])/g;function pa(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(oa,
pa);D[b]=new B(b,1,!1,a,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(oa,pa);D[b]=new B(b,1,!1,a,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(oa,pa);D[b]=new B(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(a){D[a]=new B(a,1,!1,a.toLowerCase(),null,!1,!1)});
D.xlinkHref=new B("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(a){D[a]=new B(a,1,!1,a.toLowerCase(),null,!0,!0)});
function qa(a,b,c,d){var e=D.hasOwnProperty(b)?D[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1]?!1:!0;f||(na(b,c,e,d)&&(c=null),d||null===e?la(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))))}
var ra=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,sa=60103,ta=60106,ua=60107,wa=60108,xa=60114,ya=60109,za=60110,Aa=60112,Ba=60113,Ca=60120,Da=60115,Ea=60116,Fa=60121,Ga=60128,Ha=60129,Ia=60130,Ja=60131;
if("function"===typeof Symbol&&Symbol.for){var E=Symbol.for;sa=E("react.element");ta=E("react.portal");ua=E("react.fragment");wa=E("react.strict_mode");xa=E("react.profiler");ya=E("react.provider");za=E("react.context");Aa=E("react.forward_ref");Ba=E("react.suspense");Ca=E("react.suspense_list");Da=E("react.memo");Ea=E("react.lazy");Fa=E("react.block");E("react.scope");Ga=E("react.opaque.id");Ha=E("react.debug_trace_mode");Ia=E("react.offscreen");Ja=E("react.legacy_hidden")}
var Ka="function"===typeof Symbol&&Symbol.iterator;function La(a){if(null===a||"object"!==typeof a)return null;a=Ka&&a[Ka]||a["@@iterator"];return"function"===typeof a?a:null}var Ma;function Na(a){if(void 0===Ma)try{throw Error();}catch(c){var b=c.stack.trim().match(/\n( *(at )?)/);Ma=b&&b[1]||""}return"\n"+Ma+a}var Oa=!1;
function Pa(a,b){if(!a||Oa)return"";Oa=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(b)if(b=function(){throw Error();},Object.defineProperty(b.prototype,"props",{set:function(){throw Error();}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(b,[])}catch(k){var d=k}Reflect.construct(a,[],b)}else{try{b.call()}catch(k){d=k}a.call(b.prototype)}else{try{throw Error();}catch(k){d=k}a()}}catch(k){if(k&&d&&"string"===typeof k.stack){for(var e=k.stack.split("\n"),
f=d.stack.split("\n"),g=e.length-1,h=f.length-1;1<=g&&0<=h&&e[g]!==f[h];)h--;for(;1<=g&&0<=h;g--,h--)if(e[g]!==f[h]){if(1!==g||1!==h){do if(g--,h--,0>h||e[g]!==f[h])return"\n"+e[g].replace(" at new "," at ");while(1<=g&&0<=h)}break}}}finally{Oa=!1,Error.prepareStackTrace=c}return(a=a?a.displayName||a.name:"")?Na(a):""}
function Qa(a){switch(a.tag){case 5:return Na(a.type);case 16:return Na("Lazy");case 13:return Na("Suspense");case 19:return Na("SuspenseList");case 0:case 2:case 15:return a=Pa(a.type,!1),a;case 11:return a=Pa(a.type.render,!1),a;case 22:return a=Pa(a.type._render,!1),a;case 1:return a=Pa(a.type,!0),a;default:return""}}
function Ra(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case ua:return"Fragment";case ta:return"Portal";case xa:return"Profiler";case wa:return"StrictMode";case Ba:return"Suspense";case Ca:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case za:return(a.displayName||"Context")+".Consumer";case ya:return(a._context.displayName||"Context")+".Provider";case Aa:var b=a.render;b=b.displayName||b.name||"";
return a.displayName||(""!==b?"ForwardRef("+b+")":"ForwardRef");case Da:return Ra(a.type);case Fa:return Ra(a._render);case Ea:b=a._payload;a=a._init;try{return Ra(a(b))}catch(c){}}return null}function Sa(a){switch(typeof a){case "boolean":case "number":case "object":case "string":case "undefined":return a;default:return""}}function Ta(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function Ua(a){var b=Ta(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=
null;delete a[b]}}}}function Va(a){a._valueTracker||(a._valueTracker=Ua(a))}function Wa(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=Ta(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}function Xa(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}
function Ya(a,b){var c=b.checked;return m({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}function Za(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=Sa(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function $a(a,b){b=b.checked;null!=b&&qa(a,"checked",b,!1)}
function ab(a,b){$a(a,b);var c=Sa(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?bb(a,b.type,c):b.hasOwnProperty("defaultValue")&&bb(a,b.type,Sa(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}
function cb(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}
function bb(a,b,c){if("number"!==b||Xa(a.ownerDocument)!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}function db(a){var b="";aa.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}function eb(a,b){a=m({children:void 0},b);if(b=db(b.children))a.children=b;return a}
function fb(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+Sa(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}
function gb(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(y(91));return m({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function hb(a,b){var c=b.value;if(null==c){c=b.children;b=b.defaultValue;if(null!=c){if(null!=b)throw Error(y(92));if(Array.isArray(c)){if(!(1>=c.length))throw Error(y(93));c=c[0]}b=c}null==b&&(b="");c=b}a._wrapperState={initialValue:Sa(c)}}
function ib(a,b){var c=Sa(b.value),d=Sa(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d)}function jb(a){var b=a.textContent;b===a._wrapperState.initialValue&&""!==b&&null!==b&&(a.value=b)}var kb={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
function lb(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function mb(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?lb(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var nb,ob=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if(a.namespaceURI!==kb.svg||"innerHTML"in a)a.innerHTML=b;else{nb=nb||document.createElement("div");nb.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=nb.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});
function pb(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}
var qb={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,
floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rb=["Webkit","ms","Moz","O"];Object.keys(qb).forEach(function(a){rb.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);qb[b]=qb[a]})});function sb(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||qb.hasOwnProperty(a)&&qb[a]?(""+b).trim():b+"px"}
function tb(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=sb(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}var ub=m({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function vb(a,b){if(b){if(ub[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(y(137,a));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(y(60));if(!("object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML))throw Error(y(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(y(62));}}
function wb(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}function xb(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}var yb=null,zb=null,Ab=null;
function Bb(a){if(a=Cb(a)){if("function"!==typeof yb)throw Error(y(280));var b=a.stateNode;b&&(b=Db(b),yb(a.stateNode,a.type,b))}}function Eb(a){zb?Ab?Ab.push(a):Ab=[a]:zb=a}function Fb(){if(zb){var a=zb,b=Ab;Ab=zb=null;Bb(a);if(b)for(a=0;a<b.length;a++)Bb(b[a])}}function Gb(a,b){return a(b)}function Hb(a,b,c,d,e){return a(b,c,d,e)}function Ib(){}var Jb=Gb,Kb=!1,Lb=!1;function Mb(){if(null!==zb||null!==Ab)Ib(),Fb()}
function Nb(a,b,c){if(Lb)return a(b,c);Lb=!0;try{return Jb(a,b,c)}finally{Lb=!1,Mb()}}
function Ob(a,b){var c=a.stateNode;if(null===c)return null;var d=Db(c);if(null===d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":case "onMouseEnter":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;if(c&&"function"!==
typeof c)throw Error(y(231,b,typeof c));return c}var Pb=!1;if(fa)try{var Qb={};Object.defineProperty(Qb,"passive",{get:function(){Pb=!0}});window.addEventListener("test",Qb,Qb);window.removeEventListener("test",Qb,Qb)}catch(a){Pb=!1}function Rb(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l)}catch(n){this.onError(n)}}var Sb=!1,Tb=null,Ub=!1,Vb=null,Wb={onError:function(a){Sb=!0;Tb=a}};function Xb(a,b,c,d,e,f,g,h,k){Sb=!1;Tb=null;Rb.apply(Wb,arguments)}
function Yb(a,b,c,d,e,f,g,h,k){Xb.apply(this,arguments);if(Sb){if(Sb){var l=Tb;Sb=!1;Tb=null}else throw Error(y(198));Ub||(Ub=!0,Vb=l)}}function Zb(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else{a=b;do b=a,0!==(b.flags&1026)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function $b(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated}return null}function ac(a){if(Zb(a)!==a)throw Error(y(188));}
function bc(a){var b=a.alternate;if(!b){b=Zb(a);if(null===b)throw Error(y(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return ac(e),a;if(f===d)return ac(e),b;f=f.sibling}throw Error(y(188));}if(c.return!==d.return)c=e,d=f;else{for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===
c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}if(!g)throw Error(y(189));}}if(c.alternate!==d)throw Error(y(190));}if(3!==c.tag)throw Error(y(188));return c.stateNode.current===c?a:b}function cc(a){a=bc(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}}return null}
function dc(a,b){for(var c=a.alternate;null!==b;){if(b===a||b===c)return!0;b=b.return}return!1}var ec,fc,gc,hc,ic=!1,jc=[],kc=null,lc=null,mc=null,nc=new Map,oc=new Map,pc=[],qc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function rc(a,b,c,d,e){return{blockedOn:a,domEventName:b,eventSystemFlags:c|16,nativeEvent:e,targetContainers:[d]}}function sc(a,b){switch(a){case "focusin":case "focusout":kc=null;break;case "dragenter":case "dragleave":lc=null;break;case "mouseover":case "mouseout":mc=null;break;case "pointerover":case "pointerout":nc.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":oc.delete(b.pointerId)}}
function tc(a,b,c,d,e,f){if(null===a||a.nativeEvent!==f)return a=rc(b,c,d,e,f),null!==b&&(b=Cb(b),null!==b&&fc(b)),a;a.eventSystemFlags|=d;b=a.targetContainers;null!==e&&-1===b.indexOf(e)&&b.push(e);return a}
function uc(a,b,c,d,e){switch(b){case "focusin":return kc=tc(kc,a,b,c,d,e),!0;case "dragenter":return lc=tc(lc,a,b,c,d,e),!0;case "mouseover":return mc=tc(mc,a,b,c,d,e),!0;case "pointerover":var f=e.pointerId;nc.set(f,tc(nc.get(f)||null,a,b,c,d,e));return!0;case "gotpointercapture":return f=e.pointerId,oc.set(f,tc(oc.get(f)||null,a,b,c,d,e)),!0}return!1}
function vc(a){var b=wc(a.target);if(null!==b){var c=Zb(b);if(null!==c)if(b=c.tag,13===b){if(b=$b(c),null!==b){a.blockedOn=b;hc(a.lanePriority,function(){r.unstable_runWithPriority(a.priority,function(){gc(c)})});return}}else if(3===b&&c.stateNode.hydrate){a.blockedOn=3===c.tag?c.stateNode.containerInfo:null;return}}a.blockedOn=null}
function xc(a){if(null!==a.blockedOn)return!1;for(var b=a.targetContainers;0<b.length;){var c=yc(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(null!==c)return b=Cb(c),null!==b&&fc(b),a.blockedOn=c,!1;b.shift()}return!0}function zc(a,b,c){xc(a)&&c.delete(b)}
function Ac(){for(ic=!1;0<jc.length;){var a=jc[0];if(null!==a.blockedOn){a=Cb(a.blockedOn);null!==a&&ec(a);break}for(var b=a.targetContainers;0<b.length;){var c=yc(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(null!==c){a.blockedOn=c;break}b.shift()}null===a.blockedOn&&jc.shift()}null!==kc&&xc(kc)&&(kc=null);null!==lc&&xc(lc)&&(lc=null);null!==mc&&xc(mc)&&(mc=null);nc.forEach(zc);oc.forEach(zc)}
function Bc(a,b){a.blockedOn===b&&(a.blockedOn=null,ic||(ic=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Ac)))}
function Cc(a){function b(b){return Bc(b,a)}if(0<jc.length){Bc(jc[0],a);for(var c=1;c<jc.length;c++){var d=jc[c];d.blockedOn===a&&(d.blockedOn=null)}}null!==kc&&Bc(kc,a);null!==lc&&Bc(lc,a);null!==mc&&Bc(mc,a);nc.forEach(b);oc.forEach(b);for(c=0;c<pc.length;c++)d=pc[c],d.blockedOn===a&&(d.blockedOn=null);for(;0<pc.length&&(c=pc[0],null===c.blockedOn);)vc(c),null===c.blockedOn&&pc.shift()}
function Dc(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var Ec={animationend:Dc("Animation","AnimationEnd"),animationiteration:Dc("Animation","AnimationIteration"),animationstart:Dc("Animation","AnimationStart"),transitionend:Dc("Transition","TransitionEnd")},Fc={},Gc={};
fa&&(Gc=document.createElement("div").style,"AnimationEvent"in window||(delete Ec.animationend.animation,delete Ec.animationiteration.animation,delete Ec.animationstart.animation),"TransitionEvent"in window||delete Ec.transitionend.transition);function Hc(a){if(Fc[a])return Fc[a];if(!Ec[a])return a;var b=Ec[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Gc)return Fc[a]=b[c];return a}
var Ic=Hc("animationend"),Jc=Hc("animationiteration"),Kc=Hc("animationstart"),Lc=Hc("transitionend"),Mc=new Map,Nc=new Map,Oc=["abort","abort",Ic,"animationEnd",Jc,"animationIteration",Kc,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart",
"lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",Lc,"transitionEnd","waiting","waiting"];function Pc(a,b){for(var c=0;c<a.length;c+=2){var d=a[c],e=a[c+1];e="on"+(e[0].toUpperCase()+e.slice(1));Nc.set(d,b);Mc.set(d,e);da(e,[d])}}var Qc=r.unstable_now;Qc();var F=8;
function Rc(a){if(0!==(1&a))return F=15,1;if(0!==(2&a))return F=14,2;if(0!==(4&a))return F=13,4;var b=24&a;if(0!==b)return F=12,b;if(0!==(a&32))return F=11,32;b=192&a;if(0!==b)return F=10,b;if(0!==(a&256))return F=9,256;b=3584&a;if(0!==b)return F=8,b;if(0!==(a&4096))return F=7,4096;b=4186112&a;if(0!==b)return F=6,b;b=62914560&a;if(0!==b)return F=5,b;if(a&67108864)return F=4,67108864;if(0!==(a&134217728))return F=3,134217728;b=805306368&a;if(0!==b)return F=2,b;if(0!==(1073741824&a))return F=1,1073741824;
F=8;return a}function Sc(a){switch(a){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}function Tc(a){switch(a){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(y(358,a));}}
function Uc(a,b){var c=a.pendingLanes;if(0===c)return F=0;var d=0,e=0,f=a.expiredLanes,g=a.suspendedLanes,h=a.pingedLanes;if(0!==f)d=f,e=F=15;else if(f=c&134217727,0!==f){var k=f&~g;0!==k?(d=Rc(k),e=F):(h&=f,0!==h&&(d=Rc(h),e=F))}else f=c&~g,0!==f?(d=Rc(f),e=F):0!==h&&(d=Rc(h),e=F);if(0===d)return 0;d=31-Vc(d);d=c&((0>d?0:1<<d)<<1)-1;if(0!==b&&b!==d&&0===(b&g)){Rc(b);if(e<=F)return b;F=e}b=a.entangledLanes;if(0!==b)for(a=a.entanglements,b&=d;0<b;)c=31-Vc(b),e=1<<c,d|=a[c],b&=~e;return d}
function Wc(a){a=a.pendingLanes&-1073741825;return 0!==a?a:a&1073741824?1073741824:0}function Xc(a,b){switch(a){case 15:return 1;case 14:return 2;case 12:return a=Yc(24&~b),0===a?Xc(10,b):a;case 10:return a=Yc(192&~b),0===a?Xc(8,b):a;case 8:return a=Yc(3584&~b),0===a&&(a=Yc(4186112&~b),0===a&&(a=512)),a;case 2:return b=Yc(805306368&~b),0===b&&(b=268435456),b}throw Error(y(358,a));}function Yc(a){return a&-a}function Zc(a){for(var b=[],c=0;31>c;c++)b.push(a);return b}
function $c(a,b,c){a.pendingLanes|=b;var d=b-1;a.suspendedLanes&=d;a.pingedLanes&=d;a=a.eventTimes;b=31-Vc(b);a[b]=c}var Vc=Math.clz32?Math.clz32:ad,bd=Math.log,cd=Math.LN2;function ad(a){return 0===a?32:31-(bd(a)/cd|0)|0}var dd=r.unstable_UserBlockingPriority,ed=r.unstable_runWithPriority,fd=!0;function gd(a,b,c,d){Kb||Ib();var e=hd,f=Kb;Kb=!0;try{Hb(e,a,b,c,d)}finally{(Kb=f)||Mb()}}function id(a,b,c,d){ed(dd,hd.bind(null,a,b,c,d))}
function hd(a,b,c,d){if(fd){var e;if((e=0===(b&4))&&0<jc.length&&-1<qc.indexOf(a))a=rc(null,a,b,c,d),jc.push(a);else{var f=yc(a,b,c,d);if(null===f)e&&sc(a,d);else{if(e){if(-1<qc.indexOf(a)){a=rc(f,a,b,c,d);jc.push(a);return}if(uc(f,a,b,c,d))return;sc(a,d)}jd(a,b,d,null,c)}}}}
function yc(a,b,c,d){var e=xb(d);e=wc(e);if(null!==e){var f=Zb(e);if(null===f)e=null;else{var g=f.tag;if(13===g){e=$b(f);if(null!==e)return e;e=null}else if(3===g){if(f.stateNode.hydrate)return 3===f.tag?f.stateNode.containerInfo:null;e=null}else f!==e&&(e=null)}}jd(a,b,d,e,c);return null}var kd=null,ld=null,md=null;
function nd(){if(md)return md;var a,b=ld,c=b.length,d,e="value"in kd?kd.value:kd.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return md=e.slice(a,1<d?1-d:void 0)}function od(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}function pd(){return!0}function qd(){return!1}
function rd(a){function b(b,d,e,f,g){this._reactName=b;this._targetInst=e;this.type=d;this.nativeEvent=f;this.target=g;this.currentTarget=null;for(var c in a)a.hasOwnProperty(c)&&(b=a[c],this[c]=b?b(f):f[c]);this.isDefaultPrevented=(null!=f.defaultPrevented?f.defaultPrevented:!1===f.returnValue)?pd:qd;this.isPropagationStopped=qd;return this}m(b.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&
(a.returnValue=!1),this.isDefaultPrevented=pd)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=pd)},persist:function(){},isPersistent:pd});return b}
var sd={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},td=rd(sd),ud=m({},sd,{view:0,detail:0}),vd=rd(ud),wd,xd,yd,Ad=m({},ud,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zd,button:0,buttons:0,relatedTarget:function(a){return void 0===a.relatedTarget?a.fromElement===a.srcElement?a.toElement:a.fromElement:a.relatedTarget},movementX:function(a){if("movementX"in
a)return a.movementX;a!==yd&&(yd&&"mousemove"===a.type?(wd=a.screenX-yd.screenX,xd=a.screenY-yd.screenY):xd=wd=0,yd=a);return wd},movementY:function(a){return"movementY"in a?a.movementY:xd}}),Bd=rd(Ad),Cd=m({},Ad,{dataTransfer:0}),Dd=rd(Cd),Ed=m({},ud,{relatedTarget:0}),Fd=rd(Ed),Gd=m({},sd,{animationName:0,elapsedTime:0,pseudoElement:0}),Hd=rd(Gd),Id=m({},sd,{clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),Jd=rd(Id),Kd=m({},sd,{data:0}),Ld=rd(Kd),Md={Esc:"Escape",
Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",
119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Od={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pd(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Od[a])?!!b[a]:!1}function zd(){return Pd}
var Qd=m({},ud,{key:function(a){if(a.key){var b=Md[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=od(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?Nd[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zd,charCode:function(a){return"keypress"===a.type?od(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===
a.type?od(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),Rd=rd(Qd),Sd=m({},Ad,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=rd(Sd),Ud=m({},ud,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zd}),Vd=rd(Ud),Wd=m({},sd,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xd=rd(Wd),Yd=m({},Ad,{deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},
deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0}),Zd=rd(Yd),$d=[9,13,27,32],ae=fa&&"CompositionEvent"in window,be=null;fa&&"documentMode"in document&&(be=document.documentMode);var ce=fa&&"TextEvent"in window&&!be,de=fa&&(!ae||be&&8<be&&11>=be),ee=String.fromCharCode(32),fe=!1;
function ge(a,b){switch(a){case "keyup":return-1!==$d.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "focusout":return!0;default:return!1}}function he(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var ie=!1;function je(a,b){switch(a){case "compositionend":return he(b);case "keypress":if(32!==b.which)return null;fe=!0;return ee;case "textInput":return a=b.data,a===ee&&fe?null:a;default:return null}}
function ke(a,b){if(ie)return"compositionend"===a||!ae&&ge(a,b)?(a=nd(),md=ld=kd=null,ie=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return de&&"ko"!==b.locale?null:b.data;default:return null}}
var le={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function me(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!le[a.type]:"textarea"===b?!0:!1}function ne(a,b,c,d){Eb(d);b=oe(b,"onChange");0<b.length&&(c=new td("onChange","change",null,c,d),a.push({event:c,listeners:b}))}var pe=null,qe=null;function re(a){se(a,0)}function te(a){var b=ue(a);if(Wa(b))return a}
function ve(a,b){if("change"===a)return b}var we=!1;if(fa){var xe;if(fa){var ye="oninput"in document;if(!ye){var ze=document.createElement("div");ze.setAttribute("oninput","return;");ye="function"===typeof ze.oninput}xe=ye}else xe=!1;we=xe&&(!document.documentMode||9<document.documentMode)}function Ae(){pe&&(pe.detachEvent("onpropertychange",Be),qe=pe=null)}function Be(a){if("value"===a.propertyName&&te(qe)){var b=[];ne(b,qe,a,xb(a));a=re;if(Kb)a(b);else{Kb=!0;try{Gb(a,b)}finally{Kb=!1,Mb()}}}}
function Ce(a,b,c){"focusin"===a?(Ae(),pe=b,qe=c,pe.attachEvent("onpropertychange",Be)):"focusout"===a&&Ae()}function De(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return te(qe)}function Ee(a,b){if("click"===a)return te(b)}function Fe(a,b){if("input"===a||"change"===a)return te(b)}function Ge(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var He="function"===typeof Object.is?Object.is:Ge,Ie=Object.prototype.hasOwnProperty;
function Je(a,b){if(He(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++)if(!Ie.call(b,c[d])||!He(a[c[d]],b[c[d]]))return!1;return!0}function Ke(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
function Le(a,b){var c=Ke(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=Ke(c)}}function Me(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?Me(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}
function Ne(){for(var a=window,b=Xa();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href}catch(d){c=!1}if(c)a=b.contentWindow;else break;b=Xa(a.document)}return b}function Oe(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
var Pe=fa&&"documentMode"in document&&11>=document.documentMode,Qe=null,Re=null,Se=null,Te=!1;
function Ue(a,b,c){var d=c.window===c?c.document:9===c.nodeType?c:c.ownerDocument;Te||null==Qe||Qe!==Xa(d)||(d=Qe,"selectionStart"in d&&Oe(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Se&&Je(Se,d)||(Se=d,d=oe(Re,"onSelect"),0<d.length&&(b=new td("onSelect","select",null,b,c),a.push({event:b,listeners:d}),b.target=Qe)))}
Pc("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),
0);Pc("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);Pc(Oc,2);for(var Ve="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),We=0;We<Ve.length;We++)Nc.set(Ve[We],0);ea("onMouseEnter",["mouseout","mouseover"]);
ea("onMouseLeave",["mouseout","mouseover"]);ea("onPointerEnter",["pointerout","pointerover"]);ea("onPointerLeave",["pointerout","pointerover"]);da("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));da("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));da("onBeforeInput",["compositionend","keypress","textInput","paste"]);da("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));
da("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));da("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xe="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ye=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xe));
function Ze(a,b,c){var d=a.type||"unknown-event";a.currentTarget=c;Yb(d,b,void 0,a);a.currentTarget=null}
function se(a,b){b=0!==(b&4);for(var c=0;c<a.length;c++){var d=a[c],e=d.event;d=d.listeners;a:{var f=void 0;if(b)for(var g=d.length-1;0<=g;g--){var h=d[g],k=h.instance,l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;Ze(e,h,l);f=k}else for(g=0;g<d.length;g++){h=d[g];k=h.instance;l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;Ze(e,h,l);f=k}}}if(Ub)throw a=Vb,Ub=!1,Vb=null,a;}
function G(a,b){var c=$e(b),d=a+"__bubble";c.has(d)||(af(b,a,2,!1),c.add(d))}var bf="_reactListening"+Math.random().toString(36).slice(2);function cf(a){a[bf]||(a[bf]=!0,ba.forEach(function(b){Ye.has(b)||df(b,!1,a,null);df(b,!0,a,null)}))}
function df(a,b,c,d){var e=4<arguments.length&&void 0!==arguments[4]?arguments[4]:0,f=c;"selectionchange"===a&&9!==c.nodeType&&(f=c.ownerDocument);if(null!==d&&!b&&Ye.has(a)){if("scroll"!==a)return;e|=2;f=d}var g=$e(f),h=a+"__"+(b?"capture":"bubble");g.has(h)||(b&&(e|=4),af(f,a,e,b),g.add(h))}
function af(a,b,c,d){var e=Nc.get(b);switch(void 0===e?2:e){case 0:e=gd;break;case 1:e=id;break;default:e=hd}c=e.bind(null,b,c,a);e=void 0;!Pb||"touchstart"!==b&&"touchmove"!==b&&"wheel"!==b||(e=!0);d?void 0!==e?a.addEventListener(b,c,{capture:!0,passive:e}):a.addEventListener(b,c,!0):void 0!==e?a.addEventListener(b,c,{passive:e}):a.addEventListener(b,c,!1)}
function jd(a,b,c,d,e){var f=d;if(0===(b&1)&&0===(b&2)&&null!==d)a:for(;;){if(null===d)return;var g=d.tag;if(3===g||4===g){var h=d.stateNode.containerInfo;if(h===e||8===h.nodeType&&h.parentNode===e)break;if(4===g)for(g=d.return;null!==g;){var k=g.tag;if(3===k||4===k)if(k=g.stateNode.containerInfo,k===e||8===k.nodeType&&k.parentNode===e)return;g=g.return}for(;null!==h;){g=wc(h);if(null===g)return;k=g.tag;if(5===k||6===k){d=f=g;continue a}h=h.parentNode}}d=d.return}Nb(function(){var d=f,e=xb(c),g=[];
a:{var h=Mc.get(a);if(void 0!==h){var k=td,x=a;switch(a){case "keypress":if(0===od(c))break a;case "keydown":case "keyup":k=Rd;break;case "focusin":x="focus";k=Fd;break;case "focusout":x="blur";k=Fd;break;case "beforeblur":case "afterblur":k=Fd;break;case "click":if(2===c.button)break a;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":k=Bd;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":k=
Dd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":k=Vd;break;case Ic:case Jc:case Kc:k=Hd;break;case Lc:k=Xd;break;case "scroll":k=vd;break;case "wheel":k=Zd;break;case "copy":case "cut":case "paste":k=Jd;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":k=Td}var w=0!==(b&4),z=!w&&"scroll"===a,u=w?null!==h?h+"Capture":null:h;w=[];for(var t=d,q;null!==
t;){q=t;var v=q.stateNode;5===q.tag&&null!==v&&(q=v,null!==u&&(v=Ob(t,u),null!=v&&w.push(ef(t,v,q))));if(z)break;t=t.return}0<w.length&&(h=new k(h,x,null,c,e),g.push({event:h,listeners:w}))}}if(0===(b&7)){a:{h="mouseover"===a||"pointerover"===a;k="mouseout"===a||"pointerout"===a;if(h&&0===(b&16)&&(x=c.relatedTarget||c.fromElement)&&(wc(x)||x[ff]))break a;if(k||h){h=e.window===e?e:(h=e.ownerDocument)?h.defaultView||h.parentWindow:window;if(k){if(x=c.relatedTarget||c.toElement,k=d,x=x?wc(x):null,null!==
x&&(z=Zb(x),x!==z||5!==x.tag&&6!==x.tag))x=null}else k=null,x=d;if(k!==x){w=Bd;v="onMouseLeave";u="onMouseEnter";t="mouse";if("pointerout"===a||"pointerover"===a)w=Td,v="onPointerLeave",u="onPointerEnter",t="pointer";z=null==k?h:ue(k);q=null==x?h:ue(x);h=new w(v,t+"leave",k,c,e);h.target=z;h.relatedTarget=q;v=null;wc(e)===d&&(w=new w(u,t+"enter",x,c,e),w.target=q,w.relatedTarget=z,v=w);z=v;if(k&&x)b:{w=k;u=x;t=0;for(q=w;q;q=gf(q))t++;q=0;for(v=u;v;v=gf(v))q++;for(;0<t-q;)w=gf(w),t--;for(;0<q-t;)u=
gf(u),q--;for(;t--;){if(w===u||null!==u&&w===u.alternate)break b;w=gf(w);u=gf(u)}w=null}else w=null;null!==k&&hf(g,h,k,w,!1);null!==x&&null!==z&&hf(g,z,x,w,!0)}}}a:{h=d?ue(d):window;k=h.nodeName&&h.nodeName.toLowerCase();if("select"===k||"input"===k&&"file"===h.type)var J=ve;else if(me(h))if(we)J=Fe;else{J=De;var K=Ce}else(k=h.nodeName)&&"input"===k.toLowerCase()&&("checkbox"===h.type||"radio"===h.type)&&(J=Ee);if(J&&(J=J(a,d))){ne(g,J,c,e);break a}K&&K(a,h,d);"focusout"===a&&(K=h._wrapperState)&&
K.controlled&&"number"===h.type&&bb(h,"number",h.value)}K=d?ue(d):window;switch(a){case "focusin":if(me(K)||"true"===K.contentEditable)Qe=K,Re=d,Se=null;break;case "focusout":Se=Re=Qe=null;break;case "mousedown":Te=!0;break;case "contextmenu":case "mouseup":case "dragend":Te=!1;Ue(g,c,e);break;case "selectionchange":if(Pe)break;case "keydown":case "keyup":Ue(g,c,e)}var Q;if(ae)b:{switch(a){case "compositionstart":var L="onCompositionStart";break b;case "compositionend":L="onCompositionEnd";break b;
case "compositionupdate":L="onCompositionUpdate";break b}L=void 0}else ie?ge(a,c)&&(L="onCompositionEnd"):"keydown"===a&&229===c.keyCode&&(L="onCompositionStart");L&&(de&&"ko"!==c.locale&&(ie||"onCompositionStart"!==L?"onCompositionEnd"===L&&ie&&(Q=nd()):(kd=e,ld="value"in kd?kd.value:kd.textContent,ie=!0)),K=oe(d,L),0<K.length&&(L=new Ld(L,a,null,c,e),g.push({event:L,listeners:K}),Q?L.data=Q:(Q=he(c),null!==Q&&(L.data=Q))));if(Q=ce?je(a,c):ke(a,c))d=oe(d,"onBeforeInput"),0<d.length&&(e=new Ld("onBeforeInput",
"beforeinput",null,c,e),g.push({event:e,listeners:d}),e.data=Q)}se(g,b)})}function ef(a,b,c){return{instance:a,listener:b,currentTarget:c}}function oe(a,b){for(var c=b+"Capture",d=[];null!==a;){var e=a,f=e.stateNode;5===e.tag&&null!==f&&(e=f,f=Ob(a,c),null!=f&&d.unshift(ef(a,f,e)),f=Ob(a,b),null!=f&&d.push(ef(a,f,e)));a=a.return}return d}function gf(a){if(null===a)return null;do a=a.return;while(a&&5!==a.tag);return a?a:null}
function hf(a,b,c,d,e){for(var f=b._reactName,g=[];null!==c&&c!==d;){var h=c,k=h.alternate,l=h.stateNode;if(null!==k&&k===d)break;5===h.tag&&null!==l&&(h=l,e?(k=Ob(c,f),null!=k&&g.unshift(ef(c,k,h))):e||(k=Ob(c,f),null!=k&&g.push(ef(c,k,h))));c=c.return}0!==g.length&&a.push({event:b,listeners:g})}function jf(){}var kf=null,lf=null;function mf(a,b){switch(a){case "button":case "input":case "select":case "textarea":return!!b.autoFocus}return!1}
function nf(a,b){return"textarea"===a||"option"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}var of="function"===typeof setTimeout?setTimeout:void 0,pf="function"===typeof clearTimeout?clearTimeout:void 0;function qf(a){1===a.nodeType?a.textContent="":9===a.nodeType&&(a=a.body,null!=a&&(a.textContent=""))}
function rf(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break}return a}function sf(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if("$"===c||"$!"===c||"$?"===c){if(0===b)return a;b--}else"/$"===c&&b++}a=a.previousSibling}return null}var tf=0;function uf(a){return{$$typeof:Ga,toString:a,valueOf:a}}var vf=Math.random().toString(36).slice(2),wf="__reactFiber$"+vf,xf="__reactProps$"+vf,ff="__reactContainer$"+vf,yf="__reactEvents$"+vf;
function wc(a){var b=a[wf];if(b)return b;for(var c=a.parentNode;c;){if(b=c[ff]||c[wf]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=sf(a);null!==a;){if(c=a[wf])return c;a=sf(a)}return b}a=c;c=a.parentNode}return null}function Cb(a){a=a[wf]||a[ff];return!a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a}function ue(a){if(5===a.tag||6===a.tag)return a.stateNode;throw Error(y(33));}function Db(a){return a[xf]||null}
function $e(a){var b=a[yf];void 0===b&&(b=a[yf]=new Set);return b}var zf=[],Af=-1;function Bf(a){return{current:a}}function H(a){0>Af||(a.current=zf[Af],zf[Af]=null,Af--)}function I(a,b){Af++;zf[Af]=a.current;a.current=b}var Cf={},M=Bf(Cf),N=Bf(!1),Df=Cf;
function Ef(a,b){var c=a.type.contextTypes;if(!c)return Cf;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function Ff(a){a=a.childContextTypes;return null!==a&&void 0!==a}function Gf(){H(N);H(M)}function Hf(a,b,c){if(M.current!==Cf)throw Error(y(168));I(M,b);I(N,c)}
function If(a,b,c){var d=a.stateNode;a=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in a))throw Error(y(108,Ra(b)||"Unknown",e));return m({},c,d)}function Jf(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Cf;Df=M.current;I(M,a);I(N,N.current);return!0}function Kf(a,b,c){var d=a.stateNode;if(!d)throw Error(y(169));c?(a=If(a,b,Df),d.__reactInternalMemoizedMergedChildContext=a,H(N),H(M),I(M,a)):H(N);I(N,c)}
var Lf=null,Mf=null,Nf=r.unstable_runWithPriority,Of=r.unstable_scheduleCallback,Pf=r.unstable_cancelCallback,Qf=r.unstable_shouldYield,Rf=r.unstable_requestPaint,Sf=r.unstable_now,Tf=r.unstable_getCurrentPriorityLevel,Uf=r.unstable_ImmediatePriority,Vf=r.unstable_UserBlockingPriority,Wf=r.unstable_NormalPriority,Xf=r.unstable_LowPriority,Yf=r.unstable_IdlePriority,Zf={},$f=void 0!==Rf?Rf:function(){},ag=null,bg=null,cg=!1,dg=Sf(),O=1E4>dg?Sf:function(){return Sf()-dg};
function eg(){switch(Tf()){case Uf:return 99;case Vf:return 98;case Wf:return 97;case Xf:return 96;case Yf:return 95;default:throw Error(y(332));}}function fg(a){switch(a){case 99:return Uf;case 98:return Vf;case 97:return Wf;case 96:return Xf;case 95:return Yf;default:throw Error(y(332));}}function gg(a,b){a=fg(a);return Nf(a,b)}function hg(a,b,c){a=fg(a);return Of(a,b,c)}function ig(){if(null!==bg){var a=bg;bg=null;Pf(a)}jg()}
function jg(){if(!cg&&null!==ag){cg=!0;var a=0;try{var b=ag;gg(99,function(){for(;a<b.length;a++){var c=b[a];do c=c(!0);while(null!==c)}});ag=null}catch(c){throw null!==ag&&(ag=ag.slice(a+1)),Of(Uf,ig),c;}finally{cg=!1}}}var kg=ra.ReactCurrentBatchConfig;function lg(a,b){if(a&&a.defaultProps){b=m({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c]);return b}return b}var mg=Bf(null),ng=null,og=null,pg=null;function qg(){pg=og=ng=null}
function rg(a){var b=mg.current;H(mg);a.type._context._currentValue=b}function sg(a,b){for(;null!==a;){var c=a.alternate;if((a.childLanes&b)===b)if(null===c||(c.childLanes&b)===b)break;else c.childLanes|=b;else a.childLanes|=b,null!==c&&(c.childLanes|=b);a=a.return}}function tg(a,b){ng=a;pg=og=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(0!==(a.lanes&b)&&(ug=!0),a.firstContext=null)}
function vg(a,b){if(pg!==a&&!1!==b&&0!==b){if("number"!==typeof b||1073741823===b)pg=a,b=1073741823;b={context:a,observedBits:b,next:null};if(null===og){if(null===ng)throw Error(y(308));og=b;ng.dependencies={lanes:0,firstContext:b,responders:null}}else og=og.next=b}return a._currentValue}var wg=!1;function xg(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null}}
function yg(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,effects:a.effects})}function zg(a,b){return{eventTime:a,lane:b,tag:0,payload:null,callback:null,next:null}}function Ag(a,b){a=a.updateQueue;if(null!==a){a=a.shared;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b}}
function Bg(a,b){var c=a.updateQueue,d=a.alternate;if(null!==d&&(d=d.updateQueue,c===d)){var e=null,f=null;c=c.firstBaseUpdate;if(null!==c){do{var g={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};null===f?e=f=g:f=f.next=g;c=c.next}while(null!==c);null===f?e=f=b:f=f.next=b}else e=f=b;c={baseState:d.baseState,firstBaseUpdate:e,lastBaseUpdate:f,shared:d.shared,effects:d.effects};a.updateQueue=c;return}a=c.lastBaseUpdate;null===a?c.firstBaseUpdate=b:a.next=
b;c.lastBaseUpdate=b}
function Cg(a,b,c,d){var e=a.updateQueue;wg=!1;var f=e.firstBaseUpdate,g=e.lastBaseUpdate,h=e.shared.pending;if(null!==h){e.shared.pending=null;var k=h,l=k.next;k.next=null;null===g?f=l:g.next=l;g=k;var n=a.alternate;if(null!==n){n=n.updateQueue;var A=n.lastBaseUpdate;A!==g&&(null===A?n.firstBaseUpdate=l:A.next=l,n.lastBaseUpdate=k)}}if(null!==f){A=e.baseState;g=0;n=l=k=null;do{h=f.lane;var p=f.eventTime;if((d&h)===h){null!==n&&(n=n.next={eventTime:p,lane:0,tag:f.tag,payload:f.payload,callback:f.callback,
next:null});a:{var C=a,x=f;h=b;p=c;switch(x.tag){case 1:C=x.payload;if("function"===typeof C){A=C.call(p,A,h);break a}A=C;break a;case 3:C.flags=C.flags&-4097|64;case 0:C=x.payload;h="function"===typeof C?C.call(p,A,h):C;if(null===h||void 0===h)break a;A=m({},A,h);break a;case 2:wg=!0}}null!==f.callback&&(a.flags|=32,h=e.effects,null===h?e.effects=[f]:h.push(f))}else p={eventTime:p,lane:h,tag:f.tag,payload:f.payload,callback:f.callback,next:null},null===n?(l=n=p,k=A):n=n.next=p,g|=h;f=f.next;if(null===
f)if(h=e.shared.pending,null===h)break;else f=h.next,h.next=null,e.lastBaseUpdate=h,e.shared.pending=null}while(1);null===n&&(k=A);e.baseState=k;e.firstBaseUpdate=l;e.lastBaseUpdate=n;Dg|=g;a.lanes=g;a.memoizedState=A}}function Eg(a,b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=c;if("function"!==typeof e)throw Error(y(191,e));e.call(d)}}}var Fg=(new aa.Component).refs;
function Gg(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:m({},b,c);a.memoizedState=c;0===a.lanes&&(a.updateQueue.baseState=c)}
var Kg={isMounted:function(a){return(a=a._reactInternals)?Zb(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternals;var d=Hg(),e=Ig(a),f=zg(d,e);f.payload=b;void 0!==c&&null!==c&&(f.callback=c);Ag(a,f);Jg(a,e,d)},enqueueReplaceState:function(a,b,c){a=a._reactInternals;var d=Hg(),e=Ig(a),f=zg(d,e);f.tag=1;f.payload=b;void 0!==c&&null!==c&&(f.callback=c);Ag(a,f);Jg(a,e,d)},enqueueForceUpdate:function(a,b){a=a._reactInternals;var c=Hg(),d=Ig(a),e=zg(c,d);e.tag=2;void 0!==b&&null!==b&&(e.callback=
b);Ag(a,e);Jg(a,d,c)}};function Lg(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!Je(c,d)||!Je(e,f):!0}
function Mg(a,b,c){var d=!1,e=Cf;var f=b.contextType;"object"===typeof f&&null!==f?f=vg(f):(e=Ff(b)?Df:M.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Ef(a,e):Cf);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=Kg;a.stateNode=b;b._reactInternals=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
function Ng(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Kg.enqueueReplaceState(b,b.state,null)}
function Og(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=Fg;xg(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=vg(f):(f=Ff(b)?Df:M.current,e.context=Ef(a,f));Cg(a,c,e,d);e.state=a.memoizedState;f=b.getDerivedStateFromProps;"function"===typeof f&&(Gg(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||
(b=e.state,"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Kg.enqueueReplaceState(e,e.state,null),Cg(a,c,e,d),e.state=a.memoizedState);"function"===typeof e.componentDidMount&&(a.flags|=4)}var Pg=Array.isArray;
function Qg(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(y(309));var d=c.stateNode}if(!d)throw Error(y(147,a));var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs;b===Fg&&(b=d.refs={});null===a?delete b[e]:b[e]=a};b._stringRef=e;return b}if("string"!==typeof a)throw Error(y(284));if(!c._owner)throw Error(y(290,a));}return a}
function Rg(a,b){if("textarea"!==a.type)throw Error(y(31,"[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b));}
function Sg(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.flags=8}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b){a=Tg(a,b);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.flags=2,
c):d;b.flags=2;return c}function g(b){a&&null===b.alternate&&(b.flags=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=Ug(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b}function k(a,b,c,d){if(null!==b&&b.elementType===c.type)return d=e(b,c.props),d.ref=Qg(a,b,c),d.return=a,d;d=Vg(c.type,c.key,c.props,null,a.mode,d);d.ref=Qg(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==c.implementation)return b=
Wg(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function n(a,b,c,d,f){if(null===b||7!==b.tag)return b=Xg(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function A(a,b,c){if("string"===typeof b||"number"===typeof b)return b=Ug(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case sa:return c=Vg(b.type,b.key,b.props,null,a.mode,c),c.ref=Qg(a,null,b),c.return=a,c;case ta:return b=Wg(b,a.mode,c),b.return=a,b}if(Pg(b)||La(b))return b=Xg(b,
a.mode,c,null),b.return=a,b;Rg(a,b)}return null}function p(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case sa:return c.key===e?c.type===ua?n(a,b,c.props.children,d,e):k(a,b,c,d):null;case ta:return c.key===e?l(a,b,c,d):null}if(Pg(c)||La(c))return null!==e?null:n(a,b,c,d,null);Rg(a,c)}return null}function C(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=a.get(c)||
null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case sa:return a=a.get(null===d.key?c:d.key)||null,d.type===ua?n(b,a,d.props.children,e,d.key):k(b,a,d,e);case ta:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e)}if(Pg(d)||La(d))return a=a.get(c)||null,n(b,a,d,e,null);Rg(b,d)}return null}function x(e,g,h,k){for(var l=null,t=null,u=g,z=g=0,q=null;null!==u&&z<h.length;z++){u.index>z?(q=u,u=null):q=u.sibling;var n=p(e,u,h[z],k);if(null===n){null===u&&(u=q);break}a&&u&&null===
n.alternate&&b(e,u);g=f(n,g,z);null===t?l=n:t.sibling=n;t=n;u=q}if(z===h.length)return c(e,u),l;if(null===u){for(;z<h.length;z++)u=A(e,h[z],k),null!==u&&(g=f(u,g,z),null===t?l=u:t.sibling=u,t=u);return l}for(u=d(e,u);z<h.length;z++)q=C(u,e,z,h[z],k),null!==q&&(a&&null!==q.alternate&&u.delete(null===q.key?z:q.key),g=f(q,g,z),null===t?l=q:t.sibling=q,t=q);a&&u.forEach(function(a){return b(e,a)});return l}function w(e,g,h,k){var l=La(h);if("function"!==typeof l)throw Error(y(150));h=l.call(h);if(null==
h)throw Error(y(151));for(var t=l=null,u=g,z=g=0,q=null,n=h.next();null!==u&&!n.done;z++,n=h.next()){u.index>z?(q=u,u=null):q=u.sibling;var w=p(e,u,n.value,k);if(null===w){null===u&&(u=q);break}a&&u&&null===w.alternate&&b(e,u);g=f(w,g,z);null===t?l=w:t.sibling=w;t=w;u=q}if(n.done)return c(e,u),l;if(null===u){for(;!n.done;z++,n=h.next())n=A(e,n.value,k),null!==n&&(g=f(n,g,z),null===t?l=n:t.sibling=n,t=n);return l}for(u=d(e,u);!n.done;z++,n=h.next())n=C(u,e,z,n.value,k),null!==n&&(a&&null!==n.alternate&&
u.delete(null===n.key?z:n.key),g=f(n,g,z),null===t?l=n:t.sibling=n,t=n);a&&u.forEach(function(a){return b(e,a)});return l}return function(a,d,f,h){var k="object"===typeof f&&null!==f&&f.type===ua&&null===f.key;k&&(f=f.props.children);var l="object"===typeof f&&null!==f;if(l)switch(f.$$typeof){case sa:a:{l=f.key;for(k=d;null!==k;){if(k.key===l){switch(k.tag){case 7:if(f.type===ua){c(a,k.sibling);d=e(k,f.props.children);d.return=a;a=d;break a}break;default:if(k.elementType===f.type){c(a,k.sibling);
d=e(k,f.props);d.ref=Qg(a,k,f);d.return=a;a=d;break a}}c(a,k);break}else b(a,k);k=k.sibling}f.type===ua?(d=Xg(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=Vg(f.type,f.key,f.props,null,a.mode,h),h.ref=Qg(a,d,f),h.return=a,a=h)}return g(a);case ta:a:{for(k=f.key;null!==d;){if(d.key===k)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=d.sibling}d=
Wg(f,a.mode,h);d.return=a;a=d}return g(a)}if("string"===typeof f||"number"===typeof f)return f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):(c(a,d),d=Ug(f,a.mode,h),d.return=a,a=d),g(a);if(Pg(f))return x(a,d,f,h);if(La(f))return w(a,d,f,h);l&&Rg(a,f);if("undefined"===typeof f&&!k)switch(a.tag){case 1:case 22:case 0:case 11:case 15:throw Error(y(152,Ra(a.type)||"Component"));}return c(a,d)}}var Yg=Sg(!0),Zg=Sg(!1),$g={},ah=Bf($g),bh=Bf($g),ch=Bf($g);
function dh(a){if(a===$g)throw Error(y(174));return a}function eh(a,b){I(ch,b);I(bh,a);I(ah,$g);a=b.nodeType;switch(a){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:mb(null,"");break;default:a=8===a?b.parentNode:b,b=a.namespaceURI||null,a=a.tagName,b=mb(b,a)}H(ah);I(ah,b)}function fh(){H(ah);H(bh);H(ch)}function gh(a){dh(ch.current);var b=dh(ah.current);var c=mb(b,a.type);b!==c&&(I(bh,a),I(ah,c))}function hh(a){bh.current===a&&(H(ah),H(bh))}var P=Bf(0);
function ih(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||"$?"===c.data||"$!"===c.data))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.flags&64))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}return null}var jh=null,kh=null,lh=!1;
function mh(a,b){var c=nh(5,null,null,0);c.elementType="DELETED";c.type="DELETED";c.stateNode=b;c.return=a;c.flags=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c}function oh(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,!0):!1;case 13:return!1;default:return!1}}
function ph(a){if(lh){var b=kh;if(b){var c=b;if(!oh(a,b)){b=rf(c.nextSibling);if(!b||!oh(a,b)){a.flags=a.flags&-1025|2;lh=!1;jh=a;return}mh(jh,c)}jh=a;kh=rf(b.firstChild)}else a.flags=a.flags&-1025|2,lh=!1,jh=a}}function qh(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;jh=a}
function rh(a){if(a!==jh)return!1;if(!lh)return qh(a),lh=!0,!1;var b=a.type;if(5!==a.tag||"head"!==b&&"body"!==b&&!nf(b,a.memoizedProps))for(b=kh;b;)mh(a,b),b=rf(b.nextSibling);qh(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(y(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if("/$"===c){if(0===b){kh=rf(a.nextSibling);break a}b--}else"$"!==c&&"$!"!==c&&"$?"!==c||b++}a=a.nextSibling}kh=null}}else kh=jh?rf(a.stateNode.nextSibling):null;return!0}
function sh(){kh=jh=null;lh=!1}var th=[];function uh(){for(var a=0;a<th.length;a++)th[a]._workInProgressVersionPrimary=null;th.length=0}var vh=ra.ReactCurrentDispatcher,wh=ra.ReactCurrentBatchConfig,xh=0,R=null,S=null,T=null,yh=!1,zh=!1;function Ah(){throw Error(y(321));}function Bh(a,b){if(null===b)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!He(a[c],b[c]))return!1;return!0}
function Ch(a,b,c,d,e,f){xh=f;R=b;b.memoizedState=null;b.updateQueue=null;b.lanes=0;vh.current=null===a||null===a.memoizedState?Dh:Eh;a=c(d,e);if(zh){f=0;do{zh=!1;if(!(25>f))throw Error(y(301));f+=1;T=S=null;b.updateQueue=null;vh.current=Fh;a=c(d,e)}while(zh)}vh.current=Gh;b=null!==S&&null!==S.next;xh=0;T=S=R=null;yh=!1;if(b)throw Error(y(300));return a}function Hh(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===T?R.memoizedState=T=a:T=T.next=a;return T}
function Ih(){if(null===S){var a=R.alternate;a=null!==a?a.memoizedState:null}else a=S.next;var b=null===T?R.memoizedState:T.next;if(null!==b)T=b,S=a;else{if(null===a)throw Error(y(310));S=a;a={memoizedState:S.memoizedState,baseState:S.baseState,baseQueue:S.baseQueue,queue:S.queue,next:null};null===T?R.memoizedState=T=a:T=T.next=a}return T}function Jh(a,b){return"function"===typeof b?b(a):b}
function Kh(a){var b=Ih(),c=b.queue;if(null===c)throw Error(y(311));c.lastRenderedReducer=a;var d=S,e=d.baseQueue,f=c.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g}d.baseQueue=e=f;c.pending=null}if(null!==e){e=e.next;d=d.baseState;var h=g=f=null,k=e;do{var l=k.lane;if((xh&l)===l)null!==h&&(h=h.next={lane:0,action:k.action,eagerReducer:k.eagerReducer,eagerState:k.eagerState,next:null}),d=k.eagerReducer===a?k.eagerState:a(d,k.action);else{var n={lane:l,action:k.action,eagerReducer:k.eagerReducer,
eagerState:k.eagerState,next:null};null===h?(g=h=n,f=d):h=h.next=n;R.lanes|=l;Dg|=l}k=k.next}while(null!==k&&k!==e);null===h?f=d:h.next=g;He(d,b.memoizedState)||(ug=!0);b.memoizedState=d;b.baseState=f;b.baseQueue=h;c.lastRenderedState=d}return[b.memoizedState,c.dispatch]}
function Lh(a){var b=Ih(),c=b.queue;if(null===c)throw Error(y(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);He(f,b.memoizedState)||(ug=!0);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f}return[f,d]}
function Mh(a,b,c){var d=b._getVersion;d=d(b._source);var e=b._workInProgressVersionPrimary;if(null!==e)a=e===d;else if(a=a.mutableReadLanes,a=(xh&a)===a)b._workInProgressVersionPrimary=d,th.push(b);if(a)return c(b._source);th.push(b);throw Error(y(350));}
function Nh(a,b,c,d){var e=U;if(null===e)throw Error(y(349));var f=b._getVersion,g=f(b._source),h=vh.current,k=h.useState(function(){return Mh(e,b,c)}),l=k[1],n=k[0];k=T;var A=a.memoizedState,p=A.refs,C=p.getSnapshot,x=A.source;A=A.subscribe;var w=R;a.memoizedState={refs:p,source:b,subscribe:d};h.useEffect(function(){p.getSnapshot=c;p.setSnapshot=l;var a=f(b._source);if(!He(g,a)){a=c(b._source);He(n,a)||(l(a),a=Ig(w),e.mutableReadLanes|=a&e.pendingLanes);a=e.mutableReadLanes;e.entangledLanes|=a;for(var d=
e.entanglements,h=a;0<h;){var k=31-Vc(h),v=1<<k;d[k]|=a;h&=~v}}},[c,b,d]);h.useEffect(function(){return d(b._source,function(){var a=p.getSnapshot,c=p.setSnapshot;try{c(a(b._source));var d=Ig(w);e.mutableReadLanes|=d&e.pendingLanes}catch(q){c(function(){throw q;})}})},[b,d]);He(C,c)&&He(x,b)&&He(A,d)||(a={pending:null,dispatch:null,lastRenderedReducer:Jh,lastRenderedState:n},a.dispatch=l=Oh.bind(null,R,a),k.queue=a,k.baseQueue=null,n=Mh(e,b,c),k.memoizedState=k.baseState=n);return n}
function Ph(a,b,c){var d=Ih();return Nh(d,a,b,c)}function Qh(a){var b=Hh();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a=b.queue={pending:null,dispatch:null,lastRenderedReducer:Jh,lastRenderedState:a};a=a.dispatch=Oh.bind(null,R,a);return[b.memoizedState,a]}
function Rh(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};b=R.updateQueue;null===b?(b={lastEffect:null},R.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a}function Sh(a){var b=Hh();a={current:a};return b.memoizedState=a}function Th(){return Ih().memoizedState}function Uh(a,b,c,d){var e=Hh();R.flags|=a;e.memoizedState=Rh(1|b,c,void 0,void 0===d?null:d)}
function Vh(a,b,c,d){var e=Ih();d=void 0===d?null:d;var f=void 0;if(null!==S){var g=S.memoizedState;f=g.destroy;if(null!==d&&Bh(d,g.deps)){Rh(b,c,f,d);return}}R.flags|=a;e.memoizedState=Rh(1|b,c,f,d)}function Wh(a,b){return Uh(516,4,a,b)}function Xh(a,b){return Vh(516,4,a,b)}function Yh(a,b){return Vh(4,2,a,b)}function Zh(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null)};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null}}
function $h(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Vh(4,2,Zh.bind(null,b,a),c)}function ai(){}function bi(a,b){var c=Ih();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Bh(b,d[1]))return d[0];c.memoizedState=[a,b];return a}function ci(a,b){var c=Ih();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Bh(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a}
function di(a,b){var c=eg();gg(98>c?98:c,function(){a(!0)});gg(97<c?97:c,function(){var c=wh.transition;wh.transition=1;try{a(!1),b()}finally{wh.transition=c}})}
function Oh(a,b,c){var d=Hg(),e=Ig(a),f={lane:e,action:c,eagerReducer:null,eagerState:null,next:null},g=b.pending;null===g?f.next=f:(f.next=g.next,g.next=f);b.pending=f;g=a.alternate;if(a===R||null!==g&&g===R)zh=yh=!0;else{if(0===a.lanes&&(null===g||0===g.lanes)&&(g=b.lastRenderedReducer,null!==g))try{var h=b.lastRenderedState,k=g(h,c);f.eagerReducer=g;f.eagerState=k;if(He(k,h))return}catch(l){}finally{}Jg(a,e,d)}}
var Gh={readContext:vg,useCallback:Ah,useContext:Ah,useEffect:Ah,useImperativeHandle:Ah,useLayoutEffect:Ah,useMemo:Ah,useReducer:Ah,useRef:Ah,useState:Ah,useDebugValue:Ah,useDeferredValue:Ah,useTransition:Ah,useMutableSource:Ah,useOpaqueIdentifier:Ah,unstable_isNewReconciler:!1},Dh={readContext:vg,useCallback:function(a,b){Hh().memoizedState=[a,void 0===b?null:b];return a},useContext:vg,useEffect:Wh,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Uh(4,2,Zh.bind(null,
b,a),c)},useLayoutEffect:function(a,b){return Uh(4,2,a,b)},useMemo:function(a,b){var c=Hh();b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=Hh();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a=d.queue={pending:null,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};a=a.dispatch=Oh.bind(null,R,a);return[d.memoizedState,a]},useRef:Sh,useState:Qh,useDebugValue:ai,useDeferredValue:function(a){var b=Qh(a),c=b[0],d=b[1];Wh(function(){var b=wh.transition;
wh.transition=1;try{d(a)}finally{wh.transition=b}},[a]);return c},useTransition:function(){var a=Qh(!1),b=a[0];a=di.bind(null,a[1]);Sh(a);return[a,b]},useMutableSource:function(a,b,c){var d=Hh();d.memoizedState={refs:{getSnapshot:b,setSnapshot:null},source:a,subscribe:c};return Nh(d,a,b,c)},useOpaqueIdentifier:function(){if(lh){var a=!1,b=uf(function(){a||(a=!0,c("r:"+(tf++).toString(36)));throw Error(y(355));}),c=Qh(b)[1];0===(R.mode&2)&&(R.flags|=516,Rh(5,function(){c("r:"+(tf++).toString(36))},
void 0,null));return b}b="r:"+(tf++).toString(36);Qh(b);return b},unstable_isNewReconciler:!1},Eh={readContext:vg,useCallback:bi,useContext:vg,useEffect:Xh,useImperativeHandle:$h,useLayoutEffect:Yh,useMemo:ci,useReducer:Kh,useRef:Th,useState:function(){return Kh(Jh)},useDebugValue:ai,useDeferredValue:function(a){var b=Kh(Jh),c=b[0],d=b[1];Xh(function(){var b=wh.transition;wh.transition=1;try{d(a)}finally{wh.transition=b}},[a]);return c},useTransition:function(){var a=Kh(Jh)[0];return[Th().current,
a]},useMutableSource:Ph,useOpaqueIdentifier:function(){return Kh(Jh)[0]},unstable_isNewReconciler:!1},Fh={readContext:vg,useCallback:bi,useContext:vg,useEffect:Xh,useImperativeHandle:$h,useLayoutEffect:Yh,useMemo:ci,useReducer:Lh,useRef:Th,useState:function(){return Lh(Jh)},useDebugValue:ai,useDeferredValue:function(a){var b=Lh(Jh),c=b[0],d=b[1];Xh(function(){var b=wh.transition;wh.transition=1;try{d(a)}finally{wh.transition=b}},[a]);return c},useTransition:function(){var a=Lh(Jh)[0];return[Th().current,
a]},useMutableSource:Ph,useOpaqueIdentifier:function(){return Lh(Jh)[0]},unstable_isNewReconciler:!1},ei=ra.ReactCurrentOwner,ug=!1;function fi(a,b,c,d){b.child=null===a?Zg(b,null,c,d):Yg(b,a.child,c,d)}function gi(a,b,c,d,e){c=c.render;var f=b.ref;tg(b,e);d=Ch(a,b,c,d,f,e);if(null!==a&&!ug)return b.updateQueue=a.updateQueue,b.flags&=-517,a.lanes&=~e,hi(a,b,e);b.flags|=1;fi(a,b,d,e);return b.child}
function ii(a,b,c,d,e,f){if(null===a){var g=c.type;if("function"===typeof g&&!ji(g)&&void 0===g.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=g,ki(a,b,g,d,e,f);a=Vg(c.type,null,d,b,b.mode,f);a.ref=b.ref;a.return=b;return b.child=a}g=a.child;if(0===(e&f)&&(e=g.memoizedProps,c=c.compare,c=null!==c?c:Je,c(e,d)&&a.ref===b.ref))return hi(a,b,f);b.flags|=1;a=Tg(g,d);a.ref=b.ref;a.return=b;return b.child=a}
function ki(a,b,c,d,e,f){if(null!==a&&Je(a.memoizedProps,d)&&a.ref===b.ref)if(ug=!1,0!==(f&e))0!==(a.flags&16384)&&(ug=!0);else return b.lanes=a.lanes,hi(a,b,f);return li(a,b,c,d,f)}
function mi(a,b,c){var d=b.pendingProps,e=d.children,f=null!==a?a.memoizedState:null;if("hidden"===d.mode||"unstable-defer-without-hiding"===d.mode)if(0===(b.mode&4))b.memoizedState={baseLanes:0},ni(b,c);else if(0!==(c&1073741824))b.memoizedState={baseLanes:0},ni(b,null!==f?f.baseLanes:c);else return a=null!==f?f.baseLanes|c:c,b.lanes=b.childLanes=1073741824,b.memoizedState={baseLanes:a},ni(b,a),null;else null!==f?(d=f.baseLanes|c,b.memoizedState=null):d=c,ni(b,d);fi(a,b,e,c);return b.child}
function oi(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.flags|=128}function li(a,b,c,d,e){var f=Ff(c)?Df:M.current;f=Ef(b,f);tg(b,e);c=Ch(a,b,c,d,f,e);if(null!==a&&!ug)return b.updateQueue=a.updateQueue,b.flags&=-517,a.lanes&=~e,hi(a,b,e);b.flags|=1;fi(a,b,c,e);return b.child}
function pi(a,b,c,d,e){if(Ff(c)){var f=!0;Jf(b)}else f=!1;tg(b,e);if(null===b.stateNode)null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2),Mg(b,c,d),Og(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=vg(l):(l=Ff(c)?Df:M.current,l=Ef(b,l));var n=c.getDerivedStateFromProps,A="function"===typeof n||"function"===typeof g.getSnapshotBeforeUpdate;A||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&
"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&Ng(b,g,d,l);wg=!1;var p=b.memoizedState;g.state=p;Cg(b,d,g,e);k=b.memoizedState;h!==d||p!==k||N.current||wg?("function"===typeof n&&(Gg(b,c,n,d),k=b.memoizedState),(h=wg||Lg(b,c,h,d,p,k,l))?(A||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===
typeof g.componentDidMount&&(b.flags|=4)):("function"===typeof g.componentDidMount&&(b.flags|=4),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.flags|=4),d=!1)}else{g=b.stateNode;yg(a,b);h=b.memoizedProps;l=b.type===b.elementType?h:lg(b.type,h);g.props=l;A=b.pendingProps;p=g.context;k=c.contextType;"object"===typeof k&&null!==k?k=vg(k):(k=Ff(c)?Df:M.current,k=Ef(b,k));var C=c.getDerivedStateFromProps;(n="function"===typeof C||
"function"===typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==A||p!==k)&&Ng(b,g,d,k);wg=!1;p=b.memoizedState;g.state=p;Cg(b,d,g,e);var x=b.memoizedState;h!==A||p!==x||N.current||wg?("function"===typeof C&&(Gg(b,c,C,d),x=b.memoizedState),(l=wg||Lg(b,c,l,d,p,x,k))?(n||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,
x,k),"function"===typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,x,k)),"function"===typeof g.componentDidUpdate&&(b.flags|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.flags|=256)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&p===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&p===a.memoizedState||(b.flags|=256),b.memoizedProps=d,b.memoizedState=x),g.props=d,g.state=x,g.context=k,d=l):("function"!==typeof g.componentDidUpdate||
h===a.memoizedProps&&p===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&p===a.memoizedState||(b.flags|=256),d=!1)}return qi(a,b,c,d,f,e)}
function qi(a,b,c,d,e,f){oi(a,b);var g=0!==(b.flags&64);if(!d&&!g)return e&&Kf(b,c,!1),hi(a,b,f);d=b.stateNode;ei.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.flags|=1;null!==a&&g?(b.child=Yg(b,a.child,null,f),b.child=Yg(b,null,h,f)):fi(a,b,h,f);b.memoizedState=d.state;e&&Kf(b,c,!0);return b.child}function ri(a){var b=a.stateNode;b.pendingContext?Hf(a,b.pendingContext,b.pendingContext!==b.context):b.context&&Hf(a,b.context,!1);eh(a,b.containerInfo)}
var si={dehydrated:null,retryLane:0};
function ti(a,b,c){var d=b.pendingProps,e=P.current,f=!1,g;(g=0!==(b.flags&64))||(g=null!==a&&null===a.memoizedState?!1:0!==(e&2));g?(f=!0,b.flags&=-65):null!==a&&null===a.memoizedState||void 0===d.fallback||!0===d.unstable_avoidThisFallback||(e|=1);I(P,e&1);if(null===a){void 0!==d.fallback&&ph(b);a=d.children;e=d.fallback;if(f)return a=ui(b,a,e,c),b.child.memoizedState={baseLanes:c},b.memoizedState=si,a;if("number"===typeof d.unstable_expectedLoadTime)return a=ui(b,a,e,c),b.child.memoizedState={baseLanes:c},
b.memoizedState=si,b.lanes=33554432,a;c=vi({mode:"visible",children:a},b.mode,c,null);c.return=b;return b.child=c}if(null!==a.memoizedState){if(f)return d=wi(a,b,d.children,d.fallback,c),f=b.child,e=a.child.memoizedState,f.memoizedState=null===e?{baseLanes:c}:{baseLanes:e.baseLanes|c},f.childLanes=a.childLanes&~c,b.memoizedState=si,d;c=xi(a,b,d.children,c);b.memoizedState=null;return c}if(f)return d=wi(a,b,d.children,d.fallback,c),f=b.child,e=a.child.memoizedState,f.memoizedState=null===e?{baseLanes:c}:
{baseLanes:e.baseLanes|c},f.childLanes=a.childLanes&~c,b.memoizedState=si,d;c=xi(a,b,d.children,c);b.memoizedState=null;return c}function ui(a,b,c,d){var e=a.mode,f=a.child;b={mode:"hidden",children:b};0===(e&2)&&null!==f?(f.childLanes=0,f.pendingProps=b):f=vi(b,e,0,null);c=Xg(c,e,d,null);f.return=a;c.return=a;f.sibling=c;a.child=f;return c}
function xi(a,b,c,d){var e=a.child;a=e.sibling;c=Tg(e,{mode:"visible",children:c});0===(b.mode&2)&&(c.lanes=d);c.return=b;c.sibling=null;null!==a&&(a.nextEffect=null,a.flags=8,b.firstEffect=b.lastEffect=a);return b.child=c}
function wi(a,b,c,d,e){var f=b.mode,g=a.child;a=g.sibling;var h={mode:"hidden",children:c};0===(f&2)&&b.child!==g?(c=b.child,c.childLanes=0,c.pendingProps=h,g=c.lastEffect,null!==g?(b.firstEffect=c.firstEffect,b.lastEffect=g,g.nextEffect=null):b.firstEffect=b.lastEffect=null):c=Tg(g,h);null!==a?d=Tg(a,d):(d=Xg(d,f,e,null),d.flags|=2);d.return=b;c.return=b;c.sibling=d;b.child=c;return d}function yi(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);sg(a.return,b)}
function zi(a,b,c,d,e,f){var g=a.memoizedState;null===g?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailMode:e,lastEffect:f}:(g.isBackwards=b,g.rendering=null,g.renderingStartTime=0,g.last=d,g.tail=c,g.tailMode=e,g.lastEffect=f)}
function Ai(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;fi(a,b,d.children,c);d=P.current;if(0!==(d&2))d=d&1|2,b.flags|=64;else{if(null!==a&&0!==(a.flags&64))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&yi(a,c);else if(19===a.tag)yi(a,c);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}d&=1}I(P,d);if(0===(b.mode&2))b.memoizedState=
null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===ih(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);zi(b,!1,e,c,f,b.lastEffect);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===ih(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a}zi(b,!0,c,null,f,b.lastEffect);break;case "together":zi(b,!1,null,null,void 0,b.lastEffect);break;default:b.memoizedState=null}return b.child}
function hi(a,b,c){null!==a&&(b.dependencies=a.dependencies);Dg|=b.lanes;if(0!==(c&b.childLanes)){if(null!==a&&b.child!==a.child)throw Error(y(153));if(null!==b.child){a=b.child;c=Tg(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Tg(a,a.pendingProps),c.return=b;c.sibling=null}return b.child}return null}var Bi,Ci,Di,Ei;
Bi=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}};Ci=function(){};
Di=function(a,b,c,d){var e=a.memoizedProps;if(e!==d){a=b.stateNode;dh(ah.current);var f=null;switch(c){case "input":e=Ya(a,e);d=Ya(a,d);f=[];break;case "option":e=eb(a,e);d=eb(a,d);f=[];break;case "select":e=m({},e,{value:void 0});d=m({},d,{value:void 0});f=[];break;case "textarea":e=gb(a,e);d=gb(a,d);f=[];break;default:"function"!==typeof e.onClick&&"function"===typeof d.onClick&&(a.onclick=jf)}vb(c,d);var g;c=null;for(l in e)if(!d.hasOwnProperty(l)&&e.hasOwnProperty(l)&&null!=e[l])if("style"===
l){var h=e[l];for(g in h)h.hasOwnProperty(g)&&(c||(c={}),c[g]="")}else"dangerouslySetInnerHTML"!==l&&"children"!==l&&"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&(ca.hasOwnProperty(l)?f||(f=[]):(f=f||[]).push(l,null));for(l in d){var k=d[l];h=null!=e?e[l]:void 0;if(d.hasOwnProperty(l)&&k!==h&&(null!=k||null!=h))if("style"===l)if(h){for(g in h)!h.hasOwnProperty(g)||k&&k.hasOwnProperty(g)||(c||(c={}),c[g]="");for(g in k)k.hasOwnProperty(g)&&h[g]!==k[g]&&(c||
(c={}),c[g]=k[g])}else c||(f||(f=[]),f.push(l,c)),c=k;else"dangerouslySetInnerHTML"===l?(k=k?k.__html:void 0,h=h?h.__html:void 0,null!=k&&h!==k&&(f=f||[]).push(l,k)):"children"===l?"string"!==typeof k&&"number"!==typeof k||(f=f||[]).push(l,""+k):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&(ca.hasOwnProperty(l)?(null!=k&&"onScroll"===l&&G("scroll",a),f||h===k||(f=[])):"object"===typeof k&&null!==k&&k.$$typeof===Ga?k.toString():(f=f||[]).push(l,k))}c&&(f=f||[]).push("style",
c);var l=f;if(b.updateQueue=l)b.flags|=4}};Ei=function(a,b,c,d){c!==d&&(b.flags|=4)};function Fi(a,b){if(!lh)switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null}}
function Gi(a,b,c){var d=b.pendingProps;switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return Ff(b.type)&&Gf(),null;case 3:fh();H(N);H(M);uh();d=b.stateNode;d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null);if(null===a||null===a.child)rh(b)?b.flags|=4:d.hydrate||(b.flags|=256);Ci(b);return null;case 5:hh(b);var e=dh(ch.current);c=b.type;if(null!==a&&null!=b.stateNode)Di(a,b,c,d,e),a.ref!==b.ref&&(b.flags|=128);else{if(!d){if(null===
b.stateNode)throw Error(y(166));return null}a=dh(ah.current);if(rh(b)){d=b.stateNode;c=b.type;var f=b.memoizedProps;d[wf]=b;d[xf]=f;switch(c){case "dialog":G("cancel",d);G("close",d);break;case "iframe":case "object":case "embed":G("load",d);break;case "video":case "audio":for(a=0;a<Xe.length;a++)G(Xe[a],d);break;case "source":G("error",d);break;case "img":case "image":case "link":G("error",d);G("load",d);break;case "details":G("toggle",d);break;case "input":Za(d,f);G("invalid",d);break;case "select":d._wrapperState=
{wasMultiple:!!f.multiple};G("invalid",d);break;case "textarea":hb(d,f),G("invalid",d)}vb(c,f);a=null;for(var g in f)f.hasOwnProperty(g)&&(e=f[g],"children"===g?"string"===typeof e?d.textContent!==e&&(a=["children",e]):"number"===typeof e&&d.textContent!==""+e&&(a=["children",""+e]):ca.hasOwnProperty(g)&&null!=e&&"onScroll"===g&&G("scroll",d));switch(c){case "input":Va(d);cb(d,f,!0);break;case "textarea":Va(d);jb(d);break;case "select":case "option":break;default:"function"===typeof f.onClick&&(d.onclick=
jf)}d=a;b.updateQueue=d;null!==d&&(b.flags|=4)}else{g=9===e.nodeType?e:e.ownerDocument;a===kb.html&&(a=lb(c));a===kb.html?"script"===c?(a=g.createElement("div"),a.innerHTML="<script>\x3c/script>",a=a.removeChild(a.firstChild)):"string"===typeof d.is?a=g.createElement(c,{is:d.is}):(a=g.createElement(c),"select"===c&&(g=a,d.multiple?g.multiple=!0:d.size&&(g.size=d.size))):a=g.createElementNS(a,c);a[wf]=b;a[xf]=d;Bi(a,b,!1,!1);b.stateNode=a;g=wb(c,d);switch(c){case "dialog":G("cancel",a);G("close",a);
e=d;break;case "iframe":case "object":case "embed":G("load",a);e=d;break;case "video":case "audio":for(e=0;e<Xe.length;e++)G(Xe[e],a);e=d;break;case "source":G("error",a);e=d;break;case "img":case "image":case "link":G("error",a);G("load",a);e=d;break;case "details":G("toggle",a);e=d;break;case "input":Za(a,d);e=Ya(a,d);G("invalid",a);break;case "option":e=eb(a,d);break;case "select":a._wrapperState={wasMultiple:!!d.multiple};e=m({},d,{value:void 0});G("invalid",a);break;case "textarea":hb(a,d);e=
gb(a,d);G("invalid",a);break;default:e=d}vb(c,e);var h=e;for(f in h)if(h.hasOwnProperty(f)){var k=h[f];"style"===f?tb(a,k):"dangerouslySetInnerHTML"===f?(k=k?k.__html:void 0,null!=k&&ob(a,k)):"children"===f?"string"===typeof k?("textarea"!==c||""!==k)&&pb(a,k):"number"===typeof k&&pb(a,""+k):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&(ca.hasOwnProperty(f)?null!=k&&"onScroll"===f&&G("scroll",a):null!=k&&qa(a,f,k,g))}switch(c){case "input":Va(a);cb(a,d,!1);
break;case "textarea":Va(a);jb(a);break;case "option":null!=d.value&&a.setAttribute("value",""+Sa(d.value));break;case "select":a.multiple=!!d.multiple;f=d.value;null!=f?fb(a,!!d.multiple,f,!1):null!=d.defaultValue&&fb(a,!!d.multiple,d.defaultValue,!0);break;default:"function"===typeof e.onClick&&(a.onclick=jf)}mf(c,d)&&(b.flags|=4)}null!==b.ref&&(b.flags|=128)}return null;case 6:if(a&&null!=b.stateNode)Ei(a,b,a.memoizedProps,d);else{if("string"!==typeof d&&null===b.stateNode)throw Error(y(166));
c=dh(ch.current);dh(ah.current);rh(b)?(d=b.stateNode,c=b.memoizedProps,d[wf]=b,d.nodeValue!==c&&(b.flags|=4)):(d=(9===c.nodeType?c:c.ownerDocument).createTextNode(d),d[wf]=b,b.stateNode=d)}return null;case 13:H(P);d=b.memoizedState;if(0!==(b.flags&64))return b.lanes=c,b;d=null!==d;c=!1;null===a?void 0!==b.memoizedProps.fallback&&rh(b):c=null!==a.memoizedState;if(d&&!c&&0!==(b.mode&2))if(null===a&&!0!==b.memoizedProps.unstable_avoidThisFallback||0!==(P.current&1))0===V&&(V=3);else{if(0===V||3===V)V=
4;null===U||0===(Dg&134217727)&&0===(Hi&134217727)||Ii(U,W)}if(d||c)b.flags|=4;return null;case 4:return fh(),Ci(b),null===a&&cf(b.stateNode.containerInfo),null;case 10:return rg(b),null;case 17:return Ff(b.type)&&Gf(),null;case 19:H(P);d=b.memoizedState;if(null===d)return null;f=0!==(b.flags&64);g=d.rendering;if(null===g)if(f)Fi(d,!1);else{if(0!==V||null!==a&&0!==(a.flags&64))for(a=b.child;null!==a;){g=ih(a);if(null!==g){b.flags|=64;Fi(d,!1);f=g.updateQueue;null!==f&&(b.updateQueue=f,b.flags|=4);
null===d.lastEffect&&(b.firstEffect=null);b.lastEffect=d.lastEffect;d=c;for(c=b.child;null!==c;)f=c,a=d,f.flags&=2,f.nextEffect=null,f.firstEffect=null,f.lastEffect=null,g=f.alternate,null===g?(f.childLanes=0,f.lanes=a,f.child=null,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=g.childLanes,f.lanes=g.lanes,f.child=g.child,f.memoizedProps=g.memoizedProps,f.memoizedState=g.memoizedState,f.updateQueue=g.updateQueue,f.type=g.type,a=g.dependencies,
f.dependencies=null===a?null:{lanes:a.lanes,firstContext:a.firstContext}),c=c.sibling;I(P,P.current&1|2);return b.child}a=a.sibling}null!==d.tail&&O()>Ji&&(b.flags|=64,f=!0,Fi(d,!1),b.lanes=33554432)}else{if(!f)if(a=ih(g),null!==a){if(b.flags|=64,f=!0,c=a.updateQueue,null!==c&&(b.updateQueue=c,b.flags|=4),Fi(d,!0),null===d.tail&&"hidden"===d.tailMode&&!g.alternate&&!lh)return b=b.lastEffect=d.lastEffect,null!==b&&(b.nextEffect=null),null}else 2*O()-d.renderingStartTime>Ji&&1073741824!==c&&(b.flags|=
64,f=!0,Fi(d,!1),b.lanes=33554432);d.isBackwards?(g.sibling=b.child,b.child=g):(c=d.last,null!==c?c.sibling=g:b.child=g,d.last=g)}return null!==d.tail?(c=d.tail,d.rendering=c,d.tail=c.sibling,d.lastEffect=b.lastEffect,d.renderingStartTime=O(),c.sibling=null,b=P.current,I(P,f?b&1|2:b&1),c):null;case 23:case 24:return Ki(),null!==a&&null!==a.memoizedState!==(null!==b.memoizedState)&&"unstable-defer-without-hiding"!==d.mode&&(b.flags|=4),null}throw Error(y(156,b.tag));}
function Li(a){switch(a.tag){case 1:Ff(a.type)&&Gf();var b=a.flags;return b&4096?(a.flags=b&-4097|64,a):null;case 3:fh();H(N);H(M);uh();b=a.flags;if(0!==(b&64))throw Error(y(285));a.flags=b&-4097|64;return a;case 5:return hh(a),null;case 13:return H(P),b=a.flags,b&4096?(a.flags=b&-4097|64,a):null;case 19:return H(P),null;case 4:return fh(),null;case 10:return rg(a),null;case 23:case 24:return Ki(),null;default:return null}}
function Mi(a,b){try{var c="",d=b;do c+=Qa(d),d=d.return;while(d);var e=c}catch(f){e="\nError generating stack: "+f.message+"\n"+f.stack}return{value:a,source:b,stack:e}}function Ni(a,b){try{console.error(b.value)}catch(c){setTimeout(function(){throw c;})}}var Oi="function"===typeof WeakMap?WeakMap:Map;function Pi(a,b,c){c=zg(-1,c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Qi||(Qi=!0,Ri=d);Ni(a,b)};return c}
function Si(a,b,c){c=zg(-1,c);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){Ni(a,b);return d(e)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){"function"!==typeof d&&(null===Ti?Ti=new Set([this]):Ti.add(this),Ni(a,b));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""})});return c}var Ui="function"===typeof WeakSet?WeakSet:Set;
function Vi(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null)}catch(c){Wi(a,c)}else b.current=null}function Xi(a,b){switch(b.tag){case 0:case 11:case 15:case 22:return;case 1:if(b.flags&256&&null!==a){var c=a.memoizedProps,d=a.memoizedState;a=b.stateNode;b=a.getSnapshotBeforeUpdate(b.elementType===b.type?c:lg(b.type,c),d);a.__reactInternalSnapshotBeforeUpdate=b}return;case 3:b.flags&256&&qf(b.stateNode.containerInfo);return;case 5:case 6:case 4:case 17:return}throw Error(y(163));}
function Yi(a,b,c){switch(c.tag){case 0:case 11:case 15:case 22:b=c.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){a=b=b.next;do{if(3===(a.tag&3)){var d=a.create;a.destroy=d()}a=a.next}while(a!==b)}b=c.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){a=b=b.next;do{var e=a;d=e.next;e=e.tag;0!==(e&4)&&0!==(e&1)&&(Zi(c,a),$i(c,a));a=d}while(a!==b)}return;case 1:a=c.stateNode;c.flags&4&&(null===b?a.componentDidMount():(d=c.elementType===c.type?b.memoizedProps:lg(c.type,b.memoizedProps),a.componentDidUpdate(d,
b.memoizedState,a.__reactInternalSnapshotBeforeUpdate)));b=c.updateQueue;null!==b&&Eg(c,b,a);return;case 3:b=c.updateQueue;if(null!==b){a=null;if(null!==c.child)switch(c.child.tag){case 5:a=c.child.stateNode;break;case 1:a=c.child.stateNode}Eg(c,b,a)}return;case 5:a=c.stateNode;null===b&&c.flags&4&&mf(c.type,c.memoizedProps)&&a.focus();return;case 6:return;case 4:return;case 12:return;case 13:null===c.memoizedState&&(c=c.alternate,null!==c&&(c=c.memoizedState,null!==c&&(c=c.dehydrated,null!==c&&Cc(c))));
return;case 19:case 17:case 20:case 21:case 23:case 24:return}throw Error(y(163));}
function aj(a,b){for(var c=a;;){if(5===c.tag){var d=c.stateNode;if(b)d=d.style,"function"===typeof d.setProperty?d.setProperty("display","none","important"):d.display="none";else{d=c.stateNode;var e=c.memoizedProps.style;e=void 0!==e&&null!==e&&e.hasOwnProperty("display")?e.display:null;d.style.display=sb("display",e)}}else if(6===c.tag)c.stateNode.nodeValue=b?"":c.memoizedProps;else if((23!==c.tag&&24!==c.tag||null===c.memoizedState||c===a)&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===
a)break;for(;null===c.sibling;){if(null===c.return||c.return===a)return;c=c.return}c.sibling.return=c.return;c=c.sibling}}
function bj(a,b){if(Mf&&"function"===typeof Mf.onCommitFiberUnmount)try{Mf.onCommitFiberUnmount(Lf,b)}catch(f){}switch(b.tag){case 0:case 11:case 14:case 15:case 22:a=b.updateQueue;if(null!==a&&(a=a.lastEffect,null!==a)){var c=a=a.next;do{var d=c,e=d.destroy;d=d.tag;if(void 0!==e)if(0!==(d&4))Zi(b,c);else{d=b;try{e()}catch(f){Wi(d,f)}}c=c.next}while(c!==a)}break;case 1:Vi(b);a=b.stateNode;if("function"===typeof a.componentWillUnmount)try{a.props=b.memoizedProps,a.state=b.memoizedState,a.componentWillUnmount()}catch(f){Wi(b,
f)}break;case 5:Vi(b);break;case 4:cj(a,b)}}function dj(a){a.alternate=null;a.child=null;a.dependencies=null;a.firstEffect=null;a.lastEffect=null;a.memoizedProps=null;a.memoizedState=null;a.pendingProps=null;a.return=null;a.updateQueue=null}function ej(a){return 5===a.tag||3===a.tag||4===a.tag}
function fj(a){a:{for(var b=a.return;null!==b;){if(ej(b))break a;b=b.return}throw Error(y(160));}var c=b;b=c.stateNode;switch(c.tag){case 5:var d=!1;break;case 3:b=b.containerInfo;d=!0;break;case 4:b=b.containerInfo;d=!0;break;default:throw Error(y(161));}c.flags&16&&(pb(b,""),c.flags&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||ej(c.return)){c=null;break a}c=c.return}c.sibling.return=c.return;for(c=c.sibling;5!==c.tag&&6!==c.tag&&18!==c.tag;){if(c.flags&2)continue b;if(null===
c.child||4===c.tag)continue b;else c.child.return=c,c=c.child}if(!(c.flags&2)){c=c.stateNode;break a}}d?gj(a,c,b):hj(a,c,b)}
function gj(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?8===c.nodeType?c.parentNode.insertBefore(a,b):c.insertBefore(a,b):(8===c.nodeType?(b=c.parentNode,b.insertBefore(a,c)):(b=c,b.appendChild(a)),c=c._reactRootContainer,null!==c&&void 0!==c||null!==b.onclick||(b.onclick=jf));else if(4!==d&&(a=a.child,null!==a))for(gj(a,b,c),a=a.sibling;null!==a;)gj(a,b,c),a=a.sibling}
function hj(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?c.insertBefore(a,b):c.appendChild(a);else if(4!==d&&(a=a.child,null!==a))for(hj(a,b,c),a=a.sibling;null!==a;)hj(a,b,c),a=a.sibling}
function cj(a,b){for(var c=b,d=!1,e,f;;){if(!d){d=c.return;a:for(;;){if(null===d)throw Error(y(160));e=d.stateNode;switch(d.tag){case 5:f=!1;break a;case 3:e=e.containerInfo;f=!0;break a;case 4:e=e.containerInfo;f=!0;break a}d=d.return}d=!0}if(5===c.tag||6===c.tag){a:for(var g=a,h=c,k=h;;)if(bj(g,k),null!==k.child&&4!==k.tag)k.child.return=k,k=k.child;else{if(k===h)break a;for(;null===k.sibling;){if(null===k.return||k.return===h)break a;k=k.return}k.sibling.return=k.return;k=k.sibling}f?(g=e,h=c.stateNode,
8===g.nodeType?g.parentNode.removeChild(h):g.removeChild(h)):e.removeChild(c.stateNode)}else if(4===c.tag){if(null!==c.child){e=c.stateNode.containerInfo;f=!0;c.child.return=c;c=c.child;continue}}else if(bj(a,c),null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return;4===c.tag&&(d=!1)}c.sibling.return=c.return;c=c.sibling}}
function ij(a,b){switch(b.tag){case 0:case 11:case 14:case 15:case 22:var c=b.updateQueue;c=null!==c?c.lastEffect:null;if(null!==c){var d=c=c.next;do 3===(d.tag&3)&&(a=d.destroy,d.destroy=void 0,void 0!==a&&a()),d=d.next;while(d!==c)}return;case 1:return;case 5:c=b.stateNode;if(null!=c){d=b.memoizedProps;var e=null!==a?a.memoizedProps:d;a=b.type;var f=b.updateQueue;b.updateQueue=null;if(null!==f){c[xf]=d;"input"===a&&"radio"===d.type&&null!=d.name&&$a(c,d);wb(a,e);b=wb(a,d);for(e=0;e<f.length;e+=
2){var g=f[e],h=f[e+1];"style"===g?tb(c,h):"dangerouslySetInnerHTML"===g?ob(c,h):"children"===g?pb(c,h):qa(c,g,h,b)}switch(a){case "input":ab(c,d);break;case "textarea":ib(c,d);break;case "select":a=c._wrapperState.wasMultiple,c._wrapperState.wasMultiple=!!d.multiple,f=d.value,null!=f?fb(c,!!d.multiple,f,!1):a!==!!d.multiple&&(null!=d.defaultValue?fb(c,!!d.multiple,d.defaultValue,!0):fb(c,!!d.multiple,d.multiple?[]:"",!1))}}}return;case 6:if(null===b.stateNode)throw Error(y(162));b.stateNode.nodeValue=
b.memoizedProps;return;case 3:c=b.stateNode;c.hydrate&&(c.hydrate=!1,Cc(c.containerInfo));return;case 12:return;case 13:null!==b.memoizedState&&(jj=O(),aj(b.child,!0));kj(b);return;case 19:kj(b);return;case 17:return;case 23:case 24:aj(b,null!==b.memoizedState);return}throw Error(y(163));}function kj(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Ui);b.forEach(function(b){var d=lj.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d))})}}
function mj(a,b){return null!==a&&(a=a.memoizedState,null===a||null!==a.dehydrated)?(b=b.memoizedState,null!==b&&null===b.dehydrated):!1}var nj=Math.ceil,oj=ra.ReactCurrentDispatcher,pj=ra.ReactCurrentOwner,X=0,U=null,Y=null,W=0,qj=0,rj=Bf(0),V=0,sj=null,tj=0,Dg=0,Hi=0,uj=0,vj=null,jj=0,Ji=Infinity;function wj(){Ji=O()+500}var Z=null,Qi=!1,Ri=null,Ti=null,xj=!1,yj=null,zj=90,Aj=[],Bj=[],Cj=null,Dj=0,Ej=null,Fj=-1,Gj=0,Hj=0,Ij=null,Jj=!1;function Hg(){return 0!==(X&48)?O():-1!==Fj?Fj:Fj=O()}
function Ig(a){a=a.mode;if(0===(a&2))return 1;if(0===(a&4))return 99===eg()?1:2;0===Gj&&(Gj=tj);if(0!==kg.transition){0!==Hj&&(Hj=null!==vj?vj.pendingLanes:0);a=Gj;var b=4186112&~Hj;b&=-b;0===b&&(a=4186112&~a,b=a&-a,0===b&&(b=8192));return b}a=eg();0!==(X&4)&&98===a?a=Xc(12,Gj):(a=Sc(a),a=Xc(a,Gj));return a}
function Jg(a,b,c){if(50<Dj)throw Dj=0,Ej=null,Error(y(185));a=Kj(a,b);if(null===a)return null;$c(a,b,c);a===U&&(Hi|=b,4===V&&Ii(a,W));var d=eg();1===b?0!==(X&8)&&0===(X&48)?Lj(a):(Mj(a,c),0===X&&(wj(),ig())):(0===(X&4)||98!==d&&99!==d||(null===Cj?Cj=new Set([a]):Cj.add(a)),Mj(a,c));vj=a}function Kj(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);c=a;for(a=a.return;null!==a;)a.childLanes|=b,c=a.alternate,null!==c&&(c.childLanes|=b),c=a,a=a.return;return 3===c.tag?c.stateNode:null}
function Mj(a,b){for(var c=a.callbackNode,d=a.suspendedLanes,e=a.pingedLanes,f=a.expirationTimes,g=a.pendingLanes;0<g;){var h=31-Vc(g),k=1<<h,l=f[h];if(-1===l){if(0===(k&d)||0!==(k&e)){l=b;Rc(k);var n=F;f[h]=10<=n?l+250:6<=n?l+5E3:-1}}else l<=b&&(a.expiredLanes|=k);g&=~k}d=Uc(a,a===U?W:0);b=F;if(0===d)null!==c&&(c!==Zf&&Pf(c),a.callbackNode=null,a.callbackPriority=0);else{if(null!==c){if(a.callbackPriority===b)return;c!==Zf&&Pf(c)}15===b?(c=Lj.bind(null,a),null===ag?(ag=[c],bg=Of(Uf,jg)):ag.push(c),
c=Zf):14===b?c=hg(99,Lj.bind(null,a)):(c=Tc(b),c=hg(c,Nj.bind(null,a)));a.callbackPriority=b;a.callbackNode=c}}
function Nj(a){Fj=-1;Hj=Gj=0;if(0!==(X&48))throw Error(y(327));var b=a.callbackNode;if(Oj()&&a.callbackNode!==b)return null;var c=Uc(a,a===U?W:0);if(0===c)return null;var d=c;var e=X;X|=16;var f=Pj();if(U!==a||W!==d)wj(),Qj(a,d);do try{Rj();break}catch(h){Sj(a,h)}while(1);qg();oj.current=f;X=e;null!==Y?d=0:(U=null,W=0,d=V);if(0!==(tj&Hi))Qj(a,0);else if(0!==d){2===d&&(X|=64,a.hydrate&&(a.hydrate=!1,qf(a.containerInfo)),c=Wc(a),0!==c&&(d=Tj(a,c)));if(1===d)throw b=sj,Qj(a,0),Ii(a,c),Mj(a,O()),b;a.finishedWork=
a.current.alternate;a.finishedLanes=c;switch(d){case 0:case 1:throw Error(y(345));case 2:Uj(a);break;case 3:Ii(a,c);if((c&62914560)===c&&(d=jj+500-O(),10<d)){if(0!==Uc(a,0))break;e=a.suspendedLanes;if((e&c)!==c){Hg();a.pingedLanes|=a.suspendedLanes&e;break}a.timeoutHandle=of(Uj.bind(null,a),d);break}Uj(a);break;case 4:Ii(a,c);if((c&4186112)===c)break;d=a.eventTimes;for(e=-1;0<c;){var g=31-Vc(c);f=1<<g;g=d[g];g>e&&(e=g);c&=~f}c=e;c=O()-c;c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3E3>c?3E3:4320>
c?4320:1960*nj(c/1960))-c;if(10<c){a.timeoutHandle=of(Uj.bind(null,a),c);break}Uj(a);break;case 5:Uj(a);break;default:throw Error(y(329));}}Mj(a,O());return a.callbackNode===b?Nj.bind(null,a):null}function Ii(a,b){b&=~uj;b&=~Hi;a.suspendedLanes|=b;a.pingedLanes&=~b;for(a=a.expirationTimes;0<b;){var c=31-Vc(b),d=1<<c;a[c]=-1;b&=~d}}
function Lj(a){if(0!==(X&48))throw Error(y(327));Oj();if(a===U&&0!==(a.expiredLanes&W)){var b=W;var c=Tj(a,b);0!==(tj&Hi)&&(b=Uc(a,b),c=Tj(a,b))}else b=Uc(a,0),c=Tj(a,b);0!==a.tag&&2===c&&(X|=64,a.hydrate&&(a.hydrate=!1,qf(a.containerInfo)),b=Wc(a),0!==b&&(c=Tj(a,b)));if(1===c)throw c=sj,Qj(a,0),Ii(a,b),Mj(a,O()),c;a.finishedWork=a.current.alternate;a.finishedLanes=b;Uj(a);Mj(a,O());return null}
function Vj(){if(null!==Cj){var a=Cj;Cj=null;a.forEach(function(a){a.expiredLanes|=24&a.pendingLanes;Mj(a,O())})}ig()}function Wj(a,b){var c=X;X|=1;try{return a(b)}finally{X=c,0===X&&(wj(),ig())}}function Xj(a,b){var c=X;X&=-2;X|=8;try{return a(b)}finally{X=c,0===X&&(wj(),ig())}}function ni(a,b){I(rj,qj);qj|=b;tj|=b}function Ki(){qj=rj.current;H(rj)}
function Qj(a,b){a.finishedWork=null;a.finishedLanes=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,pf(c));if(null!==Y)for(c=Y.return;null!==c;){var d=c;switch(d.tag){case 1:d=d.type.childContextTypes;null!==d&&void 0!==d&&Gf();break;case 3:fh();H(N);H(M);uh();break;case 5:hh(d);break;case 4:fh();break;case 13:H(P);break;case 19:H(P);break;case 10:rg(d);break;case 23:case 24:Ki()}c=c.return}U=a;Y=Tg(a.current,null);W=qj=tj=b;V=0;sj=null;uj=Hi=Dg=0}
function Sj(a,b){do{var c=Y;try{qg();vh.current=Gh;if(yh){for(var d=R.memoizedState;null!==d;){var e=d.queue;null!==e&&(e.pending=null);d=d.next}yh=!1}xh=0;T=S=R=null;zh=!1;pj.current=null;if(null===c||null===c.return){V=1;sj=b;Y=null;break}a:{var f=a,g=c.return,h=c,k=b;b=W;h.flags|=2048;h.firstEffect=h.lastEffect=null;if(null!==k&&"object"===typeof k&&"function"===typeof k.then){var l=k;if(0===(h.mode&2)){var n=h.alternate;n?(h.updateQueue=n.updateQueue,h.memoizedState=n.memoizedState,h.lanes=n.lanes):
(h.updateQueue=null,h.memoizedState=null)}var A=0!==(P.current&1),p=g;do{var C;if(C=13===p.tag){var x=p.memoizedState;if(null!==x)C=null!==x.dehydrated?!0:!1;else{var w=p.memoizedProps;C=void 0===w.fallback?!1:!0!==w.unstable_avoidThisFallback?!0:A?!1:!0}}if(C){var z=p.updateQueue;if(null===z){var u=new Set;u.add(l);p.updateQueue=u}else z.add(l);if(0===(p.mode&2)){p.flags|=64;h.flags|=16384;h.flags&=-2981;if(1===h.tag)if(null===h.alternate)h.tag=17;else{var t=zg(-1,1);t.tag=2;Ag(h,t)}h.lanes|=1;break a}k=
void 0;h=b;var q=f.pingCache;null===q?(q=f.pingCache=new Oi,k=new Set,q.set(l,k)):(k=q.get(l),void 0===k&&(k=new Set,q.set(l,k)));if(!k.has(h)){k.add(h);var v=Yj.bind(null,f,l,h);l.then(v,v)}p.flags|=4096;p.lanes=b;break a}p=p.return}while(null!==p);k=Error((Ra(h.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.")}5!==V&&(V=2);k=Mi(k,h);p=
g;do{switch(p.tag){case 3:f=k;p.flags|=4096;b&=-b;p.lanes|=b;var J=Pi(p,f,b);Bg(p,J);break a;case 1:f=k;var K=p.type,Q=p.stateNode;if(0===(p.flags&64)&&("function"===typeof K.getDerivedStateFromError||null!==Q&&"function"===typeof Q.componentDidCatch&&(null===Ti||!Ti.has(Q)))){p.flags|=4096;b&=-b;p.lanes|=b;var L=Si(p,f,b);Bg(p,L);break a}}p=p.return}while(null!==p)}Zj(c)}catch(va){b=va;Y===c&&null!==c&&(Y=c=c.return);continue}break}while(1)}
function Pj(){var a=oj.current;oj.current=Gh;return null===a?Gh:a}function Tj(a,b){var c=X;X|=16;var d=Pj();U===a&&W===b||Qj(a,b);do try{ak();break}catch(e){Sj(a,e)}while(1);qg();X=c;oj.current=d;if(null!==Y)throw Error(y(261));U=null;W=0;return V}function ak(){for(;null!==Y;)bk(Y)}function Rj(){for(;null!==Y&&!Qf();)bk(Y)}function bk(a){var b=ck(a.alternate,a,qj);a.memoizedProps=a.pendingProps;null===b?Zj(a):Y=b;pj.current=null}
function Zj(a){var b=a;do{var c=b.alternate;a=b.return;if(0===(b.flags&2048)){c=Gi(c,b,qj);if(null!==c){Y=c;return}c=b;if(24!==c.tag&&23!==c.tag||null===c.memoizedState||0!==(qj&1073741824)||0===(c.mode&4)){for(var d=0,e=c.child;null!==e;)d|=e.lanes|e.childLanes,e=e.sibling;c.childLanes=d}null!==a&&0===(a.flags&2048)&&(null===a.firstEffect&&(a.firstEffect=b.firstEffect),null!==b.lastEffect&&(null!==a.lastEffect&&(a.lastEffect.nextEffect=b.firstEffect),a.lastEffect=b.lastEffect),1<b.flags&&(null!==
a.lastEffect?a.lastEffect.nextEffect=b:a.firstEffect=b,a.lastEffect=b))}else{c=Li(b);if(null!==c){c.flags&=2047;Y=c;return}null!==a&&(a.firstEffect=a.lastEffect=null,a.flags|=2048)}b=b.sibling;if(null!==b){Y=b;return}Y=b=a}while(null!==b);0===V&&(V=5)}function Uj(a){var b=eg();gg(99,dk.bind(null,a,b));return null}
function dk(a,b){do Oj();while(null!==yj);if(0!==(X&48))throw Error(y(327));var c=a.finishedWork;if(null===c)return null;a.finishedWork=null;a.finishedLanes=0;if(c===a.current)throw Error(y(177));a.callbackNode=null;var d=c.lanes|c.childLanes,e=d,f=a.pendingLanes&~e;a.pendingLanes=e;a.suspendedLanes=0;a.pingedLanes=0;a.expiredLanes&=e;a.mutableReadLanes&=e;a.entangledLanes&=e;e=a.entanglements;for(var g=a.eventTimes,h=a.expirationTimes;0<f;){var k=31-Vc(f),l=1<<k;e[k]=0;g[k]=-1;h[k]=-1;f&=~l}null!==
Cj&&0===(d&24)&&Cj.has(a)&&Cj.delete(a);a===U&&(Y=U=null,W=0);1<c.flags?null!==c.lastEffect?(c.lastEffect.nextEffect=c,d=c.firstEffect):d=c:d=c.firstEffect;if(null!==d){e=X;X|=32;pj.current=null;kf=fd;g=Ne();if(Oe(g)){if("selectionStart"in g)h={start:g.selectionStart,end:g.selectionEnd};else a:if(h=(h=g.ownerDocument)&&h.defaultView||window,(l=h.getSelection&&h.getSelection())&&0!==l.rangeCount){h=l.anchorNode;f=l.anchorOffset;k=l.focusNode;l=l.focusOffset;try{h.nodeType,k.nodeType}catch(va){h=null;
break a}var n=0,A=-1,p=-1,C=0,x=0,w=g,z=null;b:for(;;){for(var u;;){w!==h||0!==f&&3!==w.nodeType||(A=n+f);w!==k||0!==l&&3!==w.nodeType||(p=n+l);3===w.nodeType&&(n+=w.nodeValue.length);if(null===(u=w.firstChild))break;z=w;w=u}for(;;){if(w===g)break b;z===h&&++C===f&&(A=n);z===k&&++x===l&&(p=n);if(null!==(u=w.nextSibling))break;w=z;z=w.parentNode}w=u}h=-1===A||-1===p?null:{start:A,end:p}}else h=null;h=h||{start:0,end:0}}else h=null;lf={focusedElem:g,selectionRange:h};fd=!1;Ij=null;Jj=!1;Z=d;do try{ek()}catch(va){if(null===
Z)throw Error(y(330));Wi(Z,va);Z=Z.nextEffect}while(null!==Z);Ij=null;Z=d;do try{for(g=a;null!==Z;){var t=Z.flags;t&16&&pb(Z.stateNode,"");if(t&128){var q=Z.alternate;if(null!==q){var v=q.ref;null!==v&&("function"===typeof v?v(null):v.current=null)}}switch(t&1038){case 2:fj(Z);Z.flags&=-3;break;case 6:fj(Z);Z.flags&=-3;ij(Z.alternate,Z);break;case 1024:Z.flags&=-1025;break;case 1028:Z.flags&=-1025;ij(Z.alternate,Z);break;case 4:ij(Z.alternate,Z);break;case 8:h=Z;cj(g,h);var J=h.alternate;dj(h);null!==
J&&dj(J)}Z=Z.nextEffect}}catch(va){if(null===Z)throw Error(y(330));Wi(Z,va);Z=Z.nextEffect}while(null!==Z);v=lf;q=Ne();t=v.focusedElem;g=v.selectionRange;if(q!==t&&t&&t.ownerDocument&&Me(t.ownerDocument.documentElement,t)){null!==g&&Oe(t)&&(q=g.start,v=g.end,void 0===v&&(v=q),"selectionStart"in t?(t.selectionStart=q,t.selectionEnd=Math.min(v,t.value.length)):(v=(q=t.ownerDocument||document)&&q.defaultView||window,v.getSelection&&(v=v.getSelection(),h=t.textContent.length,J=Math.min(g.start,h),g=void 0===
g.end?J:Math.min(g.end,h),!v.extend&&J>g&&(h=g,g=J,J=h),h=Le(t,J),f=Le(t,g),h&&f&&(1!==v.rangeCount||v.anchorNode!==h.node||v.anchorOffset!==h.offset||v.focusNode!==f.node||v.focusOffset!==f.offset)&&(q=q.createRange(),q.setStart(h.node,h.offset),v.removeAllRanges(),J>g?(v.addRange(q),v.extend(f.node,f.offset)):(q.setEnd(f.node,f.offset),v.addRange(q))))));q=[];for(v=t;v=v.parentNode;)1===v.nodeType&&q.push({element:v,left:v.scrollLeft,top:v.scrollTop});"function"===typeof t.focus&&t.focus();for(t=
0;t<q.length;t++)v=q[t],v.element.scrollLeft=v.left,v.element.scrollTop=v.top}fd=!!kf;lf=kf=null;a.current=c;Z=d;do try{for(t=a;null!==Z;){var K=Z.flags;K&36&&Yi(t,Z.alternate,Z);if(K&128){q=void 0;var Q=Z.ref;if(null!==Q){var L=Z.stateNode;switch(Z.tag){case 5:q=L;break;default:q=L}"function"===typeof Q?Q(q):Q.current=q}}Z=Z.nextEffect}}catch(va){if(null===Z)throw Error(y(330));Wi(Z,va);Z=Z.nextEffect}while(null!==Z);Z=null;$f();X=e}else a.current=c;if(xj)xj=!1,yj=a,zj=b;else for(Z=d;null!==Z;)b=
Z.nextEffect,Z.nextEffect=null,Z.flags&8&&(K=Z,K.sibling=null,K.stateNode=null),Z=b;d=a.pendingLanes;0===d&&(Ti=null);1===d?a===Ej?Dj++:(Dj=0,Ej=a):Dj=0;c=c.stateNode;if(Mf&&"function"===typeof Mf.onCommitFiberRoot)try{Mf.onCommitFiberRoot(Lf,c,void 0,64===(c.current.flags&64))}catch(va){}Mj(a,O());if(Qi)throw Qi=!1,a=Ri,Ri=null,a;if(0!==(X&8))return null;ig();return null}
function ek(){for(;null!==Z;){var a=Z.alternate;Jj||null===Ij||(0!==(Z.flags&8)?dc(Z,Ij)&&(Jj=!0):13===Z.tag&&mj(a,Z)&&dc(Z,Ij)&&(Jj=!0));var b=Z.flags;0!==(b&256)&&Xi(a,Z);0===(b&512)||xj||(xj=!0,hg(97,function(){Oj();return null}));Z=Z.nextEffect}}function Oj(){if(90!==zj){var a=97<zj?97:zj;zj=90;return gg(a,fk)}return!1}function $i(a,b){Aj.push(b,a);xj||(xj=!0,hg(97,function(){Oj();return null}))}function Zi(a,b){Bj.push(b,a);xj||(xj=!0,hg(97,function(){Oj();return null}))}
function fk(){if(null===yj)return!1;var a=yj;yj=null;if(0!==(X&48))throw Error(y(331));var b=X;X|=32;var c=Bj;Bj=[];for(var d=0;d<c.length;d+=2){var e=c[d],f=c[d+1],g=e.destroy;e.destroy=void 0;if("function"===typeof g)try{g()}catch(k){if(null===f)throw Error(y(330));Wi(f,k)}}c=Aj;Aj=[];for(d=0;d<c.length;d+=2){e=c[d];f=c[d+1];try{var h=e.create;e.destroy=h()}catch(k){if(null===f)throw Error(y(330));Wi(f,k)}}for(h=a.current.firstEffect;null!==h;)a=h.nextEffect,h.nextEffect=null,h.flags&8&&(h.sibling=
null,h.stateNode=null),h=a;X=b;ig();return!0}function gk(a,b,c){b=Mi(c,b);b=Pi(a,b,1);Ag(a,b);b=Hg();a=Kj(a,1);null!==a&&($c(a,1,b),Mj(a,b))}
function Wi(a,b){if(3===a.tag)gk(a,a,b);else for(var c=a.return;null!==c;){if(3===c.tag){gk(c,a,b);break}else if(1===c.tag){var d=c.stateNode;if("function"===typeof c.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===Ti||!Ti.has(d))){a=Mi(b,a);var e=Si(c,a,1);Ag(c,e);e=Hg();c=Kj(c,1);if(null!==c)$c(c,1,e),Mj(c,e);else if("function"===typeof d.componentDidCatch&&(null===Ti||!Ti.has(d)))try{d.componentDidCatch(b,a)}catch(f){}break}}c=c.return}}
function Yj(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);b=Hg();a.pingedLanes|=a.suspendedLanes&c;U===a&&(W&c)===c&&(4===V||3===V&&(W&62914560)===W&&500>O()-jj?Qj(a,0):uj|=c);Mj(a,b)}function lj(a,b){var c=a.stateNode;null!==c&&c.delete(b);b=0;0===b&&(b=a.mode,0===(b&2)?b=1:0===(b&4)?b=99===eg()?1:2:(0===Gj&&(Gj=tj),b=Yc(62914560&~Gj),0===b&&(b=4194304)));c=Hg();a=Kj(a,b);null!==a&&($c(a,b,c),Mj(a,c))}var ck;
ck=function(a,b,c){var d=b.lanes;if(null!==a)if(a.memoizedProps!==b.pendingProps||N.current)ug=!0;else if(0!==(c&d))ug=0!==(a.flags&16384)?!0:!1;else{ug=!1;switch(b.tag){case 3:ri(b);sh();break;case 5:gh(b);break;case 1:Ff(b.type)&&Jf(b);break;case 4:eh(b,b.stateNode.containerInfo);break;case 10:d=b.memoizedProps.value;var e=b.type._context;I(mg,e._currentValue);e._currentValue=d;break;case 13:if(null!==b.memoizedState){if(0!==(c&b.child.childLanes))return ti(a,b,c);I(P,P.current&1);b=hi(a,b,c);return null!==
b?b.sibling:null}I(P,P.current&1);break;case 19:d=0!==(c&b.childLanes);if(0!==(a.flags&64)){if(d)return Ai(a,b,c);b.flags|=64}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null,e.lastEffect=null);I(P,P.current);if(d)break;else return null;case 23:case 24:return b.lanes=0,mi(a,b,c)}return hi(a,b,c)}else ug=!1;b.lanes=0;switch(b.tag){case 2:d=b.type;null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2);a=b.pendingProps;e=Ef(b,M.current);tg(b,c);e=Ch(null,b,d,a,e,c);b.flags|=1;if("object"===
typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof){b.tag=1;b.memoizedState=null;b.updateQueue=null;if(Ff(d)){var f=!0;Jf(b)}else f=!1;b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null;xg(b);var g=d.getDerivedStateFromProps;"function"===typeof g&&Gg(b,d,g,a);e.updater=Kg;b.stateNode=e;e._reactInternals=b;Og(b,d,a,c);b=qi(null,b,d,!0,f,c)}else b.tag=0,fi(null,b,e,c),b=b.child;return b;case 16:e=b.elementType;a:{null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2);
a=b.pendingProps;f=e._init;e=f(e._payload);b.type=e;f=b.tag=hk(e);a=lg(e,a);switch(f){case 0:b=li(null,b,e,a,c);break a;case 1:b=pi(null,b,e,a,c);break a;case 11:b=gi(null,b,e,a,c);break a;case 14:b=ii(null,b,e,lg(e.type,a),d,c);break a}throw Error(y(306,e,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),li(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),pi(a,b,d,e,c);case 3:ri(b);d=b.updateQueue;if(null===a||null===d)throw Error(y(282));
d=b.pendingProps;e=b.memoizedState;e=null!==e?e.element:null;yg(a,b);Cg(b,d,null,c);d=b.memoizedState.element;if(d===e)sh(),b=hi(a,b,c);else{e=b.stateNode;if(f=e.hydrate)kh=rf(b.stateNode.containerInfo.firstChild),jh=b,f=lh=!0;if(f){a=e.mutableSourceEagerHydrationData;if(null!=a)for(e=0;e<a.length;e+=2)f=a[e],f._workInProgressVersionPrimary=a[e+1],th.push(f);c=Zg(b,null,d,c);for(b.child=c;c;)c.flags=c.flags&-3|1024,c=c.sibling}else fi(a,b,d,c),sh();b=b.child}return b;case 5:return gh(b),null===a&&
ph(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,g=e.children,nf(d,e)?g=null:null!==f&&nf(d,f)&&(b.flags|=16),oi(a,b),fi(a,b,g,c),b.child;case 6:return null===a&&ph(b),null;case 13:return ti(a,b,c);case 4:return eh(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Yg(b,null,d,c):fi(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),gi(a,b,d,e,c);case 7:return fi(a,b,b.pendingProps,c),b.child;case 8:return fi(a,b,b.pendingProps.children,
c),b.child;case 12:return fi(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;g=b.memoizedProps;f=e.value;var h=b.type._context;I(mg,h._currentValue);h._currentValue=f;if(null!==g)if(h=g.value,f=He(h,f)?0:("function"===typeof d._calculateChangedBits?d._calculateChangedBits(h,f):1073741823)|0,0===f){if(g.children===e.children&&!N.current){b=hi(a,b,c);break a}}else for(h=b.child,null!==h&&(h.return=b);null!==h;){var k=h.dependencies;if(null!==k){g=h.child;for(var l=
k.firstContext;null!==l;){if(l.context===d&&0!==(l.observedBits&f)){1===h.tag&&(l=zg(-1,c&-c),l.tag=2,Ag(h,l));h.lanes|=c;l=h.alternate;null!==l&&(l.lanes|=c);sg(h.return,c);k.lanes|=c;break}l=l.next}}else g=10===h.tag?h.type===b.type?null:h.child:h.child;if(null!==g)g.return=h;else for(g=h;null!==g;){if(g===b){g=null;break}h=g.sibling;if(null!==h){h.return=g.return;g=h;break}g=g.return}h=g}fi(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,f=b.pendingProps,d=f.children,tg(b,c),e=vg(e,
f.unstable_observedBits),d=d(e),b.flags|=1,fi(a,b,d,c),b.child;case 14:return e=b.type,f=lg(e,b.pendingProps),f=lg(e.type,f),ii(a,b,e,f,d,c);case 15:return ki(a,b,b.type,b.pendingProps,d,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2),b.tag=1,Ff(d)?(a=!0,Jf(b)):a=!1,tg(b,c),Mg(b,d,e),Og(b,d,e,c),qi(null,b,d,!0,a,c);case 19:return Ai(a,b,c);case 23:return mi(a,b,c);case 24:return mi(a,b,c)}throw Error(y(156,b.tag));
};function ik(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.flags=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.childLanes=this.lanes=0;this.alternate=null}function nh(a,b,c,d){return new ik(a,b,c,d)}function ji(a){a=a.prototype;return!(!a||!a.isReactComponent)}
function hk(a){if("function"===typeof a)return ji(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===Aa)return 11;if(a===Da)return 14}return 2}
function Tg(a,b){var c=a.alternate;null===c?(c=nh(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.type=a.type,c.flags=0,c.nextEffect=null,c.firstEffect=null,c.lastEffect=null);c.childLanes=a.childLanes;c.lanes=a.lanes;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{lanes:b.lanes,firstContext:b.firstContext};
c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
function Vg(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)ji(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case ua:return Xg(c.children,e,f,b);case Ha:g=8;e|=16;break;case wa:g=8;e|=1;break;case xa:return a=nh(12,c,b,e|8),a.elementType=xa,a.type=xa,a.lanes=f,a;case Ba:return a=nh(13,c,b,e),a.type=Ba,a.elementType=Ba,a.lanes=f,a;case Ca:return a=nh(19,c,b,e),a.elementType=Ca,a.lanes=f,a;case Ia:return vi(c,e,f,b);case Ja:return a=nh(24,c,b,e),a.elementType=Ja,a.lanes=f,a;default:if("object"===
typeof a&&null!==a)switch(a.$$typeof){case ya:g=10;break a;case za:g=9;break a;case Aa:g=11;break a;case Da:g=14;break a;case Ea:g=16;d=null;break a;case Fa:g=22;break a}throw Error(y(130,null==a?a:typeof a,""));}b=nh(g,c,b,e);b.elementType=a;b.type=d;b.lanes=f;return b}function Xg(a,b,c,d){a=nh(7,a,d,b);a.lanes=c;return a}function vi(a,b,c,d){a=nh(23,a,d,b);a.elementType=Ia;a.lanes=c;return a}function Ug(a,b,c){a=nh(6,a,null,b);a.lanes=c;return a}
function Wg(a,b,c){b=nh(4,null!==a.children?a.children:[],a.key,b);b.lanes=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
function jk(a,b,c){this.tag=b;this.containerInfo=a;this.finishedWork=this.pingCache=this.current=this.pendingChildren=null;this.timeoutHandle=-1;this.pendingContext=this.context=null;this.hydrate=c;this.callbackNode=null;this.callbackPriority=0;this.eventTimes=Zc(0);this.expirationTimes=Zc(-1);this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0;this.entanglements=Zc(0);this.mutableSourceEagerHydrationData=null}
function kk(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:ta,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
function lk(a,b,c,d){var e=b.current,f=Hg(),g=Ig(e);a:if(c){c=c._reactInternals;b:{if(Zb(c)!==c||1!==c.tag)throw Error(y(170));var h=c;do{switch(h.tag){case 3:h=h.stateNode.context;break b;case 1:if(Ff(h.type)){h=h.stateNode.__reactInternalMemoizedMergedChildContext;break b}}h=h.return}while(null!==h);throw Error(y(171));}if(1===c.tag){var k=c.type;if(Ff(k)){c=If(c,k,h);break a}}c=h}else c=Cf;null===b.context?b.context=c:b.pendingContext=c;b=zg(f,g);b.payload={element:a};d=void 0===d?null:d;null!==
d&&(b.callback=d);Ag(e,b);Jg(e,g,f);return g}function mk(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function nk(a,b){a=a.memoizedState;if(null!==a&&null!==a.dehydrated){var c=a.retryLane;a.retryLane=0!==c&&c<b?c:b}}function ok(a,b){nk(a,b);(a=a.alternate)&&nk(a,b)}function pk(){return null}
function qk(a,b,c){var d=null!=c&&null!=c.hydrationOptions&&c.hydrationOptions.mutableSources||null;c=new jk(a,b,null!=c&&!0===c.hydrate);b=nh(3,null,null,2===b?7:1===b?3:0);c.current=b;b.stateNode=c;xg(b);a[ff]=c.current;cf(8===a.nodeType?a.parentNode:a);if(d)for(a=0;a<d.length;a++){b=d[a];var e=b._getVersion;e=e(b._source);null==c.mutableSourceEagerHydrationData?c.mutableSourceEagerHydrationData=[b,e]:c.mutableSourceEagerHydrationData.push(b,e)}this._internalRoot=c}
qk.prototype.render=function(a){lk(a,this._internalRoot,null,null)};qk.prototype.unmount=function(){var a=this._internalRoot,b=a.containerInfo;lk(null,a,null,function(){b[ff]=null})};function rk(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}
function sk(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null,b=!(!b||1!==b.nodeType||!b.hasAttribute("data-reactroot")));if(!b)for(var c;c=a.lastChild;)a.removeChild(c);return new qk(a,0,b?{hydrate:!0}:void 0)}
function tk(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f._internalRoot;if("function"===typeof e){var h=e;e=function(){var a=mk(g);h.call(a)}}lk(b,g,a,e)}else{f=c._reactRootContainer=sk(c,d);g=f._internalRoot;if("function"===typeof e){var k=e;e=function(){var a=mk(g);k.call(a)}}Xj(function(){lk(b,g,a,e)})}return mk(g)}ec=function(a){if(13===a.tag){var b=Hg();Jg(a,4,b);ok(a,4)}};fc=function(a){if(13===a.tag){var b=Hg();Jg(a,67108864,b);ok(a,67108864)}};
gc=function(a){if(13===a.tag){var b=Hg(),c=Ig(a);Jg(a,c,b);ok(a,c)}};hc=function(a,b){return b()};
yb=function(a,b,c){switch(b){case "input":ab(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Db(d);if(!e)throw Error(y(90));Wa(d);ab(d,e)}}}break;case "textarea":ib(a,c);break;case "select":b=c.value,null!=b&&fb(a,!!c.multiple,b,!1)}};Gb=Wj;
Hb=function(a,b,c,d,e){var f=X;X|=4;try{return gg(98,a.bind(null,b,c,d,e))}finally{X=f,0===X&&(wj(),ig())}};Ib=function(){0===(X&49)&&(Vj(),Oj())};Jb=function(a,b){var c=X;X|=2;try{return a(b)}finally{X=c,0===X&&(wj(),ig())}};function uk(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!rk(b))throw Error(y(200));return kk(a,b,null,c)}var vk={Events:[Cb,ue,Db,Eb,Fb,Oj,{current:!1}]},wk={findFiberByHostInstance:wc,bundleType:0,version:"17.0.2",rendererPackageName:"react-dom"};
var xk={bundleType:wk.bundleType,version:wk.version,rendererPackageName:wk.rendererPackageName,rendererConfig:wk.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ra.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=cc(a);return null===a?null:a.stateNode},findFiberByHostInstance:wk.findFiberByHostInstance||
pk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var yk=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yk.isDisabled&&yk.supportsFiber)try{Lf=yk.inject(xk),Mf=yk}catch(a){}}__webpack_unused_export__=vk;__webpack_unused_export__=uk;
__webpack_unused_export__=function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternals;if(void 0===b){if("function"===typeof a.render)throw Error(y(188));throw Error(y(268,Object.keys(a)));}a=cc(b);a=null===a?null:a.stateNode;return a};__webpack_unused_export__=function(a,b){var c=X;if(0!==(c&48))return a(b);X|=1;try{if(a)return gg(99,a.bind(null,b))}finally{X=c,ig()}};__webpack_unused_export__=function(a,b,c){if(!rk(b))throw Error(y(200));return tk(null,a,b,!0,c)};
exports.render=function(a,b,c){if(!rk(b))throw Error(y(200));return tk(null,a,b,!1,c)};__webpack_unused_export__=function(a){if(!rk(a))throw Error(y(40));return a._reactRootContainer?(Xj(function(){tk(null,null,a,!1,function(){a._reactRootContainer=null;a[ff]=null})}),!0):!1};exports.unstable_batchedUpdates=Wj;__webpack_unused_export__=function(a,b){return uk(a,b,2<arguments.length&&void 0!==arguments[2]?arguments[2]:null)};
__webpack_unused_export__=function(a,b,c,d){if(!rk(c))throw Error(y(200));if(null==a||void 0===a._reactInternals)throw Error(y(38));return tk(a,b,c,!1,d)};__webpack_unused_export__="17.0.2";


/***/ }),

/***/ 935:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (false) {}
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(448);
} else {}


/***/ }),

/***/ 921:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;exports.Fragment=e;exports.Lazy=t;exports.Memo=r;exports.Portal=d;
exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;exports.isAsyncMode=function(a){return A(a)||z(a)===l};exports.isConcurrentMode=A;exports.isContextConsumer=function(a){return z(a)===k};exports.isContextProvider=function(a){return z(a)===h};exports.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return z(a)===n};exports.isFragment=function(a){return z(a)===e};exports.isLazy=function(a){return z(a)===t};
exports.isMemo=function(a){return z(a)===r};exports.isPortal=function(a){return z(a)===d};exports.isProfiler=function(a){return z(a)===g};exports.isStrictMode=function(a){return z(a)===f};exports.isSuspense=function(a){return z(a)===p};
exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};exports.typeOf=z;


/***/ }),

/***/ 864:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(921);
} else {}


/***/ }),

/***/ 359:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __webpack_unused_export__;
/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b=60103,c=60106,d=60107,e=60108,f=60114,g=60109,h=60110,k=60112,l=60113,m=60120,n=60115,p=60116,q=60121,r=60122,u=60117,v=60129,w=60131;
if("function"===typeof Symbol&&Symbol.for){var x=Symbol.for;b=x("react.element");c=x("react.portal");d=x("react.fragment");e=x("react.strict_mode");f=x("react.profiler");g=x("react.provider");h=x("react.context");k=x("react.forward_ref");l=x("react.suspense");m=x("react.suspense_list");n=x("react.memo");p=x("react.lazy");q=x("react.block");r=x("react.server.block");u=x("react.fundamental");v=x("react.debug_trace_mode");w=x("react.legacy_hidden")}
function y(a){if("object"===typeof a&&null!==a){var t=a.$$typeof;switch(t){case b:switch(a=a.type,a){case d:case f:case e:case l:case m:return a;default:switch(a=a&&a.$$typeof,a){case h:case k:case p:case n:case g:return a;default:return t}}case c:return t}}}var z=g,A=b,B=k,C=d,D=p,E=n,F=c,G=f,H=e,I=l;__webpack_unused_export__=h;__webpack_unused_export__=z;__webpack_unused_export__=A;__webpack_unused_export__=B;__webpack_unused_export__=C;__webpack_unused_export__=D;__webpack_unused_export__=E;__webpack_unused_export__=F;__webpack_unused_export__=G;__webpack_unused_export__=H;
__webpack_unused_export__=I;__webpack_unused_export__=function(){return!1};__webpack_unused_export__=function(){return!1};exports.isContextConsumer=function(a){return y(a)===h};__webpack_unused_export__=function(a){return y(a)===g};__webpack_unused_export__=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===b};__webpack_unused_export__=function(a){return y(a)===k};__webpack_unused_export__=function(a){return y(a)===d};__webpack_unused_export__=function(a){return y(a)===p};__webpack_unused_export__=function(a){return y(a)===n};
__webpack_unused_export__=function(a){return y(a)===c};__webpack_unused_export__=function(a){return y(a)===f};__webpack_unused_export__=function(a){return y(a)===e};__webpack_unused_export__=function(a){return y(a)===l};__webpack_unused_export__=function(a){return"string"===typeof a||"function"===typeof a||a===d||a===f||a===v||a===e||a===l||a===m||a===w||"object"===typeof a&&null!==a&&(a.$$typeof===p||a.$$typeof===n||a.$$typeof===g||a.$$typeof===h||a.$$typeof===k||a.$$typeof===u||a.$$typeof===q||a[0]===r)?!0:!1};
__webpack_unused_export__=y;


/***/ }),

/***/ 973:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(359);
} else {}


/***/ }),

/***/ 408:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l=__webpack_require__(418),n=60103,p=60106;exports.Fragment=60107;exports.StrictMode=60108;exports.Profiler=60114;var q=60109,r=60110,t=60112;exports.Suspense=60113;var u=60115,v=60116;
if("function"===typeof Symbol&&Symbol.for){var w=Symbol.for;n=w("react.element");p=w("react.portal");exports.Fragment=w("react.fragment");exports.StrictMode=w("react.strict_mode");exports.Profiler=w("react.profiler");q=w("react.provider");r=w("react.context");t=w("react.forward_ref");exports.Suspense=w("react.suspense");u=w("react.memo");v=w("react.lazy")}var x="function"===typeof Symbol&&Symbol.iterator;
function y(a){if(null===a||"object"!==typeof a)return null;a=x&&a[x]||a["@@iterator"];return"function"===typeof a?a:null}function z(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B={};function C(a,b,c){this.props=a;this.context=b;this.refs=B;this.updater=c||A}C.prototype.isReactComponent={};C.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error(z(85));this.updater.enqueueSetState(this,a,b,"setState")};C.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};
function D(){}D.prototype=C.prototype;function E(a,b,c){this.props=a;this.context=b;this.refs=B;this.updater=c||A}var F=E.prototype=new D;F.constructor=E;l(F,C.prototype);F.isPureReactComponent=!0;var G={current:null},H=Object.prototype.hasOwnProperty,I={key:!0,ref:!0,__self:!0,__source:!0};
function J(a,b,c){var e,d={},k=null,h=null;if(null!=b)for(e in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)H.call(b,e)&&!I.hasOwnProperty(e)&&(d[e]=b[e]);var g=arguments.length-2;if(1===g)d.children=c;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];d.children=f}if(a&&a.defaultProps)for(e in g=a.defaultProps,g)void 0===d[e]&&(d[e]=g[e]);return{$$typeof:n,type:a,key:k,ref:h,props:d,_owner:G.current}}
function K(a,b){return{$$typeof:n,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function L(a){return"object"===typeof a&&null!==a&&a.$$typeof===n}function escape(a){var b={"=":"=0",":":"=2"};return"$"+a.replace(/[=:]/g,function(a){return b[a]})}var M=/\/+/g;function N(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
function O(a,b,c,e,d){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case n:case p:h=!0}}if(h)return h=a,d=d(h),a=""===e?"."+N(h,0):e,Array.isArray(d)?(c="",null!=a&&(c=a.replace(M,"$&/")+"/"),O(d,b,c,"",function(a){return a})):null!=d&&(L(d)&&(d=K(d,c+(!d.key||h&&h.key===d.key?"":(""+d.key).replace(M,"$&/")+"/")+a)),b.push(d)),1;h=0;e=""===e?".":e+":";if(Array.isArray(a))for(var g=
0;g<a.length;g++){k=a[g];var f=e+N(k,g);h+=O(k,b,c,f,d)}else if(f=y(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=e+N(k,g++),h+=O(k,b,c,f,d);else if("object"===k)throw b=""+a,Error(z(31,"[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b));return h}function P(a,b,c){if(null==a)return a;var e=[],d=0;O(a,e,"","",function(a){return b.call(c,a,d++)});return e}
function Q(a){if(-1===a._status){var b=a._result;b=b();a._status=0;a._result=b;b.then(function(b){0===a._status&&(b=b.default,a._status=1,a._result=b)},function(b){0===a._status&&(a._status=2,a._result=b)})}if(1===a._status)return a._result;throw a._result;}var R={current:null};function S(){var a=R.current;if(null===a)throw Error(z(321));return a}var T={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:G,IsSomeRendererActing:{current:!1},assign:l};
exports.Children={map:P,forEach:function(a,b,c){P(a,function(){b.apply(this,arguments)},c)},count:function(a){var b=0;P(a,function(){b++});return b},toArray:function(a){return P(a,function(a){return a})||[]},only:function(a){if(!L(a))throw Error(z(143));return a}};exports.Component=C;exports.PureComponent=E;exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T;
exports.cloneElement=function(a,b,c){if(null===a||void 0===a)throw Error(z(267,a));var e=l({},a.props),d=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=G.current);void 0!==b.key&&(d=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)H.call(b,f)&&!I.hasOwnProperty(f)&&(e[f]=void 0===b[f]&&void 0!==g?g[f]:b[f])}var f=arguments.length-2;if(1===f)e.children=c;else if(1<f){g=Array(f);for(var m=0;m<f;m++)g[m]=arguments[m+2];e.children=g}return{$$typeof:n,type:a.type,
key:d,ref:k,props:e,_owner:h}};exports.createContext=function(a,b){void 0===b&&(b=null);a={$$typeof:r,_calculateChangedBits:b,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:q,_context:a};return a.Consumer=a};exports.createElement=J;exports.createFactory=function(a){var b=J.bind(null,a);b.type=a;return b};exports.createRef=function(){return{current:null}};exports.forwardRef=function(a){return{$$typeof:t,render:a}};exports.isValidElement=L;
exports.lazy=function(a){return{$$typeof:v,_payload:{_status:-1,_result:a},_init:Q}};exports.memo=function(a,b){return{$$typeof:u,type:a,compare:void 0===b?null:b}};exports.useCallback=function(a,b){return S().useCallback(a,b)};exports.useContext=function(a,b){return S().useContext(a,b)};exports.useDebugValue=function(){};exports.useEffect=function(a,b){return S().useEffect(a,b)};exports.useImperativeHandle=function(a,b,c){return S().useImperativeHandle(a,b,c)};
exports.useLayoutEffect=function(a,b){return S().useLayoutEffect(a,b)};exports.useMemo=function(a,b){return S().useMemo(a,b)};exports.useReducer=function(a,b,c){return S().useReducer(a,b,c)};exports.useRef=function(a){return S().useRef(a)};exports.useState=function(a){return S().useState(a)};exports.version="17.0.2";


/***/ }),

/***/ 294:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(408);
} else {}


/***/ }),

/***/ 890:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DE": () => (/* binding */ bindActionCreators),
/* harmony export */   "UY": () => (/* binding */ combineReducers),
/* harmony export */   "MT": () => (/* binding */ createStore)
/* harmony export */ });
/* unused harmony exports __DO_NOT_USE__ActionTypes, applyMiddleware, compose */


/**
 * Adapted from React: https://github.com/facebook/react/blob/master/packages/shared/formatProdErrorMessage.js
 *
 * Do not require this module directly! Use normal throw error calls. These messages will be replaced with error codes
 * during build.
 * @param {number} code
 */
function formatProdErrorMessage(code) {
  return "Minified Redux error #" + code + "; visit https://redux.js.org/Errors?code=" + code + " for the full message or " + 'use the non-minified dev environment for full errors. ';
}

// Inlined version of the `symbol-observable` polyfill
var $$observable = (function () {
  return typeof Symbol === 'function' && Symbol.observable || '@@observable';
})();

/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var randomString = function randomString() {
  return Math.random().toString(36).substring(7).split('').join('.');
};

var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

// Inlined / shortened version of `kindOf` from https://github.com/jonschlinkert/kind-of
function miniKindOf(val) {
  if (val === void 0) return 'undefined';
  if (val === null) return 'null';
  var type = typeof val;

  switch (type) {
    case 'boolean':
    case 'string':
    case 'number':
    case 'symbol':
    case 'function':
      {
        return type;
      }
  }

  if (Array.isArray(val)) return 'array';
  if (isDate(val)) return 'date';
  if (isError(val)) return 'error';
  var constructorName = ctorName(val);

  switch (constructorName) {
    case 'Symbol':
    case 'Promise':
    case 'WeakMap':
    case 'WeakSet':
    case 'Map':
    case 'Set':
      return constructorName;
  } // other


  return type.slice(8, -1).toLowerCase().replace(/\s/g, '');
}

function ctorName(val) {
  return typeof val.constructor === 'function' ? val.constructor.name : null;
}

function isError(val) {
  return val instanceof Error || typeof val.message === 'string' && val.constructor && typeof val.constructor.stackTraceLimit === 'number';
}

function isDate(val) {
  if (val instanceof Date) return true;
  return typeof val.toDateString === 'function' && typeof val.getDate === 'function' && typeof val.setDate === 'function';
}

function kindOf(val) {
  var typeOfVal = typeof val;

  if (false) {}

  return typeOfVal;
}

/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */

function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
    throw new Error( true ? formatProdErrorMessage(0) : 0);
  }

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error( true ? formatProdErrorMessage(1) : 0);
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error( true ? formatProdErrorMessage(2) : 0);
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  /**
   * This makes a shallow copy of currentListeners so we can use
   * nextListeners as a temporary list while dispatching.
   *
   * This prevents any bugs around consumers calling
   * subscribe/unsubscribe in the middle of a dispatch.
   */

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */


  function getState() {
    if (isDispatching) {
      throw new Error( true ? formatProdErrorMessage(3) : 0);
    }

    return currentState;
  }
  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */


  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error( true ? formatProdErrorMessage(4) : 0);
    }

    if (isDispatching) {
      throw new Error( true ? formatProdErrorMessage(5) : 0);
    }

    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error( true ? formatProdErrorMessage(6) : 0);
      }

      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
      currentListeners = null;
    };
  }
  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */


  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error( true ? formatProdErrorMessage(7) : 0);
    }

    if (typeof action.type === 'undefined') {
      throw new Error( true ? formatProdErrorMessage(8) : 0);
    }

    if (isDispatching) {
      throw new Error( true ? formatProdErrorMessage(9) : 0);
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }
  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */


  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error( true ? formatProdErrorMessage(10) : 0);
    }

    currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
    // Any reducers that existed in both the new and old rootReducer
    // will receive the previous state. This effectively populates
    // the new state tree with any relevant data from the old one.

    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */


  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object' || observer === null) {
          throw new Error( true ? formatProdErrorMessage(11) : 0);
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _ref[$$observable] = function () {
      return this;
    }, _ref;
  } // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.


  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[$$observable] = observable, _ref2;
}

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty

}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return "The " + argumentName + " has unexpected type of \"" + kindOf(inputState) + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });
  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });
  if (action && action.type === ActionTypes.REPLACE) return;

  if (unexpectedKeys.length > 0) {
    return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, {
      type: ActionTypes.INIT
    });

    if (typeof initialState === 'undefined') {
      throw new Error( true ? formatProdErrorMessage(12) : 0);
    }

    if (typeof reducer(undefined, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === 'undefined') {
      throw new Error( true ? formatProdErrorMessage(13) : 0);
    }
  });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */


function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};

  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (false) {}

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }

  var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same
  // keys multiple times.

  var unexpectedKeyCache;

  if (false) {}

  var shapeAssertionError;

  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (false) { var warningMessage; }

    var hasChanged = false;
    var nextState = {};

    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);

      if (typeof nextStateForKey === 'undefined') {
        var actionType = action && action.type;
        throw new Error( true ? formatProdErrorMessage(14) : 0);
      }

      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }

    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
    return hasChanged ? nextState : state;
  };
}

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  };
}
/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass an action creator as the first argument,
 * and get a dispatch wrapped function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */


function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error( true ? formatProdErrorMessage(16) : 0);
  }

  var boundActionCreators = {};

  for (var key in actionCreators) {
    var actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }

  return boundActionCreators;
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });
}

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */

function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      var store = createStore.apply(void 0, arguments);

      var _dispatch = function dispatch() {
        throw new Error( true ? formatProdErrorMessage(15) : 0);
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return _objectSpread(_objectSpread({}, store), {}, {
        dispatch: _dispatch
      });
    };
  };
}

/*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 */

function isCrushed() {}

if (false) {}




/***/ }),

/***/ 53:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f,g,h,k;if("object"===typeof performance&&"function"===typeof performance.now){var l=performance;exports.unstable_now=function(){return l.now()}}else{var p=Date,q=p.now();exports.unstable_now=function(){return p.now()-q}}
if("undefined"===typeof window||"function"!==typeof MessageChannel){var t=null,u=null,w=function(){if(null!==t)try{var a=exports.unstable_now();t(!0,a);t=null}catch(b){throw setTimeout(w,0),b;}};f=function(a){null!==t?setTimeout(f,0,a):(t=a,setTimeout(w,0))};g=function(a,b){u=setTimeout(a,b)};h=function(){clearTimeout(u)};exports.unstable_shouldYield=function(){return!1};k=exports.unstable_forceFrameRate=function(){}}else{var x=window.setTimeout,y=window.clearTimeout;if("undefined"!==typeof console){var z=
window.cancelAnimationFrame;"function"!==typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");"function"!==typeof z&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var A=!1,B=null,C=-1,D=5,E=0;exports.unstable_shouldYield=function(){return exports.unstable_now()>=
E};k=function(){};exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<a?Math.floor(1E3/a):5};var F=new MessageChannel,G=F.port2;F.port1.onmessage=function(){if(null!==B){var a=exports.unstable_now();E=a+D;try{B(!0,a)?G.postMessage(null):(A=!1,B=null)}catch(b){throw G.postMessage(null),b;}}else A=!1};f=function(a){B=a;A||(A=!0,G.postMessage(null))};g=function(a,b){C=
x(function(){a(exports.unstable_now())},b)};h=function(){y(C);C=-1}}function H(a,b){var c=a.length;a.push(b);a:for(;;){var d=c-1>>>1,e=a[d];if(void 0!==e&&0<I(e,b))a[d]=b,a[c]=e,c=d;else break a}}function J(a){a=a[0];return void 0===a?null:a}
function K(a){var b=a[0];if(void 0!==b){var c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length;d<e;){var m=2*(d+1)-1,n=a[m],v=m+1,r=a[v];if(void 0!==n&&0>I(n,c))void 0!==r&&0>I(r,n)?(a[d]=r,a[v]=c,d=v):(a[d]=n,a[m]=c,d=m);else if(void 0!==r&&0>I(r,c))a[d]=r,a[v]=c,d=v;else break a}}return b}return null}function I(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}var L=[],M=[],N=1,O=null,P=3,Q=!1,R=!1,S=!1;
function T(a){for(var b=J(M);null!==b;){if(null===b.callback)K(M);else if(b.startTime<=a)K(M),b.sortIndex=b.expirationTime,H(L,b);else break;b=J(M)}}function U(a){S=!1;T(a);if(!R)if(null!==J(L))R=!0,f(V);else{var b=J(M);null!==b&&g(U,b.startTime-a)}}
function V(a,b){R=!1;S&&(S=!1,h());Q=!0;var c=P;try{T(b);for(O=J(L);null!==O&&(!(O.expirationTime>b)||a&&!exports.unstable_shouldYield());){var d=O.callback;if("function"===typeof d){O.callback=null;P=O.priorityLevel;var e=d(O.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?O.callback=e:O===J(L)&&K(L);T(b)}else K(L);O=J(L)}if(null!==O)var m=!0;else{var n=J(M);null!==n&&g(U,n.startTime-b);m=!1}return m}finally{O=null,P=c,Q=!1}}var W=k;exports.unstable_IdlePriority=5;
exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null};exports.unstable_continueExecution=function(){R||Q||(R=!0,f(V))};exports.unstable_getCurrentPriorityLevel=function(){return P};exports.unstable_getFirstCallbackNode=function(){return J(L)};
exports.unstable_next=function(a){switch(P){case 1:case 2:case 3:var b=3;break;default:b=P}var c=P;P=b;try{return a()}finally{P=c}};exports.unstable_pauseExecution=function(){};exports.unstable_requestPaint=W;exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=P;P=a;try{return b()}finally{P=c}};
exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();"object"===typeof c&&null!==c?(c=c.delay,c="number"===typeof c&&0<c?d+c:d):c=d;switch(a){case 1:var e=-1;break;case 2:e=250;break;case 5:e=1073741823;break;case 4:e=1E4;break;default:e=5E3}e=c+e;a={id:N++,callback:b,priorityLevel:a,startTime:c,expirationTime:e,sortIndex:-1};c>d?(a.sortIndex=c,H(M,a),null===J(L)&&a===J(M)&&(S?h():S=!0,g(U,c-d))):(a.sortIndex=e,H(L,a),R||Q||(R=!0,f(V)));return a};
exports.unstable_wrapCallback=function(a){var b=P;return function(){var c=P;P=b;try{return a.apply(this,arguments)}finally{P=c}}};


/***/ }),

/***/ 840:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(53);
} else {}


/***/ }),

/***/ 649:
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 135 124\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g clip-path=\"url(#clip0_407_1617)\"><path d=\"M129.308 121.132C127.765 118.765 126.103 116.319 124.34 113.853C122.577 111.387 120.814 109.04 119.072 106.813C121.541 104.211 123.735 101.366 125.622 98.3209V98.3209C125.622 98.3209 128.486 93.0707 130.489 88.3774C131.711 85.5136 138.242 64.5128 133.134 46.1171C125.121 17.2012 88.5841 -3.04392 55.8331 0.376667C50.1642 1.03294 23.4025 3.85692 8.61941 26.8067C-5.24221 48.3047 1.38814 71.6125 2.99063 76.7036C6.55629 87.5881 13.0127 97.3164 21.6798 104.864C33.6637 115.535 48.8414 122.011 64.8872 123.299C65.6395 124.519 66.1558 125.868 66.4095 127.277C66.6989 128.841 66.6989 130.445 66.4095 132.01C65.5682 137.976 65.1075 139.189 64.8872 142.351C64.5995 144.083 64.5995 145.85 64.8872 147.581C65.7485 151.022 68.6931 155.139 71.6377 154.84C74.0615 154.602 75.6439 151.479 76.6856 149.172C77.7116 146.866 78.3413 144.406 78.5485 141.894C79.08 138.273 79.2009 134.604 78.909 130.956C78.7288 128.542 78.3807 126.143 77.8674 123.777C79.6702 123.777 81.453 123.657 83.1356 123.538C92.5883 122.941 101.725 119.927 109.657 114.788C113.964 117.958 116.978 122.56 118.15 127.754C118.15 130.598 118.15 133.462 118.15 136.325C118.15 136.663 118.15 136.982 117.97 137.3C117.638 138.509 117.72 139.794 118.202 140.953C118.684 142.112 119.539 143.079 120.634 143.703C121.255 143.922 126.643 145.692 129.448 142.868C130.317 141.831 130.866 140.568 131.03 139.229C131.684 135.827 131.636 132.33 130.89 128.947C130.522 126.313 129.993 123.703 129.308 121.132V121.132Z\" fill=\"#C6C6C6\"></path><path d=\"M67.8709 37.047C70.9157 47.806 65.5073 61.7668 57.4547 63.1191C49.4021 64.4714 40.8288 53.792 39.1862 43.6496C37.784 34.9987 41.0091 22.8675 48.7611 20.9583C56.5132 19.0492 65.367 28.2569 67.8709 37.047Z\" fill=\"#F1F1F1\"></path><path d=\"M76.9048 34.2425C79.0081 47.4675 93.2503 58.7435 100.942 55.6809C107.152 53.1552 108.995 40.845 106.251 32.0151C102.965 21.3755 91.8281 11.4717 84.2162 14.1167C78.0667 16.3639 75.723 26.7649 76.9048 34.2425Z\" fill=\"#F1F1F1\"></path><path d=\"M57.1527 52.7605C58.5233 51.1639 58.5287 48.934 57.1646 47.7798C55.8006 46.6257 53.5838 46.9844 52.2132 48.581C50.8425 50.1776 50.8372 52.4075 52.2012 53.5617C53.5652 54.7158 55.7821 54.3572 57.1527 52.7605Z\" fill=\"#161616\"></path><path d=\"M97.2385 46.9927C98.6091 45.3961 98.6145 43.1661 97.2505 42.012C95.8865 40.8578 93.6696 41.2165 92.299 42.8132C90.9284 44.4098 90.923 46.6397 92.287 47.7939C93.651 48.948 95.8679 48.5893 97.2385 46.9927Z\" fill=\"#161616\"></path><path d=\"M129.308 121.132C127.766 118.766 126.103 116.319 124.341 113.853C122.578 111.387 120.815 109.041 119.072 106.813C121.146 104.585 123.023 102.183 124.681 99.6342C107.977 108.413 88.9305 111.799 70.1962 109.319C23.8439 102.637 2.08996 60.5161 0.0868396 56.2603C0.0189123 63.1866 1.02559 70.0821 3.0715 76.7043C6.63715 87.5888 13.0936 97.3171 21.7606 104.864C33.7232 115.52 48.8702 121.995 64.8879 123.3C65.6403 124.52 66.1566 125.869 66.4103 127.277C66.6996 128.842 66.6996 130.446 66.4103 132.01C65.569 137.977 65.1082 139.19 64.8879 142.352C64.6002 144.084 64.6002 145.85 64.8879 147.582C65.7492 151.023 68.6938 155.139 71.6384 154.841C74.0622 154.602 75.6447 151.48 76.6863 149.173C77.7123 146.867 78.342 144.407 78.5492 141.894C79.0807 138.273 79.2017 134.604 78.9098 130.956C78.7295 128.542 78.3815 126.144 77.8682 123.777C79.671 123.777 81.4537 123.658 83.1364 123.539C92.5891 122.942 101.725 119.927 109.658 114.788C113.965 117.958 116.979 122.56 118.151 127.755C118.151 130.598 118.151 133.462 118.151 136.326C118.151 136.664 118.151 136.982 117.971 137.3C117.639 138.51 117.72 139.795 118.202 140.953C118.685 142.112 119.54 143.08 120.635 143.704C121.256 143.923 126.644 145.693 129.449 142.869C130.317 141.832 130.867 140.568 131.031 139.229C131.685 135.828 131.637 132.33 130.891 128.948C130.522 126.313 129.994 123.703 129.308 121.132V121.132Z\" fill=\"url(#paint0_radial_407_1617)\"></path></g><defs><radialGradient id=\"paint0_radial_407_1617\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"translate(71.3981 62.0275) scale(116.822 115.982)\"><stop stop-color=\"#010001\" stop-opacity=\"0\"></stop><stop offset=\"1\" stop-color=\"#969696\"></stop></radialGradient><clipPath id=\"clip0_407_1617\"><rect width=\"135\" height=\"124\" fill=\"white\"></rect></clipPath></defs></svg>"

/***/ }),

/***/ 749:
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 106 34\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M51.7755 31.1506C51.8126 31.3922 42.8677 25.5837 39.8931 21.4909C50.7284 24.2788 60.478 25.7696 69.8599 26.035C81.2734 26.9308 90.8044 26.1433 101.913 23.0913C98.604 15.6702 99.0146 12.0925 104 6.80128L102.899 5.08654C98.6803 5.35947 91.1966 7.96049 80.1193 12.6158C74.2734 14.1246 68.8606 15.0725 63.3101 15.5186C57.0695 16.0201 50.6549 15.8871 43.2549 15.2035C44.9417 11.9502 48.433 8.7088 53.8621 3.37179L52.6449 2C39.5766 8.09916 29.7049 11.942 20.7074 13.9716C13.7936 15.0641 7.71416 15.3324 1 15.2035V17.6041C6.36223 17.6278 15.6947 19.9659 24.417 24.8733C33.3148 30.8911 43.3124 33.6653 48.8773 32.8652C50.1177 32.3112 50.7668 31.9512 51.7755 31.1506Z\" fill=\"#F1F1F1\" stroke=\"#1F1F1F\" stroke-width=\"2\"></path></svg>"

/***/ }),

/***/ 488:
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 417 323\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g clip-path=\"url(#clip0_483_1878)\"><path d=\"M126.193 222.019C129.01 217.701 132.046 213.238 135.266 208.739C138.485 204.239 141.704 199.957 144.887 195.893C140.378 191.146 136.369 185.954 132.924 180.399C132.924 180.399 127.693 170.819 124.034 162.256C121.803 157.03 109.876 118.711 119.205 85.1465C133.839 32.3857 200.569 -4.55401 260.384 1.68728C270.738 2.88473 319.615 8.03741 346.614 49.912C371.929 89.1378 359.82 131.666 356.896 140.955C350.382 160.815 338.591 178.566 322.761 192.337C300.874 211.808 273.154 223.624 243.848 225.975C242.474 228.201 241.531 230.662 241.068 233.232C240.539 236.087 240.539 239.013 241.068 241.868C242.604 252.754 243.446 254.968 243.848 260.737C244.374 263.897 244.374 267.121 243.848 270.281C242.275 276.558 236.897 284.07 231.519 283.525C227.093 283.09 224.202 277.393 222.3 273.183C220.426 268.976 219.276 264.487 218.898 259.903C217.927 253.295 217.706 246.601 218.239 239.945C218.568 235.54 219.204 231.163 220.141 226.845C216.849 226.845 213.593 226.628 210.52 226.41C193.256 225.321 176.569 219.821 162.082 210.444C154.216 216.228 148.71 224.626 146.57 234.103C146.57 239.292 146.57 244.517 146.57 249.742C146.57 250.359 146.57 250.94 146.899 251.52C147.505 253.727 147.357 256.071 146.476 258.186C145.596 260.3 144.033 262.065 142.034 263.205C140.9 263.604 131.059 266.833 125.937 261.68C124.35 259.788 123.347 257.483 123.047 255.04C121.852 248.834 121.94 242.452 123.303 236.28C123.975 231.473 124.941 226.711 126.193 222.019Z\" fill=\"#5FD655\"></path><path d=\"M126.191 222.021C129.008 217.703 132.045 213.24 135.264 208.74C138.484 204.24 141.703 199.958 144.886 195.895C141.099 191.828 137.671 187.445 134.642 182.795C165.15 198.814 199.936 204.992 234.152 200.467C318.808 188.274 358.54 111.419 362.196 103.654C362.32 116.292 360.481 128.874 356.746 140.957C350.232 160.817 338.441 178.567 322.613 192.338C300.765 211.78 273.101 223.595 243.847 225.976C242.473 228.203 241.53 230.664 241.066 233.233C240.538 236.088 240.538 239.015 241.066 241.869C242.603 252.756 243.444 254.969 243.847 260.739C244.372 263.899 244.372 267.122 243.847 270.282C242.274 276.56 236.896 284.071 231.518 283.527C227.091 283.091 224.201 277.394 222.299 273.185C220.425 268.978 219.275 264.488 218.896 259.904C217.926 253.297 217.704 246.602 218.238 239.946C218.567 235.542 219.203 231.165 220.14 226.847C216.847 226.847 213.591 226.629 210.518 226.412C193.254 225.323 176.568 219.823 162.08 210.446C154.215 216.229 148.709 224.627 146.569 234.104C146.569 239.293 146.569 244.518 146.569 249.744C146.569 250.361 146.569 250.941 146.898 251.522C147.504 253.729 147.355 256.073 146.475 258.187C145.594 260.301 144.032 262.066 142.033 263.206C140.898 263.605 131.057 266.835 125.935 261.682C124.349 259.79 123.345 257.485 123.045 255.042C121.851 248.835 121.938 242.453 123.301 236.282C123.974 231.475 124.939 226.712 126.191 222.021Z\" fill=\"url(#paint0_radial_483_1878)\"></path><path d=\"M210.163 325.019C207.346 320.701 204.31 316.238 201.09 311.739C197.871 307.239 194.651 302.957 191.468 298.893C195.978 294.146 199.986 288.954 203.432 283.399C203.432 283.399 208.663 273.819 212.322 265.256C214.553 260.03 226.48 221.711 217.151 188.147C202.517 135.386 135.787 98.4462 75.9715 104.687C65.6184 105.885 16.7415 111.038 -10.2578 152.912C-35.5742 192.138 -23.4648 234.666 -20.538 243.955C-14.0258 263.815 -2.23403 281.566 13.5951 295.337C35.4823 314.808 63.2024 326.624 92.5076 328.975C93.8819 331.201 94.825 333.662 95.2881 336.232C95.8166 339.087 95.8166 342.013 95.2881 344.868C93.7518 355.754 92.91 357.968 92.5076 363.737C91.9824 366.897 91.9824 370.121 92.5076 373.281C94.0808 379.558 99.4589 387.07 104.837 386.525C109.263 386.09 112.153 380.393 114.056 376.183C115.93 371.976 117.08 367.487 117.458 362.903C118.429 356.295 118.65 349.601 118.117 342.945C117.787 338.54 117.152 334.163 116.214 329.845C119.507 329.845 122.763 329.628 125.836 329.41C143.1 328.321 159.787 322.821 174.274 313.444C182.14 319.228 187.646 327.626 189.786 337.103C189.786 342.292 189.786 347.517 189.786 352.742C189.786 353.359 189.786 353.94 189.456 354.52C188.85 356.727 188.999 359.071 189.88 361.186C190.76 363.3 192.323 365.065 194.322 366.205C195.456 366.604 205.298 369.833 210.419 364.68C212.006 362.789 213.009 360.483 213.31 358.04C214.503 351.834 214.416 345.452 213.053 339.28C212.38 334.473 211.415 329.711 210.163 325.019Z\" fill=\"#F0A202\"></path><path d=\"M238.399 68.5968C232.838 88.2279 242.716 113.701 257.422 116.169C272.13 118.636 287.788 99.1504 290.787 80.6439C293.349 64.8596 287.458 42.7245 273.3 39.241C259.142 35.7576 242.972 52.5584 238.399 68.5968Z\" fill=\"#F1F1F1\"></path><path d=\"M221.899 63.4798C218.058 87.6103 192.047 108.185 177.998 102.597C166.657 97.9884 163.291 75.527 168.303 59.4159C174.303 40.0025 194.644 21.9316 208.546 26.7578C219.778 30.8581 224.058 49.836 221.899 63.4798Z\" fill=\"#F1F1F1\"></path><path d=\"M257.974 97.2684C255.471 94.3551 255.461 90.2864 257.952 88.1805C260.443 86.0744 264.492 86.729 266.996 89.6423C269.499 92.5556 269.508 96.6243 267.017 98.7301C264.526 100.836 260.477 100.182 257.974 97.2684Z\" fill=\"#161616\"></path><path d=\"M184.763 86.7442C182.259 83.8309 182.249 79.7622 184.741 77.6564C187.232 75.5502 191.281 76.2049 193.784 79.1181C196.287 82.0314 196.297 86.1001 193.806 88.2059C191.315 90.3118 187.266 89.6575 184.763 86.7442Z\" fill=\"#161616\"></path><path d=\"M97.9573 171.597C103.518 191.228 93.6403 216.701 78.9332 219.169C64.2265 221.636 48.5683 202.15 45.5682 183.644C43.0074 167.86 48.8976 145.725 63.0557 142.241C77.2138 138.758 93.3841 155.558 97.9573 171.597Z\" fill=\"#F1F1F1\"></path><path d=\"M114.457 166.48C118.298 190.61 144.309 211.185 158.358 205.597C169.699 200.988 173.065 178.527 168.053 162.416C162.053 143.002 141.712 124.932 127.81 129.758C116.578 133.858 112.298 152.836 114.457 166.48Z\" fill=\"#F1F1F1\"></path><path d=\"M78.3816 200.268C80.885 197.355 80.8949 193.286 78.4035 191.181C75.9126 189.074 71.8635 189.729 69.3604 192.642C66.857 195.556 66.8475 199.624 69.3385 201.73C71.8298 203.836 75.8786 203.182 78.3816 200.268Z\" fill=\"#161616\"></path><path d=\"M151.593 189.744C154.096 186.831 154.106 182.762 151.615 180.657C149.124 178.55 145.075 179.205 142.572 182.118C140.068 185.032 140.059 189.1 142.55 191.206C145.041 193.312 149.09 192.658 151.593 189.744Z\" fill=\"#161616\"></path><path d=\"M210.165 325.021C207.348 320.703 204.311 316.24 201.091 311.74C197.872 307.24 194.653 302.958 191.47 298.895C195.257 294.828 198.684 290.445 201.714 285.795C171.206 301.814 136.42 307.992 102.204 303.467C17.5477 291.274 -22.1831 214.419 -25.8415 206.654C-25.9656 219.292 -24.127 231.874 -20.3904 243.957C-13.8783 263.817 -2.08649 281.567 13.7427 295.338C35.5908 314.78 63.2549 326.595 92.509 328.976C93.8829 331.203 94.8259 333.664 95.2894 336.233C95.8179 339.088 95.8179 342.015 95.2894 344.869C93.7528 355.756 92.9114 357.969 92.509 363.739C91.9834 366.899 91.9834 370.122 92.509 373.282C94.0821 379.56 99.4599 387.071 104.838 386.527C109.265 386.091 112.155 380.394 114.057 376.185C115.931 371.978 117.081 367.488 117.46 362.904C118.43 356.297 118.651 349.602 118.118 342.946C117.789 338.542 117.153 334.165 116.216 329.847C119.508 329.847 122.764 329.629 125.837 329.412C143.102 328.323 159.788 322.823 174.275 313.446C182.141 319.229 187.647 327.627 189.787 337.104C189.787 342.293 189.787 347.518 189.787 352.744C189.787 353.361 189.787 353.941 189.458 354.522C188.852 356.729 189.001 359.073 189.881 361.187C190.761 363.301 192.324 365.066 194.323 366.206C195.457 366.605 205.299 369.835 210.42 364.682C212.007 362.79 213.01 360.485 213.311 358.042C214.505 351.835 214.418 345.453 213.055 339.282C212.382 334.475 211.416 329.712 210.165 325.021Z\" fill=\"url(#paint1_radial_483_1878)\"></path><path d=\"M180.785 345.464C183.602 341.146 186.639 336.683 189.858 332.184C193.078 327.684 196.297 323.402 199.48 319.338C194.97 314.591 190.962 309.399 187.517 303.844C187.517 303.844 182.285 294.264 178.627 285.701C176.395 280.475 164.469 242.156 173.798 208.592C188.431 155.831 255.161 118.891 314.977 125.132C325.33 126.33 374.206 131.483 401.206 173.357C426.522 212.583 414.412 255.111 411.488 264.4C404.975 284.26 393.183 302.011 377.353 315.782C355.466 335.253 327.746 347.069 298.441 349.42C297.067 351.646 296.124 354.107 295.66 356.677C295.132 359.532 295.132 362.458 295.66 365.313C297.197 376.199 298.038 378.413 298.441 384.182C298.966 387.342 298.966 390.566 298.441 393.724C296.867 400.004 291.49 407.515 286.112 406.971C281.685 406.536 278.795 400.837 276.893 396.63C275.019 392.423 273.869 387.93 273.49 383.348C272.519 376.74 272.298 370.046 272.832 363.39C273.161 358.985 273.796 354.609 274.734 350.291C271.441 350.291 268.185 350.073 265.112 349.855C247.848 348.766 231.162 343.266 216.675 333.889C208.809 339.673 203.303 348.071 201.163 357.548C201.163 362.737 201.163 367.962 201.163 373.187C201.163 373.804 201.163 374.385 201.492 374.965C202.098 377.172 201.949 379.517 201.069 381.631C200.188 383.745 198.626 385.51 196.626 386.651C195.492 387.049 185.651 390.277 180.529 385.126C178.943 383.234 177.939 380.928 177.639 378.485C176.445 372.279 176.532 365.897 177.895 359.725C178.568 354.918 179.533 350.156 180.785 345.464Z\" fill=\"#FE008B\"></path><path d=\"M292.991 192.042C287.43 211.673 297.308 237.146 312.015 239.614C326.722 242.081 342.381 222.595 345.382 204.089C347.94 188.305 342.052 166.17 327.893 162.686C313.734 159.203 297.564 176.003 292.991 192.042Z\" fill=\"#F1F1F1\"></path><path d=\"M276.492 186.925C272.65 211.055 246.639 231.63 232.591 226.042C221.25 221.433 217.884 198.972 222.896 182.861C228.896 163.447 249.236 145.377 263.139 150.203C274.37 154.303 278.65 173.281 276.492 186.925Z\" fill=\"#F1F1F1\"></path><path d=\"M312.566 220.713C310.063 217.8 310.054 213.731 312.545 211.626C315.036 209.519 319.085 210.174 321.588 213.087C324.091 216.001 324.101 220.069 321.61 222.175C319.119 224.281 315.07 223.627 312.566 220.713Z\" fill=\"#161616\"></path><path d=\"M239.355 210.189C236.852 207.276 236.842 203.207 239.333 201.101C241.825 198.995 245.873 199.65 248.376 202.563C250.88 205.476 250.89 209.545 248.398 211.651C245.907 213.757 241.858 213.103 239.355 210.189Z\" fill=\"#161616\"></path><path d=\"M180.784 345.466C183.601 341.148 186.637 336.685 189.857 332.185C193.076 327.685 196.296 323.404 199.479 319.34C195.691 315.273 192.264 310.89 189.235 306.24C219.742 322.259 254.529 328.437 288.745 323.912C373.402 311.719 413.133 234.864 416.788 227.099C416.912 239.737 415.074 252.319 411.338 264.402C404.825 284.262 393.033 302.012 377.207 315.783C355.357 335.226 327.693 347.04 298.439 349.421C297.065 351.648 296.122 354.109 295.659 356.679C295.13 359.533 295.13 362.46 295.659 365.315C297.196 376.201 298.037 378.414 298.439 384.184C298.965 387.342 298.965 390.566 298.439 393.728C296.866 400.004 291.488 407.515 286.11 406.971C281.684 406.536 278.794 400.841 276.891 396.63C275.017 392.423 273.867 387.934 273.489 383.349C272.518 376.742 272.297 370.047 272.83 363.391C273.16 358.987 273.795 354.61 274.733 350.292C271.44 350.292 268.184 350.074 265.111 349.857C247.847 348.768 231.16 343.268 216.673 333.891C208.807 339.674 203.302 348.072 201.161 357.549C201.161 362.738 201.161 367.964 201.161 373.189C201.161 373.806 201.161 374.386 201.491 374.967C202.097 377.174 201.948 379.518 201.067 381.632C200.187 383.746 198.624 385.512 196.625 386.651C195.491 387.049 185.649 390.281 180.528 385.127C178.941 383.235 177.938 380.93 177.637 378.487C176.444 372.28 176.531 365.898 177.894 359.727C178.567 354.92 179.532 350.157 180.784 345.466Z\" fill=\"url(#paint2_radial_483_1878)\"></path></g><defs><radialGradient id=\"paint0_radial_483_1878\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"translate(231.957 114.177) rotate(180) scale(213.36 211.623)\"><stop stop-color=\"#010001\" stop-opacity=\"0\"></stop><stop offset=\"1\" stop-color=\"#969696\"></stop></radialGradient><radialGradient id=\"paint1_radial_483_1878\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"translate(104.399 217.177) scale(213.36 211.623)\"><stop stop-color=\"#010001\" stop-opacity=\"0\"></stop><stop offset=\"1\" stop-color=\"#969696\"></stop></radialGradient><radialGradient id=\"paint2_radial_483_1878\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"translate(286.549 237.622) rotate(180) scale(213.36 211.623)\"><stop stop-color=\"#010001\" stop-opacity=\"0\"></stop><stop offset=\"1\" stop-color=\"#969696\"></stop></radialGradient><clipPath id=\"clip0_483_1878\"><rect width=\"417\" height=\"323\" fill=\"white\"></rect></clipPath></defs></svg>"

/***/ }),

/***/ 793:
/***/ ((module) => {

module.exports = "<svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 415.188 415.188\" style=\"enable-background:new 0 0 415.188 415.188;\" xml:space=\"preserve\"><path d=\"M412.861,78.976c3.404-6.636,2.831-14.159-0.15-20.404c0.84-7.106-1.02-14.321-7.746-19.855 c-6.262-5.151-12.523-10.305-18.781-15.457c-11.005-9.055-28.237-11.913-38.941,0c-48.619,54.103-99.461,105.856-152.167,155.725 c-39.185-36.605-78.846-72.713-118.223-108.868c-13.82-12.693-33.824-8.71-42.519,6.411c-12.665,6.286-22.931,14.481-31.42,28.468 c-4.042,6.664-3.727,15.076,0,21.764c25.421,45.578,74.557,85.651,114.957,122.529c-5.406,4.839-10.772,9.724-16.287,14.461 c-54.43,46.742-91.144,76.399-23.029,124.325c0.919,0.647,1.856,0.504,2.789,0.882c1.305,0.602,2.557,1.026,4.004,1.264 c0.45,0.017,0.87,0.093,1.313,0.058c1.402,0.114,2.774,0.471,4.195,0.192c36.621-7.18,70.677-35.878,101.576-67.48 c30.1,29.669,62.151,58.013,97.395,74.831c8.391,4.005,18.395,1.671,24.855-3.931c10.832,0.818,20.708-5.913,25.665-15.586 c0.734-0.454,1.207-0.713,2.002-1.21c15.748-9.838,17.187-29.431,5.534-42.936c-26.313-30.492-54.284-59.478-82.798-87.95 C316.426,196.043,380.533,141.939,412.861,78.976z\"></path><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>"

/***/ }),

/***/ 532:
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 24 24\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z\"></path></svg>"

/***/ }),

/***/ 137:
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 122.6 88.06\"><defs><style>.cls-1{fill:#e72380;}.cls-2{fill:#f1f1f1;}</style></defs><g id=\"Слой_1-2\" data-name=\"Слой 1\"><path class=\"cls-1\" d=\"M20.36,64.41a1.08,1.08,0,0,1-.79-.37l-.11-.14-.23.12a1,1,0,0,1-.38.08h-.08a1.17,1.17,0,0,1-.5-.16,1.23,1.23,0,0,1-.92-.7,1.69,1.69,0,0,1-.12-.28l-.48-.56a.94.94,0,0,1-.2-.35,14.37,14.37,0,0,0-.25-.8,1.47,1.47,0,0,1-.08-.28,1,1,0,0,1-.11-.45h0a2,2,0,0,1-.13-.29,1.35,1.35,0,0,1-.11-.59,2.32,2.32,0,0,1-.14-.35,1.48,1.48,0,0,1,0-1,.78.78,0,0,1,0-.22,1.49,1.49,0,0,1,0-.48,1.06,1.06,0,0,1,0-.67,1.19,1.19,0,0,1,.08-.2,1.82,1.82,0,0,1,.06-.46l0-.54a.93.93,0,0,1,.1-.37.55.55,0,0,1-.05-.17.91.91,0,0,1,0-.37,1.34,1.34,0,0,1,0-.35,1.41,1.41,0,0,1,.19-.61.78.78,0,0,1,.05-.18v-.1a1.24,1.24,0,0,1,.09-.39v-.06a1.72,1.72,0,0,1-.06-.34,1.86,1.86,0,0,1,.13-.84l.07-.13v0a1.12,1.12,0,0,1,.18-.5.36.36,0,0,1,0-.1,1.06,1.06,0,0,1-.19-.16,1,1,0,0,1-.27-.77.94.94,0,0,1,.17-.5h0a1,1,0,0,1,.09-.82h0a1,1,0,0,1-.07-.45,1.11,1.11,0,0,1,.08-.37.9.9,0,0,1,.08-.36,1.08,1.08,0,0,1,.39-.51,1.15,1.15,0,0,1,.23-.53l0-.24a.75.75,0,0,1-.26,0h0l-.22,0a1.12,1.12,0,0,1-.35-.06,1.27,1.27,0,0,1-.35.17l0,0a1.45,1.45,0,0,1-.61.34,1.26,1.26,0,0,1-.63.2h-.17a1.59,1.59,0,0,1-.75.43,1,1,0,0,1-.3,0h-.15l-.1,0-.1,0a1.39,1.39,0,0,1-.45.09h0a1,1,0,0,1-.3.1,1.07,1.07,0,0,1-.54.15,1.16,1.16,0,0,1-1.05-.71,1,1,0,0,1-.11-.44,1.15,1.15,0,0,1-.27-.45h0a1.18,1.18,0,0,1-1.08.76,1.16,1.16,0,0,1-.58-.18h0L8.41,47a1.06,1.06,0,0,1-.62-.48l-.07-.13a1.38,1.38,0,0,1-.25-.69l-.14-.14a.92.92,0,0,1-.16-.27,1.3,1.3,0,0,1-.07-.83,1.3,1.3,0,0,1-.32-.14A1,1,0,0,1,6.45,44a1.15,1.15,0,0,1-.11-1.23.46.46,0,0,1,0-.1,1.23,1.23,0,0,1,.27-.73A1.08,1.08,0,0,1,7,41.34,2.1,2.1,0,0,1,7.21,41s0,0,0,0a1.81,1.81,0,0,1,.55-.72l.14-.12a1.48,1.48,0,0,1,.36-.43,1.75,1.75,0,0,1,.66-.87,2.24,2.24,0,0,1,.87-.44,1.19,1.19,0,0,1,.59-.3,1.27,1.27,0,0,1,.53-.25,2.5,2.5,0,0,1,.23-.23,1.16,1.16,0,0,1,.76-.29h.16l.09,0a1.74,1.74,0,0,1,.76-.55,2.16,2.16,0,0,1,.57-.12l.23,0a1.12,1.12,0,0,1,.38.06,1.49,1.49,0,0,1,.27-.33l.13-.11A1,1,0,0,1,15,36l.07,0a1.26,1.26,0,0,1,.69-.22h0l.25-.07.36,0h.09a1.35,1.35,0,0,1,.76-.35h.06a1.53,1.53,0,0,1,.49-.11l.16,0a1,1,0,0,1,.3-.05h.07a.91.91,0,0,1,.42-.14l.43-.15h0a1.46,1.46,0,0,1,.13-.28l.05-.24a1.08,1.08,0,0,1,.2-.42c0-.14.09-.28.13-.41a2.08,2.08,0,0,1,.16-.45,1.53,1.53,0,0,1,.21-.59,2.62,2.62,0,0,1,.19-.31,1.6,1.6,0,0,1,.07-.33v-.11a1.21,1.21,0,0,1,.4-.8.85.85,0,0,1,.09-.38A.61.61,0,0,1,21,30.3a1.71,1.71,0,0,1,.2-.74l.12-.21h0a.89.89,0,0,1,0-.14.43.43,0,0,1,0-.16,1,1,0,0,1,.2-.54,2.09,2.09,0,0,1,.35-.33.93.93,0,0,1,0-.33l.08-.36a1.31,1.31,0,0,1,.12-.27l.06-.11a2.57,2.57,0,0,1,.12-.44,2.67,2.67,0,0,1,.21-.42.29.29,0,0,1,0-.09l-.07-.26a1.1,1.1,0,0,1,0-.51,4.86,4.86,0,0,1,.25-.68c.08-.17.15-.32.23-.47L23,24l0-.09a2.1,2.1,0,0,1,.2-.64l.08-.17a1,1,0,0,1-.61.2h-.07a1.25,1.25,0,0,1-.32-.08h-.05a1,1,0,0,1-.42.24.85.85,0,0,1-.31.06l-.24.1a1.55,1.55,0,0,1-.49.09,1.19,1.19,0,0,1-.53.19l-.26.18a.91.91,0,0,1-.26.13,2.21,2.21,0,0,1-.45.11,1.28,1.28,0,0,1-.51.13,1,1,0,0,1-.77.36h0a1,1,0,0,1-.51.14h-.14a1,1,0,0,1-.4.18l-.27.06h-.08a1,1,0,0,1-.77.34h0a1,1,0,0,1-.36.07,1,1,0,0,1-.52.13,1,1,0,0,1-.34-.06,1,1,0,0,1-.64.38l-.16,0-.25,0a1,1,0,0,1-.68.27l-.21,0a1,1,0,0,1-.58.18H12a1.36,1.36,0,0,1-.38.08h-.07a.9.9,0,0,1-.32.09,2.34,2.34,0,0,1-.45.18l-.19,0-.05,0a1.63,1.63,0,0,1-.45.09,1.48,1.48,0,0,1-.49.2,1.55,1.55,0,0,1-.37,0H9.09a1.11,1.11,0,0,1-.26.07l-.22,0h0a1.41,1.41,0,0,1-.49.12H7.81a1.23,1.23,0,0,1-.51.11H7.19A1.57,1.57,0,0,1,7,27.6l-.61.07a3.28,3.28,0,0,1-.52.06l-.23,0h0a1.76,1.76,0,0,1-.76.18,1.54,1.54,0,0,1-.61-.12l-.24,0a1.17,1.17,0,0,1-.48-.12,1.24,1.24,0,0,1-.36-.11h-.1a1.12,1.12,0,0,1-.72-.31,1.1,1.1,0,0,1-.81-.77,1.13,1.13,0,0,1-.06-.32,1.31,1.31,0,0,1-.36-.67,2.25,2.25,0,0,1-.1-.63,1.71,1.71,0,0,1,.07-.58,1.7,1.7,0,0,1,.07-.7,1,1,0,0,1,.31-.5l.26-.22a1,1,0,0,1,.65-.24,1,1,0,0,1,.51.14l.12.07a2.21,2.21,0,0,1,.35.16l.14-.15a1.3,1.3,0,0,1,.6-.26,1.3,1.3,0,0,1,.69-.2,1.26,1.26,0,0,1,.28,0H5.2v0a1.19,1.19,0,0,1,.72-.27,1,1,0,0,1,.47.11,1.05,1.05,0,0,1,.4-.07h.09l.21,0,.2,0h0a1.94,1.94,0,0,1,.3-.13,1.4,1.4,0,0,1,.32-.06,1.79,1.79,0,0,1,.37-.15A1,1,0,0,1,9,21.44l.45,0a1.75,1.75,0,0,1,.84-.23l.07,0a.12.12,0,0,1,.05,0,1.19,1.19,0,0,1,.73-.29,1.58,1.58,0,0,1,.43-.1,1.21,1.21,0,0,1,.34-.08H12l.11-.05a1.19,1.19,0,0,1,.72-.27h0l0,0a1,1,0,0,1,.65-.24h.07s.06,0,.17-.05l.06,0a1.28,1.28,0,0,1,.51-.16,2.26,2.26,0,0,1,.56-.28,1.45,1.45,0,0,1,.52-.1h.12l.07-.06a1.25,1.25,0,0,1,1-.43h0l.23-.07a1.33,1.33,0,0,1,.24-.1,1.55,1.55,0,0,1,.5-.26l.23-.07a1.15,1.15,0,0,1,.73-.25h.08l.08-.09a1.2,1.2,0,0,1,.57-.27l.18-.08,0,0a1.05,1.05,0,0,1,.79-.38h.05a1.12,1.12,0,0,1,.4-.1,1.12,1.12,0,0,1,.65-.2,1,1,0,0,1,.17-.1,1.46,1.46,0,0,1,.73-.29,1.17,1.17,0,0,1,.49-.11h.06a1.12,1.12,0,0,1,.46-.14l.23-.17a1.34,1.34,0,0,1,.51-.23,1.38,1.38,0,0,1,.63-.23.93.93,0,0,1,.33-.21,1.43,1.43,0,0,1,.43-.11,3.12,3.12,0,0,1,.54-.25l.6-.22.21-.35.11-.16,0,0a1.22,1.22,0,0,1,.38-.88,3.33,3.33,0,0,1,.55-.6,1.6,1.6,0,0,1,1-.43H29a1.3,1.3,0,0,1,.22-.19l.26-.16A1,1,0,0,1,30,12h.07a2,2,0,0,1,.38.07,1,1,0,0,1,.77.4,1.07,1.07,0,0,1,.55-.16,1,1,0,0,1,.65.23l.15.1.15,0,.2,0h.14l.1-.06.15-.08a2.63,2.63,0,0,1,.49-.15,1,1,0,0,1,.36-.16,3.58,3.58,0,0,1,.79-.27,3,3,0,0,1,.6-.08h0l.37-.17a1,1,0,0,1,.39-.08h.07a5.36,5.36,0,0,1,1.19-.28l.28-.1a3.77,3.77,0,0,1,.6-.16,11.6,11.6,0,0,1,1.36-.11h0a1,1,0,0,1,.5-.14h.14a1.39,1.39,0,0,1,.3,0h.3a1.8,1.8,0,0,1,.37,0h.1a1.86,1.86,0,0,1,.33,0h.17a1.05,1.05,0,0,1,.4-.08,1.12,1.12,0,0,1,.38-.06,2,2,0,0,1,.38,0,2.56,2.56,0,0,1,.72.25.85.85,0,0,1,.23,0h.21l.22,0h.1a1.73,1.73,0,0,1,.77.2,1.9,1.9,0,0,1,.35.21,1.38,1.38,0,0,1,.51.15h.07a1.33,1.33,0,0,1,.83.38,1,1,0,0,1,.4.22,1.42,1.42,0,0,1,.65.52,1.91,1.91,0,0,1,.14.21,1.13,1.13,0,0,1,.37.35.89.89,0,0,1,.14.35.57.57,0,0,1,.11.11.82.82,0,0,1,.16.25,1.31,1.31,0,0,1,.49.56,1.05,1.05,0,0,1,.07.58,1.63,1.63,0,0,1,.37,1,9,9,0,0,1,0,1.15,1.14,1.14,0,0,1-.1.36,4,4,0,0,0-.17.4q-.09.27-.18.48a1.19,1.19,0,0,1-.08.16c-.38.6-.78,1.14-1.4,1.19h0a3.38,3.38,0,0,1-.61.33,1.42,1.42,0,0,1-.53.13,1,1,0,0,1-.93-.61,1.4,1.4,0,0,1-.53.09,4.75,4.75,0,0,1-.56-.05A1.46,1.46,0,0,1,44,18.88a1.08,1.08,0,0,1-.13-.58l-.08,0-.18-.11a1,1,0,0,1-.22-.09h-.14a1.13,1.13,0,0,1-.32.05h-.13a1.21,1.21,0,0,1-.34-.08,2.1,2.1,0,0,1-.55-.13h0l-.18,0a.91.91,0,0,1-.23,0,.49.49,0,0,1-.12.13,1.07,1.07,0,0,1-.71.26,1,1,0,0,1-.42-.09A1.37,1.37,0,0,1,40,18l-.06,0a1,1,0,0,1-.72.32.8.8,0,0,1-.3-.06,1,1,0,0,1-.53.21h-.17a1.26,1.26,0,0,1-.27,0l-.2,0a.86.86,0,0,1-.27-.05,1,1,0,0,1-.56.17h-.2l-.13,0s0,0,0,0a2.05,2.05,0,0,1-1,.41,1,1,0,0,1-.52.14h0a1.18,1.18,0,0,1-.31.08.86.86,0,0,1-.31.17,1.1,1.1,0,0,1,.5,1,1.13,1.13,0,0,1-.26.66,1.06,1.06,0,0,1-.25.84.61.61,0,0,1,0,.11v.08a1.43,1.43,0,0,1-.25,1.09,1.05,1.05,0,0,1-.19.49,1.19,1.19,0,0,1-.37.85,1.41,1.41,0,0,1-.19.68A1.34,1.34,0,0,1,33,26a1.05,1.05,0,0,1-.22.54.7.7,0,0,1-.22.2A1.54,1.54,0,0,1,32.1,28a1.28,1.28,0,0,1-.18.51,1.49,1.49,0,0,1-.07.43,2.07,2.07,0,0,1-.15.34h0a1.16,1.16,0,0,1-.46.86,1.18,1.18,0,0,1-.28.63.93.93,0,0,1-.15.39,1.53,1.53,0,0,1-.11.58,1.21,1.21,0,0,1-.3.5v0a1.06,1.06,0,0,1-.09.35.86.86,0,0,1-.21.44h0a1.29,1.29,0,0,1,.28.08h.22l.14,0a1.35,1.35,0,0,1,.5-.1h.08a1.13,1.13,0,0,1,.59-.17.93.93,0,0,1,.32,0h0a1.18,1.18,0,0,1,.36.06h0l0,0a1.07,1.07,0,0,1,.39-.07h.07a1.06,1.06,0,0,1,.35.09,1.58,1.58,0,0,1,.38,0,1.21,1.21,0,0,1,.38-.06,1.52,1.52,0,0,1,.53.11l.12,0a1.35,1.35,0,0,1,.5.1l.24.1.36,0a1.43,1.43,0,0,1,.72.21.86.86,0,0,1,.24.11,1.8,1.8,0,0,1,.35.31.76.76,0,0,1,.24.2.84.84,0,0,1,.16.24,1.09,1.09,0,0,1,.33.27l.11.06a1,1,0,0,1,.46.62,1.33,1.33,0,0,1-.43,1.32,1,1,0,0,1-.53.3,1,1,0,0,1-.08.14,4.12,4.12,0,0,1,.31.43,2.73,2.73,0,0,0,.18.26,1,1,0,0,1,.23.48,1.37,1.37,0,0,1-.65,1.42.85.85,0,0,1-.34.14l-.43.09-.19,0-.19.07a.9.9,0,0,1-.37.07h-.25l-.11,0h-.17A1.15,1.15,0,0,1,35,40l-.18,0-.4,0H34l-.6,0a5.4,5.4,0,0,0-.6.09l-.29.06a1.71,1.71,0,0,1-.93.27h-.11l-.12.06-.17.07-.86.3L30,41a1.23,1.23,0,0,1-.66.26l-.07,0a1.25,1.25,0,0,1-.53.13h-.12l-.21.09-.17.08a1.46,1.46,0,0,1-.41.11l-.07,0-.27.11a1.12,1.12,0,0,1-.69.32,1.11,1.11,0,0,1-.4.09,1.08,1.08,0,0,1-.32.26l-.2.14a1.27,1.27,0,0,1-.18.43.11.11,0,0,0,0,0,1.11,1.11,0,0,1-.4.6,1.11,1.11,0,0,1,0,.6,1.13,1.13,0,0,1-.06.32,1.09,1.09,0,0,1-.18.61l-.05.06,0,.06s0,.11-.07.18l0,.1a.67.67,0,0,1,0,.2,1.13,1.13,0,0,1-.47.84,1,1,0,0,1,.08.46,1.23,1.23,0,0,1-.16.5,1.11,1.11,0,0,1-.09.32l0,0a1,1,0,0,1,0,.79l-.06.17a1.15,1.15,0,0,1-.41.44v0a1.19,1.19,0,0,1-.29.66,1,1,0,0,1-.16.45v.13a.92.92,0,0,1,0,.16.78.78,0,0,1,0,.16,1,1,0,0,1-.52.89.9.9,0,0,1-.06.56.8.8,0,0,1-.08.16,1,1,0,0,1,.09.49,1,1,0,0,1-.11.4.88.88,0,0,1,0,.36.79.79,0,0,1-.06.22,1.27,1.27,0,0,1,0,.68,1,1,0,0,1-.07.25,1,1,0,0,1,.07.55,1,1,0,0,1-.61.79l-.13,0a2.11,2.11,0,0,1,0,.28,1.16,1.16,0,0,1-.21.67.9.9,0,0,1,.07.27l.06.18a1.4,1.4,0,0,1,.06.49,2.12,2.12,0,0,1,.11.45,1.46,1.46,0,0,1,.21.16A1.3,1.3,0,0,1,22.73,60a1.67,1.67,0,0,1-.28.73,1.12,1.12,0,0,1-.32.33,1.37,1.37,0,0,1-.49.2,1,1,0,0,1-.15.24,2.69,2.69,0,0,1,.21.35,2,2,0,0,1,.12.26,1.27,1.27,0,0,1,.27.8,1.19,1.19,0,0,1-.47.84l-.07.06-.06.06a2.82,2.82,0,0,1-.4.27,1,1,0,0,1-.73.32ZM24,48.8Z\"></path><path class=\"cls-2\" d=\"M42.89,11.57l.21,0a1.45,1.45,0,0,1,.49.18.73.73,0,0,0,.41.15h.1c.1,0,.15,0,.15,0s0-.06,0-.06h0s.05,0,.09.07a.19.19,0,0,1,.12-.07s.06.05,0,.14,0,.14.06.14a.22.22,0,0,0,.12-.07v-.18h.08a.86.86,0,0,1,.34.1.78.78,0,0,1,.34.27.3.3,0,0,0,.14,0h0l.11,0h0a.67.67,0,0,1,.35.15l.3,0a.5.5,0,0,1,.34.26.52.52,0,0,0,.25.13s0,0,0,0l.06.06.17.13h0q.1,0,.24.18a.57.57,0,0,1,.15.35c0,.08.13.13.29.14s0,.06,0,.18a.3.3,0,0,0,0,.36.17.17,0,0,0,.12.06h.06s0-.05.09-.05h0c.08,0,.12,0,.12.07v.12s.06,0,0,.06.07.13.11.13h.06s0,.07.12.07a.36.36,0,0,1,.14.13s0,.06-.07.06h0a.13.13,0,0,0-.14.11.33.33,0,0,0,0,.24l.07-.06a.19.19,0,0,1,.12-.07l0,0s0,.1-.1.17,0,.14,0,.14h0c.08,0,.15.07.22.19s0,.07.06.07.13.14.15.4a6.65,6.65,0,0,1,0,1,3.55,3.55,0,0,0-.22.53c-.05.16-.1.29-.15.41-.31.49-.53.73-.65.73h0a.13.13,0,0,0,0-.12H48s0,0,0,.13,0,0-.24.1a3.87,3.87,0,0,1-.57.32l-.15.05s0,0,0-.06,0,0,0-.06l.06-.06a.49.49,0,0,1,.08-.23l.13-.23.05,0s0-.05,0-.16a.49.49,0,0,1,.09-.39.74.74,0,0,1,.26-.25.34.34,0,0,0,.14-.23,1.07,1.07,0,0,0-.1-.37c-.07-.12-.08-.2,0-.24s.09-.12.08-.12l0,0-.23.19a2.85,2.85,0,0,0-.23.26c-.06.09-.11.14-.15.14h-.07a.33.33,0,0,1-.1.18l-.17.22-.12.12h-.06l-.07.12a.33.33,0,0,1-.18.09s0,0-.07-.05,0,0,0,0-.07.05-.14.13a3.17,3.17,0,0,0-.3.34c0,.07-.09.11-.27.11a2.31,2.31,0,0,1-.4,0c-.27-.06-.39-.15-.34-.27l0-.3a1,1,0,0,1-.09-.42v-.06l-.06-.07a.34.34,0,0,1-.1-.25l-.06-.06h0c-.09,0-.13,0-.13.05s0,.21,0,.21a.39.39,0,0,1-.14-.05c0-.08,0-.13,0-.15a.19.19,0,0,0,0-.09s0-.07,0-.12l-.12.06a.28.28,0,0,1-.19.13h0c-.06,0-.09,0-.08-.1s0-.06,0-.06a.21.21,0,0,0-.09,0s0,0,0,0,0,0,0-.08,0,0,0,0l-.08,0-.18,0a.15.15,0,0,1-.17-.12c0-.05,0-.08,0-.08s-.05,0-.08.13-.14.11-.18.11h-.06a.05.05,0,0,0-.06-.06.05.05,0,0,1-.06-.06c0-.06,0-.09,0-.09l-.06,0s0,.07-.07.11a1.37,1.37,0,0,1-.35-.08c-.08,0-.12,0-.12-.07s0-.13-.09-.13a.6.6,0,0,0-.27.1.05.05,0,0,1-.06.06h0a.25.25,0,0,0-.18-.08s0,0,0-.12l-.13.11h-.09a.25.25,0,0,0-.15,0c-.06.05-.09.07-.11.07s0,0,0,0a.19.19,0,0,0-.12-.07.15.15,0,0,0-.11.06s0,.05,0,.05h0s0,0,0-.06,0,0-.11,0h-.19a2.31,2.31,0,0,0-.43.09h-.06l-.07,0s-.05,0-.05.08l-.48,0a.3.3,0,0,1-.15,0,.19.19,0,0,0-.09,0s-.06,0,0-.06l-.08.17-.24.11L38.58,17h0a0,0,0,0,0,0-.05h-.07a.1.1,0,0,0-.11.11.29.29,0,0,1-.17.05h-.1a.54.54,0,0,0-.22,0h-.2c-.19,0-.28,0-.29.09l-.24,0h-.06c-.16,0-.24.06-.25.16l-.19.05s0-.06,0-.06,0,0,0,.06a.25.25,0,0,1-.11,0s-.06,0-.07-.07-.07-.06-.09-.06,0,0,0,.05l-.14.07s0,0,0,0-.07-.09-.1-.09,0,0-.08.08a.39.39,0,0,1-.23.12l-.08,0a.19.19,0,0,0-.11,0,.11.11,0,0,0-.07,0l-.12.11h0a.52.52,0,0,0-.21,0l-.25.1c-.15-.05-.19-.09-.11-.13s0,0,0,0l-.16,0-.2.29h0a.11.11,0,0,0-.12.11l-.18,0c0-.08-.06-.12-.08-.12s0,0,0,.11,0,.12-.06.12h0v-.06a.05.05,0,0,0-.06-.06h0s-.05,0-.05.05v.06a.3.3,0,0,0-.07.18s0,0,0,0-.05,0-.07-.11a.41.41,0,0,0-.18-.1l-.05,0c-.09.07-.11.11-.07.12s0,0,0,0h0a.44.44,0,0,1,0,.09s0,0,0,0l0,0s0,.06,0,.18a.4.4,0,0,1-.22.12c-.06,0-.09-.07-.08-.2h-.06l.05.19c.1.19.08.29-.06.29H33c-.11,0-.1,0,0,.12s0,.14,0,.18v.12a.15.15,0,0,1,.11.07c0,.12,0,.17-.07.17h0l.06.07a.19.19,0,0,1,0,.09A.19.19,0,0,0,33,20a.54.54,0,0,0-.14.29.43.43,0,0,1-.14.24l-.18.76-.21.41a.25.25,0,0,0-.07.12l0,.29-.5,1.11-.47,1.47a.91.91,0,0,0-.17.32,1.27,1.27,0,0,1-.11.26.9.9,0,0,0-.08.24.19.19,0,0,0-.07.11.18.18,0,0,1-.13.17l-.06.06a.37.37,0,0,1,0,.27.92.92,0,0,0-.09.38,2,2,0,0,1-.18.41c-.07.12-.09.19-.05.24l-.14.23-.35.75a.67.67,0,0,0-.15.35c0,.12,0,.2,0,.24a.58.58,0,0,0-.11.27c0,.13-.07.26-.11.38a1,1,0,0,0-.22.46.55.55,0,0,1-.07.24,4.19,4.19,0,0,0-.22.46c-.11.44-.19.65-.23.65h0a.28.28,0,0,0-.07.11.57.57,0,0,1-.06.42.86.86,0,0,1-.24.4l-.08.36-.16.47-.15.41-.22.59c-.16.16-.15.25,0,.25h.07l.08,0s0,0,0,.06v.24l-.12.05a.3.3,0,0,0-.16.11s0,.06.09.06l.31-.15a1.34,1.34,0,0,1,.6-.23.17.17,0,0,1,.13,0s0,.06.12.07h.06l0-.07h0l.06.07c0,.08,0,.12,0,.12h0a1.68,1.68,0,0,0,.28-.16A2.26,2.26,0,0,1,29.6,34h0s0,0,0,.13,0,.17.07.17a.28.28,0,0,0,.17-.1.73.73,0,0,1,.1-.14h0s0,0,0,.15a.07.07,0,0,0,.12,0,.49.49,0,0,1,.17,0c.05,0,.07,0,.07.06l.25-.1c.08,0,.12,0,.11.07s.07.11.12.11.11-.05.19-.15a.62.62,0,0,1,.29-.11c.05,0,.07,0,.07.08a.28.28,0,0,0,.14.16h0s.08,0,.11-.09c.14-.22.24-.33.31-.33s.1.06.13.18,0,0,0,0,.05,0,.11-.07.08-.08.11-.08,0,0,.07.09a.23.23,0,0,0,.13.07,0,0,0,0,0,.05-.05.26.26,0,0,1,.18,0h.07a1.29,1.29,0,0,0,.3-.09q.12,0,.06.06s0,.06.17.07a.35.35,0,0,1,.17,0,.5.5,0,0,1,.25.07h.17a.54.54,0,0,0,.25,0,.13.13,0,0,1,.11,0,.64.64,0,0,1,.25.08.6.6,0,0,1,.18,0,.19.19,0,0,0,.12,0l.08,0a.58.58,0,0,1,.19,0,.83.83,0,0,1,.26.14s0,0,.08,0l.16,0,.36,0c.15,0,.25,0,.29.09s.06.06.18.07q.39.27,0,.36h0c-.1,0-.12.06,0,.18a.32.32,0,0,0,.23.13s0-.07.07-.07,0,0,0,0,0,.08,0,.12,0,0,0,0l.08,0a.09.09,0,0,1,.07,0,.3.3,0,0,1,.11,0h.3l0,.13a.25.25,0,0,0,.12.07l.23.13a.34.34,0,0,1-.15.35s0,.06-.05.06h0a.16.16,0,0,0-.15-.09h-.09c-.12,0-.18.07-.19.11a2.36,2.36,0,0,1-.21.43.6.6,0,0,1-.26.31h0c-.12,0-.22.12-.32.34s-.17.37,0,.37h.05s0,0,0,0,.08,0,.13.09.09.18.17.19l.18,0a3.39,3.39,0,0,1,.28.39,3,3,0,0,0,.27.38.38.38,0,0,1-.21.4l-.43.09h0a.66.66,0,0,0-.23,0l-.28.1h-.18s0,0-.08,0l-.16,0h-.11c-.08,0-.1,0-.06-.08s-.1-.11-.3-.11a4.31,4.31,0,0,0-.54.05l-.37,0H34c-.2,0-.42,0-.66,0s-.48,0-.7.09l-.52.12a.8.8,0,0,1-.51.2h-.11a1.22,1.22,0,0,0-.61.19L30,40l-.3.09a.66.66,0,0,0-.25.11c0,.07-.07.1-.19.1h-.06l-.15,0h0a.4.4,0,0,0-.15,0,.21.21,0,0,1-.11.05h0s0,0,.06-.06v-.18s0,0,0,0h0a3.74,3.74,0,0,0-.38.24.72.72,0,0,1-.28.16.49.49,0,0,0-.22.11.78.78,0,0,1-.21,0h-.05a.32.32,0,0,0-.23.1l-.28.1h0s0,0,0-.12,0-.08,0-.08-.06,0-.11.13a.25.25,0,0,0-.07.12v0h-.06c0-.06,0-.08-.05-.08v0a.17.17,0,0,0,.06.12c0,.07-.07.1-.2.1h-.05a.45.45,0,0,1-.23.08h-.05c-.06,0,0,0,0-.09s.09-.11,0-.12h-.08a.1.1,0,0,0-.11.11l-.32.28h0s-.08,0-.12.11-.09.11-.13.11h0a1.63,1.63,0,0,1-.32.22.3.3,0,0,1-.15,0,.21.21,0,0,1-.15-.07V42c0,.07,0,.11,0,.11h0s0,0,0,.06v.12a.05.05,0,0,0,.06.06.41.41,0,0,1-.33.34.67.67,0,0,1-.13.17l0,0,0,0s0,0,0,0a.2.2,0,0,0,.11-.07h.12s0,.08-.07.12a.51.51,0,0,1-.2,0h0c-.12-.05-.13-.19,0-.43-.09.08-.13.14-.13.18v.11c0,.08,0,.12-.11.12h0s-.05.05,0,.06.06.06,0,.18,0,.08,0,.12,0,.06,0,.06h0l-.07,0s-.07,0-.09.1a.41.41,0,0,0,0,.27.3.3,0,0,0-.07.18c.07.07,0,.11,0,.11h-.05c-.07,0-.11,0-.14.11a.16.16,0,0,0,.08.19h0c.11,0,.19-.08.24-.23v-.24s0-.11.05-.2a.26.26,0,0,1,.21-.14h0l0,.3c.06.16.08.25,0,.25h0v.18a.76.76,0,0,1,0,.11.19.19,0,0,0,0,.12c-.09.07-.09.11,0,.12s0,.12-.05.12h0l-.06.06,0,.06a1.52,1.52,0,0,0-.18.41,1.16,1.16,0,0,0-.07.54c0,.12-.17.21-.5.26V46a.25.25,0,0,0,.07-.17s0-.06,0-.06,0,0-.05.08a1,1,0,0,0-.05.27.43.43,0,0,1,0,.3.25.25,0,0,0,0,.24.36.36,0,0,0-.11.29.35.35,0,0,1-.05.24v.06H23l0,.3c0,.1,0,.16,0,.16s0,0,0,0a.44.44,0,0,1,.22-.19h0s.06,0,.05.1-.11.16-.31.22h0s-.06.05-.06.15a.42.42,0,0,1-.14.26,1.74,1.74,0,0,1-.07.47s-.09.08-.22.11h0a.23.23,0,0,0-.15,0h0v0a1,1,0,0,0-.12.15.12.12,0,0,0,0,.19l.2-.17c.05-.06.09-.1.12-.1s.05,0,.06.06.08,0,0,.12v.11c0,.16-.06.26-.14.29v.18a.69.69,0,0,1,0,.37.76.76,0,0,0-.16.17s-.12.09-.28.16-.24.24-.2.28-.08.12,0,.12h.05a.25.25,0,0,0,.16,0,.45.45,0,0,1,.21-.1q.07,0,0,.12a.2.2,0,0,1,0,.21s0,.09.06.09l-.31,0h0a.38.38,0,0,0-.34.21.16.16,0,0,1-.12,0h0v.06h.05c.05,0,.07.05.06.14a.42.42,0,0,1-.14.29l-.07.06c.08,0,.12,0,.12.07h.18s.08.05.11.13l-.12,0h0s-.14.07-.31.22-.2.22-.08.23.05-.07.07-.07,0,0,0,0,0,.1-.11.17,0,.08.11.13a.33.33,0,0,0,.23.2h.12c0,.07-.17.14-.5.2h0l-.08,0s0,0,0,0,.09.08.05.12l0,.24.17.13s0-.05.06-.05h0l.06-.06h.12c.08,0,0,.1-.25.16s-.27.14-.21.35a0,0,0,0,1,0,.05h-.06c-.05,0-.07,0-.07,0s0,0,.11,0a.35.35,0,0,0,.14,0,.23.23,0,0,0,.17-.07h.05c.16,0,.22.11.17.32s-.09.13-.26.16a.26.26,0,0,1-.18,0H21.2c-.12,0-.13.07,0,.12s.08.06,0,.06h0s-.1.08-.19.23-.1.19-.09.19h0a.22.22,0,0,1,.17.07s.06.06.18.07a.46.46,0,0,1,.28-.14.22.22,0,0,1,.14.05l-.24.11h0a.26.26,0,0,0-.15,0l-.22.1-.16.14s0,.13,0,.33,0,.3,0,.3h0c-.06,0-.06,0,0,.12s.13.17,0,.24h0s-.05,0-.05.06,0,.05-.06.05h0a.38.38,0,0,1-.05.33c-.07.13-.12.2-.16.2h0s0,.12.05.24a.11.11,0,0,0,.11.09l.06,0c0-.06,0-.09,0-.09h0s0,.07,0,.15l.1.28a.2.2,0,0,1,0,.21c-.13.11-.11.17,0,.18.1.28.13.43.09.43h0s0,.14,0,.3.14.25.22.26a.42.42,0,0,1,.26.14.31.31,0,0,1,.13.25,1.06,1.06,0,0,1-.14.29.29.29,0,0,1-.15.06c-.06,0-.09-.07-.08-.2s0,0,0,0-.1.06-.2.2a3.38,3.38,0,0,0-.37.51.4.4,0,0,1-.32.28h0c-.07,0-.14,0-.21.16a.35.35,0,0,0,0,.3.19.19,0,0,0-.07.11v.12c.05-.07.1-.11.15-.11h0c.06,0,.09,0,.09.07a.84.84,0,0,0,.33.39,1.05,1.05,0,0,1,.14.22,2.14,2.14,0,0,1,.12.28c.11.16.17.26.16.28s0,.07-.13.14h0a.1.1,0,0,0-.11.11.54.54,0,0,1-.3.16h0s-.05,0-.05,0,0,0-.05,0h0l-.07.06a.18.18,0,0,1,0,.08l0,0a1.2,1.2,0,0,1-.16-.25c0-.14-.1-.21-.22-.21h-.07c-.08,0-.12,0-.11-.07a.45.45,0,0,0-.1-.36l-.15-.32h-.24l-.13-.06s0,0,.06.11,0,.18.05.18.15.08.11.19a.56.56,0,0,1-.33.28l-.09,0a.1.1,0,0,1-.08,0s0-.11.07-.18,0-.09,0-.09h0a.94.94,0,0,0-.19.14l-.15.11a.5.5,0,0,0-.16.11.28.28,0,0,1-.2-.17.53.53,0,0,1-.07-.28v0a1.37,1.37,0,0,1-.31-.3l-.36-.42a.13.13,0,0,0-.05-.12s0-.08.07-.11a1.07,1.07,0,0,1-.14-.2.28.28,0,0,0-.08-.12v-.12a.35.35,0,0,0-.1-.25c0-.12,0-.17.07-.17h0c0-.08,0-.14,0-.18s0,0-.05,0a.21.21,0,0,0-.11,0,.64.64,0,0,1,0-.07.68.68,0,0,1,0-.27v-.06c-.08,0-.13-.09-.16-.25a.22.22,0,0,1,0-.3c.17-.07.15-.15,0-.25s-.15-.11-.22-.31-.05-.35,0-.42l.19,0h0s.06,0,.06,0,0-.14,0-.16,0-.06,0-.14l.08-.18-.13.11c-.06.05-.09.07-.11.07s0,0,0,0h0c-.05,0-.07,0-.07-.13s0-.27.08-.3a.36.36,0,0,0,.05-.27c0-.1,0-.15-.07-.15s-.15-.12,0-.12h0l0-.36a.41.41,0,0,1,0-.27,1.57,1.57,0,0,0,.05-.27l0-.3,0-.18h0s.06,0,.06,0v-.12h0s.06-.06.07-.18,0-.23.12-.23h0s0-.08-.05-.12-.26-.12-.17-.2.09-.13,0-.18-.05-.06,0-.18a.53.53,0,0,1,.2-.35c0-.08,0-.14,0-.18a.27.27,0,0,0,0-.12h0s.06,0,.06-.11,0-.12-.05-.12a.25.25,0,0,1,.08-.18l0-.36v-.18h0a.06.06,0,0,0,0,0s0,0-.06,0h0s0-.05,0-.16a.82.82,0,0,1,.06-.39.63.63,0,0,1,.13-.17.19.19,0,0,0,.07-.12l-.05-.18.2-.17h0s.06,0,.06-.08a.26.26,0,0,1,.07-.15c.09-.07.12-.14.11-.2s0,0,0,0,0,0-.06.06-.09,0-.15-.13a.44.44,0,0,1-.07-.24q-.11-.13,0-.36l.14-.23-.31,0-.19,0c-.07,0-.11,0-.11,0h0a.16.16,0,0,0,.12,0,.34.34,0,0,1,.23-.1h.1c.14,0,.22,0,.22-.1l0-.24,0-.3.07,0H17.8a.17.17,0,0,1-.12-.06h-.16s-.06,0-.05,0a.83.83,0,0,1,.28-.16h0c.18,0,.24-.13.18-.41,0,0-.07-.06-.23-.07h-.08a.37.37,0,0,1-.39-.22.16.16,0,0,1,.17-.17h0l.42,0,.13-.11h-.14a1,1,0,0,0-.35.09c-.08,0-.12,0-.11-.07-.15-.17,0-.28.44-.33a1,1,0,0,0,.28-.13s0-.06,0-.14.06-.24.13-.24h0c0-.07,0-.1-.14-.1a1.43,1.43,0,0,0-.34.06s0,0,0-.06a.47.47,0,0,1,.22-.13.3.3,0,0,0,.16-.14h.06a.21.21,0,0,1,.07-.17l.19-.17-.24,0c-.08,0-.06,0,.07,0h-.06a1.78,1.78,0,0,0-.26-.17c-.06,0,0-.05.15-.08s.31-.07.2-.16-.08-.27.08-.3l.26-.22a.52.52,0,0,0,0-.3.23.23,0,0,1-.05-.19c.09-.07.09-.14,0-.21a.24.24,0,0,0-.15,0,.52.52,0,0,0-.22,0l-.24,0s0-.1.19-.17h-.12a.6.6,0,0,0-.56.32l-.13.17-.05-.19c0-.14,0-.21-.05-.21s-.13.1-.26.31l-.32.22c0-.08,0-.12-.05-.13h0s-.08,0-.12.11a.21.21,0,0,1-.09.05s-.07,0-.09-.12a.05.05,0,0,0-.06-.06s-.05,0-.05-.07,0-.08,0-.08l-.06,0a.42.42,0,0,0-.19.16,0,0,0,0,0,0,0,1.32,1.32,0,0,0-.36.17.37.37,0,0,1-.22.16l-.08,0s0,0,0-.08.07-.07.06-.07l-.06,0a1,1,0,0,0-.26.31.54.54,0,0,1-.35.15h0l-.13.11a.11.11,0,0,1-.08,0,.74.74,0,0,1-.22-.05h0a.52.52,0,0,0-.21,0s-.09.1-.26.17h0a.16.16,0,0,0-.17.17s-.11.09-.31.16-.12,0-.12-.07a.22.22,0,0,0,0-.08s0,0,0,0a.26.26,0,0,0-.16.11.14.14,0,0,1-.12,0h0l-.25.11h-.07s-.08,0-.11-.09,0-.05,0-.05a.44.44,0,0,0-.2.1c-.05.11-.11.16-.18.16h0c-.06-.06-.1-.1-.13-.1s-.05,0-.05.09-.1.14-.14.14-.11-.06-.16-.16l.27-.46.32-.22-.37.09-.3,0c0-.06,0-.08-.06-.08h-.06c-.08,0-.11-.09-.11-.13a.92.92,0,0,0,0-.36c-.07-.13-.09-.23,0-.31l0-.23a.76.76,0,0,1,.24-.83h0a.11.11,0,0,0,.12-.11l.06,0a1,1,0,0,0,.2-.23.63.63,0,0,1,.13-.17.19.19,0,0,0,.07-.12c0-.06,0-.09,0-.09h0l-.35.19a.46.46,0,0,0-.19.13.6.6,0,0,1-.13.14,1.79,1.79,0,0,0-.69.37.25.25,0,0,0-.07.12s0,.06,0,.06h0s0-.05,0-.05,0,0,0,.11-.05.11-.15.11h0l-.39.39-.26.28h0c-.08,0-.1.08-.07.24a.94.94,0,0,0-.14.29c-.07.13-.13.2-.19.2s0,0-.07,0S8.9,46.05,9,46a.19.19,0,0,0,.07-.11l.2-.35.07-.11a.05.05,0,0,1,.06-.06h0A1.11,1.11,0,0,1,9.58,45c.17-.18.22-.28.14-.29h0c-.16,0-.33.23-.52.68L8.67,46l-.11-.19a.26.26,0,0,1,0-.36c0-.16,0-.24.07-.24h.06l-.05-.13L9,44.57A2.15,2.15,0,0,0,9.29,44s0,0,0,0a.76.76,0,0,0-.29.16l-.26.34-.25.1h0s-.09.06-.13.17-.05.21-.1.21-.09,0-.15-.11,0-.38.23-.64l.08-.3.32-.27c.09-.16.12-.26.08-.3H8.44a2.47,2.47,0,0,0-.67.1H7.7l-.17,0H7.47a.31.31,0,0,1-.18,0q-.15-.24,0-.24h0s.05-.16,0-.48c0-.11,0-.17.07-.17h0l.06-.06s0,0,0,0h0s0,0,0-.06,0-.24.07-.24h0a.25.25,0,0,0,.2-.1c.07-.08.09-.14,0-.18s0-.1.14-.29a.24.24,0,0,0,.14-.23c0-.08.09-.19.26-.34s.27-.22.32-.22h0a.51.51,0,0,1,.27-.4c.16,0,.23-.14.2-.35s.12-.26.34-.42a1.29,1.29,0,0,1,.62-.29h0a.21.21,0,0,0,.11,0l.13-.11c.08-.07.13-.1.16-.1s0,0,0,.05a.08.08,0,0,0,.08,0l.09,0c.14-.22.28-.33.43-.33h0c.28,0,.41-.09.38-.22a.93.93,0,0,1,.19-.22.15.15,0,0,1,.11-.05s.05,0,.07.06h.07a1.59,1.59,0,0,0,.3-.1l.3,0,.07-.06h0a.11.11,0,0,0,.12-.11.73.73,0,0,1,.42-.39.83.83,0,0,1,.27-.06.21.21,0,0,1,.12,0s0-.05.06-.05a.38.38,0,0,1,.18.07c0,.08,0,.13.05.15l0,0s0,0,0,0a.05.05,0,0,1,.06.06h.06a1.22,1.22,0,0,1,.16-.14.22.22,0,0,1,.15-.08h0c.05,0,.19-.11.45-.33a.73.73,0,0,1,.13-.23l.13-.11h0a1.17,1.17,0,0,0,.42-.15.45.45,0,0,1,.2-.09s0,0,0,.05l.07,0s.05,0,.05-.07l.37-.1h.11c.09,0,.13,0,.13.09s0,.11,0,.11a.12.12,0,0,0,.08,0,.83.83,0,0,0,.22-.14l.23-.19a.42.42,0,0,1,.28-.19h0c.07,0,.11,0,.1.1l.07-.05c0-.11.14-.16.31-.16H18l.31-.1,0,.24c0,.1,0,.14,0,.14s0,0,0-.07a1,1,0,0,1,.26-.28h0c.13,0,.19,0,.2-.11s0-.05,0-.05,0,0,0,.06a1.06,1.06,0,0,1,.19-.11l.44-.15c.32,0,.46-.08.43-.21a1.17,1.17,0,0,1,.37-.09h.06c.23,0,.32-.11.27-.34,0,0,0,0-.07,0h-.05a.23.23,0,0,0-.19.13.46.46,0,0,1-.16.06q-.12,0,.12-.36l.09-.42s.05,0,.15,0h.09a.58.58,0,0,0,.44-.21c.09-.11.07-.17,0-.18l-.24.1a.48.48,0,0,1-.2.08h0s0-.17.12-.45a2,2,0,0,1,.12-.35.57.57,0,0,1,.22-.16l.36,0c.09-.11.1-.17,0-.18l-.24,0c-.17.07-.23.11-.19.11h-.06s0-.09.08-.27.16-.25.2-.25h0a.76.76,0,0,0,.29-.1c.12-.07.19-.13.19-.17v-.18c.05-.07,0-.12-.05-.12h0c-.13,0-.2,0-.21.16l-.08,0s0-.1,0-.29V31.7c0-.12.12-.19.32-.22h0a.17.17,0,0,0,.15-.05c.05,0,0-.07-.05-.12v-.12a.05.05,0,0,1,.06-.06h0c.07,0,.11-.05.12-.17h-.18a.05.05,0,0,1-.06-.06s0-.06,0-.06h0c.28-.06.39-.19.33-.4,0,0,0-.1.07-.17s.16-.11.1-.12h0a.36.36,0,0,0-.21.11.24.24,0,0,1-.15.08h0s0-.13.09-.33a.56.56,0,0,1,.44-.33h.06c.11,0,.14,0,.07-.11s0-.12,0-.12-.05,0-.1.11a.27.27,0,0,1-.14.06c-.07,0-.1-.06-.09-.19s.06-.14,0-.18a.5.5,0,0,1,0-.12c.09-.11.17-.17.24-.17h0a.28.28,0,0,0,.15-.08,1,1,0,0,1,.22-.14.38.38,0,0,0,.21-.34c-.08,0-.07-.11,0-.18h-.06c-.16,0-.17-.07,0-.18H23l-.13.06.09-.36.13-.23.07-.06v-.06s0-.16.06-.35.13-.29.17-.29h0s.05,0,.06-.06,0-.07.12-.11l.2-.28-.19.16h-.12c0-.07,0-.11.07-.11h0l0-.3-.09-.37a3.27,3.27,0,0,1,.19-.53c.07-.16.14-.3.21-.44l.17-.31a.56.56,0,0,1,0-.12.19.19,0,0,0,0-.12s0-.05.06-.05h0c-.08,0-.06-.14.05-.39a1.71,1.71,0,0,0,.19-.5h0a.15.15,0,0,0,.17-.17c0-.07.08-.36.22-.85a2.17,2.17,0,0,1,.33-.85v-.18l-.49.2a.41.41,0,0,1-.18.05h0s0,0,.07-.11l.07-.12-.13.11a.63.63,0,0,1-.19.11c0,.11-.08.17-.1.17s0-.06,0-.18h-.06l-.06.11a.11.11,0,0,1-.12.11h-.05a.25.25,0,0,0-.15.05l-.43.21a1.17,1.17,0,0,1-.42.15h0a.18.18,0,0,1-.11.05h0s0-.06,0-.06h0s0,0,0,.05a.24.24,0,0,1-.12.05s0,0,0-.06a.51.51,0,0,1-.35.16h0c-.06,0-.09.07-.11.07a0,0,0,0,1,0,0s0-.06,0-.06l-.08.05a.4.4,0,0,1-.2.12h0s0,0-.05,0,0,0,0,0-.06.08,0,.12,0,.06,0,.06h0s0-.07,0-.2l.07-.07s0,0,0,0a1.19,1.19,0,0,0-.22.16.71.71,0,0,1-.35.24.59.59,0,0,1-.19,0l-.06,0s.06,0,.11-.13,0-.13,0-.13h0a.25.25,0,0,1-.07.12v.06s0,.05,0,.06h-.09a.37.37,0,0,0-.23.11.38.38,0,0,1-.21.12h0a.21.21,0,0,0-.1-.05h0s0,0,0,0h0s0,0,0,0a.6.6,0,0,0-.18.12V23l-.32.22-.22.06,0,0c0-.11.06-.17.17-.17h0s0,0,0,0l0,0c0-.07,0-.1-.08-.1h0a.6.6,0,0,0-.25.13l-.37.1h0a.92.92,0,0,0-.52.2.59.59,0,0,0-.16.2l0-.15c.17-.07.19-.11.07-.12l-.06.06c-.09.07-.14.13-.14.17s-.16.18-.2.18-.05,0,0-.14,0-.05.06-.05h0v-.06s0-.06,0-.06a.14.14,0,0,0-.09.05.36.36,0,0,0-.14.17v.12a.19.19,0,0,1-.07.11v-.12c0-.13-.06-.19-.09-.19h0a.3.3,0,0,0-.1.14c0,.06-.06.08-.09.08h0v-.18l-.13,0a.82.82,0,0,1-.23.23l-.06,0a0,0,0,0,1,0,0H16.7a.22.22,0,0,0-.11,0l-.1,0h0a.25.25,0,0,0-.13.08s0,.05-.12.08l0,0s0,0,0,0V24.1c-.08.07-.13.13-.13.17s-.15.26-.19.26h0s0-.09,0-.21.05-.14,0-.14a.46.46,0,0,0-.2.13c-.12.2-.2.31-.24.31s0,0,0-.09a.11.11,0,0,0-.11-.08h-.07a.19.19,0,0,0-.13.17.18.18,0,0,1-.15.11h0c-.06,0,0,0,0-.12s-.05-.1-.07-.1h0a2,2,0,0,1-.28.13h0a.93.93,0,0,0-.39.1h0a.19.19,0,0,0-.1,0l-.1,0h0l-.07,0h.06v.06l-.12.05v.12c0-.05,0-.07-.06-.07s0,0-.06.06h-.12V25l-.11-.13h0a.22.22,0,0,0-.21.1c-.05.15-.13.23-.24.23h0l-.07,0s-.05,0-.06.08.07.08.05.08l-.05,0a.25.25,0,0,0-.18-.08s0,0,0,0,0,0,0-.08.11-.17.07-.18h0a1.56,1.56,0,0,0-.44.27l-.14.23V25.3c.06-.12.09-.18.07-.18l-.06.06a.17.17,0,0,1-.15.05h-.15a.59.59,0,0,1-.14.29s-.06,0-.08,0,0,0,0-.12h-.18l-.19.17a.21.21,0,0,1-.11,0H11c-.08,0-.08,0,0-.12s.07-.07.05-.07H11l-.19.11h0s-.05,0-.05.06,0,.16-.26.22a.24.24,0,0,1-.23-.14h-.06v.12l-.07.11A.16.16,0,0,1,10,26a.12.12,0,0,1-.09,0s0-.1,0-.18h0a.05.05,0,0,0,.06-.06h0c-.05,0-.11,0-.21.12a.49.49,0,0,0-.2.28.55.55,0,0,1-.25.1.32.32,0,0,1-.13,0,.31.31,0,0,1-.17,0l.07-.11H9c-.16,0-.24.07-.25.11s0,.12-.13.14H8.61s-.07,0-.06,0,0-.08-.08-.08-.09,0-.17.12a.54.54,0,0,1-.31.13H8a.34.34,0,0,1-.25-.11s0,0,0,0-.08,0-.15.12a.22.22,0,0,1-.21.11H7.22a1,1,0,0,0-.38.09l-.61.08a3.21,3.21,0,0,1-.4.05c-.06,0-.09,0-.08,0s0,0,0,0l-.15,0a1.44,1.44,0,0,0-.37.1.76.76,0,0,1-.37.1.52.52,0,0,1-.29-.09c-.08-.15-.15-.23-.22-.23s-.14.07-.2.2l-.13,0s-.05,0-.05,0-.13-.13-.17-.13a.12.12,0,0,1-.1.06.37.37,0,0,1-.15-.05l-.28-.17s0,0,0,0l-.08,0c0,.08,0,.12-.07.12h0A.07.07,0,0,1,3,26.5c0-.08-.05-.15-.16-.22a.37.37,0,0,0-.15-.06s0,0,0,0a.14.14,0,0,1-.09,0s-.07,0-.09-.09a.36.36,0,0,1,0-.27c0-.07,0-.16,0-.27a.34.34,0,0,0-.22-.17c-.08,0-.14-.09-.17-.25A1.44,1.44,0,0,1,2,24.84c0-.18,0-.27,0-.27h0v-.18s0-.1,0-.18,0-.16,0-.36l.26-.22.12.07.23.11A.92.92,0,0,1,3,24l.29.14a.72.72,0,0,0,.28.2.41.41,0,0,0,.17,0l.07,0h0s.06,0,.06-.12A.49.49,0,0,1,4,24a.7.7,0,0,1,.18-.38.09.09,0,0,1,.06,0s.09.05.14.13,0,.07,0,.07.06-.08.12-.24a.55.55,0,0,1,.3-.15h0a.11.11,0,0,1,.09,0,.13.13,0,0,0,.09,0,.16.16,0,0,1,.09,0h.06a.56.56,0,0,0,.15,0s.07.07.11.07.06-.11.16-.11h0a.2.2,0,0,0,.1,0,.16.16,0,0,0,.15-.12.25.25,0,0,1,.07-.17.06.06,0,0,1,0,0,.21.21,0,0,1,.13.09l-.12.05c-.09.07-.12.13-.11.17a.07.07,0,0,0,.06,0l.09,0,.42,0h.06c.13,0,.19,0,.19-.11s.1-.15.15-.15.07,0,.1.11,0,.12.08.13H7s.1,0,.15-.11,0-.18.09-.18h0s0,0,0,0,0,0,0,.08-.08.1,0,.1l.19,0h0c.06,0,.09,0,.09-.05a.25.25,0,0,1,.07-.12A1.12,1.12,0,0,1,7.91,23H8s.07,0,.07.08,0,.12-.06.12H8c0,.05.09.08.13.08s.12-.06.18-.18a.28.28,0,0,1,.26-.28A.79.79,0,0,0,9,22.61l.08-.18.36,0a.79.79,0,0,0,.24.05l.12,0a.52.52,0,0,1,.52-.26h.1l.31-.1h.06l.12,0c.09-.08.13-.13.13-.17a.25.25,0,0,1,.16-.05h.05a.56.56,0,0,0,.28-.1h.16c.18,0,.27,0,.27-.1l.43,0c0-.05,0-.08,0-.08s.08,0,.14.1h0c.1,0,.14-.06.11-.17s-.08,0,0-.06l0,0s0,0,0-.08l.06,0,.12,0,.24-.07a.33.33,0,0,0,.19-.08l.19-.16h0a2.22,2.22,0,0,0,.47-.09l.31-.09s0-.05.12-.05h.15c.18,0,.27-.05.28-.15a1,1,0,0,1,.35-.19.81.81,0,0,1,.19,0,.21.21,0,0,1,.14,0,.54.54,0,0,1,.19-.05h0a.54.54,0,0,0,.2,0l.25-.23L16.4,20q0-.09.27-.09h.16l.31-.09h.12a.5.5,0,0,1,.17-.12s0,0,0,0l.32-.16s.07-.08.22-.13a.88.88,0,0,1,.31-.07h0a.1.1,0,0,0,.08.05s0,0,.05-.1a.18.18,0,0,1,.18-.15.38.38,0,0,1,.18.06l.09,0a1.08,1.08,0,0,0,.28-.06.22.22,0,0,1,.21-.1h0v-.24a.21.21,0,0,1,.12-.05h0l.09,0a.26.26,0,0,0,.15-.07.07.07,0,0,1,.08-.08l.11,0,.14,0c.06,0,.1,0,.1-.07V18.5a.19.19,0,0,1,.07-.12,0,0,0,0,1,.05-.05.23.23,0,0,1,.13.07h0a.37.37,0,0,0,.23-.11.24.24,0,0,1,.15-.06.15.15,0,0,1,.09,0l.25,0s0-.06.05-.06h0s0,0,0,0,0,0,0-.08,0-.07.13-.07a.85.85,0,0,1,.24,0h0A.37.37,0,0,0,22,18a.15.15,0,0,1,.06-.11.21.21,0,0,0,.11,0c.05,0,.08-.06.08-.16a.36.36,0,0,1,.23-.1h0l.12,0a.13.13,0,0,0,.12-.07.23.23,0,0,1,.14-.07l0,0a.52.52,0,0,0,.17,0,.34.34,0,0,0,.32-.16.09.09,0,0,1,.07,0,.19.19,0,0,1,.11,0l.11,0c.09,0,.16-.06.2-.18s.18-.15.29-.22.11-.07.14-.07,0,0,0,0,0,.07.05.07a.36.36,0,0,0,.13,0h0c.1,0,.13,0,.1-.12s.12-.15.35-.15h.14l.1,0a.17.17,0,0,0,.15-.12.05.05,0,0,1,.06-.06h0s0,0,0,0h0s0-.07,0-.16a.86.86,0,0,1,.24,0h.19c0-.08.18-.18.53-.32s.59-.22.71-.25l0,0c.05,0,.12-.06.22-.18l.35-.58c.3-.33.42-.55.34-.63s-.09-.15.09-.3a2.18,2.18,0,0,1,.42-.48.64.64,0,0,1,.35-.19H29a.08.08,0,0,0,.07,0l.08,0a.34.34,0,0,1,.18,0h0a.55.55,0,0,0,.44-.33L30,13c.16,0,.22,0,.17.07a.19.19,0,0,0,.12.07.2.2,0,0,1,.11-.07c.05,0,0,.1-.07.31a.35.35,0,0,0-.05.24.69.69,0,0,1,0,.18.44.44,0,0,0,0,.15.29.29,0,0,1-.05.21c0,.28,0,.41.11.41a.44.44,0,0,0,.24-.14.8.8,0,0,1,.19-.23.19.19,0,0,1,.07-.11S31,14,31,14s0,0,.06-.09a.41.41,0,0,1,.31-.19.49.49,0,0,1,.19,0s0,0,0,0,.2-.09.42-.28v-.06h-.06c-.08,0-.12,0-.11-.07s0-.06,0-.06h0a.36.36,0,0,0,.14.1.11.11,0,0,1,.09.1.19.19,0,0,0,.17.13.11.11,0,0,0,.08,0,.2.2,0,0,0,.1,0l.07,0a.45.45,0,0,1,.17,0c0,.08.09.12.14.12a.18.18,0,0,0,.09,0,.31.31,0,0,1,.22-.14h0a.29.29,0,0,1,.22.11.06.06,0,0,0,0,0h0s0-.06,0-.14,0-.06.06-.06h0l.25-.16a2.08,2.08,0,0,1,.34-.1.82.82,0,0,0,.34-.15h.09c.09,0,.12,0,.09-.05a1.85,1.85,0,0,1,.62-.23,2.24,2.24,0,0,1,.37-.05c.1,0,.15,0,.17.06h0a.52.52,0,0,0,.3-.15,1.49,1.49,0,0,1,.32-.16h0a1,1,0,0,0,.38-.09,9.76,9.76,0,0,1,1.1-.22l.34-.13A3.43,3.43,0,0,1,38.7,12a10,10,0,0,1,1.18-.1l.27,0s0,0,0,0l0,0,.07-.06.12-.11.24,0s.07,0,.2,0l.35,0h.06a1,1,0,0,1,.26-.06s0,0,0,0h.12a.74.74,0,0,1,.27-.06.37.37,0,0,1,.15,0,.1.1,0,0,0,.08,0,.7.7,0,0,0,.23-.06.21.21,0,0,1,.15-.07l.09,0,.13-.05a.17.17,0,0,1,.12,0M30.13,13.33a.13.13,0,0,0-.07.11v0s0,0,.06-.07v-.06M16.67,20.82c.06,0,.08,0,.07-.05s0-.06,0-.06h0s0-.06-.05-.06h-.07a.05.05,0,0,0-.06.06l.05.12h0m-4.74,1.44a.72.72,0,0,0,.11-.21S12,22,12,22a.21.21,0,0,0-.08.17c0,.07,0,.1,0,.1m-.31.06a.15.15,0,0,0,.17-.17c0-.07,0-.11,0-.11l-.14,0c-.09.15-.1.23,0,.24h0m-1.11.16h0s-.06,0-.06.12,0,.06,0,.06h0s0,0,0-.12,0-.08,0-.08l0,0m-.88.21,0,0a.59.59,0,0,1-.29.1h0c-.09.08-.09.11,0,.12h0a1,1,0,0,0,.23,0c.13,0,.17-.05.13-.05a.16.16,0,0,1,0-.15l.07-.05,0,0s0,0,0,0m-.85.41,0,0a.11.11,0,0,0,0-.12l-.06-.07H8.66q-.11,0,0,.12t.12.09m-.31,0,.07-.05A.07.07,0,0,0,8.48,23l-.06.06.05.06m-.61.14v-.12h0c-.06,0-.09,0-.09.05l.11.07m15.82,2.34c.05,0,.08-.05.09-.16s0-.11-.05-.11a.12.12,0,0,0,0,.05.19.19,0,0,0-.13.17.19.19,0,0,0,.1.05m.5-.13c.05,0,.08,0,.1,0s0,0,0,0h-.18s0,.06.05.06h.06m-.56.38h0s-.06.06-.07.18v.12a.19.19,0,0,1,0-.09.19.19,0,0,0,0-.09c.07-.08.08-.13.05-.13h0m.16.38s0,0,0-.06,0-.06,0-.06-.13.11,0,.12h0m.5.45v-.05a.05.05,0,0,1,.06-.06h.07s.06-.11.19-.22h0a.49.49,0,0,0-.3.16.36.36,0,0,0-.16.1s0,.07.09.07h.06M24,28.26l.13,0h0a.21.21,0,0,0,.12-.05.25.25,0,0,0-.18-.08c-.12.11-.15.16-.08.16m-.42.08.13,0,.06-.06h0a.18.18,0,0,0,.11-.05s0,0,0,0h-.06a.6.6,0,0,0-.28.13s0,0,.05,0m.46.36v-.06s0-.06-.11-.07l-.13.05v.06H24m-.57,0h.09a.17.17,0,0,0,.06-.12.1.1,0,0,0-.08,0,.2.2,0,0,0-.1,0c-.07.09-.06.13,0,.13m-.71,1.58h.1a2.22,2.22,0,0,0,.47-.09c.33-.09.41-.14.23-.14l-.28,0a.93.93,0,0,0-.47.15c-.07.05-.09.07-.05.07m-.16,1h.11a.21.21,0,0,1,.09-.05h0s0,0,.09-.06h0s.05,0,.05-.05A.05.05,0,0,1,23,31h0s.08,0,.12-.11l-.23,0c-.25.07-.4.15-.44.24s0,.12.12.12m-.25.81-.07,0h.06v-.06m-.43,1h0s0,0,0,.12C22,33.07,22,33,22,33l-.06.06m-.07,1h-.06l-.13,0a.18.18,0,0,1-.1,0h0l-.06.06c0,.06,0,.08.08.08h.12c.18,0,.3-.07.34-.15s0,0,0,0a.5.5,0,0,0-.15,0m-.5,1a.27.27,0,0,1-.18-.07h0c-.13,0-.14.06,0,.17l-.07.12.13-.17.37,0c.12,0,.16-.07.13-.12l-.19,0a.21.21,0,0,1-.12.05m3.08,7.27.12-.06c0-.08,0-.12-.05-.12h0s-.05,0-.06.06v.12m-.18,1.55v-.06h-.12a.19.19,0,0,0,.11.07m-.28.52h0c-.11,0-.17.11-.19.34a.2.2,0,0,1-.08.24.23.23,0,0,0-.07.11l-.06.06-.08,0q-.09,0-.06.27h-.12c-.2.07-.25.16-.14.29h0c.06,0,.08,0,.05-.11l.12,0,.06,0s.06,0,.06.08-.07.07-.07.09h0s0,0,.05,0h0a.16.16,0,0,0,.12,0l.06,0V45.4l.07-.12.08-.29c.08,0,.14-.07.16-.11s0-.06-.09-.07,0,0,0-.09a.56.56,0,0,1,.17-.2c0-.07.05-.12,0-.14l0,0s0,0-.07,0m-.51.2c.05,0,.1,0,.15-.11a.25.25,0,0,0-.12-.07h0a.11.11,0,0,0-.12.11s0,.07.09.07h0m-4.9,0h.22c0-.11,0-.17-.1-.17l-.13,0c0,.09,0,.14,0,.14m4.69.57.07-.06v-.06h0a.05.05,0,0,0-.06.06v.06m-.16.65s.06,0,.07-.12,0-.06-.12-.07h0s-.05,0-.05.06l.11.13h0m.09.37s0-.07-.06-.07-.16,0-.12,0l.18,0m-.3.75v-.05c.13-.12.13-.18,0-.18h0c-.07,0-.11.05-.12.17a.15.15,0,0,0,.11.06m-.2.41h0a.1.1,0,0,0,.07,0l.05,0,.07-.06v-.06l0-.06a.15.15,0,0,0-.07.12s0,0-.06,0m-5,1.2.25,0h-.1c-.1,0-.14,0-.15,0m4.55,1.11h-.06s0,.06,0,.06h.06c.08,0,.12,0,.12-.05s.05-.06,0-.06h0a.21.21,0,0,0-.12,0M17,59.83l.07,0v-.06h0s-.05,0-.06.05v.06M39.23,17.12c.12,0,.18,0,.18.07l-.19.17a0,0,0,0,1,0,0s0,0-.05-.09v-.05l.06-.12m1.44,0h0v0l-.06.06v-.06a.05.05,0,0,1,.06-.06m-2.42.19a.25.25,0,0,1,.18.07.05.05,0,0,1-.06.06h0s-.06,0-.06.05l0-.18m-.29,0s0,.07,0,.22h-.12s0-.08,0-.12a.29.29,0,0,1,.13-.09m-1.06.14h0l.06.07a.19.19,0,0,1-.07.11h-.12V17.6c0-.07,0-.11.11-.11m-1.09.22s0,0-.05.06l0,.24h-.12s-.07-.06-.09-.06,0,0,0,.06a.12.12,0,0,1,0,.08,0,0,0,0,1,0,0s0,0,0,0V18a.25.25,0,0,1,.07-.17v-.07c0,.07,0,.1.05.1s0,0,.07-.09l.11-.05m-.94.16c.22,0,.28.07.2.21s0,.15-.08.15a.19.19,0,0,1-.11,0c-.08,0-.12,0-.11,0s0,0-.06,0h-.06c0,.08,0,.14,0,.18l-.06,0a.09.09,0,0,1-.06,0c-.08-.05,0-.18.27-.4h.08m12.42.1s0,.13,0,.4c0,0,0,.06,0,.06s0,0,0-.07a.17.17,0,0,0,0-.12.24.24,0,0,1,0-.18q0-.09.06-.09m-13.18.28s0,0,0,.06-.11.23-.15.23,0,0,0-.06,0-.1.13-.17,0-.06,0-.06m-.29,2.08.06.07-.06.05,0,0s0,0,0,0a.17.17,0,0,1,.06-.12m-.25.67s0,.05,0,.16a.11.11,0,0,1-.07.17l-.06,0s-.06,0-.05-.08l.13-.24,0,0m-.26.56h0l0,.18a.06.06,0,0,1,0,0s0,0,0,0,0-.07,0-.15,0-.06,0-.06m-9.22.23.06.06-.07.06,0,0s0,0,0,0a.28.28,0,0,1,.07-.11m9.2.07,0,.36q0,.32,0,.36h0c-.18,0-.24.14-.18.41v.12h0c-.08,0-.13.05-.15.17a1.18,1.18,0,0,0-.05.29c0,.17,0,.26-.09.3h-.05c-.08,0-.13,0-.13,0a.1.1,0,0,0,0,.1s0,0,0,0h0s-.07.12-.08.36a.56.56,0,0,1-.09.41c-.09.08-.12.16-.08.24s-.08.28-.19.28h0s-.07.05-.09.15a1,1,0,0,0-.05.26c0,.12,0,.18-.07.18h0a.79.79,0,0,1-.28.11h0a6,6,0,0,0,.3-.73,1.49,1.49,0,0,1,.22-.5.46.46,0,0,1,.2-.34,1.24,1.24,0,0,0,.09-.39,1.81,1.81,0,0,1,.09-.44l.35-.7c.11-.31.18-.47.22-.47h0l.07-.11a1,1,0,0,1,.08-.36l.07-.11m-.85.06h.07V22l0,0s0,0,0-.08,0-.06,0-.06m-9.63.2v.06l-.07.11s-.06,0-.05-.06l.13-.11m9.54.15h0a.07.07,0,0,1,.06.07h0s-.06,0-.06.05l-.05-.06s0-.06.05-.06m-.08.36c0,.11,0,.17-.07.17h-.06v-.06l.06-.06.06-.05m-11.54.06h0m-2.11.62h.07a.19.19,0,0,1-.07.11h-.06q0-.12.06-.12m.31,0H19s0,.06-.06.06h0a.21.21,0,0,1-.11.05h-.07l.06-.05.13-.05m-.84.33,0,.14a.43.43,0,0,1,0-.14m-1.38.39s.06,0,.05.08h0l-.08,0a.1.1,0,0,1-.08,0H16.5c-.05,0,0,0,0-.08s0,0,0,0,0,0,0,0h0s.05,0,.06-.06h.06m14.83,2,.05.19,0,.18v.06l-.05,0s0,0,0,0l0-.24v-.18m-.09.48.1.19c0,.32,0,.5-.1.53a1.51,1.51,0,0,1-.25.13s-.07.13-.08.33v.18c0,.07,0,.11-.07.11h0c-.12,0-.18-.07-.17-.19l.2-.23a.54.54,0,0,1,0-.2.34.34,0,0,0,0-.15l.3-.7m-.66,1.63.1.19a.62.62,0,0,1,0,.3,1.28,1.28,0,0,1-.11.24c-.13.11-.16.23-.08.35s-.08.16-.22.16h0c-.07.12-.12.18-.16.18h0c.1-.31.18-.57.24-.77a1.64,1.64,0,0,1,.15-.41.65.65,0,0,1,.14-.23m-.54,1.53v.18c0,.2,0,.29-.08.29h0L30,30.1h0s.05,0,.06-.05v-.18l.13-.17m-.29.61a0,0,0,0,1,0,0,.6.6,0,0,0,0,.18.18.18,0,0,1,0,.18s-.06,0-.06-.07l0-.17a.19.19,0,0,1,0-.12s0,0,0,0m-.18.76s0,0,0,0a.5.5,0,0,1,0,.33c0,.13-.11.19-.18.19h0l-.05,0s0,0,0,0a.19.19,0,0,0,.07-.12.62.62,0,0,1,.08-.29q.09-.15.12-.15m-.42,1h0m0,0a.4.4,0,0,0,.05.15s0,.06,0,.06h0s0,0,0,.06v.12s-.06,0,0-.13v-.06l.07-.05v-.15m-.31.85h0l.05.12s0,0,0,0S29,33,29,33a.05.05,0,0,1,.06-.06m-.09.26s0,0,0,.09,0,.12-.07.12h-.06a.19.19,0,0,1,.07-.12c0-.06,0-.09.05-.09m-.3.85h0v.11s0,.05,0,.05,0,0,0-.11,0-.06.05-.06m.18.2,0,.05s0,0,0-.05m8,.64.06.06s0,.06,0,.06,0,0,0-.06v-.06M23.44,46.35v.06a.06.06,0,0,1-.06.05h0V46.4l.06,0m0,.64.1.08a.33.33,0,0,1-.2.23.14.14,0,0,1-.09.05s0,0,0-.06a.39.39,0,0,1,.2-.29h0m-.16,1.32a.11.11,0,0,1,.1.08h-.07q-.11,0,0,.12s0,.06,0,.06h0c-.12,0-.19.08-.19.16a.51.51,0,0,1-.14.17l0,0s0,0,0,0v-.12l.07-.06s0-.07,0-.12v-.06a.5.5,0,0,1,.23-.19l.1,0m-.88.49h.11l-.07.12h-.05s0,0,0-.12h0m.44.45v.12s-.05.08-.13.11v-.06l.13-.17m-5.55.16s0,0,.06,0H17.2a.09.09,0,0,1,.06,0m-.12,11.07v0s0,0,0,0l0,0m1.65,2.45a.06.06,0,0,1,0,0l.09,0A.06.06,0,0,1,19,63s0,.08-.1.12a.25.25,0,0,1-.12-.07.19.19,0,0,1,0-.09h0M42.89,9.57a2.29,2.29,0,0,0-.55.07L42,9.7h0a2.34,2.34,0,0,0-.38,0h-.05a2.14,2.14,0,0,0-.45,0h-.22l-.34,0h-.1a2,2,0,0,0-.73.14c-.31,0-.71.05-1.21.11l-.11,0a4.22,4.22,0,0,0-.76.2l-.21.07a9.75,9.75,0,0,0-1.18.25h0a2,2,0,0,0-.59.15l-.23.1a3,3,0,0,0-.61.1,4.48,4.48,0,0,0-.92.3,1.88,1.88,0,0,0-.39.16,4.7,4.7,0,0,0-.49.16l-.12.06a2.08,2.08,0,0,0-.88-.29H31.8l-.36,0a2,2,0,0,0-.78-.26,3.34,3.34,0,0,0-.49-.08H30a2.05,2.05,0,0,0-1.08.31l-.26.17-.07.05a2.59,2.59,0,0,0-1.37.66,4.35,4.35,0,0,0-.66.71A2.22,2.22,0,0,0,26,14.08l0,0,0,0-.29.11a3.5,3.5,0,0,0-.5.22,2.75,2.75,0,0,0-.49.14,1.9,1.9,0,0,0-.37.2,2.14,2.14,0,0,0-.64.25,2.55,2.55,0,0,0-.63.31l-.08.06a1.18,1.18,0,0,0-.3.1,1.86,1.86,0,0,0-.57.13,2.16,2.16,0,0,0-1,.39,1.83,1.83,0,0,0-.66.21,1.14,1.14,0,0,0-.25.06,2,2,0,0,0-1.3.57,2.12,2.12,0,0,0-.62.31,2.12,2.12,0,0,0-.84.3l-.15,0a2.54,2.54,0,0,0-.64.31l-.12.05h0a2.31,2.31,0,0,0-1.37.5,2.91,2.91,0,0,0-.55.13,3.67,3.67,0,0,0-.6.28,2,2,0,0,0-.49.17h-.06a2,2,0,0,0-.95.3,2.32,2.32,0,0,0-.84.32l-.33.08a2.68,2.68,0,0,0-.49.11,2.46,2.46,0,0,0-.92.36,2.82,2.82,0,0,0-.78.23l-.26,0a2,2,0,0,0-1.11.47L7.63,21,7.32,21a1.69,1.69,0,0,0-.27.11H6.94l-.14,0h0a1.68,1.68,0,0,0-.35,0,1.82,1.82,0,0,0-.52-.07,2.21,2.21,0,0,0-1,.24H4.77a2.31,2.31,0,0,0-1,.24,2.14,2.14,0,0,0-.53.2,1.87,1.87,0,0,0-.86-.2,2,2,0,0,0-1.31.49l-.25.22a2,2,0,0,0-.63,1,2.94,2.94,0,0,0-.11.86,3.1,3.1,0,0,0-.06.72,3.8,3.8,0,0,0,.13.84,2.28,2.28,0,0,0,.39.86,1.05,1.05,0,0,0,0,.19,2.12,2.12,0,0,0,1.22,1.34,2,2,0,0,0,1.11.42H3l.22.06a2.21,2.21,0,0,0,.81.16H4.1a2.27,2.27,0,0,0,.73.11,2.66,2.66,0,0,0,.92-.16h.08a4,4,0,0,0,.69-.07l.56-.07a2,2,0,0,0,.35-.08A2.34,2.34,0,0,0,8,28.42H8.2a2.9,2.9,0,0,0,.57-.12l.25,0,.23-.05a2.38,2.38,0,0,0,.58-.08,2.28,2.28,0,0,0,.52-.18,2,2,0,0,0,.46-.12l.18,0a3.4,3.4,0,0,0,.54-.19l.17-.05a1.47,1.47,0,0,0,.43-.07,1.94,1.94,0,0,0,.75-.16,2.07,2.07,0,0,0,1-.25l.27,0a2,2,0,0,0,.79-.31h0a2.19,2.19,0,0,0,.77-.14l.31-.07a2,2,0,0,0,1-.38l.28-.08.29-.11a1.86,1.86,0,0,0,.65-.15,2,2,0,0,0,1-.41,1.91,1.91,0,0,0,.34-.1,4.12,4.12,0,0,0,.47-.13,1.86,1.86,0,0,0,.53-.26l.08,0a2.23,2.23,0,0,0,.43-.16,2.59,2.59,0,0,0,.52-.12h0a4.43,4.43,0,0,0-.18.55,2.13,2.13,0,0,0,0,.94c0,.08-.07.16-.1.25a2.83,2.83,0,0,0-.13.42,2.36,2.36,0,0,0-.21.52l-.08.36a.19.19,0,0,0,0,.08l-.18.2A2,2,0,0,0,20.3,29V29a.41.41,0,0,0-.05.09A2.79,2.79,0,0,0,20,30h0a2.24,2.24,0,0,0-.11.34,2.21,2.21,0,0,0-.46,1.19v0l0,.11-.12.22a2.69,2.69,0,0,0-.29.75,4,4,0,0,0-.16.49l-.09.25a2.21,2.21,0,0,0-.23.55l-.37.11a2.17,2.17,0,0,0-.41.09h-.05a3.13,3.13,0,0,0-.53.12,2.45,2.45,0,0,0-.93.35l-.18,0-.16,0-.14,0a2.24,2.24,0,0,0-1,.29,1.91,1.91,0,0,0-.85.43l-.14.12,0,0a2.31,2.31,0,0,0-.37,0,2.85,2.85,0,0,0-.73.17,2.81,2.81,0,0,0-.87.51,2.14,2.14,0,0,0-1.23.54l-.11.1a3.07,3.07,0,0,0-.41.2,2.53,2.53,0,0,0-.64.32,3.85,3.85,0,0,0-1,.55,3,3,0,0,0-.91,1.1l-.26.33,0,0a2.92,2.92,0,0,0-.78,1,2.47,2.47,0,0,0-.16.26,2,2,0,0,0-.46.69,2.44,2.44,0,0,0-.38,1.09,2.17,2.17,0,0,0,.26,2,1.76,1.76,0,0,0,.47.51,2.64,2.64,0,0,0,.16.62,2,2,0,0,0,.3.49,2.3,2.3,0,0,0,.34.77l0,.08a2,2,0,0,0,1,.88,2.07,2.07,0,0,0,1.93.26,2.14,2.14,0,0,0,1.78,1,2.12,2.12,0,0,0,.9-.2l.17-.06a2.17,2.17,0,0,0,.56-.13h0a2.08,2.08,0,0,0,.6-.09,3,3,0,0,0,.84-.41,2.15,2.15,0,0,0,.57-.13c0,.11,0,.22-.05.34a1.7,1.7,0,0,0,0,.45,1.83,1.83,0,0,0-.08.77,1.82,1.82,0,0,0-.13.57,2.08,2.08,0,0,0,.34,1.28h0l0,.09a2.74,2.74,0,0,0-.2,1.3,1.94,1.94,0,0,0,0,.24,2.44,2.44,0,0,0-.06.39,2.32,2.32,0,0,0-.25.89,2.41,2.41,0,0,0,0,.38,2.12,2.12,0,0,0,0,.56,3.06,3.06,0,0,0-.05.32v.18l0,.23a2.12,2.12,0,0,0-.07.45.88.88,0,0,0,0,.15,2,2,0,0,0,0,1,3.68,3.68,0,0,0,0,.47.17.17,0,0,1,0,.07,2.5,2.5,0,0,0,.08,1.36,2.31,2.31,0,0,0,.1.28,2.16,2.16,0,0,0,.16.7l.09.23a1.89,1.89,0,0,0,.13.48,2,2,0,0,0,.07.23,1.93,1.93,0,0,0,.15.52,2.51,2.51,0,0,0,.16.46,2.3,2.3,0,0,0,.35.58l.13.14.23.27h0c0,.08.07.15.1.22a2.24,2.24,0,0,0,1.48,1.2,2.05,2.05,0,0,0,.77.21h.15a2.33,2.33,0,0,0,.38,0,2.06,2.06,0,0,0,1.13.35,2,2,0,0,0,1.32-.51,2.25,2.25,0,0,0,.46-.32l.07-.06.07-.06a2.19,2.19,0,0,0,.81-1.5,2.17,2.17,0,0,0-.28-1.21,2,2,0,0,0,.49-.55A2.52,2.52,0,0,0,23.72,60,2.29,2.29,0,0,0,23,58.19l0,0a2.17,2.17,0,0,0-.1-.62l0-.06A2.15,2.15,0,0,0,23,57a2,2,0,0,0,.68-2v0a2.24,2.24,0,0,0,0-.88s0-.07,0-.11a1.7,1.7,0,0,0,0-.39,1.38,1.38,0,0,0,.08-.45,1.47,1.47,0,0,0,0-.47,1.87,1.87,0,0,0,.08-.32,2.06,2.06,0,0,0,.52-1.4c0-.07,0-.14,0-.2v0a1.8,1.8,0,0,0,.08-.21,2,2,0,0,0,.27-.58,1.9,1.9,0,0,0,.4-.57,1.48,1.48,0,0,0,.1-.27,2,2,0,0,0,.1-1.15,2.13,2.13,0,0,0,.19-.75,1.48,1.48,0,0,0,0-.21,2.31,2.31,0,0,0,.39-1.08V45.8l0,0a2.19,2.19,0,0,0,.32-1l.06-.3a2.3,2.3,0,0,0,.05-.45,2.25,2.25,0,0,0,.3-.6l.09-.18.15-.11a1.39,1.39,0,0,0,.19-.06A2.07,2.07,0,0,0,28,42.7l.12,0a4.91,4.91,0,0,0,.51-.15l.19-.09a2,2,0,0,0,.76-.18,2.29,2.29,0,0,0,.86-.32l.22-.08.82-.28.2-.08a2.67,2.67,0,0,0,1.17-.33l.11,0a4,4,0,0,1,.5-.07L34,41h.49l.29,0a2.06,2.06,0,0,0,.79.15h.21l.18,0h.14a2.12,2.12,0,0,0,.75-.14h0l.2,0,.42-.09a2.09,2.09,0,0,0,.69-.28,2.4,2.4,0,0,0,1.09-2.42,2,2,0,0,0-.32-.79,1.84,1.84,0,0,0,.17-.22,2.27,2.27,0,0,0,.45-2,2.07,2.07,0,0,0-.87-1.2,2.1,2.1,0,0,0-.27-.24l-.07-.09-.06-.06a1.86,1.86,0,0,0-.36-.33,3.26,3.26,0,0,0-.43-.36,2.75,2.75,0,0,0-.38-.2,2.68,2.68,0,0,0-1.07-.29h-.18l-.13-.05a2.13,2.13,0,0,0-.71-.16,2.26,2.26,0,0,0-.8-.15,1.67,1.67,0,0,0-.39,0l-.12,0a2.28,2.28,0,0,0-.52-.1h-.15a1.83,1.83,0,0,0-.47,0l-.24,0a2.3,2.3,0,0,0-.45,0h-.2a4.47,4.47,0,0,0,.09-.45c0-.07.05-.14.08-.22a1.87,1.87,0,0,0,.27-.57,2.15,2.15,0,0,0,.53-1.09l.12-.3a2.73,2.73,0,0,0,.1-.48,2.33,2.33,0,0,0,.11-.28,2.42,2.42,0,0,0,.53-1.41h0a2.08,2.08,0,0,0,.36-.72,2.32,2.32,0,0,0,.36-.83,2.54,2.54,0,0,0,.19-.59,2.2,2.2,0,0,0,.38-.94,2.05,2.05,0,0,0,.16-.41,2.29,2.29,0,0,0,.32-1.38,2.08,2.08,0,0,0,.26-.81,2,2,0,0,0,.26-1.38l.31-.08a1.94,1.94,0,0,0,.76-.31,2,2,0,0,0,.68-.12h.34a1.47,1.47,0,0,0,.36,0h.17a1.77,1.77,0,0,0,.61-.16h.13A2.13,2.13,0,0,0,40,19.2a2.12,2.12,0,0,0,.57.08,2,2,0,0,0,1.18-.39,3.14,3.14,0,0,0,.4.08,1.93,1.93,0,0,0,.53.11H43a2.72,2.72,0,0,0,.11.25,2.33,2.33,0,0,0,1.69,1.19l.1,0a4,4,0,0,0,.72.07h.11a2,2,0,0,0,1.35.52,2.31,2.31,0,0,0,.92-.21,3.29,3.29,0,0,0,.59-.3A3.18,3.18,0,0,0,50.49,19a2.25,2.25,0,0,0,.16-.31c.06-.16.13-.34.2-.55a1.48,1.48,0,0,1,.11-.26,1.9,1.9,0,0,0,.2-.74,8,8,0,0,0,0-1.29,2.84,2.84,0,0,0-.35-1.22,2.53,2.53,0,0,0-.15-.66,2.18,2.18,0,0,0-.65-.85,1.77,1.77,0,0,0-.16-.22,1.53,1.53,0,0,0-.17-.34A1.81,1.81,0,0,0,49.2,12l-.06-.09a2.56,2.56,0,0,0-.94-.79,2,2,0,0,0-.4-.23,2.3,2.3,0,0,0-1.16-.5,2.77,2.77,0,0,0-.41-.12,2.46,2.46,0,0,0-.26-.14,2.79,2.79,0,0,0-1.22-.31h0l-.29,0h-.28a3.22,3.22,0,0,0-.69-.2,3.07,3.07,0,0,0-.57-.06ZM25,48.87Z\"></path><path class=\"cls-1\" d=\"M60,52.82a1,1,0,0,1-.38-.07c-.63-.26-1.36-.93-1.23-2.72a1.19,1.19,0,0,1,.09-.36l.22-.45a25.85,25.85,0,0,1-.21-4.64l-.4,1.26a1,1,0,0,1-1,.69h-.26a1,1,0,0,1-.68-.35l-.51-.59a1,1,0,0,1-.24-.73l0-.33-.08-.08a1,1,0,0,1-.24-.73v-.17a.86.86,0,0,1,0-.17l1-3.92-.08-.33a.93.93,0,0,1,0-.44l.52-2.44a17.31,17.31,0,0,0-1.58-3.76,1,1,0,0,1-.31-.78s0-.07,0-.1l-1.08-1.14a19.16,19.16,0,0,0-4-1,1.81,1.81,0,0,1-.78.21A7.28,7.28,0,0,1,47.63,31a1.06,1.06,0,0,1-.26.49,5.73,5.73,0,0,0-.88,1.24h.37a1.06,1.06,0,0,1,.59.24,1,1,0,0,1,.54.41,1,1,0,0,1,.11.88l-.26.75a1,1,0,0,1-.94.67l-.43,0a1,1,0,0,1-.92-1.07v0l-2.94,2.2a1,1,0,0,1-.6.2l-.42,0a1,1,0,0,1-.75-.44l-1.79-.13a1,1,0,0,1-.69-.34L38,35.62a1,1,0,0,1-.24-.73v-.13l-1.44-.47a1,1,0,0,1-.69-1l0-.38a1,1,0,0,1,1-.93,1,1,0,0,1,.3,0l1.69.53a1.31,1.31,0,0,1,.61-1l0-.4a1,1,0,0,1,.31-.66,1.14,1.14,0,0,0,.16-.6,1,1,0,0,1,.34-.69l.06,0s0-.09,0-.15a1,1,0,0,1,.48-.78l0-.11A1,1,0,0,1,41.38,27a9.94,9.94,0,0,0,1-2.22,1,1,0,0,1,.42-.5V24.2a1,1,0,0,1,.27-.81.92.92,0,0,1,.35-.24,9.46,9.46,0,0,0,.87-2.08l-.19,0-.33.18a1.12,1.12,0,0,1-.47.11l-.6,0A1,1,0,0,1,42,21c-.3.81-1.13,1.22-2.46,1.22l-.61,0a.58.58,0,0,1-.19,0L38,21.9c-.22.7-.61,1.36-1.42,1.36h-.08a1,1,0,0,1-.93-.92s0-.07-.15-.09a1,1,0,0,1-.72-1l0-.21c0-.27.19-1.18,1.6-1.21l.3-.26a1,1,0,0,1,.65-.25,1.09,1.09,0,0,1,.26,0l.8.22h.08l2.7,0a1,1,0,0,1,.71.31,1,1,0,0,1,.74-.88l1.11-.3a1.09,1.09,0,0,1,.26,0l1.13.08.4-.34a1,1,0,0,1,.39-1l0-.36a1.24,1.24,0,0,1,.46-.88,1.34,1.34,0,0,1,0-.2l0-.35a1.3,1.3,0,0,1,.35-.81,2.13,2.13,0,0,1-.36-.39h0a1,1,0,0,1-.93-1.07l0-.2a1,1,0,0,1,.31-.65,6.75,6.75,0,0,0,.94-1,1,1,0,0,1,1-.8l.45,0a1,1,0,0,1,.81.52A2.76,2.76,0,0,1,49.2,11l0-.31a1,1,0,0,1,.63-1.05A2.85,2.85,0,0,0,50,9.23l0-.38a1.55,1.55,0,0,1,1-1.22V7.45a1,1,0,0,1,.35-.68,1,1,0,0,1,.55-.24,1.06,1.06,0,0,1,.59-.47l.21,0a1.36,1.36,0,0,1,.47-.46l0-.54c.07-1.06,1.36-1.4,1.9-1.55a1.15,1.15,0,0,1,.26,0,1,1,0,0,1,1,1.07l0,.18a.76.76,0,0,1,0,.21l0,.08h0a1,1,0,0,1,.75.33l.3.34a7.23,7.23,0,0,1,.73-1,.92.92,0,0,1-.31-.24L57.47,4a1,1,0,0,1-.24-.73l0-.35a1,1,0,0,1,.66-.87,1.27,1.27,0,0,1,.34,0h0a1,1,0,0,1,.29-.42L59,1.24A1,1,0,0,1,59.62,1h.13a.94.94,0,0,1,.69.42l.83,1.17a1.07,1.07,0,0,1,.18.62l1-.68A.93.93,0,0,1,63,2.37l.45,0a1,1,0,0,1,.75.43,1.05,1.05,0,0,1,.18.54l.47,0A1,1,0,0,1,65.7,4l0,.05a1,1,0,0,1,.51-.14l.45,0A1,1,0,0,1,67.6,5v.18a1,1,0,0,1-.37.71l-.41.32a1,1,0,0,1-.62.22,1,1,0,0,1-.75-.34,1.21,1.21,0,0,1-.2.3,1.48,1.48,0,0,1,0,.21,1,1,0,0,1,.31.54,1,1,0,0,1,.84-.46h0a1,1,0,0,1,.74-.33h.25a1,1,0,0,1,.69.35l.35.41a1,1,0,0,1,.24.64,1,1,0,0,1,.84,1.05v0l1.08-.32a1.26,1.26,0,0,1,.28,0,1,1,0,0,1,.75.35l.52.59a1,1,0,0,1,.1,1.17.54.54,0,0,1,.15.15.88.88,0,0,1,.19.32,1.3,1.3,0,0,1,.82,1.07.85.85,0,0,1,.17.16,1,1,0,0,1,.24.73l0,.55a1,1,0,0,1-1,.93l-.25,0a1,1,0,0,1-.37-.09l-1.12-.55-.29.32a1,1,0,0,1-.36.24h0a1.24,1.24,0,0,1-.19.6,1,1,0,0,1,.46.92v.17a1,1,0,0,1-.34.69,1,1,0,0,1-.66.24h-.09a.67.67,0,0,0-.51.25.54.54,0,0,1,0,.18v.17a1.09,1.09,0,0,1,0,.26l-.26.74a1,1,0,0,1,.19.67l0,.17a1,1,0,0,1-1,.93l-.27,0v1.33a1,1,0,0,1-.25.67,1,1,0,0,1-.72.84l-2.07.58a.84.84,0,0,1-.27,0h0A2.67,2.67,0,0,0,65.17,25a1,1,0,0,1,.25,1.2l0,.07a1.76,1.76,0,0,1,.18.39l.51-.09h.16a1,1,0,0,1,1,1.08v.17a1.11,1.11,0,0,1-.2.53l.39.45a1,1,0,0,1,.24.76,1,1,0,0,1-.4.7l-.22.16-.14.08c.24,1,.48,2.3.73,3.94a1.62,1.62,0,0,1,0,.22l-.07.94a1,1,0,0,1-.19.52l0,.05a.87.87,0,0,1,0,.23c-.33,2-1.26,2.41-2,2.41h-.21a.49.49,0,0,1,0,.12L65,41.31a1.55,1.55,0,0,1,0,.21l-.45,1.56.09.52a1.29,1.29,0,0,1,0,.34l-.29,1.6v.13a1.52,1.52,0,0,0,.37,1.18,1,1,0,0,1,.19.9,1.21,1.21,0,0,1,0,.19l0,.53a1,1,0,0,1-.79.9c-.42.09-1.3.55-2.51,2.62a1,1,0,0,1-.36.36l-.58.34A1,1,0,0,1,60,52.82Zm1.8-14.38q0,.51-.06,1.11l.07-1ZM51.66,21a11,11,0,0,0,1.8,2.15A3.19,3.19,0,0,1,54.55,23a4.33,4.33,0,0,1,.55-.58v-.08a1,1,0,0,1,.4-.73v-.15a1.1,1.1,0,0,1,.17-.48h0a1,1,0,0,1-.68-.34l-.16-.19a1,1,0,0,1-.24-.72v-.2a.75.75,0,0,1-.15.16L54,20a1,1,0,0,1-.65.25A1,1,0,0,1,53,20.2a1.12,1.12,0,0,1-.33-.2,8.93,8.93,0,0,1-1,.74v0A.85.85,0,0,1,51.66,21Zm10-7.32a1,1,0,0,1,.61.21l.59.45.22-.09a.92.92,0,0,1,.4-.08h.06l-.29-.82a1,1,0,0,1,.48-1.22,8,8,0,0,0,.54-.84,1,1,0,0,1,0-.3v-.17a.94.94,0,0,1,.18-.5c-.34-.09-.69-.16-1-.22l0,.07a.93.93,0,0,1,.15.59l0,.56a1,1,0,0,1-.72.88.9.9,0,0,1-.28,0,1.08,1.08,0,0,1-.47-.11,3.37,3.37,0,0,0-.51.43,1,1,0,0,1-.2.16,1,1,0,0,1,.17.73,1,1,0,0,1,.12.23ZM45.14,11.9a1,1,0,0,1-.76-.35l-.16-.18a1,1,0,0,1-.24-.73l0-.38a1,1,0,0,1,.35-.68l.37-.33A1,1,0,0,1,45.38,9a1,1,0,0,1,.7.29l.19.19a1,1,0,0,1,.3.78l0,.35a1,1,0,0,1-.34.69l-.41.35A1,1,0,0,1,45.14,11.9Z\"></path><path class=\"cls-2\" d=\"M59.62,2l.83,1.18-.23.71-1-1.54L59.62,2M58.26,3l.35.38,0,.37-.35-.4,0-.35M63,3.37l.38,0-.27.89.2,0,.32.4.59-.34.55,0-.62.86.35.41-.78.67.51.22,0,.38h-.18c-.37,0-.57.1-.58.31l1.11.08,0,.2L63.24,8v.18a6.44,6.44,0,0,1,2.51.92,2.25,2.25,0,0,0,.67-1.42h.16c.38,0,.58-.11.59-.33h.18l.35.41v.18l-.22.16v.2l.73.41.35,0v.18l-.19.19,0,.17,1,.64,1.54-.45.51.6a2.52,2.52,0,0,0-.87,1.4l.21,0,.74-.12h.18l0,.35c0,.23-.18.34-.48.34h-.1l0,.35.73.05c0-.33.15-.5.38-.5h0c.23,0,.33.33.29.94l.38,0,0,.56h-.18l-1.79-.87-.79.85h-.18l0-.35-.58.31.13.57h-.17l.16.18,0,.18c0,.22-.21.33-.59.33h-.16l0,.38a1.17,1.17,0,0,0,1.06.81l0,.17h-.12a1.92,1.92,0,0,0-1.64,1.17l.17.18,0,.18-.44,1.26.32.41v.17l-.35,0L67.05,19l-.38,0V21.7l-.38,0,.16.19,0,.38-2.07.58-.12-.74-.35,0,0,.35h-.21L63.13,22l-.41.7c.49,0,.72.17.71.41l0,.2-.19.16a3.62,3.62,0,0,0,1.3,2.3l-.44.91h.2c.35,0,.49.47.43,1.33q.95.06,1.93,6.57l-.07.94-.39.53.16.18c-.17,1-.5,1.57-1,1.57h0l-.87-.62-.43.73.14.92L64,41.24,63.44,43l.12.75-.3,1.65v.17a2.59,2.59,0,0,0,.6,1.9l-.19.16.16.22,0,.52c-1,.22-2.09,1.25-3.16,3.09l-.58.34c-.48-.19-.68-.76-.61-1.72l.41-.88c-.33,0-.39-3.29-.19-9.79l-.16-.19v-.18l.59-3.27c0-.75-.38-1.15-1-1.19l-.57.13L58.71,37l-.2,2.74.14.93-.21,0,.19.22V41l-1.44,4.5H57l-.51-.6.08-1.11-.38,0v-.18l1-4.15-.14-.57.58-2.72q-1.38-3.91-1.91-4.4l.22-.16v-.18l-1.72-1.8a20.44,20.44,0,0,0-4.9-1.26c0,.19-.23.29-.66.29h-.27c-.86,1.14-1.51,1.71-1.94,1.71h0l.19.19,0,.2a8.5,8.5,0,0,0-1.71,3L42,35.93l-.35,0,0-.38-2.57-.19L38.79,35l.07-.9-2.18-.72,0-.38,3.07,1H40l-.31-.58.05-.73c0-.21.17-.31.45-.31h.1l.08-1.11a1.84,1.84,0,0,0,.48-1.26h0c.22,0,.35-.29.39-.88l.57-.16-.1-.92h0c.39,0,.94-.94,1.66-2.82l.57-.16-.11-.92h0q.6,0,1.71-3.57h.11c.3,0,.46-.1.47-.31l-.73-.44,1.19-1-.14-.57.59-.34-.19-.19,0-.55c0-.2.21-.3.59-.3h.19l0-.2L47.35,16l0-.36c0-.22.22-.33.59-.33h.17L48,15.16l0-.55.55,0,0-.56-1,.14a1.13,1.13,0,0,1-.66-1h-.17l-.19.19-.21,0,0-.2c.8-.77,1.21-1.28,1.23-1.56l.38,0A2,2,0,0,0,48.68,13l0,.35.35,0c.23-1.16.63-1.74,1.18-1.74h.06l0-.21-.11-.92h0c.23,0,.5-.35.8-1h.17L51,9.3l0-.38c0-.19.39-.41,1.13-.65L52,8.08l0-.55h.13c.4,0,.62-.17.64-.51l.16.22.38,0c.08-.6.28-.9.59-.9h0l2.36.18,0-.56.71.79-.25.54H57l.51.25c.91-2,1.76-3,2.55-3h.08l0-.74c.25,0,.36.22.34.59h.17l.19-.19h.18l.19.22L63,3.37m-.58,7.88L62.28,11l-.17,0a2.47,2.47,0,0,0-1.36.85l-1.11-.09V12l.54.21-.21.55.48.59-.22.54.18,0q.38,0,.45,1.5l.14.92c.48.11.71.31.69.61l-.41.35,0,.55.34.56.92-.11,1.1.25L64,17.45h-.18l-.57.13.06-.73h0c.51,0,1-.7,1.4-2.1L64.16,13h0c.18,0,.59-.58,1.24-1.76l-.19-.18V10.9l.38,0,0,.35h.18L66,10V9.84a9.75,9.75,0,0,0-3.26-.79l-.62,1.24.32.41,0,.55m-9.07,8-.12-.75-.35,0c-1.18,1.1-1.95,1.65-2.33,1.65h0l.19.22,0,.35-.22.16,0,.2c1.44,2.06,2.41,3.12,2.92,3.15l.17,0A1.73,1.73,0,0,1,54.65,24h.4c.47-.69.85-1,1.16-1h0v-.17l-.16-.22v-.18l.57-.13-.19-.19,0-.56.19.19.18,0v-.18c.07-1-.32-1.52-1.17-1.58l-.17-.19,0-.35.19-.19v-.18l-.68-.78-.74.12-.92-.24.34.58,0,.17-.4.36m9.15,1,.59-.52.06-.73-.72-.23c-.5.14-.76.31-.77.51l0,.17a.65.65,0,0,1,.68.78l.18,0m-1.7,28.46,1-1.57c.5-.05.78-.58.86-1.62h-.18c-.6-.12-.89-.33-.86-.62l.43-1.06L62,42.39h0c.36,0,.58-.67.68-2l.18,0-.17-.19.12-1.64-.09-1.12.23-.72L61.8,35.35l-.88,2,.16.18-.23.72q-.24,3.39,0,10.52M55.39,4.45v.18a1.47,1.47,0,0,1-1,1h-.17l0-.56c0-.23.4-.45,1.16-.65m10.84.44.38,0,0,.17-.4.33L66,5.23l0-.18.19-.16M45.38,10l.19.19,0,.35-.4.35L45,10.71l0-.38.38-.32m16.25,4.68,1.06.81.76-.32,0,.2c-.3.69-.56,1-.79,1h0l-1-1.54v-.18m-17.69,5,1.28.1,0,.38L43.91,20l-.58.31-.53,0,0-.35,1.11-.31m-6.66.63.9.25h.17l2.76,0c-.13.41-.64.61-1.53.61l-.54,0-1.78-.49c-.18,1.07-.4,1.6-.66,1.6h0a1.06,1.06,0,0,0-.87-1l0-.21c0-.19.24-.29.67-.29h.29l.59-.52m29,7.29v.18l-.6.51-.16-.19,0-.38.74-.12M66.14,29h.17l.35.41-.21.16h-.18l-.16-.19,0-.38M46.61,33.69h.18l.16.19h.21l-.26.75-.35,0,.06-.93M59.62,0a2,2,0,0,0-1.31.49l-.4.35a1.33,1.33,0,0,0-.26.27l-.06,0a2,2,0,0,0-1.3,1.53,2,2,0,0,0-.9-.21,1.79,1.79,0,0,0-.51.07c-.62.16-2.52.66-2.65,2.44v.1l-.06.07a2,2,0,0,0-.81.5A2.05,2.05,0,0,0,50.7,6a1.9,1.9,0,0,0-.61,1A2.31,2.31,0,0,0,49,8.77V8.9a1.42,1.42,0,0,0-.3.25,2,2,0,0,0-.37.54H48.2l-.38,0h-.33A2,2,0,0,0,47,8.78l-.19-.19A2,2,0,0,0,45.38,8a2,2,0,0,0-1.31.48l-.38.33A2,2,0,0,0,43,10.19l0,.38A2,2,0,0,0,43.46,12l.17.19a2,2,0,0,0,.85.58,2,2,0,0,0,0,.26v.2a2,2,0,0,0,.48,1.46,1.82,1.82,0,0,0,.53.43,2.63,2.63,0,0,0-.06.39l0,.21a2.33,2.33,0,0,0-.47,1.2,2.11,2.11,0,0,0-.37.75l-.44,0h-.14a2.41,2.41,0,0,0-.53.07l-1.1.3a2,2,0,0,0-.93.56l-.25,0-2.64,0-.69-.19a2.25,2.25,0,0,0-.52-.07,2,2,0,0,0-1.3.49l-.06.05a2.34,2.34,0,0,0-2.19,2.12v.2a2,2,0,0,0,1,1.89,2,2,0,0,0,1.71,1.22h.16a2.18,2.18,0,0,0,2-1.17,1.92,1.92,0,0,0,.32.05l.69,0a3.78,3.78,0,0,0,2.77-.92,1.54,1.54,0,0,0,.31.05h.11a1,1,0,0,1,0,.1,1.64,1.64,0,0,0-.35.29,2,2,0,0,0-.55,1.17,2.11,2.11,0,0,0-.34.58,12.17,12.17,0,0,1-.79,1.79,1.93,1.93,0,0,0-.46.35,2,2,0,0,0-.54,1.18,2,2,0,0,0-.44.9,2,2,0,0,0-.45,1.12c0,.06,0,.1,0,.13A1.93,1.93,0,0,0,38.34,31a2,2,0,0,0-.22.27l-.82-.26a2,2,0,0,0-.59-.09,2,2,0,0,0-2,1.86l0,.38a2,2,0,0,0,1.37,2l.81.27a2,2,0,0,0,.41.76l.33.38a2,2,0,0,0,1.36.69l1.4.1a2,2,0,0,0,1.14.46l.35,0H42a2,2,0,0,0,1.21-.4l2-1.46a1.94,1.94,0,0,0,1.23.54l.35,0h.15a2,2,0,0,0,1.88-1.35l.26-.74a2,2,0,0,0-.94-2.42,2.18,2.18,0,0,0,.38-.57,8.24,8.24,0,0,0,1-1,3.44,3.44,0,0,0,.38-.11,19.47,19.47,0,0,1,3.27.82l.68.71a2,2,0,0,0,.51,1.11,21.37,21.37,0,0,1,1.31,3.19l-.46,2.16a1.87,1.87,0,0,0,0,.88l0,.09-.92,3.68a2.14,2.14,0,0,0-.06.35v.17a2,2,0,0,0,.3,1.2A2,2,0,0,0,55,46.23l.52.6a2,2,0,0,0,1.35.68l.18,0h.16a1.58,1.58,0,0,0,.38,0,11.2,11.2,0,0,0,.14,1.59l-.08.17a1.92,1.92,0,0,0-.19.71c-.18,2.51,1.09,3.41,1.86,3.72a2.12,2.12,0,0,0,.75.14,2,2,0,0,0,1-.27l.58-.34a1.91,1.91,0,0,0,.72-.72c1.16-2,1.85-2.14,1.85-2.14a2,2,0,0,0,1.59-1.81l0-.53a1.15,1.15,0,0,0,0-.19,2,2,0,0,0-.43-1.61.54.54,0,0,1-.14-.47v-.07l.28-1.55a1.94,1.94,0,0,0,0-.68l0-.3.38-1.35a1.86,1.86,0,0,0,.08-.41l.12-1.67c.82-.23,1.89-1,2.25-3.14,0,0,0-.06,0-.09a2.06,2.06,0,0,0,.24-.81l.07-.93a2.26,2.26,0,0,0,0-.45c-.2-1.29-.39-2.41-.59-3.38a2,2,0,0,0,.62-1.23,2,2,0,0,0-.46-1.52,1.22,1.22,0,0,0,0-.26l0-.18a2,2,0,0,0-.65-1.62,2,2,0,0,0-1.07-.51A2.07,2.07,0,0,0,66,24.43l1-.27a2,2,0,0,0,1.38-1.38,2,2,0,0,0,.32-1.1v-.44a2.15,2.15,0,0,0,.56-.34,2,2,0,0,0,.69-1.38l0-.17a1.94,1.94,0,0,0-.11-.8l.12-.34c0-.08,0-.15.06-.22a2,2,0,0,0,1.66-1.83V16a2.12,2.12,0,0,0-.1-.8l.17.09a2,2,0,0,0,.73.19h.32a2,2,0,0,0,2-1.86l0-.55a2,2,0,0,0-.48-1.45l0,0a2.23,2.23,0,0,0-.93-1.23,2,2,0,0,0-.47-1.59l-.51-.6a2,2,0,0,0-1.51-.69,2.1,2.1,0,0,0-.56.08l-.16,0A1.84,1.84,0,0,0,69.54,7a1.91,1.91,0,0,0-.34-.56L68.85,6a1.83,1.83,0,0,0-.36-.32,2,2,0,0,0,.1-.48V5.06a2,2,0,0,0-1.85-2.13l-.38,0H66.1a1.85,1.85,0,0,0-.94-.46l-.11-.18a2,2,0,0,0-1.51-.86l-.38,0H63a1.94,1.94,0,0,0-1.12.34l0,0L61.26.85A2,2,0,0,0,59.87,0l-.25,0ZM53.37,21.26a2,2,0,0,0,.72-.14l.12.15.15.15a1.61,1.61,0,0,0-.19.49l-.1.09-.32.05a10.44,10.44,0,0,1-.68-.82,1.53,1.53,0,0,0,.3,0Z\"></path><path class=\"cls-1\" d=\"M87.91,70.75c-1.24-.09-1.54-1.55-1.67-4.41a1,1,0,0,1,.2-.66l-.12-1.27h-.15a1,1,0,0,1-.88-.68,1,1,0,0,1,.3-1.07l.44-.38.09-.08.1-1.4a20.85,20.85,0,0,0-1.06-6.32,1,1,0,0,1,0-.34l0-.62a1.27,1.27,0,0,1,.06-.28,39.42,39.42,0,0,1-.15-6.54c-.6-.79-.83-2.8-.68-7.62,0,0,0-.09,0-.14a1.09,1.09,0,0,1,0-.18,6.41,6.41,0,0,1,.49-1.93l-.42-4a1,1,0,0,1,0-.17l.06-.82a1,1,0,0,1,.27-.61,1.41,1.41,0,0,0,.42-.75,3.18,3.18,0,0,0-.42-2,1.57,1.57,0,0,1-.45.31l0,.52a1.68,1.68,0,0,1,.49,1.32.6.6,0,0,1-.06.27l-.22.6a1,1,0,0,1-.54.58l.07.48a1,1,0,0,1-.34.9l-.12.11-.07,1,0,.17a1,1,0,0,1,.17.64l-.07,1a1,1,0,0,1-.34.68l0,0a1.24,1.24,0,0,1,.22.18l.19.22a1,1,0,0,1,.24.73l0,.18a.87.87,0,0,1-.07.31l-.25.6a1,1,0,0,1-.72.59l0,.69a1,1,0,0,1-.06.41l-.14.39.08.78a.87.87,0,0,1-.06.45l-.14.38.31,6.25a1.18,1.18,0,0,1-.05.37l-.1.28a.91.91,0,0,1,.07.46s0,.26,0,.29a1,1,0,0,1,.34-.06h.12a1,1,0,0,1,.68.39l.17.22a1,1,0,0,1,.19.67V52a1,1,0,0,1-.29.63l-.19.19a1,1,0,0,1-.71.29h-.2l.69,3a1.43,1.43,0,0,1,0,.29.92.92,0,0,1,.49-.13h.07c.5,0,1.35.34,1.47,2a1,1,0,0,1-1,1.07l-.86-.06a1.07,1.07,0,0,1-.57-.23,1,1,0,0,1-.48.73,5,5,0,0,1-2.57.81h-.27l-.38,0a.87.87,0,0,1-.31-.07,1.84,1.84,0,0,1-1.07-1.26,9.05,9.05,0,0,1-.54-2.34v0a1,1,0,0,1-.18-.45l-.13-.13h0a1.14,1.14,0,0,1-.4.08h-.12A1,1,0,0,1,76,55.9l-.16-.21a1,1,0,0,1-.19-.67v-.2a1,1,0,0,1,.29-.64l.19-.19a1,1,0,0,1,.71-.29l.53,0c0-.17,0-.32,0-.45a.82.82,0,0,1,0-.31l.52-2.08A15.35,15.35,0,0,0,77.66,47a1.1,1.1,0,0,1,0-.26l0-.2a.76.76,0,0,1,0-.21,1.33,1.33,0,0,1,0-.2l.06-.79a.88.88,0,0,1,.11-.39l-.19-.7a1,1,0,0,1,0-.58l.2-.58-.17-2.85a1,1,0,0,1,0-.3L78,38.89l0-.32a9.64,9.64,0,0,0-.1-3.24,1,1,0,0,1,0-.71l.28-.66a1.1,1.1,0,0,1,0-.4v-.21a.59.59,0,0,1,0-.14L79.4,28,79,26.82a1,1,0,0,1-.06-.41l.07-.82a1,1,0,0,1,.09-.36,1,1,0,0,1-.14-.29,1,1,0,0,1-.27-.64s0-1.64,0-1.65l-.93.92a5.37,5.37,0,0,0-.76,2.87.78.78,0,0,1,0,.22,1,1,0,0,1,.51.31,1,1,0,0,1,.23.73v.21a1,1,0,0,1-.34.68l-.44.38a1.08,1.08,0,0,1-.51.23l.25.57a1,1,0,0,1,.07.52c-.25,2-1.06,2.91-1.85,3.28,0,0,0,.06,0,.09L74.49,35l0,.51.06,7.57a1,1,0,0,1,0,.17A5.45,5.45,0,0,1,74,45l.29,6.21a1.33,1.33,0,0,1,0,.28l-.07.28a1,1,0,0,1,.64,1l0,.64a1,1,0,0,1,.14.7l-.25,1.39-.07,1.28.14.22a1,1,0,0,1,.13.59l0,.79a1,1,0,0,1-.14.44,2.6,2.6,0,0,1-.1.25l.05,1a2.45,2.45,0,0,1,0,.27l-.27,1.18a1,1,0,0,1-1,.79h-.14a1,1,0,0,1-.86-1l0-1.05H72a.49.49,0,0,1,0,.11l-.25.6a1,1,0,0,1-.92.61.86.86,0,0,1-.22,0,1,1,0,0,1-.78-1l.06-1.74a1.33,1.33,0,0,1-.07-.53l.09-1.29c-.12-1-.29-2.26-.52-3.68l-.12-1.51a1,1,0,0,1,.22-.69l-.07-7a.94.94,0,0,1,.09-.44L69.24,43a1,1,0,0,1-.1-.51l0-.2a1,1,0,0,1,.34-.69,1,1,0,0,1,.39-.21l-.18-1a.7.7,0,0,1,0-.25l.13-1.78a1,1,0,0,1,.14-.45L69.65,36a1.09,1.09,0,0,1,0-.36l.23-1.13-.4-1.2a1,1,0,0,1,0-.63,2.47,2.47,0,0,1-.33-1.57,1,1,0,0,1,.38-.71l-.36-.82a1.09,1.09,0,0,1-.08-.47l.13-1.69-.35-.55a1,1,0,0,1-.16-.61l0-.4a1,1,0,0,1,.38-.71l.43-.35a1,1,0,0,1,.37-.19l.16-.55.2-2.72a1,1,0,0,1-.45-.28l-.38-.41a1,1,0,0,1-.27-.74,1,1,0,0,1,.34-.7l.22-.19a1,1,0,0,1,.66-.24h.07l0-.33-.1-1.35a1,1,0,0,1,.54-1l.07,0-.14-2.58a.48.48,0,0,1,0-.12l.06-.87L70.55,12a1,1,0,0,1-.16-.61l.24-3.19a1.31,1.31,0,0,1,.64-1.07l-.15-2.76V4.19l0-.41a1.09,1.09,0,0,1,.07-.3.82.82,0,0,1,0-.35,1,1,0,0,1,.4-.69l.22-.16a1,1,0,0,1,.59-.2l.86.06.21,0,.5.15a5.35,5.35,0,0,1,1.59-.2l.73,0a1,1,0,0,1,.86.64l.93,2.49,0,0a1.05,1.05,0,0,1,.29.79l-.34,4.58a1,1,0,0,1-.24.59l-.24.27a.2.2,0,0,1,0,.11v.2a.51.51,0,0,1,0,.13,2.29,2.29,0,0,1,.39.93h.15a1,1,0,0,1,.18-.17,1,1,0,0,1,.58-.18.84.84,0,0,1,.27,0l.61.17a19.06,19.06,0,0,0,3-3.08,4.11,4.11,0,0,1,2-1.56c.32-.32.64-.64,1-.94a2.82,2.82,0,0,1-1.26-1.39,1,1,0,0,1-.09-.48c.12-1.5,2-1.86,2.69-2l.18,0a1,1,0,0,1,.45.11c.32.16,1.08.54,1.26,1.24a15.42,15.42,0,0,1,3-1.5,1,1,0,0,1,.35-.06l1.27.09a1,1,0,0,1,.56.22l.24.19.8-.08h.1a1,1,0,0,1,1,.69c.13.42.29.6.38.62a1,1,0,0,1,.77,1.05L97.1,8.17l.12.67a.93.93,0,0,1,0,.55.93.93,0,0,1,0,.29v.2a1.08,1.08,0,0,1-.07.31,1.06,1.06,0,0,1,0,.31v.2A1.14,1.14,0,0,1,97,11l-.11.25a15.22,15.22,0,0,1,.36,2.61v-.18a1,1,0,0,1,.32-.66l.41-.38a1,1,0,0,1,.68-.26H99a1,1,0,0,1,.69.35l.92,1.06a1,1,0,0,1,.21.92,1,1,0,0,1-.65.69l-1,.33a.84.84,0,0,1-.31.05,1,1,0,0,1-.84-.46l-.53-.83a1,1,0,0,1-.13-.33c0,.46,0,.93,0,1.44a.94.94,0,0,1-.07.37l.16.59a1.84,1.84,0,0,1,0,.33l-.12,1.6a1.18,1.18,0,0,1,0,.2l0,.13a1,1,0,0,1,.2.68v.18a3.66,3.66,0,0,1,.44,2A2.16,2.16,0,0,1,97,23.37a13.35,13.35,0,0,1-.4,2.2,1.55,1.55,0,0,1,0,.31l0,.21c-.16,2.26-.16,6,0,11.07l.34-.27a1,1,0,0,1,.62-.22l.49,0a1,1,0,0,1,.68.34,1,1,0,0,1,.24.73l0,.38,0,.18a1.07,1.07,0,0,1,.18.65l0,.17a1,1,0,0,1-.34.69l-.44.38a1,1,0,0,1-.65.24h-.08a1.1,1.1,0,0,1-.55.16l-.27,0c.09,2,.19,4.24.32,6.62a.87.87,0,0,1,0,.23v.1L97,48.76a88.9,88.9,0,0,0,.41,13.09,1,1,0,0,1-.18.66l.07.65a.87.87,0,0,1,.16.17l.16.22a1,1,0,0,1,.19.7c-.28,2.5-.76,4.81-2.42,4.81h-.11l-.61,0a2.11,2.11,0,0,1-1.53-.78,1,1,0,0,1-.53-1l0-.18a6.27,6.27,0,0,1-.11-1.8l-.07-1.78a1.1,1.1,0,0,1,.12-.51c0-2.63-.23-6.69-.54-12.07a.29.29,0,0,1,0-.13,77.23,77.23,0,0,0,.11-10.37,1.12,1.12,0,0,1-.25.4,1.12,1.12,0,0,1,0,.32l-.05.62a1.2,1.2,0,0,1,0,.2,1.47,1.47,0,0,1,0,.21v.17a1,1,0,0,1-.19.52l-.21.29.06,1.24a1,1,0,0,1-.06.41l-.32.87v.05a1,1,0,0,1,.19.16,1,1,0,0,1,.24.73l0,.41a1,1,0,0,1-.35.68l-.43.38a1,1,0,0,1-.66.25H90l.25,1.51a.93.93,0,0,1-.09.62l.1.82h.12a1,1,0,0,1,.63.29l.19.19a1,1,0,0,1,.29.78v.2a1,1,0,0,1-.34.69l-.22.19a1,1,0,0,1-.36.19l.77,6.34a1.21,1.21,0,0,1,0,.19l0,.38,0,1.55a.89.89,0,0,1,.08.48l-.1,1.41a.78.78,0,0,1,0,.14v.18a1,1,0,0,1-.07.34.65.65,0,0,1,0,.24,7.34,7.34,0,0,1-.7,2.33,1,1,0,0,1,.12.53l0,.21a.89.89,0,0,1-.08.32,1,1,0,0,1,.21.7,1,1,0,0,1-.35.68l-.88.73a1,1,0,0,1-.64.23ZM92,39.28c0-.37-.07-.74-.11-1.11l-.09,0Zm-.27-15.34.06-.8a1,1,0,0,1-.35-.84l.14-2a1,1,0,0,1,.28-.63l.24-.85.25-3.4-.24-2.13a.54.54,0,0,1,0-.18v-.21a1,1,0,0,1,.05-.24l.17-.49-.23-.87-.14.11.07.12a1,1,0,0,1,.07.91l-.25.57a1,1,0,0,1-.92.6h-.23A3.06,3.06,0,0,0,90.37,15v.21a1,1,0,0,1-.26.59l.24,0a1,1,0,0,1,.92,1.06v0a1,1,0,0,1,.06.88.88.88,0,0,1,0,.24v3l-.1,1.36.21.35a1,1,0,0,1,.07.87,1.61,1.61,0,0,1,.12.33Zm-2.69-7.75.06-.07h0Zm8.72,12.87A1,1,0,0,1,96.85,28v-.21a1.06,1.06,0,0,1,.37-.71l.18-.14a1,1,0,0,1-.23-.71l0-.2a1,1,0,0,1,.34-.69l.22-.19a1,1,0,0,1,.65-.24h.28a1.05,1.05,0,0,1,.69.35l.1.12.58.05A1,1,0,0,1,101,26.5l0,.58a1,1,0,0,1-1,.93s-.5,0-.5,0a1,1,0,0,1-.31.48l-.44.38a1,1,0,0,1-.65.24Z\"></path><path class=\"cls-2\" d=\"M72.41,3.08l.79.06.8.23a4.28,4.28,0,0,1,1.57-.24l.65,0,1,2.69.19.19-.33,4.59-.68.77.2.19,0,.21-.25.6c.53,0,.75.58.67,1.63l1-.1,1,.25h.18V14l-.38,0,0-.41,1,.28c.6-.17,1.82-1.36,3.66-3.55A3.06,3.06,0,0,1,85.22,9a19,19,0,0,1,7-4.89l1.2.08.55.46,1.22-.12c.24.74.61,1.17,1.11,1.28l-.18,2.4.15.8L96,9.21l0,.21.2.19,0,.2L96,10v.21l.19.22,0,.2-.25.57a17.15,17.15,0,0,1,.47,4.44h-.2l.32,1.22-.12,1.61-.28,1,.41,0v.2l-.22.16V20c.44,0,.67.59.67,1.66,0,.53-.4.9-1.08,1.13l.19.22c-.22,1.69-.42,2.54-.6,2.54h0l.19.22,0,.2q-.39,5.41.48,21.28l-.21,0,.19.22L96,48.69a87.19,87.19,0,0,0,.42,13.25l-.19.19,0,.2.21,2.11-.1.21-.11.09v.18l.12-.27.11-.1v-.11l.23-.52.16.22c-.28,2.61-.76,3.92-1.42,3.92h0l-.61,0a1.17,1.17,0,0,1-1.07-.88l.22-.76-.19-.25L94,61.53l-.25.6.13,1-.31.25q0-3.94-.56-12.5A70.61,70.61,0,0,0,92.78,37l.26-.77q-.62,0-.48-1.86a5.16,5.16,0,0,0-1.21,2.94c-.25,0-.37-.24-.34-.64l-.43.37.57,3-.63.57.35.41-.05.62-.19.19.16.21v.18l-.42.59.09,1.59-.52,1.37.19.22-.22.19-.2,0c0-.52-.07-.79-.32-.81l-.45.55,0,.21.1,1.41h-.2L89.22,50,89,50l1.25,10.29,0,.41-.22.19,0,.2.17.6-.44.38.19.22h0l.12.14-.2.44.3,1.23-.41.38.35.44a4.42,4.42,0,0,1-1,2.51l0,.41.41,0,0,.21-.24.57.38.43-.88.73L88,69.75c-.39,0-.64-1.18-.74-3.46l.21-.19,0-.2-.23-2.43-1-.07.44-.38.19.22.19-.19.16-2.19a21.42,21.42,0,0,0-1.1-6.66l0-.62.22-.19c-.32,0-.41-2.42-.3-7.21-.6,0-.83-2.4-.69-7.07h.21l-.19-.22c.18-1.17.36-1.75.53-1.75h0l-.47-4.44.06-.82a2.36,2.36,0,0,0,.69-1.36,4.24,4.24,0,0,0-.6-2.63c-.43-1.2-.78-1.84-1.07-1.9h-.2l-.41.38,0,.41.33.61c0,.37-.26.56-.7.56h-.13l-.1,1.37-.22.19,0,.2c.52.18.76.46.74.85l-.23.6-.61,0,0-.41-.2,0,0,.21.28,1.81-.66.57.19.22-.07,1-.22.19v.17l.38.44-.08,1h-.1c-.32,0-.49.13-.51.37l-.2,2.78.08,1.21-.22.6.11,1-.22.57.32,6.46-.26.77.19.22,0,.2-.29,1.19,1.1,4.66-.5,1.55.11,1a4.12,4.12,0,0,1-2.06.66h-.2l-.37,0a.88.88,0,0,1-.52-.73l0,0c.14,0,.24-.6.32-1.81l.16-.48-.12-.29c0-.45,0-1,.05-1.54l-.46.59.41.95c0,.28,0,.54,0,.77l-.37,1.07v.2a2.93,2.93,0,0,0,0,.52,7.64,7.64,0,0,1-.52-2.35l-.16-.21.49-1.55c-.25,0-.41-.5-.48-1.45l.54-2.16a16.12,16.12,0,0,0-.28-4.22l0-.21.21-.19-.18-.22,0-.79.22-.19L78.64,44l.26-.78-.19-3L79,39.05l0-.41A10.77,10.77,0,0,0,78.89,35l.49-1.17-.19-.22,0-.21,1.23-5.52-.52-1.42.06-.81.45-.56,0-.2c-.41,0-.6-.18-.58-.46v-.17l.41,0V24.1l-.41,0-.22.19,0-1.62.62-.57-.93-.86-.61,0L77,22.86a6.17,6.17,0,0,0-1,3.51l-.44.38-.19,2.6.35.82c-.22,1.77-.91,2.66-2,2.66h-.17l.36.61-.3,1.39,0,.58.06,7.64c-.17,1-.34,1.55-.52,1.55h0l.31,6.63L73,52.42l-.07,1,.66,4-.07,1.23a1.86,1.86,0,0,1-1.36.51H72a3.8,3.8,0,0,1-.88-.48c0-.43-.06-.93-.12-1.49l.06-1.6.3-4.08-.14-.17,0-.66v.2l-.22.19.21.27L71,55.58l-.09,1.29c-.12-1.06-.3-2.33-.55-3.82l-.1-1.42.22-.19L70.42,44l.21-.19,0-.2-.51-1v-.2h.19c.4,0,.61-.11.63-.35v-.18l-.29-1.64.13-1.78.22-.19-.41-2.44.28-1.39L70.43,33l.25-.57c-.4-.17-.58-.58-.53-1.24l.64-.37-.7-1.64.15-2-.53-.83,0-.41.44-.35.56.42.24-.57-.19-.22.28-1,.42-5.78L71.39,17l.64-.34-.17-3.21.08-1.2-.55-.86.23-3.19c0-.24.2-.37.53-.37h.12l0-.38-.17-3.22,0-.4.22-.19V3.46l-.19-.22.22-.16M93.2,9.21c-2,1.49-3,2.34-3,2.58l.15.8a2.81,2.81,0,0,0-1,2.34v.2l-.38,0c0-.39-.09-.59-.37-.61A8.92,8.92,0,0,1,86.77,18l.35.41-.07,1,.82.06.23-.78L88,17.44h.17l.58.46.43-.59.6.25.06-.79.4,0,0,.38.16.22-.19.19H90L90,18l.38,0v3l-.12,1.61.37.61-.44.38c.41,0,.64.57.7,1.64H91l0-.38.62,0,0,.21-.21.16.34.85-.27,1,1.12,1.08,0-.21c0-.66-.07-1-.34-1l.31-1.39.19-2.6.22-.16v-.2l-.6-.25.15-2,.41,0v-.21L92.82,20l.28-1,.26-3.6-.25-2.22,0-.2.26-.78L93.07,11l.13-1.79M81,23l0-.41-.35-.44-.26.81L81,23m8,13.8.64-.33-.18-.22V36l.26-.77-.41,0,0-.41.41,0,0-.2-.35-.82-.21,0-.22,3m2.08-.64L91,34.69h-.21l-.09,1.2.19.22h.21M89.17,37l-.41.38.17.19-.24.81-.1,3.78-.16,2.19.63-.13L88.87,44l.22-.19v-.2l-.19-.22.22-.16,0-.41-.13-1,.22-.19-.21,0,.22-.19,0-.2L89.09,41l.21-.16,0-.2-.19-.22.22-.19V40l-.16-.6.21,0-.19-.22V39l.22-.19v-.17c-.27,0-.37-.57-.29-1.64M89,45.39l.06-.82-.21,0-.06.82.21,0m.6,19,.05-3.38-.38-.44-.08,3.79.41,0M87.15,4.33c.51.26.76.48.75.68A2.92,2.92,0,0,1,87,6.56,1.89,1.89,0,0,1,85.28,5.4c0-.48.66-.84,1.87-1.07m3.65,7.5.19.22h.21l-.25.57h-.2l0-.79m7.91,1.58h.2l.92,1.07-1,.33L98.28,14l0-.2.41-.38M70.4,19.77h.2l.35.44-.22.16h-.17L70.18,20l.22-.19m28,6.13h.21l.19.22,0,.21-.22.16-.2,0-.19-.19v-.2l.22-.19m1,.48.61,0,0,.59-.41,0-.38-.44.22-.16M98.3,27.5l.2,0v.17l-.44.38h-.21l0-.21.44-.35m-22.66.05,1,.08,0,.2-.44.38-.58,0,0-.62M97.55,37.67l.41,0,0,.38-.83.15,0-.21.43-.35m-15,.22.2,0,.19.22v.17l-.25.6h-.21l-.14-.81.22-.19m15.17,1,.41,0v.17l-.44.38-.19-.22-.44.38h-.18l0-.41.82-.32m-7.78,7.62.61.05,0,.41-.44.38-.2,0-.35-.44.41-.38m-6.78,5.06.16.22V52l-.19.19-.61,0,.65-.54m6.94.71.21,0,.19.19,0,.2-.22.19H90l-.16-.22v-.21l.19-.16m-16.21.4-.07,1.2h0l-.19-.22.28-1m-.07,1.2.18,0-.25,1.45.07-1.47m3.12.82.41,0v.2l-.44.38-.16-.22v-.2l.19-.19m1,.28.41,0,0,.62-.2,0-.35-.43.19-.19m-4.17.37L73.61,57l-.08-.13.07-1,.1-.52m-2.78,1.52,0,.31,0,1.32a.37.37,0,0,1-.08-.25l.1-1.38m2.69.12.29.49-.06.78-.09.14-.16-1,0-.43m10.47.26c.31,0,.49.37.54,1l-.79-.06-.38-.44.63-.54M73.75,58.4v.09l-.18.17.07,1.41-.26,1.19.13-2.61a1.84,1.84,0,0,0,.23-.25m-2.85.1a1.35,1.35,0,0,0,.17.17,9.94,9.94,0,0,1,0,1.21l-.25.6.07-2m19.36,2.2,0,1.89-.13-.16,0-.12-.17,0,0,0v-.17l.22-.19.09-1.2h0m0,1.89.1.11-.1,1.4,0,0,0-1.53m3.31.79c0,1.13,0,2,0,2.55l.16.19-.07.89a4.92,4.92,0,0,1-.1-1.7l-.08-1.83.13-.1m-3.34.74v.36L90,64.29l.19-.17M93.58,67a.56.56,0,0,1,0,.12l-.06.21,0-.33M72.41,1.08a2,2,0,0,0-1.19.39L71,1.63A2,2,0,0,0,70.2,3a2.54,2.54,0,0,0,0,.39,2.68,2.68,0,0,0,0,.3l0,.41v.25l.12,2.26a2.36,2.36,0,0,0-.61,1.45l-.24,3.18a2,2,0,0,0,.32,1.23l.19.3,0,.53a2.26,2.26,0,0,0,0,.26l.11,2a2,2,0,0,0-.57,1.55l.06.84a1.85,1.85,0,0,0-.37.25l-.22.19a2,2,0,0,0-.16,2.88l.38.41.15.14-.15,2v0l-.15.12-.44.35a2,2,0,0,0-.74,1.41l0,.41A2,2,0,0,0,68,27.4l.18.27L68.1,29a2,2,0,0,0,.15.93l.13.29a1.9,1.9,0,0,0-.22.78,3.58,3.58,0,0,0,.28,1.8,2,2,0,0,0,.09.79l.32.94-.18.87a1.94,1.94,0,0,0,0,.72l.28,1.64a1.86,1.86,0,0,0-.11.52l-.13,1.78a2,2,0,0,0,0,.49l.07.37a2,2,0,0,0-.63,1.3l0,.2a2.18,2.18,0,0,0,.2,1l.1.2a1.45,1.45,0,0,0,0,.36l.06,6.68a2,2,0,0,0-.2,1l.1,1.42a1.1,1.1,0,0,0,0,.18c.22,1.36.39,2.55.51,3.54l-.09,1.19a2.34,2.34,0,0,0,.07.75l-.06,1.56a2,2,0,0,0,1.57,2,2.09,2.09,0,0,0,.43,0,1.92,1.92,0,0,0,.85-.19,2,2,0,0,0,1.44,1l.27,0a2,2,0,0,0,2-1.57l.26-1.19a1.87,1.87,0,0,0,.05-.53l0-.71L75.7,59a2.39,2.39,0,0,0,.14-.6l0-.79a1.81,1.81,0,0,0,0-.57,2.11,2.11,0,0,0,.77.25h0a8.81,8.81,0,0,0,.53,2.21,2.82,2.82,0,0,0,1.62,1.84,2,2,0,0,0,.63.15l.38,0h.34a6,6,0,0,0,3.08-.95,1.78,1.78,0,0,0,.45-.37h0l.79.05h.15a2.17,2.17,0,0,0,.62-.1c0,.2,0,.38,0,.52l-.08,1-.22.19A2,2,0,0,0,84.34,64a2,2,0,0,0,1,1.18l0,.25a2,2,0,0,0-.18.93c.1,2.19.24,5.19,2.6,5.36l.78.06h.15a2,2,0,0,0,1.28-.46l.88-.73a2,2,0,0,0,.71-1.37,1.92,1.92,0,0,0-.14-.92s0-.07,0-.11V68a1.62,1.62,0,0,0,0-.54l.07-.18A2,2,0,0,0,92.45,69a3.12,3.12,0,0,0,2.09,1l.62,0h.18c2.79,0,3.21-3.85,3.41-5.7A2,2,0,0,0,98.37,63l-.16-.21h0a2.09,2.09,0,0,0,.15-1A86.84,86.84,0,0,1,98,48.83L98,47.64v-.1a1.45,1.45,0,0,0,0-.36c-.11-2-.2-3.93-.28-5.7l0,0A1.94,1.94,0,0,0,98.93,41l.44-.38a2,2,0,0,0,.69-1.37v-.17a1.8,1.8,0,0,0-.14-.89l0-.32a2,2,0,0,0-1.85-2.14l-.41,0h-.15c-.07-2.17-.09-4.06-.09-5.65a.91.91,0,0,0,.23,0l.21,0h.15a2,2,0,0,0,1.31-.48l.44-.38.2-.2a2,2,0,0,0,1.94-1.86l0-.58a2,2,0,0,0-.48-1.45,2,2,0,0,0-1.36-.69h-.2a2,2,0,0,0-1.18-.5l-.2,0h-.15a2.22,2.22,0,0,0-.51.06v-.07a3.08,3.08,0,0,0,1-2,.76.76,0,0,0,0-.15,5,5,0,0,0-.43-2.21,1.89,1.89,0,0,0-.14-.78.34.34,0,0,1,0-.1L98.45,17a1.48,1.48,0,0,0,0-.21,2,2,0,0,0,1-.07l1-.33a2,2,0,0,0,.89-3.21l-.92-1.07a2,2,0,0,0-1.37-.68l-.21,0h-.14a2.16,2.16,0,0,0-.71.12l0-.15a2.1,2.1,0,0,0,.15-.61v-.2a1.6,1.6,0,0,0,0-.31c0-.1,0-.2.05-.3v-.2a1.5,1.5,0,0,0,0-.3,2.15,2.15,0,0,0,0-.8l-.11-.55L98.26,6a2,2,0,0,0-1.17-2l0-.08a2,2,0,0,0-1.9-1.38H95l-.4,0a2,2,0,0,0-1-.38l-1.19-.09h-.15a2.1,2.1,0,0,0-.7.12,17.22,17.22,0,0,0-2.32,1.08A4.65,4.65,0,0,0,88,2.54a2.11,2.11,0,0,0-.89-.21,2.46,2.46,0,0,0-.37,0c-2.21.41-3.38,1.38-3.49,2.89a1.92,1.92,0,0,0,.17,1,4.12,4.12,0,0,0,.67,1l0,0a4.93,4.93,0,0,0-2.18,1.79,26.26,26.26,0,0,1-2.4,2.59l-.11,0a2,2,0,0,0-.54-.08h0a2,2,0,0,0,.23-.8l.34-4.59A2,2,0,0,0,79,4.75l-.86-2.3a2,2,0,0,0-1.73-1.29l-.8,0A6.92,6.92,0,0,0,74,1.29l-.23-.07a3.1,3.1,0,0,0-.42-.08l-.78,0Zm5.18,28.56.34-.3.17-.17L77.26,33a2.93,2.93,0,0,0-.05.29v.2a1.61,1.61,0,0,0,0,.38l-.16.37A2,2,0,0,0,77,35.64,9.23,9.23,0,0,1,77,38.49l0,.24-.25,1a2.14,2.14,0,0,0,0,.62L76.88,43l-.13.4a2,2,0,0,0,0,1.15l.1.4a2.2,2.2,0,0,0-.06.37l-.06.79a1.33,1.33,0,0,0,0,.2,1.62,1.62,0,0,0,0,.2v.21a1.52,1.52,0,0,0,0,.52,15,15,0,0,1,.26,3.54l-.5,2h0a2,2,0,0,0-.62.26v-.22a2,2,0,0,0-.54-1.48.48.48,0,0,0,0-.17l-.27-6a7.88,7.88,0,0,0,.47-1.8c0-.11,0-.23,0-.34l-.06-7.56,0-.36.2-.89a5,5,0,0,0,2-3.81,1.86,1.86,0,0,0,0-.78ZM83.82,49.7a1.84,1.84,0,0,0,.05-.52L83.71,46a4.57,4.57,0,0,0,.36,1c0,1.09,0,2,0,2.86l-.22-.1Zm7.26-.65h0v0Zm-7,4.84.07,0v.27l-.05-.22Z\"></path><path class=\"cls-1\" d=\"M103.85,45.26a4.77,4.77,0,0,1-1.14-.13.74.74,0,0,1-.24-.11h0a1.49,1.49,0,0,1-.44-.1,1.2,1.2,0,0,1-.71-.34,1,1,0,0,1-.32-.23l0,0-.13-.09a1,1,0,0,1-.6-.31h0l-.24-.1a1.06,1.06,0,0,1-.46-.13,1.12,1.12,0,0,1-.39-.39,1.32,1.32,0,0,1-.48-.46.22.22,0,0,1,0-.08,1.17,1.17,0,0,1-.65-.64l-.17-.18a1,1,0,0,1-.19-.22,2.08,2.08,0,0,1-.46-.86,1,1,0,0,1-.2-.62s0-.06,0-.08a1.12,1.12,0,0,1-.32-.54,1.08,1.08,0,0,1-.2-.33,1.23,1.23,0,0,1-.1-.41l0-.09a1.54,1.54,0,0,1-.06-.52,1.71,1.71,0,0,1-.09-.3,1.08,1.08,0,0,1-.13-.37,1.16,1.16,0,0,1,0-.32,1,1,0,0,1-.06-.41l0-.16a1.59,1.59,0,0,1,0-.39,1.18,1.18,0,0,1-.05-.48,1.54,1.54,0,0,1,.05-.31.79.79,0,0,1,0-.22,1.08,1.08,0,0,1,.08-.38s0-.22,0-.28l0,0a1.15,1.15,0,0,1,0-.81,1.06,1.06,0,0,1,.09-.43v-.17a1.63,1.63,0,0,1,.1-.46,1,1,0,0,1,.15-.4.85.85,0,0,1,0-.17.51.51,0,0,1,0-.17,1.31,1.31,0,0,1,.12-.76,1.23,1.23,0,0,1,.21-.41v-.11a1,1,0,0,1,.09-.34,1,1,0,0,1,.08-.29v0a1.13,1.13,0,0,1,.1-.38,1.32,1.32,0,0,1,.19-.46l0-.09c0-.05,0-.11-.08-.17a1.1,1.1,0,0,1,.06-.8,1.1,1.1,0,0,1,.06-.67,1.26,1.26,0,0,1,.21-.29v-.05a1.12,1.12,0,0,1,.52-.83,1.17,1.17,0,0,1-.06-.45,1,1,0,0,1,1-.93h0l.14-.14,0,0,0-.1.08-.16a1,1,0,0,1,0-.45.86.86,0,0,1,.11-.24.94.94,0,0,1-.09-.5,1,1,0,0,1,.42-.75s0,0,0,0a.82.82,0,0,1,.16-.34.76.76,0,0,1,.11-.26h0a1,1,0,0,1,.35-.69,1.13,1.13,0,0,1,.26-.16,1,1,0,0,1,.31-.26,1.13,1.13,0,0,1,.1-.44,1.28,1.28,0,0,1,.46-.54v0a1,1,0,0,1,.34-.69,1.06,1.06,0,0,1,.68-.66,1.2,1.2,0,0,1,.18-.26.5.5,0,0,1,0-.13l.07-.11a1.31,1.31,0,0,1,.24-.28,1.16,1.16,0,0,1,.29-.42,1.25,1.25,0,0,1,.38-.41,1.11,1.11,0,0,1,.56-.49,1.12,1.12,0,0,1,.24-.19,1.11,1.11,0,0,1,.78-.37h0a1.19,1.19,0,0,1,.73-.55l0,0a1.49,1.49,0,0,1,.28-.24,1.19,1.19,0,0,1,.61-.41l.18-.08.17-.08a1,1,0,0,1,.69-.26H108a1,1,0,0,1,.45-.23l.22-.31a1,1,0,0,1,.81-.4h.07a1.25,1.25,0,0,1,.5.14h0a1.38,1.38,0,0,1,.27-.08,1.34,1.34,0,0,1,.48-.22,1.32,1.32,0,0,1,.58-.21l.11,0a1,1,0,0,1,.44-.17l.13,0a1.27,1.27,0,0,1,.6-.15h.17a1.34,1.34,0,0,1,.4-.06l.4,0a.85.85,0,0,1,.35.08l.15,0h.05a1,1,0,0,1,.47.12h0a1.12,1.12,0,0,1,.6.19,1.67,1.67,0,0,1,.87.44,2,2,0,0,1,.41.48,1.71,1.71,0,0,1,.38.49,1.15,1.15,0,0,1,.43.59,1.09,1.09,0,0,1,.31.59h0l.11.2a2.2,2.2,0,0,1,.13.52c0,.11,0,.35,0,.71V17a1,1,0,0,1,0,.34.59.59,0,0,1,0,.14.8.8,0,0,1,.13.13,1,1,0,0,1,0,1.3v.17s0,.09,0,.14a1.37,1.37,0,0,1-.1,1v0a1.06,1.06,0,0,1-.07.63v0a1.23,1.23,0,0,1-.22.61c0,.06,0,.13-.07.2a.83.83,0,0,1-.13.34s0,0,0,0h0a.94.94,0,0,1-.24.49,1.18,1.18,0,0,1-.23.32l-.08.08a3.17,3.17,0,0,1-.11.33,1.5,1.5,0,0,1-.37.59v0a1.19,1.19,0,0,1-.33.53,1.3,1.3,0,0,1-.22.38,1.12,1.12,0,0,1-.36.42,1,1,0,0,1-.27.37l-.06.06a1.21,1.21,0,0,1-.39.55.85.85,0,0,1-.16.21,2.57,2.57,0,0,1-.33.33l-.16.13a3.36,3.36,0,0,1-.65.72,9.46,9.46,0,0,1-.88.72l-.6.46-.13.11a.81.81,0,0,1-.29.19l-.1.05-.26.22a.87.87,0,0,1-.26.16,1.1,1.1,0,0,1-.25.15,1.12,1.12,0,0,1-.25.11l-.08.06a1.33,1.33,0,0,1-.24.19,1,1,0,0,1-.72.33h0l-.2.1a.88.88,0,0,1-.2.09,2.05,2.05,0,0,1-.59.3,2.56,2.56,0,0,1-.77.2.85.85,0,0,1-.23,0,1.43,1.43,0,0,1-.39,0h-1l-1-.07a1,1,0,0,1-.75-.43,2,2,0,0,1-.37-.12,1.43,1.43,0,0,1-.13.28.89.89,0,0,1,0,.14V31a1.24,1.24,0,0,1-.21.62s0,.06,0,.1a2.44,2.44,0,0,1,0,.28c0,.05,0,.09,0,.14s0,.22,0,.22a.91.91,0,0,1-.19.52,1.09,1.09,0,0,1-.12.36v0a1.31,1.31,0,0,1-.15.37v.08l.06.1a1,1,0,0,1,.09,1l0,.07a1.23,1.23,0,0,1,0,.2,1.12,1.12,0,0,1,0,.36,1.08,1.08,0,0,1-.11.41.83.83,0,0,1,0,.22,1.47,1.47,0,0,1,.06.45,1.53,1.53,0,0,1,0,.43.25.25,0,0,1,0,.08c0,.05.06.12.1.2a5.59,5.59,0,0,1,.31.65,1.45,1.45,0,0,1,.1.18,1.08,1.08,0,0,1,.13.29l.12.11c.07.09.16.19.23.3l.07,0h0l.29-.12a1.39,1.39,0,0,1,.54-.12l.08,0a2.6,2.6,0,0,1,.7-.46l.58-.3.19-.19.14-.12a1.17,1.17,0,0,1,.28-.17l.11-.08a4,4,0,0,0,.5-.46l.18-.15.44-.28a2,2,0,0,0,.22-.21,3.14,3.14,0,0,1,.4-.34,1.47,1.47,0,0,1,.51-.42l.42-.36a3.25,3.25,0,0,1,.47-.52l.19-.17a1,1,0,0,1,.25-.15l.07-.06a1.94,1.94,0,0,1,.7-.61l0,0c.15-.12.46-.43.95-.93l1-.88a1.84,1.84,0,0,1,.27-.28l.4-.35.35-.39.57-.57a2.51,2.51,0,0,1,.24-.19,2.66,2.66,0,0,1,.29-.35,1.74,1.74,0,0,1,.41-.33l.49-.57.11-.11s.06-.09.11-.16.25-.37.35-.5l.51-.55.08-.14a1.27,1.27,0,0,1,.21-.25l.13-.11a1.24,1.24,0,0,1,.72-.26H119a1.15,1.15,0,0,1,.34-.06,1.08,1.08,0,0,1,.75.33,1.43,1.43,0,0,1,.14.2,1,1,0,0,1,.24,0h.08a1.1,1.1,0,0,1,1,1.13,1.18,1.18,0,0,1,0,.2,1.29,1.29,0,0,1-.12,1.26,3.08,3.08,0,0,1-.32.53,1.48,1.48,0,0,1-.36.62l-.11.19a3.73,3.73,0,0,1-.44.66,4.24,4.24,0,0,0-.33.48,1.69,1.69,0,0,1-.22.29,3.79,3.79,0,0,1-.25.35l-.28.34a2.22,2.22,0,0,1-.15.23,2.25,2.25,0,0,1-.44.51.58.58,0,0,1-.12.1,1.47,1.47,0,0,1-.23.26l-.19.29a.86.86,0,0,1-.18.2l-.24.21a1,1,0,0,1-.29.42l-.13.11-.1.07a2.09,2.09,0,0,1-.54.65l-.12.15a1.16,1.16,0,0,1-.29.37,1.06,1.06,0,0,1-.32.22l-.06.1a.61.61,0,0,1-.12.16l-.1.11a2.39,2.39,0,0,1-.13.21,2.28,2.28,0,0,1-.35.36,2.43,2.43,0,0,0-.28.28.27.27,0,0,0-.07.08,1.71,1.71,0,0,1-.11.14l-.46.51-.47.5a1.63,1.63,0,0,1-.48.52,1.83,1.83,0,0,0-.24.19l-.52.55-.14.13a1.35,1.35,0,0,1-.35.32l-.67.72-.08.08-.55.47a2.64,2.64,0,0,1-.81.55,3.36,3.36,0,0,1-.89.72l-.69.36a1.81,1.81,0,0,1-.36.23,1.38,1.38,0,0,1-.39.16,3.16,3.16,0,0,1-.5.29l-.44.19a1,1,0,0,1-.38.08H106s0,0,0,0l-.08,0a1.71,1.71,0,0,1-1,.22h-.11a1.91,1.91,0,0,1-.84.15Zm1.91-19.79a1.44,1.44,0,0,1-.21.43,1.48,1.48,0,0,1,.29-.12l.32-.19.44-.28a1.2,1.2,0,0,1,.21-.13L108.13,24a.86.86,0,0,1,.2-.13l.09-.14.12-.13.06-.1.33-.4.12-.12.25-.21a5.52,5.52,0,0,1,.77-1h0a1.87,1.87,0,0,1,.16-.28,1.21,1.21,0,0,1,.34-.51l.09-.16c0-.07.06-.12.08-.16a1,1,0,0,1,.08-.23A1.11,1.11,0,0,1,111,20l0-.09c0-.24.1-.44.15-.63v0a.94.94,0,0,1,.08-.34,2,2,0,0,1,.06-.26,1.59,1.59,0,0,1-.33.09l-.06.06a1.74,1.74,0,0,1-.34.49,2,2,0,0,1-.46.33l0,0-.27.26,0,0a1.53,1.53,0,0,1-.6.65,1.18,1.18,0,0,1-.39.19,2.12,2.12,0,0,1-.11.21.93.93,0,0,1-.13.15,1.14,1.14,0,0,1-.36.51,1.08,1.08,0,0,1-.35.22l0,.09v0a1,1,0,0,1-.74.91,1.72,1.72,0,0,1-.07.21,1.14,1.14,0,0,1-.14.58,1.1,1.1,0,0,1-.57.63,1,1,0,0,1-.11.31,1,1,0,0,1-.17.39,1.21,1.21,0,0,1-.21.24Z\"></path><path class=\"cls-2\" d=\"M113.2,13.39h0s.07.07.09.07,0,0,0-.06h.18c0,.05.11.07.23.08a.34.34,0,0,1,.24.08h.12s0-.05,0-.05.07,0,.14.12a.73.73,0,0,0,.22,0s.06,0,.08,0a.09.09,0,0,1,.06,0s0,0,.06,0a.6.6,0,0,0,.41.15.67.67,0,0,1,.35.2c.15.14.22.24.22.32s0,.12.11.13.17.11.27.32.06.13.08.13,0,0,.09.06l.06.07,0,0s0,0,0,.08a1.07,1.07,0,0,1,0,.25c0,.08,0,.12.11.12a.17.17,0,0,1,.17.2c0,.08,0,.12,0,.12l.06.07h0s0,.05.06.13a1,1,0,0,1,.07.28c0,.1,0,.31,0,.63s0,.32,0,.36v.06a.39.39,0,0,0-.08.24,3.05,3.05,0,0,1,0,.39l0,.21c0,.08,0,.12.11.13h.19a.06.06,0,0,0,.06,0s0,0,0,0a.05.05,0,0,1,0,0l-.19.23c-.23.3-.26.46-.1.47l0,0s0,0,0,.06,0,.12-.13.2q-.15.35,0,.36a.19.19,0,0,1,.1,0c.06,0,0,.11-.06.34a.56.56,0,0,0-.08.3s0,0,0,.06h0s0,0,0,.12.07.12,0,.12h0a.21.21,0,0,1-.15.05h0s0,0,0,.06c.19.14.2.28,0,.43a.15.15,0,0,0-.06.11v.12a.56.56,0,0,1,0,.12.4.4,0,0,0,0,.18.85.85,0,0,0-.15.35l-.06.05-.07.06V22a.19.19,0,0,1-.07.11l-.26.29c-.06.19-.11.36-.16.5s-.09.2-.13.2h0l-.13.11s0,.07,0,.08a.19.19,0,0,0,0,.09v.06a.25.25,0,0,0-.07.18s0,.05-.06.05h0l-.19.23a.4.4,0,0,1-.15.29h0c-.09,0-.1,0,0,.11s0,.06-.06.06h0c-.08,0-.14.05-.18.17a.94.94,0,0,0-.14.29l-.2.16a.34.34,0,0,0-.13.23.22.22,0,0,1-.23.23h0v.12s0,.09-.1.17a2.44,2.44,0,0,1-.23.22q-.37.29-.39.39c0,.05-.15.2-.45.48a9.14,9.14,0,0,1-.77.64l-.64.49a.3.3,0,0,1-.18.11h0v.06l-.13.05c-.16,0-.22.07-.19.11l-.32.27-.18.11a.17.17,0,0,1-.12.05h0a.05.05,0,0,1-.06.06h-.06s-.05,0-.07,0-.12.07-.19.21a.53.53,0,0,0-.19.13.14.14,0,0,1-.12.08h0l-.13.11v.06h-.12l-.37.09c-.09.07-.15.11-.19.11h0a.21.21,0,0,1-.12.05h0l-.18,0a.25.25,0,0,1-.07.12s-.08.11-.35.21a1.74,1.74,0,0,1-.51.15h0a.18.18,0,0,0-.1,0l-.13,0h0a.37.37,0,0,1-.22,0h-.93l-1-.07.07-.11s.07-.07.07-.09h0s0,0-.06,0h-.06c-.08,0-.11,0-.11-.07a.21.21,0,0,0-.13-.09l0,0,0-.06s0,0-.06,0l-.12,0a.59.59,0,0,1-.29-.08c-.08-.08-.14-.13-.18-.13h-.06l-.06.06,0-.06a.58.58,0,0,0-.41-.25.27.27,0,0,0-.12,0c-.08,0-.12,0-.12-.07l-.24,0a.14.14,0,0,1-.11.05h0s0,0,0-.06A.23.23,0,0,0,103,29c0-.06,0-.09-.06-.1s0,0,0,0h0a.09.09,0,0,1,0-.09l0,0s0,0,0,.07,0,.1-.13.17-.16.23-.08.24.06,0,0,.15a.61.61,0,0,1-.08.27h0q-.1,0,0,.12c0,.08,0,.11-.06.11h0s-.06,0-.06.12,0,.26-.09.29a.4.4,0,0,0-.07.24.19.19,0,0,1-.07.11.19.19,0,0,0-.07.12.16.16,0,0,0,0,.12.07.07,0,0,0,.06.07.2.2,0,0,1,.11-.07s0,0,0,0,0,.09-.13.17q-.37.09,0,.36v.12a0,0,0,0,1,0,0h0s0,0,.06.13v0l-.13.06V32a.63.63,0,0,1-.08.3q-.21.35-.09.36v.17a.22.22,0,0,0,0,.1.12.12,0,0,1,0,.09.7.7,0,0,0,0,.21.44.44,0,0,1,0,.15l.12.07-.14,0s0,0,0,0a.15.15,0,0,0,.16.19l-.13.17c-.09.08-.09.2,0,.36s.15.21.11.25a.15.15,0,0,0,0,.24c.07.16.08.27,0,.3s-.06.13,0,.15h0s0,0,.08-.1.12,0,.12.07a.05.05,0,0,1-.06.06h0s-.06,0-.07.11,0,.12-.06.12h0a.2.2,0,0,0,.15,0h0s0,0,0,.08,0,.06,0,.06h0s0,0,0,0h0c-.08,0-.11.07-.1.21a.9.9,0,0,0,.07.33.08.08,0,0,1,0,.12l0,.13a.7.7,0,0,1,0,.24h0q-.11,0,0,.12a.52.52,0,0,1,0,.24.3.3,0,0,0,0,.24,2.75,2.75,0,0,0,.23.56c.25.46.35.71.31.74s0,0,0,0l0,0,0,.06a.21.21,0,0,0,.05.12.56.56,0,0,0,.33.51c.14.17.22.28.21.32s.12.12.35.23a1.63,1.63,0,0,0,.47.19s.07-.06.09-.06,0,0,0,.07l.38-.16.25-.1a.51.51,0,0,1,.17,0h0a1.61,1.61,0,0,0,.41-.09c.2-.06.31-.11.31-.15s.15-.19.44-.33l.82-.42a.8.8,0,0,1,.19-.23l.13-.11h0s.16-.07.35-.22a5.7,5.7,0,0,0,.61-.55l.51-.33a4.19,4.19,0,0,0,.32-.31,2.36,2.36,0,0,1,.38-.3c.13-.18.24-.28.32-.28h0l.65-.55a2.55,2.55,0,0,1,.39-.45l.19-.17s0,0,0,0a.32.32,0,0,0,.11-.07l.25-.22q.33-.39.39-.39h0s.13-.07.28-.19.48-.46,1-1l1.09-1s0-.09.14-.17l.45-.38.39-.46.52-.5a.54.54,0,0,1,.25-.16h0l.07-.12a1.23,1.23,0,0,1,.23-.28c.11-.11.18-.17.22-.17h0l.07,0,.13-.11.52-.63a1.38,1.38,0,0,0,.3-.37,4.74,4.74,0,0,1,.3-.42l.52-.57.14-.23.13-.11a.08.08,0,0,1,.07,0l.11,0a.15.15,0,0,0,.12.07.16.16,0,0,0,.12,0,.38.38,0,0,1,.16-.1s0,0,0,.05a.25.25,0,0,0-.07.12.17.17,0,0,0-.06.11.21.21,0,0,1-.07.12c-.27.42-.33.64-.17.65h0a1.28,1.28,0,0,0,.38-.27.26.26,0,0,1,.13-.08.47.47,0,0,0,.12-.09.21.21,0,0,1,.12-.05h0s0,0,.05,0a1.43,1.43,0,0,0,.31-.06l.24,0h0a.18.18,0,0,0,.11-.05.06.06,0,1,1,0,.12h0l-.19.22c-.41.61-.93,1.33-1.57,2.14a17.56,17.56,0,0,1-2,2.17,2.74,2.74,0,0,1-.26.38l-.2.19-2.08,2.14c-1.38,1.34-2.56,2.46-3.52,3.35a16.53,16.53,0,0,1-2.34,1.87l-.34.22-.29.16-.85.54a1.61,1.61,0,0,1-.47.26h0V41.7a.64.64,0,0,1-.29.22l-.34.16h0a.21.21,0,0,0-.12.05s0,0,.09,0h.06l.34-.06.55-.15h0a1.66,1.66,0,0,0,.43-.14,5.76,5.76,0,0,0,1.12-.52,9.3,9.3,0,0,0,1.27-.87l.52-.51a11.75,11.75,0,0,0,1.51-1.3l1.9-1.82,1-.94L116,34.17c.38-.26.58-.44.58-.56a4.39,4.39,0,0,0,.36-.37l.62-.65a8.85,8.85,0,0,0,.59-.67,3.88,3.88,0,0,1,.4-.46l.46-.56c.08-.08.13-.13.13-.17l.07-.06a2.1,2.1,0,0,1,.4-.63,2.46,2.46,0,0,1,.34-.52,3.63,3.63,0,0,0,.34-.46l.32-.27s0,.12-.12.35a1.79,1.79,0,0,1-.3.46s-.07.07-.07.11v.06a.51.51,0,0,1-.2.35l-.21.35a2.89,2.89,0,0,1-.34.51c-.17.23-.31.42-.4.57a.4.4,0,0,1-.13.15.1.1,0,0,0-.07.08,1,1,0,0,1-.2.32,3.43,3.43,0,0,1-.26.31h0s-.06,0-.06.05a.73.73,0,0,1-.14.26,1.87,1.87,0,0,1-.26.32l-.16.1a.21.21,0,0,0-.1.12s-.07.11-.2.22l-.26.41-.39.33a.39.39,0,0,0-.14.29l-.13.11c-.21.15-.32.26-.33.34s-.13.23-.39.45l-.26.34a.25.25,0,0,1-.07.12.38.38,0,0,1-.19.1h0l-.26.23-.14.22-.26.29s0,.14-.23.31a4.08,4.08,0,0,0-.42.42c-.09.08-.13.13-.14.17l-.45.51-.59.62c0,.08-.07.16-.2.26l-.32.24-.58.62a1.24,1.24,0,0,0-.2.2.46.46,0,0,1-.19.13l-.78.85-.55.47a1.86,1.86,0,0,1-.48.36h0a.69.69,0,0,0-.36.21,2.37,2.37,0,0,1-.68.58l-.65.34a.69.69,0,0,0-.22.14.36.36,0,0,1-.15.08h0c-.08.07-.14.11-.18.11h0s0,0,0,0a.38.38,0,0,0-.21.12,1.92,1.92,0,0,1-.41.24l-.4.18h0a1.43,1.43,0,0,0-.34.06,1.08,1.08,0,0,0-.31.13.82.82,0,0,1-.45.07,3.7,3.7,0,0,1-.45,0h0a.19.19,0,0,0-.1,0c-.05,0,0,0,0,0s-.11.11-.44.11h-.11a4.26,4.26,0,0,1-.89-.09l-.23-.14a.32.32,0,0,0-.19-.1l0,0s0,.06-.05.06a.51.51,0,0,1-.19-.08c-.2,0-.29,0-.29-.08h0c.06,0,0,0,0-.06a.43.43,0,0,0-.17-.07.13.13,0,0,1-.09,0s0,0,0,0h0s0-.1-.07-.18a.13.13,0,0,0-.1-.07.18.18,0,0,0-.11.05.05.05,0,0,1-.06-.06l0-.07v-.18a.35.35,0,0,0-.14,0,.18.18,0,0,0-.1,0l-.07,0a.13.13,0,0,1-.11,0h0v-.18c.09,0,.09,0,0-.06l-.14,0a1,1,0,0,1-.37-.08c-.17-.08-.24-.13-.2-.17s0-.06,0-.06h0a.16.16,0,0,0-.12,0s0,0,0,0h0c-.08,0-.07-.1,0-.17h0c-.07,0-.15,0-.24-.16s0-.06-.11-.06-.1-.06-.17-.17-.09-.17,0-.21a.09.09,0,0,0,0-.09.11.11,0,0,1,0-.1.12.12,0,0,0-.09,0l-.09,0H99.1a.24.24,0,0,1-.27-.21.18.18,0,0,0,0-.13l-.11-.13v-.06h-.12l.13-.11.07-.11h0a.21.21,0,0,0-.15,0,.17.17,0,0,1-.11.06s0,0-.07-.07a1,1,0,0,1-.32-.62h0s0,0,0-.15-.07-.12-.11-.12l0,0v-.07c0-.15,0-.24,0-.24a.17.17,0,0,0,0-.12.44.44,0,0,1,0-.18c0-.11,0-.17,0-.17s0,0-.07,0h-.06s0,0,0-.06v-.06l0,0s0,0,0-.09a.32.32,0,0,1,0-.23s0-.08-.11-.13l0,0s0,0,0,0,0,0,0,.06-.08,0-.11-.12,0-.15,0-.18l.07-.06a.05.05,0,0,0-.06-.06h0s-.06,0-.08-.11a.32.32,0,0,1,0-.27c0-.08,0-.13,0-.15a.11.11,0,0,1,0-.1.33.33,0,0,1-.11-.24v-.18a.16.16,0,0,1-.15-.13.21.21,0,0,1,0-.18h0s0,0,0-.12a.17.17,0,0,0,0-.1.2.2,0,0,1,0-.09.28.28,0,0,0,0-.21.28.28,0,0,1,0-.15.36.36,0,0,1,0-.3A.63.63,0,0,0,97,36C97,36,97,36,97,36h0a.15.15,0,0,1-.08,0s0,0,0-.11a.56.56,0,0,1,.08-.3.23.23,0,0,0,.07-.14c0-.06,0-.1-.12-.1V35.3a1.33,1.33,0,0,0,.09-.42,1.7,1.7,0,0,1,.09-.47c.09-.08.09-.12,0-.12H97a.12.12,0,0,1-.11-.08q0-.12,0-.12h0S97,34,97,33.92s-.07-.18,0-.18h0c0-.11.06-.17,0-.18l0-.3a.36.36,0,0,1,.07-.23v-.12a.25.25,0,0,1,.07-.12s.07-.13.08-.29a.56.56,0,0,1,0-.12.19.19,0,0,0,0-.12c.08,0,.13-.08.13-.14s0-.09-.11-.1-.07-.05-.08-.15a.26.26,0,0,1,0-.21.23.23,0,0,0,.08-.17s0-.07.13-.18a.59.59,0,0,0,.08-.29l0-.24s.07-.07.07-.12v-.17a.38.38,0,0,0,.14-.24c0-.08,0-.12,0-.12v-.06c.09-.07.11-.13.08-.17a.36.36,0,0,1,.13-.24.34.34,0,0,1,0-.17.27.27,0,0,0,0-.12,1.27,1.27,0,0,1,.21-.41c.3-.17.3-.27,0-.29q-.12,0,0-.06h0c.1,0,.15,0,.16-.11l0-.24v-.12s0-.06.06-.06h0s0-.08-.15-.08h-.15a.17.17,0,0,1-.11,0l-.12,0s0,0,.11,0h.46c.07,0,.06,0,0,0s0-.06,0-.06h.07l.14-.23c0-.12,0-.18,0-.18s-.12,0-.12,0,0,0,.08,0h0l.12-.05h-.12l-.12-.07h.14c.07,0,.11-.06.12-.17s0-.24.07-.24h0s.06,0,.06-.11-.07-.12,0-.12h0s.09,0,.13-.14a.63.63,0,0,0,.08-.27c0-.08,0-.11-.15-.11l-.2,0c-.12,0-.18-.06-.17-.14h.08l.1,0a.22.22,0,0,1,.12,0h.18c.16,0,.24,0,.25-.1a.25.25,0,0,0,.07-.12v-.06s0-.05,0-.06,0,0,0,0a.08.08,0,0,1,.07,0h0l.2-.35.15-.29c.18-.31.23-.46.15-.47s-.13-.12,0-.12h.08c.07,0,.16-.09.25-.26s.1-.3,0-.39h.06a.37.37,0,0,0,.15-.05c.06,0,.08-.07,0-.12l-.3,0c-.24,0-.36,0-.35-.09s.06,0,.18,0h.35c.17,0,.25,0,.26-.1h-.06c-.08,0-.12,0-.12-.07s0-.05.1-.05h0c.07,0,.13-.06.18-.17s.18-.15.11-.15l-.16,0-.3,0-.18-.08.18,0h0a.37.37,0,0,0,.23-.11h.06l.12-.05h.18l-.41-.15.24,0h.14c.11,0,.16,0,.17,0s-.1-.07-.3-.08l-.36,0,0-.36.36,0h.1a1.33,1.33,0,0,0,.45-.08s0-.06-.12-.07-.18,0-.17-.07a.07.07,0,0,0-.06-.07h-.18s0,0,.13,0h.1c.16,0,.21-.07.15-.22l.06-.06h0c.06,0,.1,0,.1-.05-.1-.19,0-.29.19-.29h.26c.11,0,.17,0,.17-.05s0-.08,0-.08l-.06,0a1.33,1.33,0,0,1-.42-.09c-.12,0-.15,0-.11-.07a.23.23,0,0,1,.23-.17h.11c.09,0,.12,0,.09-.05s0-.15.08-.18a.22.22,0,0,0,.13-.23c0-.07,0-.12,0-.12s0,0,0-.07v-.12s0,0,.13,0h.17c-.08,0-.09-.11,0-.31s0-.13.08-.13l0,0h0a.06.06,0,0,0,.06-.05h.07l.08,0s.05,0,.1,0h.07c.11,0,.16-.06.17-.17s0-.11.07-.11h0l0,0s0,0,0-.08l.06,0-.12-.07h-.08l.33,0h.28c.13,0,.2,0,.2,0l-.48,0c-.16,0-.22-.05-.17-.13v-.06l.06-.11h0c.06,0,.1,0,.1-.05h.12c.12,0,.14-.09.07-.18s0-.2,0-.24h0c.06,0,.09,0,.09-.05a.25.25,0,0,1,.07-.12c0-.11,0-.17.12-.17h0c.07,0,.13-.05.18-.16s.11-.23.18-.23h0a.39.39,0,0,0,.14.05c.07,0,.1-.05.11-.15s0-.17.12-.17h0a.1.1,0,0,0,.11-.11c0-.07.07-.11.19-.11h.12c.08,0,.12,0,.12-.05s.06,0,.16,0h.12q.09,0,.09-.06a.23.23,0,0,1,.07-.11h0s.07-.08.08-.24a.22.22,0,0,1,.21-.1h.17c.1,0,.14,0,.11-.05a.45.45,0,0,1,.14-.26.26.26,0,0,1,.17-.1l.08,0,.06-.12c0-.11,0-.17.13-.17h.13a.05.05,0,0,0,.06-.06s0-.05.06-.05h0s0,0,0,0l0,0s.09-.09.26-.16h0a.11.11,0,0,0,.12-.11s0,0,.06,0a1.49,1.49,0,0,1,.35,0h0c.06,0,.1,0,.1,0l.13-.11h0s.08,0,.12-.11.05-.05.13-.05h.18l.06-.06h0s0,0,.06-.05a.15.15,0,0,1,.07-.12l.33-.45h.06l.23.14a.82.82,0,0,0,.3.08h0l.08,0a.09.09,0,0,1,.07,0h0c.1,0,.15,0,.16-.1a.54.54,0,0,1,.21,0h.06c.06,0,.09,0,.1-.05A.39.39,0,0,1,111,14h0a.2.2,0,0,0,.15,0,.46.46,0,0,1,.29-.13.19.19,0,0,1,.14.05l.07,0s0,0,0-.11a.11.11,0,0,1,.12-.11h0a.32.32,0,0,1,.19-.1h.06a.25.25,0,0,1,.15,0h0a.16.16,0,0,0,.12-.05.28.28,0,0,1,.19-.07.48.48,0,0,1,.29.11h0a.11.11,0,0,0,.12-.11.21.21,0,0,1,.15,0m-7.13,3.33.06-.06H106s0,.06.06.07m5.31.87h-.08a.28.28,0,0,0-.25.1.5.5,0,0,1-.33.1h-.1l-.27,0h0s0,.1,0,.3l-.06.05h-.12s-.07,0-.08.17,0,.19-.14.32a.41.41,0,0,1-.24.15l-.07,0h0c-.06,0-.09,0-.09.05s0,.11-.08.21l-.19.19H109s0,.15-.09.32-.17.26-.25.26h0s-.06,0-.06.05,0,.05-.12.05h-.06l-.13.05h-.06s0-.06-.11-.06h0c-.08,0-.17.06-.28.18s-.11.25,0,.34,0,.12,0,.12h0s-.05,0-.08-.13h-.06c-.12,0-.18,0-.19.1v.06s0,.06,0,.06h0s0,0,0,.06,0,.06,0,.06l0,0a.1.1,0,0,1,.07.06c0,.07,0,.13-.07.21a.45.45,0,0,1-.27.1h-.07a.36.36,0,0,0-.28.16c-.11.09-.13.13-.08.13h.07c.08,0,.09.05,0,.13a.06.06,0,0,1-.06,0h0c-.1,0-.15,0-.16.11l-.12.11a.21.21,0,0,1-.12,0h0s0,0,0,.06h.18c.16,0,.23.06.23.14s0,0-.15,0h-.13c-.1,0-.15,0-.15.11s-.07.13-.2.16h0s0,0,0,0,0,0,.06,0l0,0s0,0,0,.09a0,0,0,0,1,0,.05h0l0,0a.21.21,0,0,0-.13.07c-.13.11-.14.19,0,.24h.12l-.13.11-.13.11V23a.19.19,0,0,1-.07.11h.06l.12,0c.09,0,.08.07,0,.22s-.08.16-.22.16h-.16c.05,0,0-.08,0-.12a.09.09,0,0,0-.06,0s-.06,0-.09.08a.34.34,0,0,0-.14.23l-.1.14a.23.23,0,0,1-.11,0H105c-.16,0-.19.05-.07.06s.12,0,.12.07h0a0,0,0,0,0,0,0l0,.18-.06.06h0s0,0-.06.11,0,.12-.07.12h0v.12l-.12.05q-.12,0-.06-.06c0-.07,0-.1,0-.1a.29.29,0,0,0-.14.08.17.17,0,0,0,.17.2s.06.06,0,.18h0l-.08,0a.08.08,0,0,1-.07,0h0s0,0,0,.06.06,0,.05.06a.21.21,0,0,1-.07.17s0,.05-.15.05h-.1a.21.21,0,0,0-.12.05s0,.06.12.07.18,0,.17.07-.09.16-.25.16H104c-.12,0-.19.08-.19.16s0,.19.1.19.08,0,0,.06,0,.08,0,.12.13.13.17.13h.07c.08,0,.11,0,.1.14a.72.72,0,0,0,.34.26,1.36,1.36,0,0,0,.47.16s.06,0,.06,0,0,0,.06,0h.06a.21.21,0,0,0,.15,0,1.74,1.74,0,0,0,.52-.12l.12-.05h0s0,0,.06-.06h0a.24.24,0,0,0,.15,0l.44-.27.51-.33a.16.16,0,0,1,.09-.05h0a.21.21,0,0,0,.09-.05h0s.05,0,.06-.06l.58-.5.77-.66h0c.14,0,.21-.06.22-.17l.2-.28h0a.21.21,0,0,0,.11-.05v-.12l.33-.4.39-.33h.06c-.08-.08.17-.45.74-1.09a1.24,1.24,0,0,0,.1-.2.39.39,0,0,1,.1-.14.15.15,0,0,0,.07-.12v-.06a.13.13,0,0,1,.07-.11,2.14,2.14,0,0,0,.3-.43,1.64,1.64,0,0,0,.18-.44.13.13,0,0,1,0-.09s0-.06,0-.14a1,1,0,0,0,.21-.5c.06-.26.12-.48.17-.68v-.12l.07-.06h0s0-.06,0-.17a.34.34,0,0,1,.08-.24l0-.24s-.05-.14,0-.3,0-.18,0-.18a.06.06,0,0,1,0,0c-.05,0-.06-.09-.05-.27s0-.12,0-.12h0s0,0,0,.06l-.06,0a.09.09,0,0,1-.06,0s0-.07,0-.07,0,0-.09.06l0,0s0,0,0-.09a.06.06,0,0,0-.06-.06h-.12v-.18c-.08,0-.12,0-.12-.07l-.07,0s0,0,0,0-.06.17-.17.17m-2.26-.11h0v.12l-.06,0v-.06l-.64.56a1.52,1.52,0,0,0-.26.31h0a1.08,1.08,0,0,0,.25-.19l.39-.34c.29-.17.44-.3.45-.38l.06-.06h.09a.21.21,0,0,0,.15-.05s0-.06,0-.06a.41.41,0,0,0-.17.05.51.51,0,0,1-.2,0M103.93,19a.1.1,0,0,0,.08,0s0,0,0,0h-.18s0,.06.12.07h0m-.33.39a.11.11,0,0,0,.12-.11h-.12c0,.08,0,.12,0,.12h0m4.14.85v-.06s0-.07-.11-.07l-.07.05.06.07h.12m-5.27.52a.17.17,0,0,0,.12-.06.05.05,0,0,0-.06-.06l-.12.05.06.07h0m3.21,2.15.06-.05s0-.06,0-.07h0a.06.06,0,0,0,0,.12m-.15.3.14-.18s0-.05,0-.06h0q-.1,0-.12.18v.06m8.23.24h-.05s-.07,0-.07,0,0,0,0,0h0l-.07.06a.52.52,0,0,0-.1.11.26.26,0,0,1-.1.11,2.67,2.67,0,0,1-.23.29.35.35,0,0,0-.1.17c-.09.08-.11.13-.07.18s0,.05-.06.05h-.13l-.12.11a.25.25,0,0,1-.07.12.33.33,0,0,0-.1.11l-.1.12-.26.28s-.15.13-.32.27l-.55.48-.58.49a3.11,3.11,0,0,1-.47.36c-.26.22-.37.36-.33.4h0a.8.8,0,0,0-.36.15l-1.1.73a1.09,1.09,0,0,1-.34.19h0a.15.15,0,0,0-.11.05.56.56,0,0,1-.19.1l-.13.12-.06.05-.25.1-.12.06h.25a1,1,0,0,0,.41-.09,6.67,6.67,0,0,0,.84-.27,4.05,4.05,0,0,0,.78-.39,4.94,4.94,0,0,0,.53-.32l.8-.61a9.09,9.09,0,0,1,.68-.64c.27-.24.59-.53.93-.86l.3-.34.16-.17h0s0,0,0-.06l-.06.06h-.15c-.06,0-.09,0-.09.05s-.07.14-.2.17l-.16.14h0s0,0,0-.09v-.07h0s0,0,.06,0,.11-.22.31-.22h.06a.62.62,0,0,1,.18-.05s.07,0,.06.06v-.06a.16.16,0,0,1,.07-.11h0c.07,0,.11-.06.12-.17H113l-.07.12a.26.26,0,0,1-.18,0h-.06s.06-.06.07-.17l.19-.11.13-.17s0,0,.1,0h0l.06-.12.13-.11v-.18h.06s.12-.09.25-.25a1,1,0,0,0,.21-.32v-.06l.07-.12c.08,0,.1-.06.07-.08L114,23l-.12,0c-.29.06-.34.13-.14.22a.09.09,0,0,1,0,.13m-7.07,5.43h0s0,0,0,0a.5.5,0,0,0-.11.15h-.2a0,0,0,0,0,0,0s0,0-.07,0h-.11l-.06.06h0a.21.21,0,0,0-.16.05s0,0,0-.07,0-.06,0-.06h0s0,0,0,.06a.21.21,0,0,1-.09,0s0,0,0-.06a.05.05,0,0,1-.06.06h0a.29.29,0,0,1-.1.05h0a.21.21,0,0,0-.09.05c-.09.08-.13.12-.13.14h0l.06,0a.15.15,0,0,1,.11-.05.18.18,0,0,1,.13.06l.18,0s.07-.06.09-.06,0,0,0,.07l.12-.06h.12a.29.29,0,0,0,.21.08h.05a.25.25,0,0,0,.16-.05s0-.07,0-.08a.12.12,0,0,0,0-.09c0-.08,0-.13.07-.15a.25.25,0,0,0,.13-.14l.13-.11s0,0,0,0a.3.3,0,0,0-.11.07.16.16,0,0,1-.12.05m-3,.26,0-.12a.05.05,0,0,0-.06-.06c-.09.07-.09.11,0,.12a.17.17,0,0,0,.12.06m.67.23c.06,0,.09,0,.1-.05h-.11s-.07,0-.08,0,0,0,.06,0h0m.4,13.09h-.24c-.08,0-.12,0-.12.05a.16.16,0,0,1-.12,0h-.13a.51.51,0,0,1-.17,0h0s0,0,0,0l0,0h-.18l0,.07a.05.05,0,0,0,.06.06l.12.07h0c.07,0,.1,0,.1,0h.06l.06,0h.06l.12.07.14.16h0s0,0,.08-.09l.13-.11a.25.25,0,0,1,.08-.18l.06-.05a.07.07,0,0,0-.06,0,.09.09,0,0,0-.06,0m-1.44-23.57h0m-2.58,3.6h0m13.19.67v.12a0,0,0,0,1,0,.05h0v-.12l.06-.05m-8.56.64a.12.12,0,0,1,.09.06.19.19,0,0,1-.07.11v.12c0,.12,0,.17-.12.17h0c-.09.08-.09.14,0,.18s0,.12-.09.12h0l-.24,0s0-.11.13-.2a1.83,1.83,0,0,0,.2-.26h0s0,0,0-.06-.09,0,.07-.11.06-.11.1-.11m-.53,1.2,0,0a.1.1,0,0,1-.11.11h0l-.13.11h.06l.09,0s0,0,0,0,0,.09-.13.17a.4.4,0,0,1-.2.12s0,0,0-.08a.15.15,0,0,1,.07-.12.14.14,0,0,0,.06-.11.36.36,0,0,1,.14-.17.21.21,0,0,1,.13-.07m7.17.6H112l-.13.05a.5.5,0,0,1-.17.12s0,0,0,0,.09-.16.25-.16m-8,.17a.07.07,0,0,1,.06,0H104l.06,0m7.39.21c.08,0,.07.05,0,.12s-.1,0-.06-.06l.07-.06m-.19.26s0,0,0,0l-.19.11a.39.39,0,0,1-.14,0s0,0,0-.07a.65.65,0,0,1,.22-.1l.1,0m-.83.51a.05.05,0,0,1,.06.06.21.21,0,0,1-.18.11h0v-.12l.12-.05m-12,.45h.23s0,0-.12.05h-.12v0m-.3,1.42h0s0,.05,0,.05H98a.21.21,0,0,1,.11-.05m5.09.61s0,0,0,.06a.25.25,0,0,1-.07.12,1.25,1.25,0,0,1-.29.11h0c0-.08.07-.16.2-.23a.31.31,0,0,1,.13-.05m-.22.48.05,0s0,.07-.13.14a.14.14,0,0,1-.09.05s0,0,0-.06l.07-.11a.38.38,0,0,1,.13,0m-.1.25a.09.09,0,0,1,.07,0l-.26.29,0-.18s0-.08.09-.12l.08,0m.09.2s0,0,0,.08a.27.27,0,0,1-.17.16.24.24,0,0,1-.13.05s-.05,0-.05-.06a.27.27,0,0,1,.13-.14.42.42,0,0,1,.18-.08h0m-.3.36.12.12c0,.05,0,.1-.08.18l-.12,0s-.06,0-.06,0l.13-.12s0-.05,0-.06l-.09,0s0,0,0,0,0-.08.12-.11m0,.36s.06,0,0,.06,0,.17-.12.17h0s0,.1-.13.17a.19.19,0,0,1-.07.12v-.12a.38.38,0,0,1,.07-.21,1.92,1.92,0,0,1,.2-.19m-.19.83h0s0,0,0,.12v.06l0,0s0,0,0,.08,0,.12-.06.12h0l-.18,0s0,0,0,0,0,0,0-.08,0-.05,0-.06,0,0,0-.12a.33.33,0,0,1,.18-.1m0,.42s0,0,0,.06v.12h0a.05.05,0,0,0-.06.06s0,.09-.1.17-.12.11-.16.11h0v-.18a.5.5,0,0,1,.2-.29.21.21,0,0,1,.09,0m-.16.65s0,0,0,.06,0,0-.09,0h0s0,0,0-.06a.32.32,0,0,1,.15,0m-.14.23s0,0,0,.06a.25.25,0,0,1-.07.12c-.12,0-.18,0-.18-.08H102l.07-.06a.21.21,0,0,1,.09-.05m0,1.3s0,0,0,0,.07.12,0,.12h0a.16.16,0,0,0-.12,0c0,.07,0,.11-.06.11h0s0,0,0-.06a.24.24,0,0,1,.13-.2l.11,0m12.93.31h.12s0,0-.1,0h0s0,0,0,0,0,0,0,0l.07,0m-.66.73h.06s0,.05-.09.05h0a.05.05,0,0,1,.06-.06m-.58.46s0,0,.07,0a.23.23,0,0,1-.07.11l-.05,0s0,0,0,0,0-.16.06-.16m-.9.88h.06v.06a.05.05,0,0,1-.06-.06m-.18.23h.05c0,.11-.05.17-.13.17h0a.07.07,0,0,1-.06,0,.09.09,0,0,1-.06,0c0-.11.08-.16.21-.16m-.34.25s0,0,.06.09l-.07.11,0,0s0,0,0,0a.6.6,0,0,1,0-.18l0,0m-.26.3c.08,0,.1,0,.06.07s-.06.1-.1.1,0,0-.09-.06l.13-.11m-.27.28h0l.06.07-.07.05h-.12s0,0,0-.07h.07s.05,0,.05,0,0,0,0,0m-.07.36-.25.1h0s-.12.06-.24.16-.09.11-.13.11h0a.05.05,0,0,1-.06-.06l.13-.11h0l.07,0s0,0,0,0,.09-.07.25-.1l.25,0m-.84.46s0,0,0,0,0,.11-.11.2-.17.14-.21.14h0s-.06,0-.05,0,0,0,0,0h0l.06-.06a.27.27,0,0,1,.14-.2.19.19,0,0,1,.1,0m-.7.65s0,0,0,0,0,.07-.13.14a1.24,1.24,0,0,1-.35.25s0,0,0,0l.13-.11h0c.07,0,.12,0,.12-.17h.08a0,0,0,0,0,.05,0s0,0,0,0h0l.05,0m-.65.47h0s0,0,0,.06a.21.21,0,0,1-.09.05s0,0,0-.06,0-.06.1-.06m3.48-28.27a2.44,2.44,0,0,0-.48,0h-.09a2.29,2.29,0,0,0-.93.2,2.1,2.1,0,0,0-.65.23,2.37,2.37,0,0,0-.68.25,2.28,2.28,0,0,0-.36.15,1.69,1.69,0,0,0-.38-.07h-.19a2,2,0,0,0-1.61.81l0,.07-.13.07a2.1,2.1,0,0,0-1.09.43l-.11.05a2.08,2.08,0,0,0-.89.59.86.86,0,0,0-.18.14,2.23,2.23,0,0,0-.77.52,2.23,2.23,0,0,0-.87.5l-.18.15a2,2,0,0,0-.69.6,2,2,0,0,0-.44.48,1.94,1.94,0,0,0-.34.47,1.65,1.65,0,0,0-.28.36l-.06.11-.07.11a2.14,2.14,0,0,0-.83.88,2,2,0,0,0-.42.77,2.16,2.16,0,0,0-.44.63,2.08,2.08,0,0,0-.12.32,1.6,1.6,0,0,0-.31.22,2,2,0,0,0-.65,1.12l-.06.14a2,2,0,0,0-.13.25,2.09,2.09,0,0,0-.55,1.24,2.63,2.63,0,0,0,0,.48.19.19,0,0,1,0,.08,2.56,2.56,0,0,0-.05.27,2,2,0,0,0-1.29,1.73v.11a1.93,1.93,0,0,0-.42.89,1.45,1.45,0,0,0-.16.28,2,2,0,0,0-.17.92A1.94,1.94,0,0,0,96,29.11a1,1,0,0,0,0,.16,2.38,2.38,0,0,0-.16.58l-.06.25a2.36,2.36,0,0,0-.1.38,2,2,0,0,0-.16.37,2.17,2.17,0,0,0-.2,1.22,1.87,1.87,0,0,0-.13.4,2.87,2.87,0,0,0-.13.65v0a2.23,2.23,0,0,0-.1.49,2.14,2.14,0,0,0,0,1.09,2.07,2.07,0,0,0-.08.42v.06a1,1,0,0,0,0,.25,2.54,2.54,0,0,0,0,.29,2,2,0,0,0,.05.66,2.26,2.26,0,0,0,0,.26.37.37,0,0,0,0,.11,2.23,2.23,0,0,0,0,.63,2,2,0,0,0,.2.85.83.83,0,0,0,0,.15,2.06,2.06,0,0,0,.11.65,2.37,2.37,0,0,0,.14.57,2.71,2.71,0,0,0,.23.41,1.73,1.73,0,0,0,.28.54,2.2,2.2,0,0,0,.25.69,3.17,3.17,0,0,0,.57,1,2.08,2.08,0,0,0,.27.32l.08.09a2.22,2.22,0,0,0,.79.82,2.39,2.39,0,0,0,.51.5,2.36,2.36,0,0,0,.58.51,2.31,2.31,0,0,0,.68.25,2.09,2.09,0,0,0,.69.37,2.42,2.42,0,0,0,.36.27,2.3,2.3,0,0,0,1,.46,2.22,2.22,0,0,0,.41.1,1.28,1.28,0,0,0,.31.11,5.56,5.56,0,0,0,1.38.17H104a3.05,3.05,0,0,0,1-.15,2.75,2.75,0,0,0,1.27-.27,2,2,0,0,0,.55-.14l.48-.21.52-.28a2.84,2.84,0,0,0,.43-.21,2.26,2.26,0,0,0,.38-.23l.66-.34a4.36,4.36,0,0,0,1-.76,4.32,4.32,0,0,0,.9-.65l.54-.46.16-.16.6-.64a2.72,2.72,0,0,0,.43-.4l.13-.12.5-.53.11-.09a2.38,2.38,0,0,0,.7-.73l.38-.39.49-.55a1.56,1.56,0,0,0,.16-.2l.07-.08a1.1,1.1,0,0,1,.15-.14,2.94,2.94,0,0,0,.61-.7l0,0a1.63,1.63,0,0,0,.17-.2l.25-.2a2.44,2.44,0,0,0,.49-.58h0a3.63,3.63,0,0,0,.58-.67l.11-.09a2.06,2.06,0,0,0,.46-.56l.07-.07a2,2,0,0,0,.36-.4l.14-.21.17-.19.06-.05a3.91,3.91,0,0,0,.61-.71l.13-.19.26-.33c.07-.09.17-.21.26-.35a3.89,3.89,0,0,0,.28-.39,3,3,0,0,1,.26-.37,5,5,0,0,0,.53-.8l0-.07a2.46,2.46,0,0,0,.45-.76,3.35,3.35,0,0,0,.31-.54,2.35,2.35,0,0,0,.26-1.83h0a2,2,0,0,0-1.85-2.2,2,2,0,0,0-1.33-.51,1.88,1.88,0,0,0-.43.05h-.08a2.15,2.15,0,0,0-1.39.51l-.11.11a1.79,1.79,0,0,0-.42.49l0,.05-.37.41-.11.12c-.12.15-.26.34-.41.57l0,0-.13.13-.37.45a3.76,3.76,0,0,0-.49.41l-.27.32-.14.11-.09.09-.52.5-.11.12-.3.34-.34.3a2.89,2.89,0,0,0-.35.35l-.88.76-.11.11-.82.81a3.07,3.07,0,0,0-.83.7,3.15,3.15,0,0,0-.29.22l-.2.16a5.4,5.4,0,0,0-.54.58l-.26.23a2.35,2.35,0,0,0-.61.5,5.2,5.2,0,0,0-.44.38l-.12.13-.37.23a2.6,2.6,0,0,0-.36.3,2.93,2.93,0,0,1-.38.35h0a2.36,2.36,0,0,0-.42.28l-.13.11-.16.15-.44.23a3.43,3.43,0,0,0-.66.39l-.16,0a2,2,0,0,0-.16-.28c-.08-.19-.17-.36-.24-.5a2,2,0,0,0,0-.42,2.13,2.13,0,0,0-.06-.45h0a2.23,2.23,0,0,0,.08-.45,2.11,2.11,0,0,0,0-.51,2,2,0,0,0-.06-1.4,2,2,0,0,0,.14-.41,1.91,1.91,0,0,0,.23-.78v-.24a.49.49,0,0,0,0-.12.25.25,0,0,0,0-.08,2.57,2.57,0,0,0,.4.07l1,.07H107a2.19,2.19,0,0,0,.52-.05,1.26,1.26,0,0,0,.27,0,4.58,4.58,0,0,0,1.67-.6l.12-.06.09,0a2,2,0,0,0,1.25-.65h0a2.12,2.12,0,0,0,.49-.27l0,0a2.33,2.33,0,0,0,.4-.27L112,30a2.11,2.11,0,0,0,.58-.39l.06-.05.56-.44a7.84,7.84,0,0,0,.94-.78,5.15,5.15,0,0,0,.72-.76l.08-.07a3.6,3.6,0,0,0,.44-.43l.16-.2a2.29,2.29,0,0,0,.45-.62,2.06,2.06,0,0,0,.29-.37,2.18,2.18,0,0,0,.42-.53l.18-.28a2.2,2.2,0,0,0,.42-.69,2.78,2.78,0,0,0,.42-.75l0-.17a1.59,1.59,0,0,0,.27-.37,2,2,0,0,0,.33-.64,2,2,0,0,0,.18-.48l0-.07a2.25,2.25,0,0,0,.27-.75,2.05,2.05,0,0,0,.13-.79,2.28,2.28,0,0,0,.11-1.17,2,2,0,0,0-.12-2.06,1.81,1.81,0,0,0,0-.23v-.09c0-.39,0-.65-.06-.77a3.18,3.18,0,0,0-.19-.78l0-.09-.09-.2a2.19,2.19,0,0,0-.34-.64,2,2,0,0,0-.59-.82,2.57,2.57,0,0,0-.32-.39,3.06,3.06,0,0,0-.52-.59,2.79,2.79,0,0,0-1.17-.64,2.1,2.1,0,0,0-.77-.24,2.44,2.44,0,0,0-.64-.12,1.93,1.93,0,0,0-.53-.11l-.18,0h-.3ZM118.48,16ZM104.71,27.88a2.64,2.64,0,0,0,.29-.15.46.46,0,0,1,.07.07,1.57,1.57,0,0,0-.2.3,1.77,1.77,0,0,0-.16-.22Z\"></path><path class=\"cls-2\" d=\"M87.81,85c-.44,0-1.12-.29-1.2-1.54a1,1,0,0,1-.14-.74l.24-1.09v-.12l.51-4.78.09-2.13a1,1,0,0,1-.38.07l-.26,0a1,1,0,0,1-.71-.37l-.29-.37a1,1,0,0,1-.22-.69V73l0-.17s0-.08,0-.11a1.13,1.13,0,0,1-.27-.49l-.06,0,0,.16-.31,4.16a.77.77,0,0,1,0,.15l-.14.59a1,1,0,0,1,0,.64l-.2.75-.1,1.37,0,1.5v.1A2.66,2.66,0,0,1,82.9,84a.94.94,0,0,1-.43.1l-.23,0a1,1,0,0,1-.69-.34l-.32-.37a1,1,0,0,1-.24-.73l.77-10.53L81.61,72l-.17-.18a1,1,0,0,1-.29-.78v-.19a1,1,0,0,1,.67-.86.37.37,0,0,0,.27-.33L82,69.05a2,2,0,0,1,0-.25A76.91,76.91,0,0,1,83.23,60a1,1,0,0,1,0-1.24l-.11-.47a1,1,0,0,1,0-.35,2.47,2.47,0,0,1,.22-.81l0-.14a.58.58,0,0,1,0-.19l.15-.6-.18-.82a.8.8,0,0,1,0-.15h0a.9.9,0,0,1-.55-.22,1,1,0,0,1-.31.48l-.37.32a1,1,0,0,1-.65.24,1,1,0,0,1-.62-.22l-1-.76a1,1,0,0,1-.38-.85l0-.51a1,1,0,0,1,1-.93h.18a1,1,0,0,1-.69-1l0-.35a.75.75,0,0,1-.17.19,1,1,0,0,1-.31.18,1.27,1.27,0,0,1-1,.52h-.26a1,1,0,0,1-.93-1.07v0a1.1,1.1,0,0,1-.78-1.06V50a.47.47,0,0,1,0-.17l-.38,0a1,1,0,0,1-.68-.34l-.32-.38a1,1,0,0,1,0-1.33,1.63,1.63,0,0,0,.24-.31,1,1,0,0,1-.06-.41l0-.19a1,1,0,0,1,1-.93l.41,0a1,1,0,0,1,.77.45,1.12,1.12,0,0,1,.4.28l0,0a4.68,4.68,0,0,1-.25-1.27,1,1,0,0,1-.25-.37,3.14,3.14,0,0,0-.42-.21,1,1,0,0,1-.61-1l0-.35a1,1,0,0,1,.44-.76,1,1,0,0,1,.56-.17.85.85,0,0,1,.31.06l1.07.36,1-.21.21,0a1.06,1.06,0,0,1,.65.24l1.19-.23.19,0,1.11.08a1,1,0,0,1,.55.21l.24.19,9.1.67a1,1,0,0,1,.58-.56,1,1,0,0,1,.35-.07,1,1,0,0,1,.6.21l1.85.13a1,1,0,0,1,.74.41.75.75,0,0,0,.58.22,1,1,0,0,1,.92,1.07l-.11,1.61.05.06a1,1,0,0,1,.23.8l0,.11a1.12,1.12,0,0,1,.47-.11,1,1,0,0,1,.7.29l.18.17a1,1,0,0,1,.29.78v.16a1,1,0,0,1-1,.93h-.11s0,.39,0,.39a1,1,0,0,1-.93.92l-.25,3.48.11.76a1,1,0,0,1,0,.39l-.05.19a2.43,2.43,0,0,1,.75-.11h.18a1,1,0,0,1,.79.5l.31.53a.94.94,0,0,1,.13.57l-.06.85a1,1,0,0,1-.33.67l-.54.5a1,1,0,0,1-.67.26l-1-.07-.39,5.46-.25,5.93a.68.68,0,0,1,0,.14l-.32,1.84a1,1,0,0,1-1,.83l-.39,0-.39,0v.2a1.07,1.07,0,0,1-.06.27l.12.38A1,1,0,0,1,94.82,76l-.2.17a1,1,0,0,1-.31.18l-.18,1.51.08.35a1,1,0,0,1,0,.55,1,1,0,0,1,0,.45l-.41,1.45.1.47a1,1,0,0,1,0,.52,1.08,1.08,0,0,1,0,.31c-.14,1.06-.41,3-1.83,3l-.43,0-.21,0c-.8-.23-1.18-1-1.14-2.2a1,1,0,0,1-.27-.75,1.3,1.3,0,0,1,.58-1L90.66,79l-.14-.25a.8.8,0,0,1-.15,0h-.05v0a1,1,0,0,1,.24.73l0,.34a1,1,0,0,1-.57.83l-.16,2.19a2.14,2.14,0,0,1-1.46,2A1.13,1.13,0,0,1,88,85Zm3.35-12.55.17-.45,0-1.86a1,1,0,0,1,0-.3l.07-.23a1,1,0,0,1,0-.53l.4-1.94a1,1,0,0,1-.06-.55l.93-6,0-4a.86.86,0,0,1,.05-.32l.4-1.21.13-1.77,0-.17a.91.91,0,0,1,.09-.51l.13-.29a15.27,15.27,0,0,0-.17-2.12l-.88.44-.06.21.09.65a1,1,0,0,1-.26.82.49.49,0,0,1-.13.12s0,.06,0,.1a.88.88,0,0,1,0,.16v.16l0,.53a1,1,0,0,1-.13.42s.3.93.3.93a1,1,0,0,1,0,.38l-.29,4L92,60a1,1,0,0,1-.17.64A6.52,6.52,0,0,0,92,62.26a1,1,0,0,1,0,1.21l-.19.23.07,1.12a1.48,1.48,0,0,1,0,.21.85.85,0,0,1,0,.23l-.45,1.95-.16,2.17.1.59a1,1,0,0,1-.12.64l.16.65a1,1,0,0,1-.18.84ZM82.05,53.06a1,1,0,0,1,.46.24l0-.06a1,1,0,0,1-.06-.33,1.15,1.15,0,0,1-.48-.3,1,1,0,0,1-.67.26l-.33,0Zm-1.84-2.64v.35a1,1,0,0,1,.17-.19l0,0ZM78,48.91a.9.9,0,0,1,.33.09l1.32.6.18.11a1,1,0,0,1,0-.17,1.41,1.41,0,0,0,0-.36h0a1,1,0,0,1-.74-.45,10.56,10.56,0,0,1-.69-1.18l0,.68a1,1,0,0,1-.33.67ZM73.12,75.35a1,1,0,0,1-.68-.34l-.32-.37a1,1,0,0,1-.24-.74,1,1,0,0,1,.36-.69l.57-.46a1,1,0,0,1,.63-.23l1.09.08a1,1,0,0,1,.68.34l.47.54a1,1,0,0,1,.24.73l0,.34a1,1,0,0,1-1,.93Zm1.67-4.15a1,1,0,0,1-.78-.46L73.56,70a1,1,0,0,1-.15-.61v-.16a1.25,1.25,0,0,1,.94-1.14,1,1,0,0,1-.69-.35l-.18-.2a1,1,0,0,1-.24-.72l0-.51a1,1,0,0,1,1-.92l.61,0a1,1,0,0,1,.68.34,1,1,0,0,1,.24.73l0,.34a1,1,0,0,1-.34.69l-.37.32-.14.09a4.9,4.9,0,0,1,.7,0h0A1.06,1.06,0,0,1,76,68c.39.13,1.58.52,1.5,1.59a1,1,0,0,1-.34.68l-.17.15a1,1,0,0,1-.66.24l-.32,0a1.28,1.28,0,0,1-1.08.62ZM77.71,68a1,1,0,0,1-.7-.4l-.14-.19a1,1,0,0,1-.19-.67v-.16a1,1,0,0,1,1-.93l.57,0a1,1,0,0,1,.58,1.76l-.37.32a1,1,0,0,1-.65.24Zm-.3-9.26a1,1,0,0,1-.92-1.07l0-.32a1,1,0,0,1,.34-.68l.13-.1-.27-.41A3.29,3.29,0,0,1,75,54.42a1,1,0,0,1,.29-1.27l.2-.15a1,1,0,0,1,.59-.19h.23a1,1,0,0,1,.69.35,1,1,0,0,1,.21.4,6.06,6.06,0,0,0,1.47.66,1,1,0,0,1,.64.69,1,1,0,0,1,.6.33,1,1,0,0,1,.21.4,1.06,1.06,0,0,1,.32.28l.15.2a1,1,0,0,1,.19.67V57c-.05.74-.74,1.22-1.83,1.75a1.12,1.12,0,0,1-.44.09Zm-7.48-4.88a1,1,0,0,1-.7-.34l-.49-.57a1,1,0,0,1-.25-.73l0-.32a1,1,0,0,1,1-.92h.16a1,1,0,0,1,.93-.62l3,.21a1,1,0,0,1,.68.35,1,1,0,0,1,.24.72l0,.35a1,1,0,0,1-.34.68l-.37.32a1,1,0,0,1-.65.25l-1.59-.12a.94.94,0,0,1-.3-.07,1,1,0,0,1-.18.22l-.34.32a1,1,0,0,1-.69.27Z\"></path><path class=\"cls-1\" d=\"M77.5,43.54l1.33.45,1.23-.26.14.2v.16l1.9-.37,1,.08.48.38,10.05.73h0c.2,0,.32-.22.35-.67l.17.18,2.21.16a1.71,1.71,0,0,0,1.32.63l-.15,2,.32.37-.37,2.54-.35,4.76.12.86-.26,1-.62,8.51-.25,6-.32,1.85-.32,0,1.25-17.17-.18,0L95.33,73.06h-.16c-.33-.09-.46-.56-.4-1.39l.06-.85.27-1.53L95,69.11l0-.19.17-.15v-.16l-.11-.7.24-1-.13-.54.35-.3-.3-.36,0-.35.17-.15L95.25,65l.54-3-.12-.51.37-.33-.32-.37.09-1.17-.68-.23v.18l-.32,2.2.15.17-.23.84-.06.85.11.7L94.33,66l.14.17v.16l-.49,2,0,.51h.19l0-.66.31,0-.06.85-.21.65.12.54h-.16l.15.17-.13,1.86-.35.33-.13-.68h-.16v.16l.08,1,.2-.15H94l.14.17-.07,1-.32,0,0-.35h-.19l0,.69.2-.17h.16l.28.88-.2.17-.32,0,0-.69h-.18l-.4,3.23.12.52-.17.14v.19l.15.17-.47,1.68.13.7h-.18l.15.52c-.2,1.44-.47,2.15-.84,2.15h0l-.34,0c-.33-.1-.47-.56-.41-1.39l0-.51-.32,0c0-.21.16-.32.44-.32h.09l.21-2.9-.31-.53,0-.5.34,0,0-.53-.34,0v-.15h0c.31,0,.49-.28.53-.82l0-.5h-.16l-.07.85-.34,0-.07-1.21-.85-.06c0,.45-.16.67-.38.67h0l-.17-.2-.18.17.15.17v.16l-.41,1.17.16,0,.49.22v.16l-.67.11-.18-.17-.13,1.86.19-.15h.16l0,.35-.51,0-.22,3.06A1.15,1.15,0,0,1,88,84h-.16c-.23,0-.32-.37-.27-1.06h-.16l.25-1.16v-.19l.51-4.74.19-4.77,0-.35h-.16l0,.35-.35,0,0-.69c0-.21.16-.31.44-.31h.09l0-.5a1.15,1.15,0,0,0-.78,1.14l0,.51-.5,0,0-.34.2-.15v-.16h-.21c-.22,0-.33.16-.35.48l-.18.14h-.15l-.18-.17-.17.15c0-.45-.18-.68-.64-.72l-1.11-1.28-.25,1.18.15.18-.22.83-.31,4.26-.24,1,.15.2-.22.84-.11,1.52,0,1.55a1.64,1.64,0,0,1-1,1.48h-.16L82,82.7l.81-11.06c0-.23-.14-.36-.48-.38l-.17-.18V70.9a1.38,1.38,0,0,0,1-1.3L83,68.9a61.22,61.22,0,0,1,1.33-9.12L84,59.41l.34-.32-.24-1c0-.45.17-.67.35-.67h0l-.15-.17v-.16l.22-.84-.24-1.06.22-.84-.11-.67-.53,0c0,.43-.15.64-.35.64h0l-.18,0,0-.5.38-.48-.31-.37.1-1.36-.35,0q0,.48-.33.48h0c-.23,0-.33-.26-.29-.72l-.35,0,0-.32,1,.07c.89.5,1.32.92,1.29,1.27l.16,0,.15-2a3.8,3.8,0,0,0-1.09-1.47c0,.43-.21.65-.51.65h0l-.21.68c-.91-.28-1.35-.6-1.32-.95l-.51,0,.18.17v.16l-.2.18-.35,0a1.45,1.45,0,0,0-.74-1.6l-.17.17A5.35,5.35,0,0,1,78.76,45l.37-.29v-.19H79l-.52.15c0-.23-.3-.49-1-.77l0-.35m14,8.05h0c-.22,0-.35.28-.39.83l-.34,0,.06-.85-.37.29.17.2v.16l-.3,1.53h-.16l0-.35-.54.47-.31,4.25.29.37.19,0-.18-.18.28-1.18.22-3,.34,0-.12,1.7h.16l.12-1.7.35,0,.28.87-.29,4.07.08,1-.17.18c0,1.51.1,2.37.32,2.58l-.39.48,0,.35.07,1.21h-.16l.15.17-.47,2-.17,2.36.11.71-.18.14v.19l.25,1-.32,0,.22,1.38-.35.32c.57.08.84.27.82.57l-.2.17v.16l.48.38.53,0,.84-2.34,0-2,.22-.68-.15-.17.49-2.37-.15-.17,1-6.11-.05-4.09.44-1.33.14-1.88.2-.15-.17-.2.22-.49c0-2.39-.3-3.6-.78-3.64l-2.1,1-.25.84.12.86m5.34,4.13.49-6.8-.18,0-.5,6.81h.19M95.6,52.91l-.31,0,0,.16.11.7-.21.68c.21,0,.31.19.28.53l-.22.84.32.37-.15,2-.2.17v.16l.35,0v.19l.51-.15-.14-.17v-.19l.2-.49-.25-1L96,54.65l.17-.15L96,54.3l.36-4.91L96.07,49l-.19.14-.18,2.39-.17.15.15.2-.08,1M89.14,64.22l.28-1.34-.17-.17-.16,0-.27,1.51.32,0m4.78,7.38,0-.51-.34,0v.16l.32.37m-4.13,2.77,0-.69-.19,0-.05.69.19,0M76.41,46.88l.34,0c0,.23.14.36.48.38l.15.17,0,.69-.72.65-.34,0L76,48.4a2,2,0,0,0,.59-1.16l-.15-.17,0-.19m22.92,1.87.17.17v.16L99,49l.35-.29m-1.59.9.34,0,.3.37,0,.35-.61-.74m-20,.24.15,0,1.32.6,0,.35-.35,0c0,.32-.14.48-.35.48H78.3a.93.93,0,0,0-.78-1.07l0-.19.2-.15m3.83,1,.34,0,0,.32-.55.5v.16l-.34,0,0-.5.55-.47m-11,.48,2.87.21,0,.35-.37.32-1.52-.12-1-.41,0-.35M69.52,52l.34,0,.47.54-.35.32-.49-.57,0-.31m21.15.74.35,0,0,.53-.34,0,0-.53M80.5,53.78h.16l1.18.25,0,.69-.37.32-1-.76,0-.51m-4.44,0h.16c0,.41.68.86,2.12,1.36,0,.44.12.67.45.7l.35,0,0,.35-1.2-.09-.6-.9c-.54,0-1-.47-1.46-1.31l.2-.14m3.57,2.72.14.19v.16c0,.22-.44.52-1.27.92l-1-.07,0-.32h.12a3.38,3.38,0,0,0,2-.89M99,57.09h.11l.3.53-.06.85-.54.5-.85-.07-.47-.56,0-.51A2.05,2.05,0,0,1,99,57.09m-24.67,9.3.53,0,0,.35-.37.32-.17-.2,0-.51m3.4.25.5,0-.37.32-.15-.2,0-.16m-2,2.26q.84.27.81.57l-.17.14-1-.07c0,.44-.16.66-.37.66h0l-.45-.72v-.16q0-.41,1.23-.42m10.87,3.36.3.34,0,.19-.32,0,0-.5m-.06.85.5,0,0,.5h-.19l-.29-.37v-.16m-13,.41,1,.07.47.55,0,.34-1.71-.12L72.87,74l.57-.47m4.06-32a2,2,0,0,0-2,1.86l0,.34A2,2,0,0,0,75.8,45a1.94,1.94,0,0,0-.7.39,2,2,0,0,0-.69,1.37v.19a1.48,1.48,0,0,0,0,.21,2,2,0,0,0,0,2.57l.19.21a2.12,2.12,0,0,0-1-.36l-2.87-.2H70.6a2,2,0,0,0-1.48.65,2,2,0,0,0-.91.45,2,2,0,0,0-.69,1.37l0,.32A2,2,0,0,0,68,53.59l.49.57a2,2,0,0,0,1.41.69H70a2,2,0,0,0,1.37-.53l.21-.2,1.37.1h.15a2,2,0,0,0,.79-.17,1.86,1.86,0,0,0,.22.82,4.85,4.85,0,0,0,1.54,1.83,1.81,1.81,0,0,0-.12.56l0,.32a2,2,0,0,0,1.85,2.14l1,.07h.14a2,2,0,0,0,.87-.19c.86-.42,2.29-1.11,2.4-2.58h0a1.82,1.82,0,0,0,.63-.22s0,.06,0,.08a3.48,3.48,0,0,0-.23.95,2.29,2.29,0,0,0,0,.69l0,.08a2,2,0,0,0,0,1.53A84.62,84.62,0,0,0,81,68.7a2.18,2.18,0,0,0,0,.51v0a2,2,0,0,0-.87,1.5v.19a2,2,0,0,0,.58,1.56l-.73,10A2,2,0,0,0,80.48,84l.32.37a2,2,0,0,0,1.36.69h.31a2.1,2.1,0,0,0,.85-.19,3.64,3.64,0,0,0,2.11-3.15v-.2l0-1.45.09-1.23.17-.66a2,2,0,0,0,0-.92l.07-.33a1.54,1.54,0,0,0,0-.31l.09-1.19a2.43,2.43,0,0,0,.38.13l0,1.09-.5,4.68v.12l-.21,1a2.06,2.06,0,0,0,.13,1.25A2.31,2.31,0,0,0,87.74,86H88a2,2,0,0,0,.64-.1,3.05,3.05,0,0,0,1.24-.78,2.42,2.42,0,0,0,1.15.72,2,2,0,0,0,.41.07l.35,0H92c2.3,0,2.66-2.72,2.82-3.89a2.29,2.29,0,0,0,0-.37,2,2,0,0,0,0-.78l0-.24.34-1.22a1.75,1.75,0,0,0,.07-.64,2,2,0,0,0,0-.87l0-.16.11-.86,0,0,.2-.17a2,2,0,0,0,.69-1.64,2,2,0,0,0,1.65-1.63l.32-1.84,0-.26.25-5.94L98.73,61h0a2,2,0,0,0,1.34-.52l.55-.5a2,2,0,0,0,.65-1.33l.06-.85a1.94,1.94,0,0,0-.27-1.15l-.3-.53a2,2,0,0,0-1.58-1l0-.27.2-2.73a2,2,0,0,0,.9-1.18,2,2,0,0,0,1.2-1.69l0-.16a2,2,0,0,0-.59-1.57l-.17-.17a2,2,0,0,0-1-.55.76.76,0,0,0-.09-.18l.09-1.25a2,2,0,0,0-.48-1.45,2,2,0,0,0-1.37-.69h0a2,2,0,0,0-1.32-.63l-1.61-.11a1.92,1.92,0,0,0-.91-.23,2.11,2.11,0,0,0-.7.13,1.93,1.93,0,0,0-.72.46l-8.23-.6a2,2,0,0,0-1.1-.43l-1-.08h-.14a1.58,1.58,0,0,0-.38,0l-.82.15a2,2,0,0,0-.83-.18,3,3,0,0,0-.42,0l-.69.15-.81-.27a2,2,0,0,0-.64-.11Zm-2,10.36,0-.19a2.06,2.06,0,0,0-.37-1.32,1.63,1.63,0,0,0,.47.25,2.05,2.05,0,0,0,.74,1.18h-.25a2.1,2.1,0,0,0-.61.09ZM74.28,64.39a2,2,0,0,0-2,1.86l0,.5a2,2,0,0,0,.47,1.44,2.38,2.38,0,0,0-.3,1v.16a2.06,2.06,0,0,0,.3,1.21l.46.73a1.5,1.5,0,0,0,.19.25,2,2,0,0,0-1.18.45l-.57.47a2,2,0,0,0-.25,2.85l.32.38a2,2,0,0,0,1.37.68l1.7.13h.15a2,2,0,0,0,2-1.86l0-.34a2,2,0,0,0-.49-1.45L76,72.29a3.07,3.07,0,0,0-.26-.25,2.18,2.18,0,0,0,.7-.43,2.06,2.06,0,0,0,1.2-.49l.17-.15a2,2,0,0,0,.68-1.35,2.29,2.29,0,0,0-.06-.71,2.06,2.06,0,0,0,.73-.39l.37-.32a2,2,0,0,0-1.16-3.51l-.51,0h-.15a2,2,0,0,0-1.33.51l0,0A2,2,0,0,0,75,64.44l-.53,0Z\"></path><path class=\"cls-2\" d=\"M43.27,87.06A.94.94,0,0,1,42.9,87c-.61-.24-1.3-.89-1.18-2.56a1.06,1.06,0,0,1,.09-.36l.18-.38a20.59,20.59,0,0,1-.18-3.62l-.19.58a1,1,0,0,1-.95.69h-.23a1,1,0,0,1-.69-.34l-.46-.55a1,1,0,0,1-.25-.72l0-.26a1,1,0,0,1-.29-.78v-.16l0-.17.89-3.54-.07-.28a.93.93,0,0,1,0-.44l.46-2.19a16.54,16.54,0,0,0-1.4-3.37.94.94,0,0,1-.31-.77v-.07l-.93-1a18.19,18.19,0,0,0-3.54-.91,2,2,0,0,1-.69.19,6.5,6.5,0,0,1-1.15,1.15,1,1,0,0,1-.26.45,5.26,5.26,0,0,0-.7,1h.18a1.07,1.07,0,0,1,.57.23.94.94,0,0,1,.53.41,1,1,0,0,1,.11.87l-.24.68a1,1,0,0,1-.94.67l-.39,0a1,1,0,0,1-.69-.35,1,1,0,0,1-.23-.55l-2.53,1.89a1,1,0,0,1-.6.2l-.39,0a1,1,0,0,1-.73-.4l-1.59-.12a1,1,0,0,1-.68-.34l-.3-.35a1,1,0,0,1-.24-.72v0l-1.25-.4a1,1,0,0,1-.68-1l0-.34a1,1,0,0,1,.43-.76,1,1,0,0,1,.56-.17,1,1,0,0,1,.3,0l1.44.44a1.3,1.3,0,0,1,.54-.85l0-.32a1,1,0,0,1,.32-.65h0a.93.93,0,0,0,.11-.49,1,1,0,0,1,.35-.68l0,0a.25.25,0,0,0,0-.09,1,1,0,0,1,.43-.75v0a1,1,0,0,1,.27-.81.87.87,0,0,1,.38-.25,9.17,9.17,0,0,0,.93-2,1,1,0,0,1,.36-.47v0a1,1,0,0,1,.27-.81,1.09,1.09,0,0,1,.33-.23,8.88,8.88,0,0,0,.72-1.74h0l-.27.15a1.12,1.12,0,0,1-.47.11l-.56,0a1,1,0,0,1-.59-.26c-.25.52-.85,1-2.26,1a5.62,5.62,0,0,1-.57,0l-.19,0L23.29,59c-.21.63-.59,1.22-1.34,1.22h-.09a1,1,0,0,1-.92-.89l-.07,0a1,1,0,0,1-.72-1V58c0-.19.16-1.14,1.51-1.19l.25-.22a1,1,0,0,1,.66-.24l.26,0,.72.2h.06l2.45,0a1,1,0,0,1,.58.2,1,1,0,0,1,.71-.72l1-.27a1.09,1.09,0,0,1,.26,0l1,.07.3-.26a1,1,0,0,1,.36-.92l0-.28a1.22,1.22,0,0,1,.42-.84v-.15l0-.32a1.23,1.23,0,0,1,.28-.72,2.05,2.05,0,0,1-.25-.27,1,1,0,0,1-.9-1.07v-.19a1,1,0,0,1,.31-.65A5,5,0,0,0,31,49.3a1,1,0,0,1,.33-.54,1,1,0,0,1,.65-.24l.42,0a1,1,0,0,1,.74.42l.14-.12,0-.22a1,1,0,0,1,.6-1L34,47.3l0-.33A1.45,1.45,0,0,1,35,45.81V45.7a1,1,0,0,1,.86-.91.94.94,0,0,1,.56-.43l.16,0a1.42,1.42,0,0,1,.4-.38l0-.44c.07-1,1.28-1.35,1.8-1.49A1.07,1.07,0,0,1,39,42a1,1,0,0,1,1,1.07v.16a.47.47,0,0,1,0,.17,1,1,0,0,1,.67.33l.2.22a8,8,0,0,1,.53-.73,1.18,1.18,0,0,1-.21-.18l-.32-.37a1,1,0,0,1-.24-.73l0-.32a1,1,0,0,1,.66-.87,1.4,1.4,0,0,1,.28-.06,1,1,0,0,1,.27-.36l.37-.32a1,1,0,0,1,.65-.24H43a1,1,0,0,1,.69.41l.75,1.07a1,1,0,0,1,.18.45l.78-.53A1,1,0,0,1,46,41l.42,0a1,1,0,0,1,.75.43.89.89,0,0,1,.17.46l.35,0a1,1,0,0,1,.81.53,1,1,0,0,1,.42-.09l.42,0a1,1,0,0,1,.92,1.07v.16a1,1,0,0,1-.37.71l-.37.29a1.09,1.09,0,0,1,.26,0l.23,0a1,1,0,0,1,.69.34l.32.37a1,1,0,0,1,.24.57,1,1,0,0,1,.77.93l.86-.25a.9.9,0,0,1,.28,0,1,1,0,0,1,.76.34l.46.54a1,1,0,0,1,.14,1.1,1,1,0,0,1,.27.39,1.16,1.16,0,0,1,.44.32,1.49,1.49,0,0,1,.32.67,1,1,0,0,1,.38.86l0,.5a1,1,0,0,1-1,.93l-.24,0a.91.91,0,0,1-.36-.09l-1-.47-.22.24a1.05,1.05,0,0,1-.3.22,1.41,1.41,0,0,1-.15.48l.13.13a1.08,1.08,0,0,1,.27.73l0,.16a1,1,0,0,1-1,.92H52a.54.54,0,0,0-.38.18.56.56,0,0,1,0,.13V55a1.32,1.32,0,0,1,0,.26l-.23.62a1,1,0,0,1,.17.63v.16a1,1,0,0,1-1,.93H50.3v1.11a2.43,2.43,0,0,1-1,1.46l-1.89.53a.86.86,0,0,1-.17,0,2.27,2.27,0,0,0,.7.92,1,1,0,0,1,.25,1.21v0a2,2,0,0,1,.13.25l.38-.06h.17a1,1,0,0,1,.67.26,1,1,0,0,1,.32.81v.16a1,1,0,0,1-.15.47l.31.35a1,1,0,0,1,.23.77,1,1,0,0,1-.4.69l-.27.2c.21.91.42,2.06.65,3.52a.81.81,0,0,1,0,.22l-.06.85a1,1,0,0,1-.19.53h0a1.48,1.48,0,0,1,0,.21c-.31,1.87-1.21,2.26-1.9,2.26H48l-.16,2.19a.65.65,0,0,1,0,.2l-.4,1.41.07.46a.91.91,0,0,1,0,.33l-.26,1.46v.1a1.34,1.34,0,0,0,.32,1,1,1,0,0,1,.2.89v.17l0,.48a1,1,0,0,1-.79.91c-.36.07-1.13.48-2.22,2.33a1,1,0,0,1-.36.36l-.53.31A1,1,0,0,1,43.27,87.06ZM35.75,58a10.8,10.8,0,0,0,1.56,1.86,3.12,3.12,0,0,1,.93-.15,4.12,4.12,0,0,1,.45-.48v0a1,1,0,0,1,.37-.7v-.1a1.06,1.06,0,0,1,.09-.35,1.07,1.07,0,0,1-.58-.33l-.14-.17a1,1,0,0,1-.25-.66l-.34.29a1,1,0,0,1-.65.24,1,1,0,0,1-.35-.06.94.94,0,0,1-.26-.14,6.81,6.81,0,0,1-.82.61Zm9-6.74a1,1,0,0,1,.61.21l.5.38.15-.07a1.16,1.16,0,0,1,.32-.08l-.22-.62a1,1,0,0,1,.15-.94,1,1,0,0,1,.31-.27,5.8,5.8,0,0,0,.46-.71,1.06,1.06,0,0,1,0-.25l0-.16a.92.92,0,0,1,.11-.4,5.57,5.57,0,0,0-.71-.14.92.92,0,0,1,.09.49l0,.51a1,1,0,0,1-.72.89,1.45,1.45,0,0,1-.28,0,1,1,0,0,1-.42-.1,2.65,2.65,0,0,0-.41.36l-.13.1a1,1,0,0,1,.13.62.64.64,0,0,1,.08.14Zm3.39-6.41a1.11,1.11,0,0,1,.22.34A1,1,0,0,1,49,44.9l.09-.08a1.09,1.09,0,0,1-.26,0,1,1,0,0,1-.66-.25.83.83,0,0,1-.11.15S48.11,44.84,48.11,44.88Zm-18.39,5A1,1,0,0,1,29,49.5l-.15-.17a1,1,0,0,1-.24-.73l0-.35a1,1,0,0,1,.34-.68l.35-.3a1,1,0,0,1,.65-.24,1,1,0,0,1,.7.29l.18.17a1.05,1.05,0,0,1,.29.79l0,.32a1,1,0,0,1-.35.68l-.37.32A1,1,0,0,1,29.72,49.84Z\"></path><path class=\"cls-1\" d=\"M42.89,40.75l.75,1.07-.2.65-.92-1.4.37-.32m-1.24.92L42,42l0,.34L41.63,42l0-.32M46,42l.35,0-.25.81h.19l.29.37.53-.31.51,0-.57.78.32.37-.71.62.47.19,0,.35h-.17c-.33,0-.5.09-.52.28l1,.07v.19l-1.21.42v.16a6,6,0,0,1,2.29.83,2,2,0,0,0,.6-1.29h.16c.34,0,.52-.1.53-.31l.16,0,.32.37v.16l-.2.14v.19l.67.37.32,0V47l-.18.17v.17l1,.57,1.39-.4.47.54a2.3,2.3,0,0,0-.79,1.28H53l.67-.11h.16l0,.32c0,.21-.16.31-.44.31h-.09l0,.32.67.05c0-.31.14-.46.34-.46h0c.21,0,.3.3.26.85l.34,0,0,.51h-.16l-1.63-.79-.72.78-.16,0,0-.31-.53.28.13.51h-.17l.15.17V52c0,.21-.19.31-.53.31h-.16l0,.35a1.06,1.06,0,0,0,1,.73v.16h-.11a1.73,1.73,0,0,0-1.49,1.06l.14.17v.16L50.17,56l.29.37v.16l-.32,0-.48-.35-.35,0v.16l0,2.35-.35,0,.15.17,0,.35-1.88.53L47.09,59l-.32,0,0,.32-.19,0-.48-.35-.37.64c.45,0,.66.15.64.37v.18l-.17.15a3.28,3.28,0,0,0,1.18,2.09l-.41.82.19,0q.48,0,.39,1.2c.57,0,1.16,2,1.76,6l-.06.85-.36.48.15.18c-.16.95-.46,1.42-.91,1.42h-.05l-.79-.56-.39.66.12.84-.16,2.18-.46,1.62.11.68-.27,1.5v.16a2.3,2.3,0,0,0,.54,1.72l-.17.15.14.2,0,.48c-.94.2-1.9,1.13-2.88,2.81l-.53.3c-.43-.17-.62-.69-.55-1.56l.37-.8c-.3,0-.35-3-.17-8.91l-.15-.17v-.16l.54-3c0-.68-.34-1-.91-1.08l-.52.12.17,2-.18,2.5.13.84h-.19l.18.19,0,.16-1.31,4.1h-.16L40,79.79l.07-1-.34,0V78.6l.95-3.78-.13-.52.53-2.47a15.49,15.49,0,0,0-1.74-4l.2-.15v-.16L38,65.88a18.88,18.88,0,0,0-4.46-1.15c0,.18-.21.27-.61.27h-.24C32,66,31.36,66.54,31,66.54h0l.17.17v.19a7.58,7.58,0,0,0-1.56,2.72l-2.66,2-.32,0,0-.34-2.34-.18-.3-.34.06-.82-2-.65,0-.35,2.8.87H25l-.28-.52,0-.67c0-.19.16-.29.42-.29h.09l.07-1a1.7,1.7,0,0,0,.43-1.15h0c.2,0,.32-.26.36-.8l.52-.15-.1-.83h0c.36,0,.86-.86,1.51-2.56l.52-.15-.1-.84h0c.37,0,.89-1.08,1.56-3.25h.09c.28,0,.42-.09.43-.28L30,56.9,31,56l-.12-.51.53-.31L31.27,55l0-.51c0-.18.19-.28.54-.28H32L32,54l-.31-.53,0-.32c0-.21.2-.31.54-.31h.15l-.15-.17,0-.51.51,0,0-.5-.86.12q-.64-.39-.6-.9h-.16l-.18.17h-.18v-.19c.73-.69,1.1-1.16,1.12-1.41l.35,0a1.78,1.78,0,0,0,.57,1.22l0,.32.32,0c.21-1.05.57-1.57,1.08-1.57h0l0-.19-.1-.83h0q.31,0,.72-1h.16L35,47.39l0-.35c0-.17.36-.37,1-.59l-.15-.17,0-.51h.11c.37,0,.57-.16.59-.46l.15.2.34,0q.12-.81.54-.81h0l2.15.15,0-.5.64.71-.22.5h.19l.46.22c.82-1.79,1.6-2.69,2.32-2.69h.07l0-.67c.23,0,.33.2.31.53h.15l.18-.17h.16l.17.2L46,42m-.52,7.18-.15-.2h-.16a2.18,2.18,0,0,0-1.23.76l-1-.07v.16l.49.19-.19.5.44.54-.2.49h.16c.23,0,.37.47.41,1.37l.13.83c.43.11.64.29.62.56l-.37.32,0,.5.31.51.83-.1,1,.23.39-1h-.16l-.52.12,0-.66h0c.46,0,.89-.64,1.28-1.91L47,50.78h0c.16,0,.54-.54,1.13-1.6L48,49v-.16l.35,0,0,.32h.16L48.72,48v-.16a8.75,8.75,0,0,0-3-.72l-.57,1.13.3.37,0,.51m-8.25,7.27-.12-.67-.31,0c-1.07,1-1.77,1.5-2.12,1.5h0l.17.2,0,.32-.19.15,0,.19C35.88,60,36.76,60.93,37.22,61h.16a1.68,1.68,0,0,1,1-.23h.36c.43-.62.78-.94,1.06-.94h0v-.15l-.15-.2V59.3l.52-.12L40,59l0-.5.17.17h.16v-.16c.07-.9-.29-1.38-1.07-1.44l-.15-.17,0-.32.18-.17v-.16l-.62-.72-.67.12-.84-.23.31.53v.16l-.37.32m8.32.93.54-.47,0-.66L45.46,56c-.45.13-.68.28-.7.46v.16a.59.59,0,0,1,.62.71h.16M44,83.26l.94-1.43c.44,0,.7-.53.77-1.47h-.16c-.54-.11-.8-.3-.79-.56l.39-1-.06-1.34h0c.33,0,.53-.61.62-1.83h.16l-.14-.17.1-1.49-.08-1,.21-.65-1.09-1.25-.8,1.78.15.17-.21.65q-.23,3.09,0,9.57M39,43v.16a1.32,1.32,0,0,1-.92,1l-.16,0,0-.5c0-.21.36-.41,1-.59m9.86.4.35,0v.16l-.37.3-.15-.17v-.16l.17-.15M29.94,48l.17.17,0,.32-.37.32-.15-.17,0-.34.34-.3m14.78,4.26,1,.74.69-.3v.19q-.4.93-.72.93h0l-.91-1.4v-.16M28.63,56.81l1.17.08,0,.35-1.17-.09-.52.28-.48,0,0-.32,1-.27m-6.05.57.81.22h.16l2.51,0c-.12.37-.58.55-1.39.55a4.18,4.18,0,0,1-.49,0l-1.63-.44c-.16,1-.36,1.46-.6,1.46h0a1,1,0,0,0-.79-.89V58.1c0-.17.22-.26.62-.26H22l.55-.47M48.92,64l0,.16-.54.46-.15-.17,0-.34.68-.11m-.1,1.33H49l.32.37-.2.14h-.16l-.15-.17,0-.34M31.06,69.57h.16l.15.17h.19l-.24.68-.32,0,.06-.85M42.89,38.75a2,2,0,0,0-1.3.49l-.37.32a1.25,1.25,0,0,0-.23.23h0a2,2,0,0,0-1.25,1.31A2.1,2.1,0,0,0,39,41a2.07,2.07,0,0,0-.5.06c-.6.16-2.42.64-2.55,2.38v0a2,2,0,0,0-.71.45,2,2,0,0,0-1.22,1.31,2.2,2.2,0,0,0-1,1.7v0a1.37,1.37,0,0,0-.22.2,2.07,2.07,0,0,0-.31.42h0l-.34,0H32a2,2,0,0,0-.47-.74l-.18-.17a2,2,0,0,0-2.71-.09l-.34.29a2,2,0,0,0-.69,1.37l0,.35A2,2,0,0,0,28.06,50l.15.18a2,2,0,0,0,.71.52.37.37,0,0,0,0,.11l0,.18a2,2,0,0,0,.9,1.82,1.13,1.13,0,0,0,0,.25v.14a2.18,2.18,0,0,0-.43,1.09,2,2,0,0,0-.3.56l-.24,0h-.15a1.93,1.93,0,0,0-.53.07l-1,.27a2,2,0,0,0-.87.49h-.15l-2.38,0-.6-.16a1.86,1.86,0,0,0-.52-.07,2,2,0,0,0-1.31.49h0A2.3,2.3,0,0,0,19.16,58v.18a2,2,0,0,0,1,1.86,2,2,0,0,0,1.67,1.17H22a2.16,2.16,0,0,0,1.88-1l.2,0,.64,0A4,4,0,0,0,27,59.59a2.08,2.08,0,0,0-.41,1,2.17,2.17,0,0,0-.31.53,11.64,11.64,0,0,1-.68,1.56,2.24,2.24,0,0,0-.42.34,2,2,0,0,0-.53,1.12,1.85,1.85,0,0,0-.39.81A2,2,0,0,0,23.79,66v0a2.06,2.06,0,0,0-.42,1l-.09.11L22.65,67a2.08,2.08,0,0,0-.6-.09,2,2,0,0,0-1.12.35,2,2,0,0,0-.87,1.5l0,.35a2,2,0,0,0,1.37,2l.66.21a2,2,0,0,0,.38.67l.29.34a2,2,0,0,0,1.37.69l1.22.09a2,2,0,0,0,1.09.42l.32,0h.15a2,2,0,0,0,1.2-.4L29.74,72a2,2,0,0,0,1.12.44l.32,0h.14a2,2,0,0,0,1.89-1.34l.23-.68a2,2,0,0,0-.21-1.75,2.22,2.22,0,0,0-.54-.56,2.5,2.5,0,0,0,.21-.35,7.48,7.48,0,0,0,.85-.84l.27-.08a17.56,17.56,0,0,1,2.85.72l.55.57a1.93,1.93,0,0,0,.48,1A18.57,18.57,0,0,1,39.06,72l-.41,1.91a1.87,1.87,0,0,0,0,.88v0l-.83,3.3a1.33,1.33,0,0,0-.05.34l0,.16A2.11,2.11,0,0,0,38,79.76a2,2,0,0,0,.49,1.34l.47.54a2,2,0,0,0,1.36.69h.49a11.63,11.63,0,0,0,.11,1.2l-.05.11a1.92,1.92,0,0,0-.19.7c-.17,2.4,1.05,3.27,1.8,3.57a2,2,0,0,0,.75.14,2,2,0,0,0,1-.27l.53-.31a2.07,2.07,0,0,0,.72-.72c1-1.67,1.56-1.86,1.56-1.86a2,2,0,0,0,1.58-1.81l0-.48v-.17a2,2,0,0,0-.43-1.59.34.34,0,0,1-.09-.3v-.06l.26-1.4a1.89,1.89,0,0,0,0-.67l0-.24L48.76,77a2.7,2.7,0,0,0,.07-.41l.1-1.39c.78-.26,1.73-1,2-3v0a2.12,2.12,0,0,0,.22-.78l.06-.85a1.7,1.7,0,0,0,0-.45c-.17-1.13-.33-2.12-.51-3a2.06,2.06,0,0,0,.55-1.17,2,2,0,0,0-.41-1.45c0-.06,0-.12,0-.18v-.16a2,2,0,0,0-.64-1.62,2.06,2.06,0,0,0-.94-.48,2,2,0,0,0-.32-.8l.62-.17A2,2,0,0,0,51,59.73a2,2,0,0,0,.31-1.08v-.28a2,2,0,0,0,1.14-1.67l0-.16a2.06,2.06,0,0,0-.09-.74l.09-.25,0-.1A2,2,0,0,0,54,53.64v-.16a2,2,0,0,0,0-.42,2,2,0,0,0,.54.11h.31a2,2,0,0,0,1.3-.49,2,2,0,0,0,.69-1.36l0-.51a2,2,0,0,0-.49-1.46,2.26,2.26,0,0,0-.45-.79,2.37,2.37,0,0,0-.37-.34,2,2,0,0,0-.48-1.47l-.47-.54a2,2,0,0,0-1.51-.69,1.81,1.81,0,0,0-.56.08h0s0,0-.05,0a1.67,1.67,0,0,0-.45-.39,2,2,0,0,0-.31-.5l-.32-.37a3.07,3.07,0,0,0-.26-.25,2,2,0,0,0,.06-.35v-.16a2,2,0,0,0-.48-1.45,2,2,0,0,0-1.37-.69l-.34,0h-.2A1.85,1.85,0,0,0,48,41L48,40.88a2,2,0,0,0-1.5-.86l-.35,0H46a2,2,0,0,0-1,.26l-.46-.65a2,2,0,0,0-1.39-.84ZM37.32,58.44a1.94,1.94,0,0,0,.48-.09l0,0s0,0,0,0a2.08,2.08,0,0,0-.12.32h0l-.14,0c-.09-.09-.18-.21-.3-.35Z\"></path><path class=\"cls-2\" d=\"M58,85.76a1,1,0,0,1-.3,0l-.18-.06c-2.66-.16-2.94-.19-2.91-1.16a.69.69,0,0,1,0-.2v0L53.81,84l-.29.46a1,1,0,0,1-.85.47l-.47,0a1,1,0,0,1-.85-.62L51,83.42a.89.89,0,0,1-.07-.46v-.18a1.47,1.47,0,0,1,.49-1,.43.43,0,0,1,0-.16l0-.4a.69.69,0,0,1,0-.2.61.61,0,0,1,0-.19l0-.4a1,1,0,0,1,.22-.55l.25-.32.06-.89s0-.09,0-.14l.9-4,.1-4.28a1.17,1.17,0,0,1,.08-.37l.05-.11a1,1,0,0,1-.5-.46c-.46-.91-.91-3-.29-11.53l0-.29-.21-.38a1,1,0,0,1-.06-.85l.14-.34-.09-.75V55l0-.61a.94.94,0,0,1,.21-.55l.25-.31.1-1.38-.2-.35a1,1,0,0,1-.13-.58l0-.79.28-2.33a1,1,0,0,1-.41.37.88.88,0,0,1-.45.11,1,1,0,0,1-.74-.33l-.57-.63a1,1,0,0,1-.25-.74v-.18a1,1,0,0,1,.34-.69,1,1,0,0,1,.66-.25l.47,0a1,1,0,0,1,.66.31l0-.24a1,1,0,0,1,.1-.61c-.84-.43-1.22-.86-1.17-1.49v-.21a1,1,0,0,1,.36-.7l.66-.54a1,1,0,0,1,.63-.23l.34,0a9.48,9.48,0,0,1,1.16-.9,1,1,0,0,1,.56-.17l4.64.34a1.44,1.44,0,0,1,.42.09,1.26,1.26,0,0,1,.28,0l1.67.12a1,1,0,0,1,.92,1.06l1.89.13.35-.2a1.06,1.06,0,0,1,.5-.13l.47,0a1,1,0,0,1,.55.22l.28.22,1.07-.08a1,1,0,0,1,.38.07l.08,0A1.12,1.12,0,0,1,69,42.8a.89.89,0,0,1,.36.07l.6.23.14.07a1,1,0,0,1,.42-.49l.62-.35a1,1,0,0,1,.5-.14l.28,0a1,1,0,0,1,.92.84l.13.81a1.31,1.31,0,0,1,0,.28,5.16,5.16,0,0,1,2,2.13,4.53,4.53,0,0,1,1.24,2.54,1,1,0,0,1,0,.3l-.05.66a1.33,1.33,0,0,1,.5,1.17l0,.58a1.34,1.34,0,0,1-.67,1.08v.07c-.14,1.81-1.21,3.62-3.2,5.4a.92.92,0,0,1-.14.39l-.57,1a7.51,7.51,0,0,1,.37,1.32A3.69,3.69,0,0,1,73,62.1a1.76,1.76,0,0,1,.46,1.15,3.37,3.37,0,0,1,.44.51,1,1,0,0,1,0-.25l0-.4a1,1,0,0,1,1-.93l1.85.14a1,1,0,0,1,.93,1.07l0,.4a1,1,0,0,1-1,.92l-1.85-.13a1,1,0,0,1-.51-.18,27.4,27.4,0,0,1,1.57,3.38,1,1,0,0,1,.06.55v.11l0,.4a1.2,1.2,0,0,1-.1.37,5,5,0,0,1-2.64,2.32.92.92,0,0,1-.4.08l-.47,0a.94.94,0,0,1-.29-.06,8.76,8.76,0,0,1-3.63-3.4,1,1,0,0,1-.18-.63h0a2.66,2.66,0,0,0-.22-.26,1,1,0,0,1-.28-.57,1.63,1.63,0,0,1-.2-.42l-.6,0a1.35,1.35,0,0,1-1-.52l-.19,0h-.11a1,1,0,0,1-.76-.34l-.07-.09a1.33,1.33,0,0,1-.1.34,1,1,0,0,1-.9.55l-.47,0a1,1,0,0,1-.92-1.07v-.11c-.6,3.63-1.06,5.18-1.55,5.84l.1,3.44a1.11,1.11,0,0,1-.12.5l-.27.51a2.09,2.09,0,0,1,.77,1.92l0,.19a1.48,1.48,0,0,1-.83,1.26l.66,3a1,1,0,0,1-.21.86l-.19.22a1,1,0,0,1,0,1c-.39.68-.78,1.27-1.33,1.43a1,1,0,0,1-.89.55h-.22A1.13,1.13,0,0,1,58,85.76Zm-2.7-3.38v-.1a2.36,2.36,0,0,1,.56-1.37.94.94,0,0,1-.14-.59l.08-1.17A11.28,11.28,0,0,0,55,82.26Zm7.26-18.29a1,1,0,0,1,.24-.31l.25-.21a3.32,3.32,0,0,0-.3-.73C62.7,63.28,62.63,63.7,62.57,64.09ZM64,54l-.41-1.64c-.93-.43-1.74-1-1.67-1.91a1,1,0,0,1,.07-.31A4.29,4.29,0,0,1,63.63,48l0,0-1.94-.14c-2.15.53-2.47,1.51-2.52,2.21L59,51.65c0,.38.47,1.14,1.92,2.13Zm-11-6.8h0ZM78.56,70.84a1,1,0,0,1-.69-.35l-.37-.43a1,1,0,0,1,.1-1.4l.23-.2a1,1,0,0,1,.66-.25l.26,0a1,1,0,0,1,.68.34l.2.23a1,1,0,0,1,.24.73l0,.4a1,1,0,0,1-1,.92Zm-.27-11.41a1,1,0,0,1-.71-.29l-.2-.21a.91.91,0,0,1-.28-.58,1,1,0,0,1-.38.28l-.83.34a1,1,0,0,1-1.18-.33l-.17-.22a1,1,0,0,1-.13-1l.23-.58a1,1,0,0,1,.93-.63l.47,0a1,1,0,0,1,.68.34l.37.43a1,1,0,0,1,.21.37.85.85,0,0,1,.16-.17l1.28-1.08a1,1,0,0,1,.64-.24l.48,0A1,1,0,0,1,80.78,57l-.07,1c-.08,1.14-1.53,1.31-2.31,1.4Zm1.23-6.29-.16,0a1,1,0,0,1-.7-.48L78.3,52a1,1,0,0,1,.23-1.27l.65-.54a1.09,1.09,0,0,1-.25-.23l-.17-.23a1,1,0,0,1-.2-.68v-.18a1,1,0,0,1,.34-.69l.43-.37a1,1,0,0,1,.66-.24l.26,0a1,1,0,0,1,.68.34,1,1,0,0,1,.24.73l0,.4a1,1,0,0,1-.34.68l-.38.33a1,1,0,0,1,.33.25,1,1,0,0,1,.24.73l0,.77a1,1,0,0,1-.35.68l-.42.37A1,1,0,0,1,79.52,53.14Z\"></path><path class=\"cls-1\" d=\"M55.15,42l4.57.34q.45,0,.51,1l.59,0-.33-1,1.59.12,0,.4-1-.07.14.59,4,.29.62-.35.39,0,.56.44H67l1.21-.09.57.23.2-.18.6.23,0,.22.4,0A4.58,4.58,0,0,1,74.13,47c.41.19.76.88,1.05,2.08l-.1,1.38c.39,0,.57.18.55.44l0,.59c0,.24-.18.36-.5.36H75l-.06.8c-.12,1.68-1.25,3.4-3.37,5.15l.17.2-.91,1.54c.21,0,.43.63.67,1.84q.31,0,.69,1.44c.27,0,.38.36.33,1q.73,0,2.49,4.35l-.22,0,.2.23,0,.4a4,4,0,0,1-2.14,1.84l-.4,0a8,8,0,0,1-3.17-3,1.42,1.42,0,0,0-.51-1l.2-.2c-.35,0-.53-.36-.51-1L67,65.19c-.25,0-.36-.22-.33-.61l-1,.11-.37-.42-1.17-.09a4.14,4.14,0,0,0-1.21-2.87l0-.21.61,0,4.3,3.7,0-.4-.72-1,.23-.19c-.27,0-1-.87-2.22-2.54-.75-.47-1.11-.89-1.08-1.29l-.23.18-.4,0c0-.39-.42-.62-1.34-.69l-.24,3.38c-.79,5.35-1.44,8-2,8h0l.11,4-.71,1.33,0,.22a1.05,1.05,0,0,1,1.11,1.28l0,.19c0,.36-.3.54-.83.54h-.19l.88,4-.65.75.36.62c-.38.65-.64,1-.79,1a.11.11,0,0,1-.1-.08l-.8.44-.83-.32q-2-1.86-.32-3.1l.16.68a2.11,2.11,0,0,0-.51-1.43l.15-2a55.32,55.32,0,0,1,1.19-7.87l-.37-3.42.27-.79.4,0,0,.4.38,0,.16-2.18h-.19c-.07,1-.41,1.52-1,1.52h-.08l0,.4.18,3h-.21l.2.2-.13,1.78A6.89,6.89,0,0,0,56,74.35l0,.62.31,1.19A14,14,0,0,0,54,82.39c0,.26-.1.42-.24.46l-.35-.13h0l-.22-.08a1.06,1.06,0,0,0,.2.12l-.7,1.12-.4,0L51.93,83l0-.19c0-.34.3-.52.84-.55l-.36-.62,0-.39.23-.2-.2-.2,0-.4.44-.56.09-1.19L54,74.61l.1-4.38.26-.59-.13-1.19-.4,0,0,.4h-.18q-.87-1.69-.19-11l.05-.58-.36-.64.23-.57-.11-1,0-.61.44-.56.15-2-.36-.61.06-.8L54,46.29l0-.18-.19,0,0,.4h-.21l-.13-.82c.62-.22,1-.46,1-.72-1.42-.53-2.12-.91-2.11-1.14l0-.22.65-.54.4,0,0,.4.19,0q0-.51,1.5-1.5m9,13,1-.14v-.19l-.76-3c-1-.44-1.55-.81-1.52-1.13a2.82,2.82,0,0,1,1.74-1.85h.21a1.67,1.67,0,0,0-.9-1.66l-2.36-.18q-3.26.75-3.44,3.15L58,51.58c-.07.94.79,2,2.57,3.18l3.56.26m1.66-6.26L67,48.63l1.93.76v-.22a5.55,5.55,0,0,0-4.23-2.1h-.18l0,.21c.53,0,.77.45.71,1.23l.57.26M69.71,50l-.37-.43-.2.2,0,.19.59,0m.68,1.65,0-.61-.35-.8-.4,0-.1,1.38.8.06M59.18,76.78l.06-.8h-.19l-.06.8h.19M71.6,43.19l.21,0,.13.81-.2.17h-.21L71,43.55l.61-.36M51.41,46.71l.4,0,.15.79-.56-.63v-.19M80,48.59h.18l0,.4-.43.37-.17-.22,0-.19.43-.37M79.82,51,80,51l-.06.77-.43.37-.35-.62.65-.54m-.44,6,.4,0-.07,1c0,.21-.49.37-1.42.48l-.2-.2V58l1.28-1.09m-3.81.31.4,0,.37.43-.83.34-.17-.22.23-.58M75,63.18l1.78.13,0,.4-1.78-.13,0-.4m-11.06,1,0,.39-.21.18V65l.17.2-.4,0,0-.58.42-.37m14.6,5,.18,0,.2.22,0,.4h-.21l-.37-.43.23-.2M53.39,82.73l.33.13h-.06a.64.64,0,0,1-.29-.09l0,0m.36.12,3.64,1.39,0,0-3.7-1.41h0M55.65,84c.11,0,.76.16,2,.47l.18.16-.36,0a11.82,11.82,0,0,1-1.8-.61m1.77.29.79.3.06.05-.64-.17-.21-.18m-1.75.26,1.78.06.26.08c-1.62-.1-2.29-.14-2-.14m2.55,0,.2.07h0l-.17-.06h0m-.41,0,.46,0,.09.08-.46,0-.09-.07m.46,0h0m0,0h.09l.17.07-.26-.07m-.58,0h.19l.11.08-.3-.09M55.15,40a2,2,0,0,0-1.12.34,11.93,11.93,0,0,0-1,.71,2,2,0,0,0-1.25.46l-.65.54a2,2,0,0,0-.72,1.4l0,.21a2.11,2.11,0,0,0,.25,1.2,1.91,1.91,0,0,0-.58.35,2,2,0,0,0-.69,1.37v.19a2,2,0,0,0,.51,1.48l.57.63a1.94,1.94,0,0,0,1.16.63l-.09.72v.09l-.06.79a2,2,0,0,0,.26,1.15l0,.08-.06.76-.05.08a2,2,0,0,0-.43,1.09l0,.61a2.41,2.41,0,0,0,0,.38l.06.49,0,.11a2,2,0,0,0,.1,1.71l.07.12c-.63,8.66-.18,10.9.4,12a1.76,1.76,0,0,0,.27.4.15.15,0,0,0,0,.07L52,74.36,51.1,78.3a1.45,1.45,0,0,0,0,.29l-.05.58-.06.07a2,2,0,0,0-.42,1.1l0,.4a1.34,1.34,0,0,0,0,.2,1.36,1.36,0,0,0,0,.2l0,.23A2.64,2.64,0,0,0,50,82.7v.19a2.17,2.17,0,0,0,.14.91l.35.83a2,2,0,0,0,1.7,1.23l.4,0h.14a2,2,0,0,0,1.18-.38A2.45,2.45,0,0,0,56,86.57l1.34.08.07,0a2,2,0,0,0,1.07,0h.09A2.06,2.06,0,0,0,60.1,86a4.37,4.37,0,0,0,1.54-1.73,2.08,2.08,0,0,0,.25-1.31,2,2,0,0,0,.26-1.49L61.63,79a2.55,2.55,0,0,0,.71-1.6v-.18a3.17,3.17,0,0,0-.55-2.17,2,2,0,0,0,.18-.87l-.09-3.14a13.43,13.43,0,0,0,1.19-4l.2,0,.4,0h.14a2,2,0,0,0,1.34-.51,1.84,1.84,0,0,0,.41,0,2.39,2.39,0,0,0,1.26.5,2,2,0,0,0,.43.7,1.94,1.94,0,0,0,.33.8,9.65,9.65,0,0,0,4.09,3.76,2,2,0,0,0,.58.13l.39,0h.15a2,2,0,0,0,.8-.16,6.21,6.21,0,0,0,2.82-2.25,2.07,2.07,0,0,0,.33.52l.36.42a2,2,0,0,0,1.37.69l.21,0h.15a2,2,0,0,0,2-1.85l0-.4a2,2,0,0,0-.47-1.45l-.2-.23a2,2,0,0,0-1.37-.69h-.33a2,2,0,0,0-1.31.49l-.21.18a2.85,2.85,0,0,0-.13-.48c-.26-.64-.51-1.21-.74-1.73l.45,0h.15a2,2,0,0,0,2-1.85l0-.4A2,2,0,0,0,78.24,62a2,2,0,0,0-1.37-.69l-1.78-.13H75a2.06,2.06,0,0,0-1.07.31,4.7,4.7,0,0,0-.56-1.15c-.06-.27-.13-.54-.21-.8l.33-.57a1,1,0,0,0,.12-.23,2.2,2.2,0,0,0,.18.28l.17.22a2,2,0,0,0,2.36.65l.46-.19.14.14a2,2,0,0,0,1.42.59h.23c.83-.1,3-.36,3.19-2.33l.07-1A2,2,0,0,0,79.93,55l-.4,0h-.15a2,2,0,0,0-1.29.48l-.63.53a2,2,0,0,0-1.26-.65,7,7,0,0,0,.67-2.15,2.15,2.15,0,0,0,.51-.72l.06.1.35.62a2,2,0,0,0,1.4,1,1.84,1.84,0,0,0,.33,0,2,2,0,0,0,1.31-.49l.43-.37a2,2,0,0,0,.68-1.37l.06-.77a1.94,1.94,0,0,0-.19-1,2.13,2.13,0,0,0,.34-1l0-.4a2,2,0,0,0-.48-1.45,2,2,0,0,0-1.37-.69H80a2,2,0,0,0-1.3.49l-.43.37a2,2,0,0,0-.69,1.36V49a2,2,0,0,0,.22,1.08,2.2,2.2,0,0,0-.2.23,2.23,2.23,0,0,0-.42-.91v-.22a1.8,1.8,0,0,0,0-.61,5.83,5.83,0,0,0-1.41-2.92,6.18,6.18,0,0,0-1.82-2.09l-.1-.66A2,2,0,0,0,72,41.21H71.6a2.05,2.05,0,0,0-1,.27l-.62.36a1.43,1.43,0,0,0-.22.15l-.08,0A2,2,0,0,0,69,41.8l-.24,0a1.88,1.88,0,0,0-.53-.07H68l-.6,0a2,2,0,0,0-1.07-.41l-.4,0h-.14a2,2,0,0,0-1,.27l-.09,0-.85-.07a2,2,0,0,0-1.65-1.11l-1.59-.11h-.38a2.68,2.68,0,0,0-.39-.06L55.29,40ZM60,51.61l.11-1.48c0-.24,0-.76,1.29-1.17a6.46,6.46,0,0,0-.39.79,2.25,2.25,0,0,0-.15.62,2.73,2.73,0,0,0,1.52,2.52l-1.12-.08A4.15,4.15,0,0,1,60,51.61Z\"></path></g></svg>"

/***/ }),

/***/ 321:
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z\"></path></svg>"

/***/ }),

/***/ 88:
/***/ ((module) => {

module.exports = "<svg viewBox=\"-0.5 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m11.481 6.259v6.259h-2.091v-6.259zm5.74 0v6.259h-2.091v-6.259zm0 10.962 3.649-3.663v-11.467h-17.221v15.13h4.702v3.13l3.13-3.13zm5.74-17.221v14.61l-6.259 6.259h-4.702l-3.13 3.13h-3.13v-3.129h-5.74v-16.702l1.572-4.168z\"></path></svg>"

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(294);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(935);
;// CONCATENATED MODULE: ./node_modules/react-redux/es/components/Context.js

var Context_ReactReduxContext = /*#__PURE__*/react.createContext(null);

if (false) {}

/* harmony default export */ const Context = ((/* unused pure expression or super */ null && (Context_ReactReduxContext)));
;// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/batch.js
// Default to a dummy "batch" implementation that just runs the callback
function defaultNoopBatch(callback) {
  callback();
}

var batch = defaultNoopBatch; // Allow injecting another batching function later

var setBatch = function setBatch(newBatch) {
  return batch = newBatch;
}; // Supply a getter just to skip dealing with ESM bindings

var getBatch = function getBatch() {
  return batch;
};
;// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/Subscription.js
 // encapsulates the subscription logic for connecting a component to the redux store, as
// well as nesting subscriptions of descendant components, so that we can ensure the
// ancestor components re-render before descendants

function createListenerCollection() {
  var batch = getBatch();
  var first = null;
  var last = null;
  return {
    clear: function clear() {
      first = null;
      last = null;
    },
    notify: function notify() {
      batch(function () {
        var listener = first;

        while (listener) {
          listener.callback();
          listener = listener.next;
        }
      });
    },
    get: function get() {
      var listeners = [];
      var listener = first;

      while (listener) {
        listeners.push(listener);
        listener = listener.next;
      }

      return listeners;
    },
    subscribe: function subscribe(callback) {
      var isSubscribed = true;
      var listener = last = {
        callback: callback,
        next: null,
        prev: last
      };

      if (listener.prev) {
        listener.prev.next = listener;
      } else {
        first = listener;
      }

      return function unsubscribe() {
        if (!isSubscribed || first === null) return;
        isSubscribed = false;

        if (listener.next) {
          listener.next.prev = listener.prev;
        } else {
          last = listener.prev;
        }

        if (listener.prev) {
          listener.prev.next = listener.next;
        } else {
          first = listener.next;
        }
      };
    }
  };
}

var nullListeners = {
  notify: function notify() {},
  get: function get() {
    return [];
  }
};
function Subscription_createSubscription(store, parentSub) {
  var unsubscribe;
  var listeners = nullListeners;

  function addNestedSub(listener) {
    trySubscribe();
    return listeners.subscribe(listener);
  }

  function notifyNestedSubs() {
    listeners.notify();
  }

  function handleChangeWrapper() {
    if (subscription.onStateChange) {
      subscription.onStateChange();
    }
  }

  function isSubscribed() {
    return Boolean(unsubscribe);
  }

  function trySubscribe() {
    if (!unsubscribe) {
      unsubscribe = parentSub ? parentSub.addNestedSub(handleChangeWrapper) : store.subscribe(handleChangeWrapper);
      listeners = createListenerCollection();
    }
  }

  function tryUnsubscribe() {
    if (unsubscribe) {
      unsubscribe();
      unsubscribe = undefined;
      listeners.clear();
      listeners = nullListeners;
    }
  }

  var subscription = {
    addNestedSub: addNestedSub,
    notifyNestedSubs: notifyNestedSubs,
    handleChangeWrapper: handleChangeWrapper,
    isSubscribed: isSubscribed,
    trySubscribe: trySubscribe,
    tryUnsubscribe: tryUnsubscribe,
    getListeners: function getListeners() {
      return listeners;
    }
  };
  return subscription;
}
;// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js
 // React currently throws a warning when using useLayoutEffect on the server.
// To get around it, we can conditionally useEffect on the server (no-op) and
// useLayoutEffect in the browser. We need useLayoutEffect to ensure the store
// subscription callback always has the selector from the latest render commit
// available, otherwise a store update may happen between render and the effect,
// which may cause missed updates; we also must ensure the store subscription
// is created synchronously, otherwise a store update may occur before the
// subscription is created and an inconsistent state may be observed

var useIsomorphicLayoutEffect_useIsomorphicLayoutEffect = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined' ? react.useLayoutEffect : react.useEffect;
;// CONCATENATED MODULE: ./node_modules/react-redux/es/components/Provider.js






function Provider(_ref) {
  var store = _ref.store,
      context = _ref.context,
      children = _ref.children;
  var contextValue = (0,react.useMemo)(function () {
    var subscription = Subscription_createSubscription(store);
    subscription.onStateChange = subscription.notifyNestedSubs;
    return {
      store: store,
      subscription: subscription
    };
  }, [store]);
  var previousState = (0,react.useMemo)(function () {
    return store.getState();
  }, [store]);
  useIsomorphicLayoutEffect_useIsomorphicLayoutEffect(function () {
    var subscription = contextValue.subscription;
    subscription.trySubscribe();

    if (previousState !== store.getState()) {
      subscription.notifyNestedSubs();
    }

    return function () {
      subscription.tryUnsubscribe();
      subscription.onStateChange = null;
    };
  }, [contextValue, previousState]);
  var Context = context || Context_ReactReduxContext;
  return /*#__PURE__*/react.createElement(Context.Provider, {
    value: contextValue
  }, children);
}

if (false) {}

/* harmony default export */ const components_Provider = (Provider);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}
// EXTERNAL MODULE: ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
var hoist_non_react_statics_cjs = __webpack_require__(679);
var hoist_non_react_statics_cjs_default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics_cjs);
// EXTERNAL MODULE: ./node_modules/react-redux/node_modules/react-is/index.js
var react_is = __webpack_require__(973);
;// CONCATENATED MODULE: ./node_modules/react-redux/es/components/connectAdvanced.js


var _excluded = ["getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef", "forwardRef", "context"],
    _excluded2 = ["reactReduxForwardedRef"];





 // Define some constant arrays just to avoid re-creating these

var EMPTY_ARRAY = [];
var NO_SUBSCRIPTION_ARRAY = [null, null];

var stringifyComponent = function stringifyComponent(Comp) {
  try {
    return JSON.stringify(Comp);
  } catch (err) {
    return String(Comp);
  }
};

function storeStateUpdatesReducer(state, action) {
  var updateCount = state[1];
  return [action.payload, updateCount + 1];
}

function useIsomorphicLayoutEffectWithArgs(effectFunc, effectArgs, dependencies) {
  useIsomorphicLayoutEffect_useIsomorphicLayoutEffect(function () {
    return effectFunc.apply(void 0, effectArgs);
  }, dependencies);
}

function captureWrapperProps(lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, actualChildProps, childPropsFromStoreUpdate, notifyNestedSubs) {
  // We want to capture the wrapper props and child props we used for later comparisons
  lastWrapperProps.current = wrapperProps;
  lastChildProps.current = actualChildProps;
  renderIsScheduled.current = false; // If the render was from a store update, clear out that reference and cascade the subscriber update

  if (childPropsFromStoreUpdate.current) {
    childPropsFromStoreUpdate.current = null;
    notifyNestedSubs();
  }
}

function subscribeUpdates(shouldHandleStateChanges, store, subscription, childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, childPropsFromStoreUpdate, notifyNestedSubs, forceComponentUpdateDispatch) {
  // If we're not subscribed to the store, nothing to do here
  if (!shouldHandleStateChanges) return; // Capture values for checking if and when this component unmounts

  var didUnsubscribe = false;
  var lastThrownError = null; // We'll run this callback every time a store subscription update propagates to this component

  var checkForUpdates = function checkForUpdates() {
    if (didUnsubscribe) {
      // Don't run stale listeners.
      // Redux doesn't guarantee unsubscriptions happen until next dispatch.
      return;
    }

    var latestStoreState = store.getState();
    var newChildProps, error;

    try {
      // Actually run the selector with the most recent store state and wrapper props
      // to determine what the child props should be
      newChildProps = childPropsSelector(latestStoreState, lastWrapperProps.current);
    } catch (e) {
      error = e;
      lastThrownError = e;
    }

    if (!error) {
      lastThrownError = null;
    } // If the child props haven't changed, nothing to do here - cascade the subscription update


    if (newChildProps === lastChildProps.current) {
      if (!renderIsScheduled.current) {
        notifyNestedSubs();
      }
    } else {
      // Save references to the new child props.  Note that we track the "child props from store update"
      // as a ref instead of a useState/useReducer because we need a way to determine if that value has
      // been processed.  If this went into useState/useReducer, we couldn't clear out the value without
      // forcing another re-render, which we don't want.
      lastChildProps.current = newChildProps;
      childPropsFromStoreUpdate.current = newChildProps;
      renderIsScheduled.current = true; // If the child props _did_ change (or we caught an error), this wrapper component needs to re-render

      forceComponentUpdateDispatch({
        type: 'STORE_UPDATED',
        payload: {
          error: error
        }
      });
    }
  }; // Actually subscribe to the nearest connected ancestor (or store)


  subscription.onStateChange = checkForUpdates;
  subscription.trySubscribe(); // Pull data from the store after first render in case the store has
  // changed since we began.

  checkForUpdates();

  var unsubscribeWrapper = function unsubscribeWrapper() {
    didUnsubscribe = true;
    subscription.tryUnsubscribe();
    subscription.onStateChange = null;

    if (lastThrownError) {
      // It's possible that we caught an error due to a bad mapState function, but the
      // parent re-rendered without this component and we're about to unmount.
      // This shouldn't happen as long as we do top-down subscriptions correctly, but
      // if we ever do those wrong, this throw will surface the error in our tests.
      // In that case, throw the error from here so it doesn't get lost.
      throw lastThrownError;
    }
  };

  return unsubscribeWrapper;
}

var initStateUpdates = function initStateUpdates() {
  return [null, 0];
};

function connectAdvanced(
/*
  selectorFactory is a func that is responsible for returning the selector function used to
  compute new props from state, props, and dispatch. For example:
     export default connectAdvanced((dispatch, options) => (state, props) => ({
      thing: state.things[props.thingId],
      saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),
    }))(YourComponent)
   Access to dispatch is provided to the factory so selectorFactories can bind actionCreators
  outside of their selector as an optimization. Options passed to connectAdvanced are passed to
  the selectorFactory, along with displayName and WrappedComponent, as the second argument.
   Note that selectorFactory is responsible for all caching/memoization of inbound and outbound
  props. Do not use connectAdvanced directly without memoizing results between calls to your
  selector, otherwise the Connect component will re-render on every state or props change.
*/
selectorFactory, // options object:
_ref) {
  if (_ref === void 0) {
    _ref = {};
  }

  var _ref2 = _ref,
      _ref2$getDisplayName = _ref2.getDisplayName,
      getDisplayName = _ref2$getDisplayName === void 0 ? function (name) {
    return "ConnectAdvanced(" + name + ")";
  } : _ref2$getDisplayName,
      _ref2$methodName = _ref2.methodName,
      methodName = _ref2$methodName === void 0 ? 'connectAdvanced' : _ref2$methodName,
      _ref2$renderCountProp = _ref2.renderCountProp,
      renderCountProp = _ref2$renderCountProp === void 0 ? undefined : _ref2$renderCountProp,
      _ref2$shouldHandleSta = _ref2.shouldHandleStateChanges,
      shouldHandleStateChanges = _ref2$shouldHandleSta === void 0 ? true : _ref2$shouldHandleSta,
      _ref2$storeKey = _ref2.storeKey,
      storeKey = _ref2$storeKey === void 0 ? 'store' : _ref2$storeKey,
      _ref2$withRef = _ref2.withRef,
      withRef = _ref2$withRef === void 0 ? false : _ref2$withRef,
      _ref2$forwardRef = _ref2.forwardRef,
      forwardRef = _ref2$forwardRef === void 0 ? false : _ref2$forwardRef,
      _ref2$context = _ref2.context,
      context = _ref2$context === void 0 ? Context_ReactReduxContext : _ref2$context,
      connectOptions = _objectWithoutPropertiesLoose(_ref2, _excluded);

  if (false) { var customStoreWarningMessage; }

  var Context = context;
  return function wrapWithConnect(WrappedComponent) {
    if (false) {}

    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
    var displayName = getDisplayName(wrappedComponentName);

    var selectorFactoryOptions = _extends({}, connectOptions, {
      getDisplayName: getDisplayName,
      methodName: methodName,
      renderCountProp: renderCountProp,
      shouldHandleStateChanges: shouldHandleStateChanges,
      storeKey: storeKey,
      displayName: displayName,
      wrappedComponentName: wrappedComponentName,
      WrappedComponent: WrappedComponent
    });

    var pure = connectOptions.pure;

    function createChildSelector(store) {
      return selectorFactory(store.dispatch, selectorFactoryOptions);
    } // If we aren't running in "pure" mode, we don't want to memoize values.
    // To avoid conditionally calling hooks, we fall back to a tiny wrapper
    // that just executes the given callback immediately.


    var usePureOnlyMemo = pure ? react.useMemo : function (callback) {
      return callback();
    };

    function ConnectFunction(props) {
      var _useMemo = (0,react.useMemo)(function () {
        // Distinguish between actual "data" props that were passed to the wrapper component,
        // and values needed to control behavior (forwarded refs, alternate context instances).
        // To maintain the wrapperProps object reference, memoize this destructuring.
        var reactReduxForwardedRef = props.reactReduxForwardedRef,
            wrapperProps = _objectWithoutPropertiesLoose(props, _excluded2);

        return [props.context, reactReduxForwardedRef, wrapperProps];
      }, [props]),
          propsContext = _useMemo[0],
          reactReduxForwardedRef = _useMemo[1],
          wrapperProps = _useMemo[2];

      var ContextToUse = (0,react.useMemo)(function () {
        // Users may optionally pass in a custom context instance to use instead of our ReactReduxContext.
        // Memoize the check that determines which context instance we should use.
        return propsContext && propsContext.Consumer && (0,react_is.isContextConsumer)( /*#__PURE__*/react.createElement(propsContext.Consumer, null)) ? propsContext : Context;
      }, [propsContext, Context]); // Retrieve the store and ancestor subscription via context, if available

      var contextValue = (0,react.useContext)(ContextToUse); // The store _must_ exist as either a prop or in context.
      // We'll check to see if it _looks_ like a Redux store first.
      // This allows us to pass through a `store` prop that is just a plain value.

      var didStoreComeFromProps = Boolean(props.store) && Boolean(props.store.getState) && Boolean(props.store.dispatch);
      var didStoreComeFromContext = Boolean(contextValue) && Boolean(contextValue.store);

      if (false) {} // Based on the previous check, one of these must be true


      var store = didStoreComeFromProps ? props.store : contextValue.store;
      var childPropsSelector = (0,react.useMemo)(function () {
        // The child props selector needs the store reference as an input.
        // Re-create this selector whenever the store changes.
        return createChildSelector(store);
      }, [store]);

      var _useMemo2 = (0,react.useMemo)(function () {
        if (!shouldHandleStateChanges) return NO_SUBSCRIPTION_ARRAY; // This Subscription's source should match where store came from: props vs. context. A component
        // connected to the store via props shouldn't use subscription from context, or vice versa.

        // This Subscription's source should match where store came from: props vs. context. A component
        // connected to the store via props shouldn't use subscription from context, or vice versa.
        var subscription = Subscription_createSubscription(store, didStoreComeFromProps ? null : contextValue.subscription); // `notifyNestedSubs` is duplicated to handle the case where the component is unmounted in
        // the middle of the notification loop, where `subscription` will then be null. This can
        // probably be avoided if Subscription's listeners logic is changed to not call listeners
        // that have been unsubscribed in the  middle of the notification loop.

        // `notifyNestedSubs` is duplicated to handle the case where the component is unmounted in
        // the middle of the notification loop, where `subscription` will then be null. This can
        // probably be avoided if Subscription's listeners logic is changed to not call listeners
        // that have been unsubscribed in the  middle of the notification loop.
        var notifyNestedSubs = subscription.notifyNestedSubs.bind(subscription);
        return [subscription, notifyNestedSubs];
      }, [store, didStoreComeFromProps, contextValue]),
          subscription = _useMemo2[0],
          notifyNestedSubs = _useMemo2[1]; // Determine what {store, subscription} value should be put into nested context, if necessary,
      // and memoize that value to avoid unnecessary context updates.


      var overriddenContextValue = (0,react.useMemo)(function () {
        if (didStoreComeFromProps) {
          // This component is directly subscribed to a store from props.
          // We don't want descendants reading from this store - pass down whatever
          // the existing context value is from the nearest connected ancestor.
          return contextValue;
        } // Otherwise, put this component's subscription instance into context, so that
        // connected descendants won't update until after this component is done


        return _extends({}, contextValue, {
          subscription: subscription
        });
      }, [didStoreComeFromProps, contextValue, subscription]); // We need to force this wrapper component to re-render whenever a Redux store update
      // causes a change to the calculated child component props (or we caught an error in mapState)

      var _useReducer = (0,react.useReducer)(storeStateUpdatesReducer, EMPTY_ARRAY, initStateUpdates),
          _useReducer$ = _useReducer[0],
          previousStateUpdateResult = _useReducer$[0],
          forceComponentUpdateDispatch = _useReducer[1]; // Propagate any mapState/mapDispatch errors upwards


      if (previousStateUpdateResult && previousStateUpdateResult.error) {
        throw previousStateUpdateResult.error;
      } // Set up refs to coordinate values between the subscription effect and the render logic


      var lastChildProps = (0,react.useRef)();
      var lastWrapperProps = (0,react.useRef)(wrapperProps);
      var childPropsFromStoreUpdate = (0,react.useRef)();
      var renderIsScheduled = (0,react.useRef)(false);
      var actualChildProps = usePureOnlyMemo(function () {
        // Tricky logic here:
        // - This render may have been triggered by a Redux store update that produced new child props
        // - However, we may have gotten new wrapper props after that
        // If we have new child props, and the same wrapper props, we know we should use the new child props as-is.
        // But, if we have new wrapper props, those might change the child props, so we have to recalculate things.
        // So, we'll use the child props from store update only if the wrapper props are the same as last time.
        if (childPropsFromStoreUpdate.current && wrapperProps === lastWrapperProps.current) {
          return childPropsFromStoreUpdate.current;
        } // TODO We're reading the store directly in render() here. Bad idea?
        // This will likely cause Bad Things (TM) to happen in Concurrent Mode.
        // Note that we do this because on renders _not_ caused by store updates, we need the latest store state
        // to determine what the child props should be.


        return childPropsSelector(store.getState(), wrapperProps);
      }, [store, previousStateUpdateResult, wrapperProps]); // We need this to execute synchronously every time we re-render. However, React warns
      // about useLayoutEffect in SSR, so we try to detect environment and fall back to
      // just useEffect instead to avoid the warning, since neither will run anyway.

      useIsomorphicLayoutEffectWithArgs(captureWrapperProps, [lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, actualChildProps, childPropsFromStoreUpdate, notifyNestedSubs]); // Our re-subscribe logic only runs when the store/subscription setup changes

      useIsomorphicLayoutEffectWithArgs(subscribeUpdates, [shouldHandleStateChanges, store, subscription, childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, childPropsFromStoreUpdate, notifyNestedSubs, forceComponentUpdateDispatch], [store, subscription, childPropsSelector]); // Now that all that's done, we can finally try to actually render the child component.
      // We memoize the elements for the rendered child component as an optimization.

      var renderedWrappedComponent = (0,react.useMemo)(function () {
        return /*#__PURE__*/react.createElement(WrappedComponent, _extends({}, actualChildProps, {
          ref: reactReduxForwardedRef
        }));
      }, [reactReduxForwardedRef, WrappedComponent, actualChildProps]); // If React sees the exact same element reference as last time, it bails out of re-rendering
      // that child, same as if it was wrapped in React.memo() or returned false from shouldComponentUpdate.

      var renderedChild = (0,react.useMemo)(function () {
        if (shouldHandleStateChanges) {
          // If this component is subscribed to store updates, we need to pass its own
          // subscription instance down to our descendants. That means rendering the same
          // Context instance, and putting a different value into the context.
          return /*#__PURE__*/react.createElement(ContextToUse.Provider, {
            value: overriddenContextValue
          }, renderedWrappedComponent);
        }

        return renderedWrappedComponent;
      }, [ContextToUse, renderedWrappedComponent, overriddenContextValue]);
      return renderedChild;
    } // If we're in "pure" mode, ensure our wrapper component only re-renders when incoming props have changed.


    var Connect = pure ? react.memo(ConnectFunction) : ConnectFunction;
    Connect.WrappedComponent = WrappedComponent;
    Connect.displayName = ConnectFunction.displayName = displayName;

    if (forwardRef) {
      var forwarded = react.forwardRef(function forwardConnectRef(props, ref) {
        return /*#__PURE__*/react.createElement(Connect, _extends({}, props, {
          reactReduxForwardedRef: ref
        }));
      });
      forwarded.displayName = displayName;
      forwarded.WrappedComponent = WrappedComponent;
      return hoist_non_react_statics_cjs_default()(forwarded, WrappedComponent);
    }

    return hoist_non_react_statics_cjs_default()(Connect, WrappedComponent);
  };
}
;// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/shallowEqual.js
function is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function shallowEqual(objA, objB) {
  if (is(objA, objB)) return true;

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) return false;

  for (var i = 0; i < keysA.length; i++) {
    if (!Object.prototype.hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}
;// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/bindActionCreators.js
function bindActionCreators(actionCreators, dispatch) {
  var boundActionCreators = {};

  var _loop = function _loop(key) {
    var actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = function () {
        return dispatch(actionCreator.apply(void 0, arguments));
      };
    }
  };

  for (var key in actionCreators) {
    _loop(key);
  }

  return boundActionCreators;
}
;// CONCATENATED MODULE: ./node_modules/react-redux/es/connect/wrapMapToProps.js

function wrapMapToPropsConstant(getConstant) {
  return function initConstantSelector(dispatch, options) {
    var constant = getConstant(dispatch, options);

    function constantSelector() {
      return constant;
    }

    constantSelector.dependsOnOwnProps = false;
    return constantSelector;
  };
} // dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
// whether mapToProps needs to be invoked when props have changed.
//
// A length of one signals that mapToProps does not depend on props from the parent component.
// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
// therefore not reporting its length accurately..

function getDependsOnOwnProps(mapToProps) {
  return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
} // Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
// this function wraps mapToProps in a proxy function which does several things:
//
//  * Detects whether the mapToProps function being called depends on props, which
//    is used by selectorFactory to decide if it should reinvoke on props changes.
//
//  * On first call, handles mapToProps if returns another function, and treats that
//    new function as the true mapToProps for subsequent calls.
//
//  * On first call, verifies the first result is a plain object, in order to warn
//    the developer that their mapToProps function is not returning a valid result.
//

function wrapMapToPropsFunc(mapToProps, methodName) {
  return function initProxySelector(dispatch, _ref) {
    var displayName = _ref.displayName;

    var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
    }; // allow detectFactoryAndVerify to get ownProps


    proxy.dependsOnOwnProps = true;

    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
      proxy.mapToProps = mapToProps;
      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
      var props = proxy(stateOrDispatch, ownProps);

      if (typeof props === 'function') {
        proxy.mapToProps = props;
        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
        props = proxy(stateOrDispatch, ownProps);
      }

      if (false) {}
      return props;
    };

    return proxy;
  };
}
;// CONCATENATED MODULE: ./node_modules/react-redux/es/connect/mapDispatchToProps.js


function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
  return typeof mapDispatchToProps === 'function' ? wrapMapToPropsFunc(mapDispatchToProps, 'mapDispatchToProps') : undefined;
}
function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
  return !mapDispatchToProps ? wrapMapToPropsConstant(function (dispatch) {
    return {
      dispatch: dispatch
    };
  }) : undefined;
}
function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
  return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? wrapMapToPropsConstant(function (dispatch) {
    return bindActionCreators(mapDispatchToProps, dispatch);
  }) : undefined;
}
/* harmony default export */ const mapDispatchToProps = ([whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject]);
;// CONCATENATED MODULE: ./node_modules/react-redux/es/connect/mapStateToProps.js

function whenMapStateToPropsIsFunction(mapStateToProps) {
  return typeof mapStateToProps === 'function' ? wrapMapToPropsFunc(mapStateToProps, 'mapStateToProps') : undefined;
}
function whenMapStateToPropsIsMissing(mapStateToProps) {
  return !mapStateToProps ? wrapMapToPropsConstant(function () {
    return {};
  }) : undefined;
}
/* harmony default export */ const mapStateToProps = ([whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing]);
;// CONCATENATED MODULE: ./node_modules/react-redux/es/connect/mergeProps.js


function defaultMergeProps(stateProps, dispatchProps, ownProps) {
  return _extends({}, ownProps, stateProps, dispatchProps);
}
function wrapMergePropsFunc(mergeProps) {
  return function initMergePropsProxy(dispatch, _ref) {
    var displayName = _ref.displayName,
        pure = _ref.pure,
        areMergedPropsEqual = _ref.areMergedPropsEqual;
    var hasRunOnce = false;
    var mergedProps;
    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
      var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);

      if (hasRunOnce) {
        if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
      } else {
        hasRunOnce = true;
        mergedProps = nextMergedProps;
        if (false) {}
      }

      return mergedProps;
    };
  };
}
function whenMergePropsIsFunction(mergeProps) {
  return typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : undefined;
}
function whenMergePropsIsOmitted(mergeProps) {
  return !mergeProps ? function () {
    return defaultMergeProps;
  } : undefined;
}
/* harmony default export */ const mergeProps = ([whenMergePropsIsFunction, whenMergePropsIsOmitted]);
;// CONCATENATED MODULE: ./node_modules/react-redux/es/connect/selectorFactory.js

var selectorFactory_excluded = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];

function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch) {
  return function impureFinalPropsSelector(state, ownProps) {
    return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps(dispatch, ownProps), ownProps);
  };
}
function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, _ref) {
  var areStatesEqual = _ref.areStatesEqual,
      areOwnPropsEqual = _ref.areOwnPropsEqual,
      areStatePropsEqual = _ref.areStatePropsEqual;
  var hasRunAtLeastOnce = false;
  var state;
  var ownProps;
  var stateProps;
  var dispatchProps;
  var mergedProps;

  function handleFirstCall(firstState, firstOwnProps) {
    state = firstState;
    ownProps = firstOwnProps;
    stateProps = mapStateToProps(state, ownProps);
    dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    hasRunAtLeastOnce = true;
    return mergedProps;
  }

  function handleNewPropsAndNewState() {
    stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewProps() {
    if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewState() {
    var nextStateProps = mapStateToProps(state, ownProps);
    var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
    stateProps = nextStateProps;
    if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleSubsequentCalls(nextState, nextOwnProps) {
    var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
    var stateChanged = !areStatesEqual(nextState, state);
    state = nextState;
    ownProps = nextOwnProps;
    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
    if (propsChanged) return handleNewProps();
    if (stateChanged) return handleNewState();
    return mergedProps;
  }

  return function pureFinalPropsSelector(nextState, nextOwnProps) {
    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
  };
} // TODO: Add more comments
// If pure is true, the selector returned by selectorFactory will memoize its results,
// allowing connectAdvanced's shouldComponentUpdate to return false if final
// props have not changed. If false, the selector will always return a new
// object and shouldComponentUpdate will always return true.

function finalPropsSelectorFactory(dispatch, _ref2) {
  var initMapStateToProps = _ref2.initMapStateToProps,
      initMapDispatchToProps = _ref2.initMapDispatchToProps,
      initMergeProps = _ref2.initMergeProps,
      options = _objectWithoutPropertiesLoose(_ref2, selectorFactory_excluded);

  var mapStateToProps = initMapStateToProps(dispatch, options);
  var mapDispatchToProps = initMapDispatchToProps(dispatch, options);
  var mergeProps = initMergeProps(dispatch, options);

  if (false) {}

  var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;
  return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
}
;// CONCATENATED MODULE: ./node_modules/react-redux/es/connect/connect.js


var connect_excluded = ["pure", "areStatesEqual", "areOwnPropsEqual", "areStatePropsEqual", "areMergedPropsEqual"];






/*
  connect is a facade over connectAdvanced. It turns its args into a compatible
  selectorFactory, which has the signature:

    (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps
  
  connect passes its args to connectAdvanced as options, which will in turn pass them to
  selectorFactory each time a Connect component instance is instantiated or hot reloaded.

  selectorFactory returns a final props selector from its mapStateToProps,
  mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,
  mergePropsFactories, and pure args.

  The resulting final props selector is called by the Connect component instance whenever
  it receives new props or store state.
 */

function match(arg, factories, name) {
  for (var i = factories.length - 1; i >= 0; i--) {
    var result = factories[i](arg);
    if (result) return result;
  }

  return function (dispatch, options) {
    throw new Error("Invalid value of type " + typeof arg + " for " + name + " argument when connecting component " + options.wrappedComponentName + ".");
  };
}

function strictEqual(a, b) {
  return a === b;
} // createConnect with default args builds the 'official' connect behavior. Calling it with
// different options opens up some testing and extensibility scenarios


function createConnect(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$connectHOC = _ref.connectHOC,
      connectHOC = _ref$connectHOC === void 0 ? connectAdvanced : _ref$connectHOC,
      _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
      mapStateToPropsFactories = _ref$mapStateToPropsF === void 0 ? mapStateToProps : _ref$mapStateToPropsF,
      _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
      mapDispatchToPropsFactories = _ref$mapDispatchToPro === void 0 ? mapDispatchToProps : _ref$mapDispatchToPro,
      _ref$mergePropsFactor = _ref.mergePropsFactories,
      mergePropsFactories = _ref$mergePropsFactor === void 0 ? mergeProps : _ref$mergePropsFactor,
      _ref$selectorFactory = _ref.selectorFactory,
      selectorFactory = _ref$selectorFactory === void 0 ? finalPropsSelectorFactory : _ref$selectorFactory;

  return function connect(mapStateToProps, mapDispatchToProps, mergeProps, _ref2) {
    if (_ref2 === void 0) {
      _ref2 = {};
    }

    var _ref3 = _ref2,
        _ref3$pure = _ref3.pure,
        pure = _ref3$pure === void 0 ? true : _ref3$pure,
        _ref3$areStatesEqual = _ref3.areStatesEqual,
        areStatesEqual = _ref3$areStatesEqual === void 0 ? strictEqual : _ref3$areStatesEqual,
        _ref3$areOwnPropsEqua = _ref3.areOwnPropsEqual,
        areOwnPropsEqual = _ref3$areOwnPropsEqua === void 0 ? shallowEqual : _ref3$areOwnPropsEqua,
        _ref3$areStatePropsEq = _ref3.areStatePropsEqual,
        areStatePropsEqual = _ref3$areStatePropsEq === void 0 ? shallowEqual : _ref3$areStatePropsEq,
        _ref3$areMergedPropsE = _ref3.areMergedPropsEqual,
        areMergedPropsEqual = _ref3$areMergedPropsE === void 0 ? shallowEqual : _ref3$areMergedPropsE,
        extraOptions = _objectWithoutPropertiesLoose(_ref3, connect_excluded);

    var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
    var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
    var initMergeProps = match(mergeProps, mergePropsFactories, 'mergeProps');
    return connectHOC(selectorFactory, _extends({
      // used in error messages
      methodName: 'connect',
      // used to compute Connect's displayName from the wrapped component's displayName.
      getDisplayName: function getDisplayName(name) {
        return "Connect(" + name + ")";
      },
      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
      shouldHandleStateChanges: Boolean(mapStateToProps),
      // passed through to selectorFactory
      initMapStateToProps: initMapStateToProps,
      initMapDispatchToProps: initMapDispatchToProps,
      initMergeProps: initMergeProps,
      pure: pure,
      areStatesEqual: areStatesEqual,
      areOwnPropsEqual: areOwnPropsEqual,
      areStatePropsEqual: areStatePropsEqual,
      areMergedPropsEqual: areMergedPropsEqual
    }, extraOptions));
  };
}
/* harmony default export */ const connect = (/*#__PURE__*/createConnect());
;// CONCATENATED MODULE: ./node_modules/react-redux/es/hooks/useReduxContext.js


/**
 * A hook to access the value of the `ReactReduxContext`. This is a low-level
 * hook that you should usually not need to call directly.
 *
 * @returns {any} the value of the `ReactReduxContext`
 *
 * @example
 *
 * import React from 'react'
 * import { useReduxContext } from 'react-redux'
 *
 * export const CounterComponent = ({ value }) => {
 *   const { store } = useReduxContext()
 *   return <div>{store.getState()}</div>
 * }
 */

function useReduxContext() {
  var contextValue = useContext(ReactReduxContext);

  if (false) {}

  return contextValue;
}
;// CONCATENATED MODULE: ./node_modules/react-redux/es/hooks/useStore.js



/**
 * Hook factory, which creates a `useStore` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useStore` hook bound to the specified context.
 */

function useStore_createStoreHook(context) {
  if (context === void 0) {
    context = ReactReduxContext;
  }

  var useReduxContext = context === ReactReduxContext ? useDefaultReduxContext : function () {
    return useContext(context);
  };
  return function useStore() {
    var _useReduxContext = useReduxContext(),
        store = _useReduxContext.store;

    return store;
  };
}
/**
 * A hook to access the redux store.
 *
 * @returns {any} the redux store
 *
 * @example
 *
 * import React from 'react'
 * import { useStore } from 'react-redux'
 *
 * export const ExampleComponent = () => {
 *   const store = useStore()
 *   return <div>{store.getState()}</div>
 * }
 */

var useStore = /*#__PURE__*/(/* unused pure expression or super */ null && (useStore_createStoreHook()));
;// CONCATENATED MODULE: ./node_modules/react-redux/es/hooks/useDispatch.js


/**
 * Hook factory, which creates a `useDispatch` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useDispatch` hook bound to the specified context.
 */

function createDispatchHook(context) {
  if (context === void 0) {
    context = ReactReduxContext;
  }

  var useStore = context === ReactReduxContext ? useDefaultStore : createStoreHook(context);
  return function useDispatch() {
    var store = useStore();
    return store.dispatch;
  };
}
/**
 * A hook to access the redux `dispatch` function.
 *
 * @returns {any|function} redux store's `dispatch` function
 *
 * @example
 *
 * import React, { useCallback } from 'react'
 * import { useDispatch } from 'react-redux'
 *
 * export const CounterComponent = ({ value }) => {
 *   const dispatch = useDispatch()
 *   const increaseCounter = useCallback(() => dispatch({ type: 'increase-counter' }), [])
 *   return (
 *     <div>
 *       <span>{value}</span>
 *       <button onClick={increaseCounter}>Increase counter</button>
 *     </div>
 *   )
 * }
 */

var useDispatch = /*#__PURE__*/(/* unused pure expression or super */ null && (createDispatchHook()));
;// CONCATENATED MODULE: ./node_modules/react-redux/es/hooks/useSelector.js






var refEquality = function refEquality(a, b) {
  return a === b;
};

function useSelectorWithStoreAndSubscription(selector, equalityFn, store, contextSub) {
  var _useReducer = useReducer(function (s) {
    return s + 1;
  }, 0),
      forceRender = _useReducer[1];

  var subscription = useMemo(function () {
    return createSubscription(store, contextSub);
  }, [store, contextSub]);
  var latestSubscriptionCallbackError = useRef();
  var latestSelector = useRef();
  var latestStoreState = useRef();
  var latestSelectedState = useRef();
  var storeState = store.getState();
  var selectedState;

  try {
    if (selector !== latestSelector.current || storeState !== latestStoreState.current || latestSubscriptionCallbackError.current) {
      var newSelectedState = selector(storeState); // ensure latest selected state is reused so that a custom equality function can result in identical references

      if (latestSelectedState.current === undefined || !equalityFn(newSelectedState, latestSelectedState.current)) {
        selectedState = newSelectedState;
      } else {
        selectedState = latestSelectedState.current;
      }
    } else {
      selectedState = latestSelectedState.current;
    }
  } catch (err) {
    if (latestSubscriptionCallbackError.current) {
      err.message += "\nThe error may be correlated with this previous error:\n" + latestSubscriptionCallbackError.current.stack + "\n\n";
    }

    throw err;
  }

  useIsomorphicLayoutEffect(function () {
    latestSelector.current = selector;
    latestStoreState.current = storeState;
    latestSelectedState.current = selectedState;
    latestSubscriptionCallbackError.current = undefined;
  });
  useIsomorphicLayoutEffect(function () {
    function checkForUpdates() {
      try {
        var newStoreState = store.getState(); // Avoid calling selector multiple times if the store's state has not changed

        if (newStoreState === latestStoreState.current) {
          return;
        }

        var _newSelectedState = latestSelector.current(newStoreState);

        if (equalityFn(_newSelectedState, latestSelectedState.current)) {
          return;
        }

        latestSelectedState.current = _newSelectedState;
        latestStoreState.current = newStoreState;
      } catch (err) {
        // we ignore all errors here, since when the component
        // is re-rendered, the selectors are called again, and
        // will throw again, if neither props nor store state
        // changed
        latestSubscriptionCallbackError.current = err;
      }

      forceRender();
    }

    subscription.onStateChange = checkForUpdates;
    subscription.trySubscribe();
    checkForUpdates();
    return function () {
      return subscription.tryUnsubscribe();
    };
  }, [store, subscription]);
  return selectedState;
}
/**
 * Hook factory, which creates a `useSelector` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useSelector` hook bound to the specified context.
 */


function createSelectorHook(context) {
  if (context === void 0) {
    context = ReactReduxContext;
  }

  var useReduxContext = context === ReactReduxContext ? useDefaultReduxContext : function () {
    return useContext(context);
  };
  return function useSelector(selector, equalityFn) {
    if (equalityFn === void 0) {
      equalityFn = refEquality;
    }

    if (false) {}

    var _useReduxContext = useReduxContext(),
        store = _useReduxContext.store,
        contextSub = _useReduxContext.subscription;

    var selectedState = useSelectorWithStoreAndSubscription(selector, equalityFn, store, contextSub);
    useDebugValue(selectedState);
    return selectedState;
  };
}
/**
 * A hook to access the redux store's state. This hook takes a selector function
 * as an argument. The selector is called with the store state.
 *
 * This hook takes an optional equality comparison function as the second parameter
 * that allows you to customize the way the selected state is compared to determine
 * whether the component needs to be re-rendered.
 *
 * @param {Function} selector the selector function
 * @param {Function=} equalityFn the function that will be used to determine equality
 *
 * @returns {any} the selected state
 *
 * @example
 *
 * import React from 'react'
 * import { useSelector } from 'react-redux'
 *
 * export const CounterComponent = () => {
 *   const counter = useSelector(state => state.counter)
 *   return <div>{counter}</div>
 * }
 */

var useSelector = /*#__PURE__*/(/* unused pure expression or super */ null && (createSelectorHook()));
;// CONCATENATED MODULE: ./node_modules/react-redux/es/exports.js









;// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/reactBatchedUpdates.js
/* eslint-disable import/no-unresolved */

;// CONCATENATED MODULE: ./node_modules/react-redux/es/index.js


 // Enable batched updates in our subscriptions for use
// with standard React renderers (ReactDOM, React Native)

setBatch(react_dom.unstable_batchedUpdates);

// EXTERNAL MODULE: ./src/javascript/store/configureStore.js
var configureStore = __webpack_require__(925);
// EXTERNAL MODULE: ./src/javascript/data/initialState.jsx + 2 modules
var initialState = __webpack_require__(995);
// EXTERNAL MODULE: ./node_modules/redux/es/redux.js
var redux = __webpack_require__(890);
// EXTERNAL MODULE: ./src/javascript/constants/ActionTypes.js
var ActionTypes = __webpack_require__(9);
;// CONCATENATED MODULE: ./src/javascript/actions/index.js

var paint = function paint(sourse) {
  var ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return {
    type: ActionTypes/* PAINT */.yw,
    sourse: sourse,
    ref: ref
  };
};
var sell = function sell(id) {
  return {
    type: ActionTypes/* SELL */.uX,
    id: id
  };
};
var studioUpdate = function studioUpdate(id) {
  return {
    type: ActionTypes/* STUDIOUPDATE */.AU,
    id: id
  };
};
var hiring = function hiring(id) {
  return {
    type: ActionTypes/* HIRING */.y1,
    id: id
  };
};
var autoSell = function autoSell() {
  return {
    type: ActionTypes/* AUTOSELL */.Z$
  };
};
var changeblock = function changeblock(id, newBlock) {
  return {
    type: ActionTypes/* CHANGEBLOCK */.Re,
    id: id,
    newBlock: newBlock
  };
};
var galleryWorking = function galleryWorking() {
  return {
    type: ActionTypes/* GALLERYWORKING */.Ze
  };
};
var study = function study(picture) {
  return {
    type: ActionTypes/* STUDY */.Si,
    picture: picture
  };
};
var getOriginal = function getOriginal(id) {
  return {
    type: ActionTypes/* GETORIGINAL */.g2,
    id: id
  };
};
var buyUpgrade = function buyUpgrade(id) {
  return {
    type: ActionTypes/* BUYUPGRADE */.o2,
    id: id
  };
};
var chandePage = function chandePage(pageId) {
  var gId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return {
    type: ActionTypes/* CHANGEPAGE */.Dp,
    page_id: pageId,
    galleryId: gId
  };
};
var autoSalesSwitch = function autoSalesSwitch() {
  return {
    type: ActionTypes/* AUTOSALESSWITCH */.QT
  };
};
var chandePhase = function chandePhase() {
  return {
    type: ActionTypes/* CHANGEPHASE */.Bb
  };
};
var getPhrase = function getPhrase() {
  var sourse = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  return {
    type: ActionTypes/* GETPHRASE */.Sy,
    sourse: sourse
  };
};
var save = function save() {
  var isHandle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return {
    type: ActionTypes/* SAVE */.LE,
    isHandle: isHandle
  };
};
var load = function load() {
  return {
    type: ActionTypes/* LOAD */.VX
  };
};
var actions_reset = function reset() {
  return {
    type: ActionTypes/* RESET */.td
  };
};
;// CONCATENATED MODULE: ./src/javascript/components/0_Atoms/Dillers.jsx
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var Dillers = /*#__PURE__*/function (_Component) {
  _inherits(Dillers, _Component);

  var _super = _createSuper(Dillers);

  function Dillers(props) {
    _classCallCheck(this, Dillers);

    return _super.call(this, props);
  }

  _createClass(Dillers, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react.createElement("div", {
        className: "Dillers"
      }, /*#__PURE__*/react.createElement("div", {
        className: "dil-pic"
      }), /*#__PURE__*/react.createElement("p", null, "x", this.props.dealers.level));
    }
  }]);

  return Dillers;
}(react.Component);


// EXTERNAL MODULE: ./src/javascript/actions/intFormat.jsx
var intFormat = __webpack_require__(255);
;// CONCATENATED MODULE: ./src/javascript/components/0_Atoms/Cash.jsx
function Cash_typeof(obj) { "@babel/helpers - typeof"; return Cash_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, Cash_typeof(obj); }

function Cash_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Cash_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Cash_createClass(Constructor, protoProps, staticProps) { if (protoProps) Cash_defineProperties(Constructor.prototype, protoProps); if (staticProps) Cash_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function Cash_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) Cash_setPrototypeOf(subClass, superClass); }

function Cash_setPrototypeOf(o, p) { Cash_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Cash_setPrototypeOf(o, p); }

function Cash_createSuper(Derived) { var hasNativeReflectConstruct = Cash_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Cash_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Cash_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Cash_possibleConstructorReturn(this, result); }; }

function Cash_possibleConstructorReturn(self, call) { if (call && (Cash_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return Cash_assertThisInitialized(self); }

function Cash_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Cash_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function Cash_getPrototypeOf(o) { Cash_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Cash_getPrototypeOf(o); }




var Cash = /*#__PURE__*/function (_Component) {
  Cash_inherits(Cash, _Component);

  var _super = Cash_createSuper(Cash);

  function Cash(props) {
    Cash_classCallCheck(this, Cash);

    return _super.call(this, props);
  }

  Cash_createClass(Cash, [{
    key: "render",
    value: function render() {
      var cash = (0,intFormat/* intFormat */.O)(this.props.cash);
      return /*#__PURE__*/react.createElement("div", {
        className: "Cash"
      }, /*#__PURE__*/react.createElement("h2", null, "$", cash), /*#__PURE__*/react.createElement("p", null, (0,intFormat/* intFormat */.O)(this.props.clicks), " \u043C\u0430\u0437\u043A\u043E\u0432 \u0434\u043B\u044F \u043A\u0430\u0440\u0442\u0438\u043D\u044B"));
    }
  }]);

  return Cash;
}(react.Component);


;// CONCATENATED MODULE: ./src/javascript/components/0_Atoms/Wallet.jsx
function Wallet_typeof(obj) { "@babel/helpers - typeof"; return Wallet_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, Wallet_typeof(obj); }

function Wallet_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Wallet_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Wallet_createClass(Constructor, protoProps, staticProps) { if (protoProps) Wallet_defineProperties(Constructor.prototype, protoProps); if (staticProps) Wallet_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function Wallet_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) Wallet_setPrototypeOf(subClass, superClass); }

function Wallet_setPrototypeOf(o, p) { Wallet_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Wallet_setPrototypeOf(o, p); }

function Wallet_createSuper(Derived) { var hasNativeReflectConstruct = Wallet_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Wallet_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Wallet_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Wallet_possibleConstructorReturn(this, result); }; }

function Wallet_possibleConstructorReturn(self, call) { if (call && (Wallet_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return Wallet_assertThisInitialized(self); }

function Wallet_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Wallet_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function Wallet_getPrototypeOf(o) { Wallet_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Wallet_getPrototypeOf(o); }




var Wallet = /*#__PURE__*/function (_Component) {
  Wallet_inherits(Wallet, _Component);

  var _super = Wallet_createSuper(Wallet);

  function Wallet(props) {
    Wallet_classCallCheck(this, Wallet);

    return _super.call(this, props);
  }

  Wallet_createClass(Wallet, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react.createElement("div", {
        className: "Wallet"
      }, /*#__PURE__*/react.createElement("a", {
        target: "_blank",
        rel: "noopener noreferrer",
        href: "https://design.hse.ru/"
      }, /*#__PURE__*/react.createElement("div", {
        className: "HSE"
      })), /*#__PURE__*/react.createElement(Cash, {
        cash: this.props.cash,
        clicks: this.props.clicks
      }));
    }
  }]);

  return Wallet;
}(react.Component);


// EXTERNAL MODULE: ./src/assets/logo.svg
var logo = __webpack_require__(137);
var logo_default = /*#__PURE__*/__webpack_require__.n(logo);
;// CONCATENATED MODULE: ./src/javascript/components/1_Molecules/Header.jsx
function Header_typeof(obj) { "@babel/helpers - typeof"; return Header_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, Header_typeof(obj); }

function Header_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Header_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Header_createClass(Constructor, protoProps, staticProps) { if (protoProps) Header_defineProperties(Constructor.prototype, protoProps); if (staticProps) Header_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function Header_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) Header_setPrototypeOf(subClass, superClass); }

function Header_setPrototypeOf(o, p) { Header_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Header_setPrototypeOf(o, p); }

function Header_createSuper(Derived) { var hasNativeReflectConstruct = Header_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Header_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Header_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Header_possibleConstructorReturn(this, result); }; }

function Header_possibleConstructorReturn(self, call) { if (call && (Header_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return Header_assertThisInitialized(self); }

function Header_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Header_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function Header_getPrototypeOf(o) { Header_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Header_getPrototypeOf(o); }






var Header = /*#__PURE__*/function (_Component) {
  Header_inherits(Header, _Component);

  var _super = Header_createSuper(Header);

  function Header(props) {
    Header_classCallCheck(this, Header);

    return _super.call(this, props);
  }

  Header_createClass(Header, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react.createElement("div", {
        className: "Header"
      }, /*#__PURE__*/react.createElement("div", {
        className: "logo"
      }, /*#__PURE__*/react.createElement("span", {
        dangerouslySetInnerHTML: {
          __html: (logo_default())
        }
      })), /*#__PURE__*/react.createElement(Wallet, {
        cash: this.props.cash,
        clicks: this.props.clicks
      }), /*#__PURE__*/react.createElement(Dillers, {
        dealers: this.props.dealers
      }));
    }
  }]);

  return Header;
}(react.Component);


;// CONCATENATED MODULE: ./src/javascript/components/0_Atoms/Student.jsx
function Student_typeof(obj) { "@babel/helpers - typeof"; return Student_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, Student_typeof(obj); }

function Student_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Student_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Student_createClass(Constructor, protoProps, staticProps) { if (protoProps) Student_defineProperties(Constructor.prototype, protoProps); if (staticProps) Student_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function Student_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) Student_setPrototypeOf(subClass, superClass); }

function Student_setPrototypeOf(o, p) { Student_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Student_setPrototypeOf(o, p); }

function Student_createSuper(Derived) { var hasNativeReflectConstruct = Student_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Student_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Student_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Student_possibleConstructorReturn(this, result); }; }

function Student_possibleConstructorReturn(self, call) { if (call && (Student_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return Student_assertThisInitialized(self); }

function Student_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Student_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function Student_getPrototypeOf(o) { Student_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Student_getPrototypeOf(o); }



var Student = /*#__PURE__*/function (_Component) {
  Student_inherits(Student, _Component);

  var _super = Student_createSuper(Student);

  function Student(props) {
    Student_classCallCheck(this, Student);

    return _super.call(this, props);
  }

  Student_createClass(Student, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react.createElement("div", {
        className: "Student",
        style: this.props.style
      });
    }
  }]);

  return Student;
}(react.Component);


;// CONCATENATED MODULE: ./src/javascript/components/0_Atoms/Students.jsx
function Students_typeof(obj) { "@babel/helpers - typeof"; return Students_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, Students_typeof(obj); }

function Students_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Students_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Students_createClass(Constructor, protoProps, staticProps) { if (protoProps) Students_defineProperties(Constructor.prototype, protoProps); if (staticProps) Students_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function Students_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) Students_setPrototypeOf(subClass, superClass); }

function Students_setPrototypeOf(o, p) { Students_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Students_setPrototypeOf(o, p); }

function Students_createSuper(Derived) { var hasNativeReflectConstruct = Students_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Students_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Students_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Students_possibleConstructorReturn(this, result); }; }

function Students_possibleConstructorReturn(self, call) { if (call && (Students_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return Students_assertThisInitialized(self); }

function Students_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Students_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function Students_getPrototypeOf(o) { Students_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Students_getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var Students = /*#__PURE__*/function (_Component) {
  Students_inherits(Students, _Component);

  var _super = Students_createSuper(Students);

  function Students(props) {
    var _this;

    Students_classCallCheck(this, Students);

    _this = _super.call(this, props);

    _defineProperty(Students_assertThisInitialized(_this), "genAnimation", function (element, idx, initial_rotation, amplitude) {
      var steps = 10;
      var style = document.documentElement.appendChild(document.createElement('style'));
      var rule = '@keyframes wiggle' + idx + ' {';

      for (var i = 0; i <= steps; ++i) {
        var sign = i % 2 == 0 ? 1 : -1;
        rule += i / steps * 100 + '% { transform: rotate(' + (initial_rotation + amplitude * i * sign / steps) + 'deg) } ';
      }

      rule += '}';
      style.innerHTML = rule;
    });

    _defineProperty(Students_assertThisInitialized(_this), "renderStudents", function () {
      // console.log()
      // width: 3vw;
      // height: 11vh;
      var cursorItems = [];
      var container = document.getElementsByClassName('canvas')[0];

      if (container) {
        var body = document.body.getBoundingClientRect();
        var max_per_circle = 25;
        var cursor_width = body.width * 0.03;
        var cursor_height = body.height * 0.11;
        var r_increase = 30;
        var n = _this.props.students;
        var angle_per_cursor = 360.0 / max_per_circle;
        var container_width = container.getBoundingClientRect().width;
        var container_height = container.getBoundingClientRect().height;
        var aspect = container_height / container_width;
        var basic_r = Math.min(container_width, container_height) / 2.0;
        var cur_r = basic_r;

        for (var i = 0; i != n; ++i) {
          var cur_circle = Math.floor(i / max_per_circle);

          var _cur_r = basic_r + r_increase * cur_circle;

          var i_per_circle = i % max_per_circle;
          var cur_angle = angle_per_cursor * i_per_circle + 270 + angle_per_cursor * 0.5 * (cur_circle % 2);
          var studentPosition = {};
          studentPosition.left = _cur_r * Math.cos(cur_angle * Math.PI / 180.0) + basic_r;
          studentPosition.top = (_cur_r * Math.sin(cur_angle * Math.PI / 180.0) + basic_r) * aspect;
          studentPosition.width = cursor_width;
          studentPosition.height = cursor_height;
          studentPosition.transform = 'rotate(' + (cur_angle + 90) + 'deg)';
          studentPosition.margin = '-' + cursor_height / 2.0 + 'px -' + cursor_width / 2 + 'px'; // this.genAnimation(div, i, cur_angle + 90, 10)
          // studentPosition.style.animation = 'wiggle' + i + ' 1s ease infinite'
          // studentPosition.style.animationDelay = Math.random() + 's'

          cursorItems.push( /*#__PURE__*/react.createElement(Student, {
            number: i,
            key: i,
            style: studentPosition
          }));
        }
      }

      return cursorItems;
    });

    return _this;
  }

  Students_createClass(Students, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react.createElement("div", {
        className: "Students"
      }, this.renderStudents());
    }
  }]);

  return Students;
}(react.Component);


;// CONCATENATED MODULE: ./src/javascript/components/1_Molecules/Canvas.jsx
function Canvas_typeof(obj) { "@babel/helpers - typeof"; return Canvas_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, Canvas_typeof(obj); }

function Canvas_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Canvas_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Canvas_createClass(Constructor, protoProps, staticProps) { if (protoProps) Canvas_defineProperties(Constructor.prototype, protoProps); if (staticProps) Canvas_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function Canvas_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) Canvas_setPrototypeOf(subClass, superClass); }

function Canvas_setPrototypeOf(o, p) { Canvas_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Canvas_setPrototypeOf(o, p); }

function Canvas_createSuper(Derived) { var hasNativeReflectConstruct = Canvas_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Canvas_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Canvas_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Canvas_possibleConstructorReturn(this, result); }; }

function Canvas_possibleConstructorReturn(self, call) { if (call && (Canvas_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return Canvas_assertThisInitialized(self); }

function Canvas_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Canvas_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function Canvas_getPrototypeOf(o) { Canvas_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Canvas_getPrototypeOf(o); }




var Canvas = /*#__PURE__*/function (_Component) {
  Canvas_inherits(Canvas, _Component);

  var _super = Canvas_createSuper(Canvas);

  function Canvas(props) {
    Canvas_classCallCheck(this, Canvas);

    return _super.call(this, props);
  }

  Canvas_createClass(Canvas, [{
    key: "render",
    value: function render() {
      var _this = this;

      var sourse = {
        sourse: 0
      };
      var quo = this.props.pictureQ ? this.props.pictureQ == 1 ? ' quo_0' : this.props.pictureQ > 0.7 ? ' quo_1' : this.props.pictureQ > 0.3 ? ' quo_2' : ' quo_3' : '';
      var pic_class = this.props.pictureId || this.props.pictureId == 0 ? this.props.pictureType ? 'pc_0_' + this.props.pictureType : 'pc_' + this.props.pictureId : '';
      var className = 'canvas ' + pic_class + quo;
      return /*#__PURE__*/react.createElement("div", {
        className: "CAN"
      }, /*#__PURE__*/react.createElement(Students, {
        students: this.props.students
      }), /*#__PURE__*/react.createElement("div", {
        className: className,
        onClick: function onClick() {
          return _this.props.press(0);
        }
      }));
    }
  }]);

  return Canvas;
}(react.Component);


;// CONCATENATED MODULE: ./src/javascript/components/2_Organisms/Clicker.jsx
function Clicker_typeof(obj) { "@babel/helpers - typeof"; return Clicker_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, Clicker_typeof(obj); }

function Clicker_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Clicker_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Clicker_createClass(Constructor, protoProps, staticProps) { if (protoProps) Clicker_defineProperties(Constructor.prototype, protoProps); if (staticProps) Clicker_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function Clicker_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) Clicker_setPrototypeOf(subClass, superClass); }

function Clicker_setPrototypeOf(o, p) { Clicker_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Clicker_setPrototypeOf(o, p); }

function Clicker_createSuper(Derived) { var hasNativeReflectConstruct = Clicker_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Clicker_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Clicker_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Clicker_possibleConstructorReturn(this, result); }; }

function Clicker_possibleConstructorReturn(self, call) { if (call && (Clicker_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return Clicker_assertThisInitialized(self); }

function Clicker_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Clicker_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function Clicker_getPrototypeOf(o) { Clicker_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Clicker_getPrototypeOf(o); }








var Clicker = /*#__PURE__*/function (_Component) {
  Clicker_inherits(Clicker, _Component);

  var _super = Clicker_createSuper(Clicker);

  function Clicker(props) {
    Clicker_classCallCheck(this, Clicker);

    return _super.call(this, props);
  }

  Clicker_createClass(Clicker, [{
    key: "render",
    value: function render() {
      var pictures = this.props.general.paintings[0];
      var picture_id = null;
      var picture_q = null;
      var picture_type = null;

      for (var i = 0; i < pictures.length; i++) {
        if (pictures[i].status == 11) {
          picture_id = pictures[i].referense.id;
          picture_q = pictures[i].quality;
          picture_type = pictures[i].referense.type;
        }
      }

      return /*#__PURE__*/react.createElement("div", {
        className: "Clicker"
      }, /*#__PURE__*/react.createElement(Header, {
        cash: this.props.general.moneyGained,
        clicks: this.props.general.clicksToPainting,
        dealers: this.props.general.units[1]
      }), /*#__PURE__*/react.createElement(Canvas, {
        students: this.props.general.units[0].level,
        pictureId: picture_id,
        pictureType: picture_type,
        pictureQ: picture_q,
        press: this.props.actions.paint
      }));
    }
  }]);

  return Clicker;
}(react.Component);

var Clicker_mapStateToProps = function mapStateToProps(state) {
  return {
    general: state.general
  };
};

var Clicker_mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: (0,redux/* bindActionCreators */.DE)({
      paint: paint,
      sell: sell
    }, dispatch)
  };
};

/* harmony default export */ const _2_Organisms_Clicker = (connect(Clicker_mapStateToProps, Clicker_mapDispatchToProps)(Clicker));
;// CONCATENATED MODULE: ./src/javascript/components/1_Molecules/AltPictureBlock.jsx
function AltPictureBlock_typeof(obj) { "@babel/helpers - typeof"; return AltPictureBlock_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, AltPictureBlock_typeof(obj); }

function AltPictureBlock_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function AltPictureBlock_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function AltPictureBlock_createClass(Constructor, protoProps, staticProps) { if (protoProps) AltPictureBlock_defineProperties(Constructor.prototype, protoProps); if (staticProps) AltPictureBlock_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function AltPictureBlock_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) AltPictureBlock_setPrototypeOf(subClass, superClass); }

function AltPictureBlock_setPrototypeOf(o, p) { AltPictureBlock_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return AltPictureBlock_setPrototypeOf(o, p); }

function AltPictureBlock_createSuper(Derived) { var hasNativeReflectConstruct = AltPictureBlock_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = AltPictureBlock_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = AltPictureBlock_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return AltPictureBlock_possibleConstructorReturn(this, result); }; }

function AltPictureBlock_possibleConstructorReturn(self, call) { if (call && (AltPictureBlock_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return AltPictureBlock_assertThisInitialized(self); }

function AltPictureBlock_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function AltPictureBlock_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function AltPictureBlock_getPrototypeOf(o) { AltPictureBlock_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return AltPictureBlock_getPrototypeOf(o); }



var AltPictureBlock = /*#__PURE__*/function (_Component) {
  AltPictureBlock_inherits(AltPictureBlock, _Component);

  var _super = AltPictureBlock_createSuper(AltPictureBlock);

  function AltPictureBlock(props) {
    AltPictureBlock_classCallCheck(this, AltPictureBlock);

    return _super.call(this, props);
  }

  AltPictureBlock_createClass(AltPictureBlock, [{
    key: "render",
    value: function render() {
      var data = this.props.data;
      var status = '';

      if (data.quality == 1) {
        status = 'оригинал';
      } else if (data.referense.id == 0) {
        status = 'каракуля';
      } else {
        status = 'копия';
      }

      return /*#__PURE__*/react.createElement("div", {
        className: "AltPictureBlock"
      }, /*#__PURE__*/react.createElement("div", {
        className: "wrapper"
      }, /*#__PURE__*/react.createElement("div", {
        className: "title"
      }, /*#__PURE__*/react.createElement("span", null, "[", status, "]"), /*#__PURE__*/react.createElement("h4", null, "\u043A\u0430\u0447\u0435\u0441\u0442\u0432\u043E", ' ', new Intl.NumberFormat('en', {
        style: 'decimal',
        maximumFractionDigits: 3
      }).format(data.quality))), /*#__PURE__*/react.createElement("h3", null, data.referense.title), /*#__PURE__*/react.createElement("div", {
        className: "line"
      }), /*#__PURE__*/react.createElement("div", {
        className: "altContent"
      }, /*#__PURE__*/react.createElement("p", null, data.referense.style), /*#__PURE__*/react.createElement("p", null, data.referense.author), /*#__PURE__*/react.createElement("p", null, data.referense.year))));
    }
  }]);

  return AltPictureBlock;
}(react.Component);


;// CONCATENATED MODULE: ./src/javascript/components/0_Atoms/Picture.jsx
function Picture_typeof(obj) { "@babel/helpers - typeof"; return Picture_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, Picture_typeof(obj); }

function Picture_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Picture_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Picture_createClass(Constructor, protoProps, staticProps) { if (protoProps) Picture_defineProperties(Constructor.prototype, protoProps); if (staticProps) Picture_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function Picture_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) Picture_setPrototypeOf(subClass, superClass); }

function Picture_setPrototypeOf(o, p) { Picture_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Picture_setPrototypeOf(o, p); }

function Picture_createSuper(Derived) { var hasNativeReflectConstruct = Picture_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Picture_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Picture_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Picture_possibleConstructorReturn(this, result); }; }

function Picture_possibleConstructorReturn(self, call) { if (call && (Picture_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return Picture_assertThisInitialized(self); }

function Picture_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Picture_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function Picture_getPrototypeOf(o) { Picture_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Picture_getPrototypeOf(o); }

function Picture_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var Picture = /*#__PURE__*/function (_Component) {
  Picture_inherits(Picture, _Component);

  var _super = Picture_createSuper(Picture);

  function Picture(props) {
    var _this;

    Picture_classCallCheck(this, Picture);

    _this = _super.call(this, props);

    Picture_defineProperty(Picture_assertThisInitialized(_this), "dragStart", function (e) {
      var target = e.target;
      var id = _this.props.sourse + '/' + _this.props.id;
      e.dataTransfer.setData('picId', id); // var dragIcon = document.createElement('img');
      // dragIcon.src = 'http://...';
      // dragIcon.width = 100;
      // e.dataTransfer.setDragImage(dragIcon, x, y);

      setTimeout(function () {
        target.classList.add('draggable');
      }, 0);
    });

    Picture_defineProperty(Picture_assertThisInitialized(_this), "dragEnd", function (e) {
      setTimeout(function () {
        e.target.classList.remove('draggable');
      }, 0);
    });

    Picture_defineProperty(Picture_assertThisInitialized(_this), "dragOver", function (e) {
      e.stopPropagation();
    });

    return _this;
  }

  Picture_createClass(Picture, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var picture = this.props.data;

      if (picture) {
        var opacity = picture.timeFraction ? picture.timeFraction : 1;
        var itIsSale = picture.timeFraction ? 'sale' : '';
        var pic_class = picture.referense.id == 0 ? '0_' + picture.referense.type : picture.referense.id;
        var quo = picture.quality == 1 ? '0' : picture.quality > 0.7 ? '1' : picture.quality > 0.3 ? '2' : '3';
        var className = 'Picture p_' + pic_class + ' quo_' + quo + ' ' + itIsSale;
        var action = null;

        if (picture.status == 0) {
          action = this.props.onPress ? function () {
            _this2.props.onPress(_this2.props.id);
          } : null;
        } // id={}


        return /*#__PURE__*/react.createElement("div", {
          id: this.props.sourse + '/' + this.props.id,
          className: "Picture_wrap",
          draggable: "true",
          onDragStart: this.dragStart,
          onDragEnd: this.dragEnd,
          onDragOver: this.dragOver,
          style: {
            opacity: opacity
          }
        }, /*#__PURE__*/react.createElement("div", {
          className: className,
          onClick: action
        }, /*#__PURE__*/react.createElement(AltPictureBlock, {
          data: picture,
          draggable: "false"
        })));
      } else {
        return /*#__PURE__*/react.createElement("div", {
          id: this.props.forShadow,
          className: "Picture shaddow"
        });
      }
    }
  }]);

  return Picture;
}(react.Component);


;// CONCATENATED MODULE: ./src/javascript/components/1,5_Collections/PicturesCollection.jsx
function PicturesCollection_typeof(obj) { "@babel/helpers - typeof"; return PicturesCollection_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, PicturesCollection_typeof(obj); }

function PicturesCollection_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function PicturesCollection_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function PicturesCollection_createClass(Constructor, protoProps, staticProps) { if (protoProps) PicturesCollection_defineProperties(Constructor.prototype, protoProps); if (staticProps) PicturesCollection_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function PicturesCollection_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) PicturesCollection_setPrototypeOf(subClass, superClass); }

function PicturesCollection_setPrototypeOf(o, p) { PicturesCollection_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return PicturesCollection_setPrototypeOf(o, p); }

function PicturesCollection_createSuper(Derived) { var hasNativeReflectConstruct = PicturesCollection_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = PicturesCollection_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = PicturesCollection_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return PicturesCollection_possibleConstructorReturn(this, result); }; }

function PicturesCollection_possibleConstructorReturn(self, call) { if (call && (PicturesCollection_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return PicturesCollection_assertThisInitialized(self); }

function PicturesCollection_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function PicturesCollection_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function PicturesCollection_getPrototypeOf(o) { PicturesCollection_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return PicturesCollection_getPrototypeOf(o); }

function PicturesCollection_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var PicturesCollection = /*#__PURE__*/function (_Component) {
  PicturesCollection_inherits(PicturesCollection, _Component);

  var _super = PicturesCollection_createSuper(PicturesCollection);

  function PicturesCollection(props) {
    var _this;

    PicturesCollection_classCallCheck(this, PicturesCollection);

    _this = _super.call(this, props);

    PicturesCollection_defineProperty(PicturesCollection_assertThisInitialized(_this), "drop", function (e) {
      e.preventDefault();
      var picId = e.dataTransfer.getData('picId');
      var picture = document.getElementById(picId);

      _this.props.changeblock(picId, e.target.id);
    });

    PicturesCollection_defineProperty(PicturesCollection_assertThisInitialized(_this), "dragOver", function (e) {
      e.preventDefault();
    });

    PicturesCollection_defineProperty(PicturesCollection_assertThisInitialized(_this), "pictureRender", function () {
      var pictures = _this.props.pictures;
      var onPress = _this.props.onPress;
      var size = _this.props.size;
      var pictureItems = [];

      for (var i = 0; i < pictures.length; i++) {
        if (pictures[i].status != 11) {
          pictureItems.push( /*#__PURE__*/react.createElement(Picture, {
            key: i,
            id: i,
            sourse: _this.props.sourse,
            data: pictures[i],
            onPress: onPress,
            changeblock: _this.props.changeblock,
            opacity: pictures[i].timeToSale
          }));
        }
      }

      if (size) {
        for (var i = 0; i < size - pictures.length; i++) {
          pictureItems.push( /*#__PURE__*/react.createElement(Picture, {
            forShadow: _this.props.sourse,
            key: i
          }));
        }
      }

      return pictureItems;
    });

    return _this;
  }

  PicturesCollection_createClass(PicturesCollection, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react.createElement("div", {
        id: this.props.sourse,
        className: "PicturesCollection",
        onDrop: this.drop,
        onDragOver: this.dragOver
      }, this.pictureRender());
    }
  }]);

  return PicturesCollection;
}(react.Component);


;// CONCATENATED MODULE: ./src/javascript/components/1_Molecules/Block.jsx
function Block_typeof(obj) { "@babel/helpers - typeof"; return Block_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, Block_typeof(obj); }

function Block_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Block_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Block_createClass(Constructor, protoProps, staticProps) { if (protoProps) Block_defineProperties(Constructor.prototype, protoProps); if (staticProps) Block_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function Block_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) Block_setPrototypeOf(subClass, superClass); }

function Block_setPrototypeOf(o, p) { Block_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Block_setPrototypeOf(o, p); }

function Block_createSuper(Derived) { var hasNativeReflectConstruct = Block_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Block_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Block_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Block_possibleConstructorReturn(this, result); }; }

function Block_possibleConstructorReturn(self, call) { if (call && (Block_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return Block_assertThisInitialized(self); }

function Block_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Block_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function Block_getPrototypeOf(o) { Block_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Block_getPrototypeOf(o); }




var Block = /*#__PURE__*/function (_Component) {
  Block_inherits(Block, _Component);

  var _super = Block_createSuper(Block);

  function Block(props) {
    Block_classCallCheck(this, Block);

    return _super.call(this, props);
  } // drop = (e) => {
  //   e.preventDefault()
  //   const picId = e.dataTransfer.getData('picId')
  //   const picture = document.getElementById(picId)
  //   console.log(e)
  //
  //   console.log(e.target)
  //
  //   picture.classList.remove('draggable')
  //
  //   this.props.changeblock(picId)
  // }
  //
  // dragOver = (e) => {
  //   e.preventDefault()
  // }


  Block_createClass(Block, [{
    key: "render",
    value: function render() {
      var autoSell = '';

      if (this.props.area == 's' && this.props.isOpen) {
        autoSell = /*#__PURE__*/react.createElement("div", {
          className: 'but ' + this.props.autoSell,
          onClick: this.props.autoSalesSwitch
        }, "\u0410\u0432\u0442\u043E");
      }

      return /*#__PURE__*/react.createElement("div", {
        id: this.props.area,
        className: "Block"
      }, /*#__PURE__*/react.createElement("h1", null, this.props.title), autoSell, /*#__PURE__*/react.createElement(PicturesCollection, {
        pictures: this.props.pictures,
        changeblock: this.props.changeblock,
        onPress: this.props.onPress,
        sourse: this.props.area
      }));
    }
  }]);

  return Block;
}(react.Component);


;// CONCATENATED MODULE: ./src/javascript/components/1_Molecules/StudioShopBlock.jsx
function StudioShopBlock_typeof(obj) { "@babel/helpers - typeof"; return StudioShopBlock_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, StudioShopBlock_typeof(obj); }

function StudioShopBlock_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function StudioShopBlock_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function StudioShopBlock_createClass(Constructor, protoProps, staticProps) { if (protoProps) StudioShopBlock_defineProperties(Constructor.prototype, protoProps); if (staticProps) StudioShopBlock_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function StudioShopBlock_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) StudioShopBlock_setPrototypeOf(subClass, superClass); }

function StudioShopBlock_setPrototypeOf(o, p) { StudioShopBlock_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return StudioShopBlock_setPrototypeOf(o, p); }

function StudioShopBlock_createSuper(Derived) { var hasNativeReflectConstruct = StudioShopBlock_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = StudioShopBlock_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = StudioShopBlock_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return StudioShopBlock_possibleConstructorReturn(this, result); }; }

function StudioShopBlock_possibleConstructorReturn(self, call) { if (call && (StudioShopBlock_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return StudioShopBlock_assertThisInitialized(self); }

function StudioShopBlock_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function StudioShopBlock_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function StudioShopBlock_getPrototypeOf(o) { StudioShopBlock_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return StudioShopBlock_getPrototypeOf(o); }




var StudioShopBlock = /*#__PURE__*/function (_Component) {
  StudioShopBlock_inherits(StudioShopBlock, _Component);

  var _super = StudioShopBlock_createSuper(StudioShopBlock);

  function StudioShopBlock(props) {
    StudioShopBlock_classCallCheck(this, StudioShopBlock);

    return _super.call(this, props);
  }

  StudioShopBlock_createClass(StudioShopBlock, [{
    key: "render",
    value: function render() {
      var props = this.props;
      return /*#__PURE__*/react.createElement("div", {
        className: "StudioShopBlock",
        onClick: function onClick() {
          return props.onPress(props.id);
        }
      }, /*#__PURE__*/react.createElement("div", {
        className: "im"
      }), /*#__PURE__*/react.createElement("div", {
        className: "content"
      }, /*#__PURE__*/react.createElement("div", {
        className: "title"
      }, /*#__PURE__*/react.createElement("p", null, props.title, " "), /*#__PURE__*/react.createElement("p", null, ' ', "\u0443\u0440 ", /*#__PURE__*/react.createElement("span", null, props.level))), /*#__PURE__*/react.createElement("h3", null, "\u0423\u043B\u0443\u0447\u0448\u0438\u0442\u044C"), /*#__PURE__*/react.createElement("p", null, "$", props.cost)));
    }
  }]);

  return StudioShopBlock;
}(react.Component);


;// CONCATENATED MODULE: ./src/javascript/components/1_Molecules/AltShopBlock.jsx
function AltShopBlock_typeof(obj) { "@babel/helpers - typeof"; return AltShopBlock_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, AltShopBlock_typeof(obj); }

function AltShopBlock_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function AltShopBlock_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function AltShopBlock_createClass(Constructor, protoProps, staticProps) { if (protoProps) AltShopBlock_defineProperties(Constructor.prototype, protoProps); if (staticProps) AltShopBlock_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function AltShopBlock_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) AltShopBlock_setPrototypeOf(subClass, superClass); }

function AltShopBlock_setPrototypeOf(o, p) { AltShopBlock_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return AltShopBlock_setPrototypeOf(o, p); }

function AltShopBlock_createSuper(Derived) { var hasNativeReflectConstruct = AltShopBlock_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = AltShopBlock_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = AltShopBlock_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return AltShopBlock_possibleConstructorReturn(this, result); }; }

function AltShopBlock_possibleConstructorReturn(self, call) { if (call && (AltShopBlock_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return AltShopBlock_assertThisInitialized(self); }

function AltShopBlock_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function AltShopBlock_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function AltShopBlock_getPrototypeOf(o) { AltShopBlock_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return AltShopBlock_getPrototypeOf(o); }

function AltShopBlock_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var AltShopBlock = /*#__PURE__*/function (_Component) {
  AltShopBlock_inherits(AltShopBlock, _Component);

  var _super = AltShopBlock_createSuper(AltShopBlock);

  function AltShopBlock(props) {
    var _this;

    AltShopBlock_classCallCheck(this, AltShopBlock);

    _this = _super.call(this, props);

    AltShopBlock_defineProperty(AltShopBlock_assertThisInitialized(_this), "renderStat", function () {
      var stat = _this.props.stat;
      var fun = _this.props["function"];
      var block;

      if (stat) {
        var text = _this.props.name == 'Ученик' ? /*#__PURE__*/react.createElement("p", null, "\u2022 \u0421\u0434\u0435\u043B\u0430\u043D\u043E ", (0,intFormat/* intFormat */.O)(stat.st), " \u043C\u0430\u0437\u043A\u043E\u0432") : /*#__PURE__*/react.createElement("p", null, "\u2022 \u041F\u0440\u043E\u0434\u0430\u043D\u043E ", (0,intFormat/* intFormat */.O)(stat.st), " \u043A\u0430\u0440\u0442\u0438\u043D");
        block = /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("div", {
          className: "line"
        }), /*#__PURE__*/react.createElement("div", {
          className: "altContent"
        }, text, /*#__PURE__*/react.createElement("p", null, "\u2022 ", fun)));
      }

      return block;
    });

    return _this;
  }

  AltShopBlock_createClass(AltShopBlock, [{
    key: "render",
    value: function render() {
      var inStudio = this.props.stat ? /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement("span", null, this.props.stat.level), " \u0432 \u043C\u0430\u0441\u0442\u0435\u0440\u0441\u043A\u043E\u0439") : '';
      return /*#__PURE__*/react.createElement("div", {
        className: "AltShopBlock"
      }, /*#__PURE__*/react.createElement("div", {
        className: "title"
      }, /*#__PURE__*/react.createElement("div", {
        className: "main"
      }, /*#__PURE__*/react.createElement("h3", null, this.props.name), inStudio), /*#__PURE__*/react.createElement("h4", null, "$", (0,intFormat/* intFormat */.O)(this.props.cost))), /*#__PURE__*/react.createElement("div", {
        className: "line"
      }), /*#__PURE__*/react.createElement("div", {
        className: "altContent"
      }, /*#__PURE__*/react.createElement("p", null, this.props.content)), this.renderStat());
    }
  }]);

  return AltShopBlock;
}(react.Component);


;// CONCATENATED MODULE: ./src/javascript/components/1_Molecules/UnitBlock.jsx
function UnitBlock_typeof(obj) { "@babel/helpers - typeof"; return UnitBlock_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, UnitBlock_typeof(obj); }

function UnitBlock_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function UnitBlock_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function UnitBlock_createClass(Constructor, protoProps, staticProps) { if (protoProps) UnitBlock_defineProperties(Constructor.prototype, protoProps); if (staticProps) UnitBlock_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function UnitBlock_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) UnitBlock_setPrototypeOf(subClass, superClass); }

function UnitBlock_setPrototypeOf(o, p) { UnitBlock_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return UnitBlock_setPrototypeOf(o, p); }

function UnitBlock_createSuper(Derived) { var hasNativeReflectConstruct = UnitBlock_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = UnitBlock_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = UnitBlock_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return UnitBlock_possibleConstructorReturn(this, result); }; }

function UnitBlock_possibleConstructorReturn(self, call) { if (call && (UnitBlock_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return UnitBlock_assertThisInitialized(self); }

function UnitBlock_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function UnitBlock_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function UnitBlock_getPrototypeOf(o) { UnitBlock_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return UnitBlock_getPrototypeOf(o); }





var UnitBlock = /*#__PURE__*/function (_Component) {
  UnitBlock_inherits(UnitBlock, _Component);

  var _super = UnitBlock_createSuper(UnitBlock);

  function UnitBlock(props) {
    UnitBlock_classCallCheck(this, UnitBlock);

    return _super.call(this, props);
  }

  UnitBlock_createClass(UnitBlock, [{
    key: "render",
    value: function render() {
      var props = this.props;
      var itIsOpen = this.props.unit.isActive;
      var className = 'UnitBlock ' + itIsOpen;

      var onClick = function onClick() {};

      if (itIsOpen) {
        var isActive = 'inactive';

        if (props.money >= props.unit.cost) {
          isActive = props.unit.size ? props.unit.size > props.unit.level ? 'active' : isActive : 'active';

          onClick = function onClick() {
            return props.onPress(props.id);
          };
        }

        var span = props.id == 0 ? /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement("span", null, props.unit.level), "/", props.unit.size, " \u0432 \u043C\u0430\u0441\u0442\u0435\u0440\u0441\u043A\u043E\u0439") : /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement("span", null, props.unit.level), " \u0432 \u043C\u0430\u0441\u0442\u0435\u0440\u0441\u043A\u043E\u0439");
        return /*#__PURE__*/react.createElement("div", {
          className: className + ' ' + isActive,
          onClick: onClick
        }, /*#__PURE__*/react.createElement("div", {
          className: "im"
        }), /*#__PURE__*/react.createElement("div", {
          className: "content"
        }, span, /*#__PURE__*/react.createElement("h3", null, "\u041D\u0430\u043D\u044F\u0442\u044C ", props.title, "\u0430"), /*#__PURE__*/react.createElement("p", null, "$", (0,intFormat/* intFormat */.O)(props.unit.cost))), /*#__PURE__*/react.createElement(AltShopBlock, {
          name: props.title.charAt(0).toUpperCase() + props.title.slice(1),
          cost: props.unit.cost,
          content: props.unit.text,
          "function": props["function"],
          stat: {
            level: props.unit.level,
            st: this.props.stat
          }
        }));
      } else {
        return /*#__PURE__*/react.createElement("div", {
          className: className,
          onClick: function onClick() {
            return props.onPress(props.id);
          }
        }, /*#__PURE__*/react.createElement("div", {
          className: "im"
        }), /*#__PURE__*/react.createElement("div", {
          className: "content"
        }, /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement("span", null, "???"))));
      }
    }
  }]);

  return UnitBlock;
}(react.Component);


;// CONCATENATED MODULE: ./src/javascript/components/1,5_Collections/UpgradesCollection.jsx
function UpgradesCollection_typeof(obj) { "@babel/helpers - typeof"; return UpgradesCollection_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, UpgradesCollection_typeof(obj); }

function UpgradesCollection_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function UpgradesCollection_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function UpgradesCollection_createClass(Constructor, protoProps, staticProps) { if (protoProps) UpgradesCollection_defineProperties(Constructor.prototype, protoProps); if (staticProps) UpgradesCollection_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function UpgradesCollection_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) UpgradesCollection_setPrototypeOf(subClass, superClass); }

function UpgradesCollection_setPrototypeOf(o, p) { UpgradesCollection_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return UpgradesCollection_setPrototypeOf(o, p); }

function UpgradesCollection_createSuper(Derived) { var hasNativeReflectConstruct = UpgradesCollection_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = UpgradesCollection_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = UpgradesCollection_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return UpgradesCollection_possibleConstructorReturn(this, result); }; }

function UpgradesCollection_possibleConstructorReturn(self, call) { if (call && (UpgradesCollection_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return UpgradesCollection_assertThisInitialized(self); }

function UpgradesCollection_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function UpgradesCollection_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function UpgradesCollection_getPrototypeOf(o) { UpgradesCollection_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return UpgradesCollection_getPrototypeOf(o); }

function UpgradesCollection_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var UpgradesCollection = /*#__PURE__*/function (_Component) {
  UpgradesCollection_inherits(UpgradesCollection, _Component);

  var _super = UpgradesCollection_createSuper(UpgradesCollection);

  function UpgradesCollection(props) {
    var _this;

    UpgradesCollection_classCallCheck(this, UpgradesCollection);

    _this = _super.call(this, props);

    UpgradesCollection_defineProperty(UpgradesCollection_assertThisInitialized(_this), "renderUpgrades", function () {
      var upgrades = _this.props.upgrade;
      var money = _this.props.money;
      var upgradesItems = [];
      upgrades.forEach(function (upgrade, i) {
        if (upgrade.isOpen && !upgrade.itPurchased) {
          var _onClick = function onClick() {};

          var isActive = 'inactive';

          if (money >= upgrade.cost) {
            isActive = 'active';
            _onClick = _this.props.onPress;
          }

          upgradesItems.push( /*#__PURE__*/react.createElement("div", {
            className: 'upgrade ' + isActive,
            onClick: function onClick() {
              return _onClick(i);
            },
            key: i
          }, /*#__PURE__*/react.createElement("div", {
            className: 'img id_' + i
          }), /*#__PURE__*/react.createElement(AltShopBlock, {
            name: upgrade.title,
            cost: upgrade.cost,
            content: upgrade.text
          })));
        }
      });
      return upgradesItems;
    });

    return _this;
  }

  UpgradesCollection_createClass(UpgradesCollection, [{
    key: "render",
    value: // {upgrade.title}
    function render() {
      return /*#__PURE__*/react.createElement("div", {
        className: 'UpgradesCollection'
      }, this.renderUpgrades());
    }
  }]);

  return UpgradesCollection;
}(react.Component);


;// CONCATENATED MODULE: ./src/javascript/components/2_Organisms/StudioShop.jsx
function StudioShop_typeof(obj) { "@babel/helpers - typeof"; return StudioShop_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, StudioShop_typeof(obj); }

function StudioShop_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function StudioShop_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function StudioShop_createClass(Constructor, protoProps, staticProps) { if (protoProps) StudioShop_defineProperties(Constructor.prototype, protoProps); if (staticProps) StudioShop_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function StudioShop_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) StudioShop_setPrototypeOf(subClass, superClass); }

function StudioShop_setPrototypeOf(o, p) { StudioShop_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return StudioShop_setPrototypeOf(o, p); }

function StudioShop_createSuper(Derived) { var hasNativeReflectConstruct = StudioShop_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = StudioShop_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = StudioShop_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return StudioShop_possibleConstructorReturn(this, result); }; }

function StudioShop_possibleConstructorReturn(self, call) { if (call && (StudioShop_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return StudioShop_assertThisInitialized(self); }

function StudioShop_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function StudioShop_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function StudioShop_getPrototypeOf(o) { StudioShop_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return StudioShop_getPrototypeOf(o); }






var StudioShop = /*#__PURE__*/function (_Component) {
  StudioShop_inherits(StudioShop, _Component);

  var _super = StudioShop_createSuper(StudioShop);

  function StudioShop(props) {
    StudioShop_classCallCheck(this, StudioShop);

    return _super.call(this, props);
  }

  StudioShop_createClass(StudioShop, [{
    key: "render",
    value: function render() {
      var units = this.props.units;
      var hiring = this.props.hiringUnit;
      var update = this.props.update;
      var updates = this.props.updates;
      var upgrade = this.props.upgrade;
      var upgrades = this.props.upgrades;
      return /*#__PURE__*/react.createElement("div", {
        className: "StudioShop"
      }, /*#__PURE__*/react.createElement("div", {
        className: "UnitShop"
      }, /*#__PURE__*/react.createElement(UnitBlock, {
        id: 0,
        title: "\u0443\u0447\u0435\u043D\u0438\u043A",
        unit: units[0],
        money: this.props.money,
        stat: this.props.stat.totalAutoClick,
        "function": "\u0414\u0435\u043B\u0430\u0435\u0442 1\u043C\u0430\u0437\u043E\u043A/\u0441\u0435\u043A",
        onPress: hiring
      }), /*#__PURE__*/react.createElement(UnitBlock, {
        id: 1,
        title: "\u0434\u0438\u043B\u043B\u0435\u0440",
        unit: units[1],
        stat: this.props.stat.totalAutoSales,
        money: this.props.money,
        "function": 'Автоматически продает картину за ' + units[1].speed + 'сек',
        onPress: hiring
      })), /*#__PURE__*/react.createElement(UpgradesCollection, {
        money: this.props.money,
        upgrade: upgrade,
        onPress: upgrades
      }));
    }
  }]);

  return StudioShop;
}(react.Component); // <div className="UpdatesShop">
//   <StudioShopBlock
//     id={0}
//     title="Материалы"
//     level={updates[0].level}
//     cost={updates[0].cost}
//     onPress={update}
//   />
//   <StudioShopBlock
//     id={1}
//     title="Помещение"
//     level={updates[1].level}
//     cost={updates[1].cost}
//     onPress={update}
//   />
//   <StudioShopBlock
//     id={2}
//     title="Освещение"
//     level={updates[2].level}
//     cost={updates[2].cost}
//     onPress={update}
//   />
// </div>



// EXTERNAL MODULE: ./src/javascript/data/unitNames.jsx
var unitNames = __webpack_require__(697);
;// CONCATENATED MODULE: ./src/javascript/components/1_Molecules/GalleryBlock.jsx
function GalleryBlock_typeof(obj) { "@babel/helpers - typeof"; return GalleryBlock_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, GalleryBlock_typeof(obj); }

function GalleryBlock_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function GalleryBlock_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function GalleryBlock_createClass(Constructor, protoProps, staticProps) { if (protoProps) GalleryBlock_defineProperties(Constructor.prototype, protoProps); if (staticProps) GalleryBlock_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function GalleryBlock_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) GalleryBlock_setPrototypeOf(subClass, superClass); }

function GalleryBlock_setPrototypeOf(o, p) { GalleryBlock_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return GalleryBlock_setPrototypeOf(o, p); }

function GalleryBlock_createSuper(Derived) { var hasNativeReflectConstruct = GalleryBlock_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = GalleryBlock_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = GalleryBlock_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return GalleryBlock_possibleConstructorReturn(this, result); }; }

function GalleryBlock_possibleConstructorReturn(self, call) { if (call && (GalleryBlock_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return GalleryBlock_assertThisInitialized(self); }

function GalleryBlock_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function GalleryBlock_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function GalleryBlock_getPrototypeOf(o) { GalleryBlock_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return GalleryBlock_getPrototypeOf(o); }





var GalleryBlock = /*#__PURE__*/function (_Component) {
  GalleryBlock_inherits(GalleryBlock, _Component);

  var _super = GalleryBlock_createSuper(GalleryBlock);

  function GalleryBlock(props) {
    GalleryBlock_classCallCheck(this, GalleryBlock);

    return _super.call(this, props);
  }

  GalleryBlock_createClass(GalleryBlock, [{
    key: "render",
    value: function render() {
      var _this = this;

      var cash = this.props.data.money;
      var fin = '';

      if (cash > 100) {
        var total_digits = 3;
        var base = Math.log10(cash);
        var unit_power = Math.floor(base / 3);
        var cur_unit = unitNames/* unit_names */.w[unit_power] ? unitNames/* unit_names */.w[unit_power] : unitNames/* unit_names.11 */.w[11];
        var rem = cash / Math.pow(10, unit_power * 3);
        var dec_digits = Math.min(total_digits, Math.ceil(Math.log10(rem) + 1e-4));
        var prec_digits = total_digits - dec_digits;
        fin = new Intl.NumberFormat('en', {
          style: 'decimal',
          maximumFractionDigits: prec_digits
        }).format(rem) + cur_unit + '$/сек';
      } else {
        fin = new Intl.NumberFormat('en', {
          style: 'decimal',
          maximumFractionDigits: 2
        }).format(cash) + '$/сек';
      }

      return /*#__PURE__*/react.createElement("div", {
        className: "GalleryBlock"
      }, /*#__PURE__*/react.createElement("div", {
        className: "header"
      }, /*#__PURE__*/react.createElement("h1", {
        onClick: function onClick() {
          return _this.props.changePage(5, _this.props.id);
        }
      }, "Gallery_0", this.props.id), /*#__PURE__*/react.createElement("p", null, fin)), /*#__PURE__*/react.createElement(PicturesCollection, {
        sourse: this.props.area + '/' + this.props.id,
        size: this.props.data.size,
        pictures: this.props.data.pictures,
        changeblock: this.props.changeblock
      }), /*#__PURE__*/react.createElement("div", {
        className: "but",
        onClick: function onClick() {
          return _this.props.changePage(5, _this.props.id);
        }
      }, "\u043E\u0442\u043A\u0440\u044B\u0442\u044C"));
    }
  }]);

  return GalleryBlock;
}(react.Component); // key={i}
// id={i}
// data={pictures[i]}
// onPress={onPress}
// changeblock={this.props.changeblock}



;// CONCATENATED MODULE: ./src/javascript/components/1,5_Collections/GalleriesCollection.jsx
function GalleriesCollection_typeof(obj) { "@babel/helpers - typeof"; return GalleriesCollection_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, GalleriesCollection_typeof(obj); }

function GalleriesCollection_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function GalleriesCollection_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function GalleriesCollection_createClass(Constructor, protoProps, staticProps) { if (protoProps) GalleriesCollection_defineProperties(Constructor.prototype, protoProps); if (staticProps) GalleriesCollection_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function GalleriesCollection_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) GalleriesCollection_setPrototypeOf(subClass, superClass); }

function GalleriesCollection_setPrototypeOf(o, p) { GalleriesCollection_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return GalleriesCollection_setPrototypeOf(o, p); }

function GalleriesCollection_createSuper(Derived) { var hasNativeReflectConstruct = GalleriesCollection_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = GalleriesCollection_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = GalleriesCollection_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return GalleriesCollection_possibleConstructorReturn(this, result); }; }

function GalleriesCollection_possibleConstructorReturn(self, call) { if (call && (GalleriesCollection_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return GalleriesCollection_assertThisInitialized(self); }

function GalleriesCollection_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function GalleriesCollection_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function GalleriesCollection_getPrototypeOf(o) { GalleriesCollection_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return GalleriesCollection_getPrototypeOf(o); }

function GalleriesCollection_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var GalleriesCollection = /*#__PURE__*/function (_Component) {
  GalleriesCollection_inherits(GalleriesCollection, _Component);

  var _super = GalleriesCollection_createSuper(GalleriesCollection);

  function GalleriesCollection(props) {
    var _this;

    GalleriesCollection_classCallCheck(this, GalleriesCollection);

    _this = _super.call(this, props);

    GalleriesCollection_defineProperty(GalleriesCollection_assertThisInitialized(_this), "renderGalleries", function () {
      var galleries = _this.props.content;
      var changeblock = _this.props.changeblock;
      var changePage = _this.props.changePage;
      var galleriesItems = [];
      galleries.forEach(function (gallery, i) {
        galleriesItems.push( /*#__PURE__*/react.createElement(GalleryBlock, {
          key: i,
          id: i,
          area: _this.props.area,
          changeblock: changeblock,
          changePage: changePage,
          data: gallery
        }));
      });
      return galleriesItems;
    });

    return _this;
  }

  GalleriesCollection_createClass(GalleriesCollection, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react.createElement("div", {
        className: 'GalleriesCollection ' + this.props.isActive
      }, /*#__PURE__*/react.createElement("h1", null, this.props.title), this.renderGalleries());
    }
  }]);

  return GalleriesCollection;
}(react.Component);


;// CONCATENATED MODULE: ./src/javascript/components/2_Organisms/Studio.jsx
function Studio_typeof(obj) { "@babel/helpers - typeof"; return Studio_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, Studio_typeof(obj); }

function Studio_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Studio_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Studio_createClass(Constructor, protoProps, staticProps) { if (protoProps) Studio_defineProperties(Constructor.prototype, protoProps); if (staticProps) Studio_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function Studio_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) Studio_setPrototypeOf(subClass, superClass); }

function Studio_setPrototypeOf(o, p) { Studio_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Studio_setPrototypeOf(o, p); }

function Studio_createSuper(Derived) { var hasNativeReflectConstruct = Studio_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Studio_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Studio_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Studio_possibleConstructorReturn(this, result); }; }

function Studio_possibleConstructorReturn(self, call) { if (call && (Studio_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return Studio_assertThisInitialized(self); }

function Studio_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Studio_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function Studio_getPrototypeOf(o) { Studio_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Studio_getPrototypeOf(o); }









var Studio = /*#__PURE__*/function (_Component) {
  Studio_inherits(Studio, _Component);

  var _super = Studio_createSuper(Studio);

  function Studio(props) {
    Studio_classCallCheck(this, Studio);

    return _super.call(this, props);
  } // <p>{props.study.skill}</p>
  // <p>|||||||||||||||||||</p>


  Studio_createClass(Studio, [{
    key: "render",
    value: function render() {
      var props = this.props.general;
      var actions = this.props.actions;
      return /*#__PURE__*/react.createElement("div", {
        className: "Studio"
      }, /*#__PURE__*/react.createElement("div", {
        className: "StudioContent"
      }, /*#__PURE__*/react.createElement(Block, {
        title: "\u041E\u0431\u0440\u0430\u0437\u0446\u044B",
        area: "r",
        pictures: props.paintings[1],
        changeblock: actions.changeblock,
        onPress: function onPress() {
          return console.log('click');
        }
      }), /*#__PURE__*/react.createElement(Block, {
        title: "\u041F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u044F",
        area: "s",
        pictures: props.paintings[0],
        isOpen: props.units[1].level != 0,
        autoSell: props.autoSale,
        autoSalesSwitch: actions.autoSalesSwitch,
        changeblock: actions.changeblock,
        onPress: actions.sell
      }), /*#__PURE__*/react.createElement(GalleriesCollection, {
        title: "\u0413\u0430\u043B\u0435\u0440\u0435\u0438",
        area: "g",
        isActive: props.galleriesIsActive,
        changeblock: actions.changeblock,
        content: props.paintings[2],
        changePage: actions.chandePage
      })), /*#__PURE__*/react.createElement(StudioShop, {
        units: props.units,
        stat: props.statistics,
        money: props.moneyGained,
        hiringUnit: actions.hiring,
        update: actions.studioUpdate,
        updates: props.studioUpdate,
        upgrade: props.upgrade,
        upgrades: actions.buyUpgrade
      }), /*#__PURE__*/react.createElement("div", null));
    }
  }]);

  return Studio;
}(react.Component);

var Studio_mapStateToProps = function mapStateToProps(state) {
  return {
    general: state.general
  };
};

var Studio_mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: (0,redux/* bindActionCreators */.DE)({
      sell: sell,
      studioUpdate: studioUpdate,
      hiring: hiring,
      buyUpgrade: buyUpgrade,
      changeblock: changeblock,
      chandePage: chandePage,
      autoSalesSwitch: autoSalesSwitch
    }, dispatch)
  };
};

/* harmony default export */ const _2_Organisms_Studio = (connect(Studio_mapStateToProps, Studio_mapDispatchToProps)(Studio));
;// CONCATENATED MODULE: ./src/javascript/components/1_Molecules/PictureCard.jsx
function PictureCard_typeof(obj) { "@babel/helpers - typeof"; return PictureCard_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, PictureCard_typeof(obj); }

function PictureCard_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function PictureCard_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function PictureCard_createClass(Constructor, protoProps, staticProps) { if (protoProps) PictureCard_defineProperties(Constructor.prototype, protoProps); if (staticProps) PictureCard_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function PictureCard_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) PictureCard_setPrototypeOf(subClass, superClass); }

function PictureCard_setPrototypeOf(o, p) { PictureCard_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return PictureCard_setPrototypeOf(o, p); }

function PictureCard_createSuper(Derived) { var hasNativeReflectConstruct = PictureCard_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = PictureCard_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = PictureCard_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return PictureCard_possibleConstructorReturn(this, result); }; }

function PictureCard_possibleConstructorReturn(self, call) { if (call && (PictureCard_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return PictureCard_assertThisInitialized(self); }

function PictureCard_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function PictureCard_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function PictureCard_getPrototypeOf(o) { PictureCard_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return PictureCard_getPrototypeOf(o); }




var PictureCard = /*#__PURE__*/function (_Component) {
  PictureCard_inherits(PictureCard, _Component);

  var _super = PictureCard_createSuper(PictureCard);

  function PictureCard(props) {
    PictureCard_classCallCheck(this, PictureCard);

    return _super.call(this, props);
  }

  PictureCard_createClass(PictureCard, [{
    key: "render",
    value: function render() {
      var cost = this.props.cost ? /*#__PURE__*/react.createElement("h3", null, "$", (0,intFormat/* intFormat */.O)(this.props.cost)) : '';
      var copy = this.props.copy ? /*#__PURE__*/react.createElement("span", null, "[\u043A\u043E\u043F\u0438\u044F]") : '';
      return /*#__PURE__*/react.createElement("div", {
        className: "PictureCard"
      }, copy, /*#__PURE__*/react.createElement("h3", null, this.props.title), /*#__PURE__*/react.createElement("div", {
        className: "info"
      }, /*#__PURE__*/react.createElement("p", null, this.props.author), /*#__PURE__*/react.createElement("p", null, this.props.year, "\u0433.")), cost);
    }
  }]);

  return PictureCard;
}(react.Component);


;// CONCATENATED MODULE: ./src/javascript/components/2_Organisms/Shop.jsx
function Shop_typeof(obj) { "@babel/helpers - typeof"; return Shop_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, Shop_typeof(obj); }

function Shop_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Shop_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Shop_createClass(Constructor, protoProps, staticProps) { if (protoProps) Shop_defineProperties(Constructor.prototype, protoProps); if (staticProps) Shop_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function Shop_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) Shop_setPrototypeOf(subClass, superClass); }

function Shop_setPrototypeOf(o, p) { Shop_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Shop_setPrototypeOf(o, p); }

function Shop_createSuper(Derived) { var hasNativeReflectConstruct = Shop_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Shop_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Shop_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Shop_possibleConstructorReturn(this, result); }; }

function Shop_possibleConstructorReturn(self, call) { if (call && (Shop_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return Shop_assertThisInitialized(self); }

function Shop_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Shop_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function Shop_getPrototypeOf(o) { Shop_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Shop_getPrototypeOf(o); }

function Shop_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var Shop = /*#__PURE__*/function (_Component) {
  Shop_inherits(Shop, _Component);

  var _super = Shop_createSuper(Shop);

  function Shop(props) {
    var _this;

    Shop_classCallCheck(this, Shop);

    _this = _super.call(this, props);

    Shop_defineProperty(Shop_assertThisInitialized(_this), "picturesRender", function (pictures) {
      var picItems = [];
      pictures.forEach(function (picture, i) {
        if (picture.isSoldOut) {
          picItems.push( /*#__PURE__*/react.createElement("div", {
            className: 'picture' + ' soldOut'
          }, /*#__PURE__*/react.createElement("div", {
            className: 'img s_' + i + ' ' + picture.position
          }, /*#__PURE__*/react.createElement("div", {
            className: 'border'
          }), /*#__PURE__*/react.createElement("div", {
            className: 'back'
          }, "\u041F\u0440\u043E\u0434\u0430\u043D\u043E")), /*#__PURE__*/react.createElement(PictureCard, {
            title: picture.title,
            author: picture.author,
            year: picture.year,
            key: i
          })));
        } else {
          var inactive = _this.props.general.moneyGained < picture.cost ? 'inactive' : '';
          picItems.push( /*#__PURE__*/react.createElement("div", {
            className: 'picture ' + inactive,
            onClick: function onClick() {
              return _this.props.actions.getOriginal(i);
            }
          }, /*#__PURE__*/react.createElement("div", {
            className: 'img s_' + i + ' ' + picture.position
          }, /*#__PURE__*/react.createElement("div", {
            className: "ligth"
          }), /*#__PURE__*/react.createElement("div", {
            className: 'border'
          })), /*#__PURE__*/react.createElement(PictureCard, {
            title: picture.title,
            author: picture.author,
            year: picture.year,
            cost: picture.cost * 100,
            key: i
          })));
        }
      });
      return picItems;
    });

    return _this;
  }

  Shop_createClass(Shop, [{
    key: "render",
    value: function render() {
      var pictures = this.props.general.originals.slice(1);
      return /*#__PURE__*/react.createElement("div", {
        className: "Shop"
      }, /*#__PURE__*/react.createElement("div", {
        className: "picturesCollection"
      }, this.picturesRender(pictures), /*#__PURE__*/react.createElement("div", {
        className: "null"
      })));
    }
  }]);

  return Shop;
}(react.Component);

var Shop_mapStateToProps = function mapStateToProps(state) {
  return {
    general: state.general
  };
};

var Shop_mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: (0,redux/* bindActionCreators */.DE)({
      getOriginal: getOriginal
    }, dispatch)
  };
};

/* harmony default export */ const _2_Organisms_Shop = (connect(Shop_mapStateToProps, Shop_mapDispatchToProps)(Shop));
;// CONCATENATED MODULE: ./src/javascript/components/2_Organisms/Statistic.jsx
function Statistic_typeof(obj) { "@babel/helpers - typeof"; return Statistic_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, Statistic_typeof(obj); }

function Statistic_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Statistic_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Statistic_createClass(Constructor, protoProps, staticProps) { if (protoProps) Statistic_defineProperties(Constructor.prototype, protoProps); if (staticProps) Statistic_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function Statistic_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) Statistic_setPrototypeOf(subClass, superClass); }

function Statistic_setPrototypeOf(o, p) { Statistic_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Statistic_setPrototypeOf(o, p); }

function Statistic_createSuper(Derived) { var hasNativeReflectConstruct = Statistic_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Statistic_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Statistic_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Statistic_possibleConstructorReturn(this, result); }; }

function Statistic_possibleConstructorReturn(self, call) { if (call && (Statistic_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return Statistic_assertThisInitialized(self); }

function Statistic_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Statistic_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function Statistic_getPrototypeOf(o) { Statistic_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Statistic_getPrototypeOf(o); }

function Statistic_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var Statistic = /*#__PURE__*/function (_Component) {
  Statistic_inherits(Statistic, _Component);

  var _super = Statistic_createSuper(Statistic);

  function Statistic(props) {
    var _this;

    Statistic_classCallCheck(this, Statistic);

    _this = _super.call(this, props);

    Statistic_defineProperty(Statistic_assertThisInitialized(_this), "renderUpg", function () {
      var upg = _this.props.general.upgrade;
      var upgItems = [];
      upg.forEach(function (up, i) {
        var className = up.itPurchased ? 'pic true' : 'pic';
        upgItems.push( /*#__PURE__*/react.createElement("div", {
          className: className + ' id_' + i
        }, up.itPurchased ? '' : /*#__PURE__*/react.createElement("h1", null, "?"), /*#__PURE__*/react.createElement(AltShopBlock, {
          name: up.title,
          cost: up.cost,
          content: up.text
        })));
      });
      return upgItems;
    });

    return _this;
  }

  Statistic_createClass(Statistic, [{
    key: "render",
    value: function render() {
      var props = this.props.general;
      return /*#__PURE__*/react.createElement("div", {
        className: "Statistic"
      }, /*#__PURE__*/react.createElement("div", {
        className: "collections"
      }, /*#__PURE__*/react.createElement("div", {
        className: "col"
      }, /*#__PURE__*/react.createElement("h1", null, "\u0423\u043B\u0443\u0447\u0448\u0435\u043D\u0438\u044F"), this.renderUpg()), /*#__PURE__*/react.createElement("div", {
        className: "col"
      })), /*#__PURE__*/react.createElement("div", {
        className: "stat"
      }, /*#__PURE__*/react.createElement("div", {
        className: "line"
      }), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("div", {
        className: "block"
      }, /*#__PURE__*/react.createElement("p", null, "\u0412\u0441\u0435\u0433\u043E \u0441\u0434\u0435\u043B\u0430\u043D\u043E \u043A\u043B\u0438\u043A\u043E\u0432:"), /*#__PURE__*/react.createElement("span", null, (0,intFormat/* intFormat */.O)(props.statistics.totalClick))), /*#__PURE__*/react.createElement("div", {
        className: "block"
      }, /*#__PURE__*/react.createElement("p", null, "\u0412\u0441\u0435\u0433\u043E \u043D\u0430\u0440\u0438\u0441\u043E\u0432\u0430\u043D\u043E \u043A\u0430\u0440\u0442\u0438\u043D:"), /*#__PURE__*/react.createElement("span", null, (0,intFormat/* intFormat */.O)(props.statistics.totalPainting))), /*#__PURE__*/react.createElement("div", {
        className: "block"
      }, /*#__PURE__*/react.createElement("p", null, "\u0412\u0441\u0435\u0433\u043E \u043F\u0440\u043E\u0434\u0430\u043D\u043E \u043A\u0430\u0440\u0442\u0438\u043D:"), /*#__PURE__*/react.createElement("span", null, (0,intFormat/* intFormat */.O)(props.statistics.totalSales))), /*#__PURE__*/react.createElement("div", {
        className: "block"
      }, /*#__PURE__*/react.createElement("p", null, "\u0412\u0441\u0435\u0433\u043E \u0437\u0430\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043E \u0433\u0430\u043B\u0435\u0440\u0435\u0435\u0439:"), /*#__PURE__*/react.createElement("span", null, "$", (0,intFormat/* intFormat */.O)(props.statistics.totalGalleryEarned))), /*#__PURE__*/react.createElement("div", {
        className: "block"
      }, /*#__PURE__*/react.createElement("p", null, "\u0412\u0441\u0435\u0433\u043E \u0437\u0430\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043E:"), /*#__PURE__*/react.createElement("span", null, "$", (0,intFormat/* intFormat */.O)(props.statistics.totalMoneys))), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("div", {
        className: "block"
      }, /*#__PURE__*/react.createElement("p", null, "\u041C\u0430\u0441\u0442\u0435\u0440\u0441\u0442\u0432\u043E:"), /*#__PURE__*/react.createElement("span", null, (0,intFormat/* intFormat */.O)(props.study.skill))))));
    }
  }]);

  return Statistic;
}(react.Component);

var Statistic_mapStateToProps = function mapStateToProps(state) {
  return {
    general: state.general
  };
};

/* harmony default export */ const _2_Organisms_Statistic = (connect(Statistic_mapStateToProps)(Statistic));
;// CONCATENATED MODULE: ./src/javascript/components/2_Organisms/Study.jsx
function Study_typeof(obj) { "@babel/helpers - typeof"; return Study_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, Study_typeof(obj); }

function Study_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Study_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Study_createClass(Constructor, protoProps, staticProps) { if (protoProps) Study_defineProperties(Constructor.prototype, protoProps); if (staticProps) Study_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function Study_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) Study_setPrototypeOf(subClass, superClass); }

function Study_setPrototypeOf(o, p) { Study_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Study_setPrototypeOf(o, p); }

function Study_createSuper(Derived) { var hasNativeReflectConstruct = Study_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Study_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Study_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Study_possibleConstructorReturn(this, result); }; }

function Study_possibleConstructorReturn(self, call) { if (call && (Study_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return Study_assertThisInitialized(self); }

function Study_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Study_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function Study_getPrototypeOf(o) { Study_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Study_getPrototypeOf(o); }

function Study_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var Study = /*#__PURE__*/function (_Component) {
  Study_inherits(Study, _Component);

  var _super = Study_createSuper(Study);

  function Study(props) {
    var _this;

    Study_classCallCheck(this, Study);

    _this = _super.call(this, props);

    Study_defineProperty(Study_assertThisInitialized(_this), "getAuthors", function (pictures) {
      var authors = new Set();
      pictures.forEach(function (pic, i) {
        var aut = pic.author;
        authors.add(aut);
      });
      return authors;
    });

    Study_defineProperty(Study_assertThisInitialized(_this), "renderPictures", function (pictures, author) {
      var autPictures = new Set();
      var pictureItems = [];
      pictures.forEach(function (pic, i) {
        if (pic.author == author) {
          autPictures.add(pic);
        }
      });
      autPictures.forEach(function (pic, i) {
        var cost = pic.cost * Math.pow(1.5, _this.props.general.study.studyCount) / 200;
        var inactive = cost <= _this.props.general.moneyGained ? '' : 'inactive';
        pictureItems.push( /*#__PURE__*/react.createElement("div", {
          className: 'picture ' + inactive,
          onClick: function onClick() {
            return _this.props.actions.study(pic);
          }
        }, /*#__PURE__*/react.createElement("div", {
          className: 'img s_' + (pic.id - 1) + ' ' + pic.position
        }, /*#__PURE__*/react.createElement("div", {
          className: "ligth"
        }), /*#__PURE__*/react.createElement("div", {
          className: 'border'
        })), /*#__PURE__*/react.createElement(PictureCard, {
          title: pic.title,
          author: pic.author,
          year: pic.year,
          cost: cost,
          copy: true
        })));
      });
      return /*#__PURE__*/react.createElement("div", {
        className: "picturesCollection"
      }, pictureItems);
    });

    Study_defineProperty(Study_assertThisInitialized(_this), "renderAuthors", function (pictures) {
      var authorItems = [];

      _this.getAuthors(pictures).forEach(function (author, i) {
        authorItems.push( /*#__PURE__*/react.createElement("div", {
          className: "authorBlock"
        }, /*#__PURE__*/react.createElement("h1", null, author), _this.renderPictures(pictures, author)));
      });

      return authorItems;
    });

    return _this;
  }

  Study_createClass(Study, [{
    key: "render",
    value: function render() {
      var pictures = this.props.general.originals.slice(1); // <p>Стоимость обучения {this.props.general.study.studyCoast}</p>
      // <p>Мастерство {this.props.general.study.skill}</p>

      return /*#__PURE__*/react.createElement("div", {
        className: "Study"
      }, this.renderAuthors(pictures), /*#__PURE__*/react.createElement("div", {
        className: "null"
      }));
    }
  }]);

  return Study;
}(react.Component);

var Study_mapStateToProps = function mapStateToProps(state) {
  return {
    general: state.general
  };
};

var Study_mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: (0,redux/* bindActionCreators */.DE)({
      study: study
    }, dispatch)
  };
};

/* harmony default export */ const _2_Organisms_Study = (connect(Study_mapStateToProps, Study_mapDispatchToProps)(Study));
;// CONCATENATED MODULE: ./src/javascript/components/2_Organisms/Settings.jsx
function Settings_typeof(obj) { "@babel/helpers - typeof"; return Settings_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, Settings_typeof(obj); }

function Settings_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Settings_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Settings_createClass(Constructor, protoProps, staticProps) { if (protoProps) Settings_defineProperties(Constructor.prototype, protoProps); if (staticProps) Settings_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function Settings_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) Settings_setPrototypeOf(subClass, superClass); }

function Settings_setPrototypeOf(o, p) { Settings_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Settings_setPrototypeOf(o, p); }

function Settings_createSuper(Derived) { var hasNativeReflectConstruct = Settings_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Settings_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Settings_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Settings_possibleConstructorReturn(this, result); }; }

function Settings_possibleConstructorReturn(self, call) { if (call && (Settings_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return Settings_assertThisInitialized(self); }

function Settings_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Settings_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function Settings_getPrototypeOf(o) { Settings_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Settings_getPrototypeOf(o); }






var Settings = /*#__PURE__*/function (_Component) {
  Settings_inherits(Settings, _Component);

  var _super = Settings_createSuper(Settings);

  function Settings(props) {
    Settings_classCallCheck(this, Settings);

    return _super.call(this, props);
  }

  Settings_createClass(Settings, [{
    key: "render",
    value: function render() {
      var actions = this.props.actions;
      return /*#__PURE__*/react.createElement("div", {
        className: "Settings"
      }, /*#__PURE__*/react.createElement("div", {
        className: "setBlock"
      }, /*#__PURE__*/react.createElement("p", null, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0438\u0433\u0440\u0443"), /*#__PURE__*/react.createElement("div", {
        className: "but",
        onClick: function onClick() {
          return actions.save(true);
        }
      }, /*#__PURE__*/react.createElement("p", null, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"))), /*#__PURE__*/react.createElement("div", {
        className: "setBlock"
      }, /*#__PURE__*/react.createElement("p", null, "\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u0442\u0435\u043A\u0443\u0449\u0435\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435"), /*#__PURE__*/react.createElement("div", {
        className: "but",
        onClick: actions.reset
      }, /*#__PURE__*/react.createElement("p", null, "\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C"))));
    }
  }]);

  return Settings;
}(react.Component);

var Settings_mapStateToProps = function mapStateToProps(state) {
  return {
    general: state.general
  };
};

var Settings_mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: (0,redux/* bindActionCreators */.DE)({
      save: save,
      reset: actions_reset
    }, dispatch)
  };
};

/* harmony default export */ const _2_Organisms_Settings = (connect(Settings_mapStateToProps, Settings_mapDispatchToProps)(Settings));
;// CONCATENATED MODULE: ./src/javascript/components/2_Organisms/Gallery.jsx
function Gallery_typeof(obj) { "@babel/helpers - typeof"; return Gallery_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, Gallery_typeof(obj); }

function Gallery_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Gallery_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Gallery_createClass(Constructor, protoProps, staticProps) { if (protoProps) Gallery_defineProperties(Constructor.prototype, protoProps); if (staticProps) Gallery_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function Gallery_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) Gallery_setPrototypeOf(subClass, superClass); }

function Gallery_setPrototypeOf(o, p) { Gallery_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Gallery_setPrototypeOf(o, p); }

function Gallery_createSuper(Derived) { var hasNativeReflectConstruct = Gallery_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Gallery_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Gallery_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Gallery_possibleConstructorReturn(this, result); }; }

function Gallery_possibleConstructorReturn(self, call) { if (call && (Gallery_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return Gallery_assertThisInitialized(self); }

function Gallery_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Gallery_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function Gallery_getPrototypeOf(o) { Gallery_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Gallery_getPrototypeOf(o); }

function Gallery_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var Gallery = /*#__PURE__*/function (_Component) {
  Gallery_inherits(Gallery, _Component);

  var _super = Gallery_createSuper(Gallery);

  function Gallery(props) {
    var _this;

    Gallery_classCallCheck(this, Gallery);

    _this = _super.call(this, props);

    Gallery_defineProperty(Gallery_assertThisInitialized(_this), "renderPictures", function () {
      var pictures = _this.props.data.pictures;
      var pictureItems = [];
      pictures.forEach(function (picture, i) {
        var quo = picture.quality == 1 ? '0' : picture.quality > 0.7 ? '1' : picture.quality > 0.3 ? '2' : '3';
        pictureItems.push( /*#__PURE__*/react.createElement("div", {
          className: "picture"
        }, /*#__PURE__*/react.createElement("div", {
          className: 'img s_' + (picture.referense.id - 1) + ' ' + picture.referense.position + ' quo_' + quo
        }, /*#__PURE__*/react.createElement("div", {
          className: "ligth"
        }), /*#__PURE__*/react.createElement("div", {
          className: 'border'
        })), /*#__PURE__*/react.createElement(PictureCard, {
          title: picture.referense.title,
          author: picture.referense.author,
          year: picture.referense.year,
          copy: picture.quality != 1
        })));
      });

      for (var i = 0; i < _this.props.data.size - pictures.length; i++) {
        var position = ['horizontal', 'square', 'vertical'];
        pictureItems.push( /*#__PURE__*/react.createElement("div", {
          className: "picture"
        }, /*#__PURE__*/react.createElement("div", {
          className: 'img shaddow ' + position[i]
        })));
      }

      return pictureItems;
    });

    return _this;
  }

  Gallery_createClass(Gallery, [{
    key: "render",
    value: // {this.renderPictures()}
    function render() {
      return /*#__PURE__*/react.createElement("div", {
        className: "Gallery"
      }, this.renderPictures(), /*#__PURE__*/react.createElement("div", {
        className: "null"
      }));
    }
  }]);

  return Gallery;
}(react.Component); // key={i}
// id={i}
// data={pictures[i]}
// onPress={onPress}
// changeblock={this.props.changeblock}



// EXTERNAL MODULE: ./src/assets/Character_1.svg
var Character_1 = __webpack_require__(649);
var Character_1_default = /*#__PURE__*/__webpack_require__.n(Character_1);
// EXTERNAL MODULE: ./src/assets/discord.svg
var discord = __webpack_require__(532);
// EXTERNAL MODULE: ./src/assets/telegram.svg
var telegram = __webpack_require__(321);
var telegram_default = /*#__PURE__*/__webpack_require__.n(telegram);
// EXTERNAL MODULE: ./src/assets/twitch.svg
var twitch = __webpack_require__(88);
var twitch_default = /*#__PURE__*/__webpack_require__.n(twitch);
;// CONCATENATED MODULE: ./src/javascript/components/2_Organisms/Info.jsx
function Info_typeof(obj) { "@babel/helpers - typeof"; return Info_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, Info_typeof(obj); }

function Info_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Info_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Info_createClass(Constructor, protoProps, staticProps) { if (protoProps) Info_defineProperties(Constructor.prototype, protoProps); if (staticProps) Info_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function Info_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) Info_setPrototypeOf(subClass, superClass); }

function Info_setPrototypeOf(o, p) { Info_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Info_setPrototypeOf(o, p); }

function Info_createSuper(Derived) { var hasNativeReflectConstruct = Info_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Info_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Info_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Info_possibleConstructorReturn(this, result); }; }

function Info_possibleConstructorReturn(self, call) { if (call && (Info_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return Info_assertThisInitialized(self); }

function Info_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Info_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function Info_getPrototypeOf(o) { Info_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Info_getPrototypeOf(o); }







var Info = /*#__PURE__*/function (_Component) {
  Info_inherits(Info, _Component);

  var _super = Info_createSuper(Info);

  function Info(props) {
    Info_classCallCheck(this, Info);

    return _super.call(this, props);
  }

  Info_createClass(Info, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react.createElement("div", {
        className: "Info"
      }, /*#__PURE__*/react.createElement("div", {
        className: "back"
      }), /*#__PURE__*/react.createElement("div", {
        className: "sinopsis"
      }, /*#__PURE__*/react.createElement("p", null, "\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u0440\u0430\u0437\u0432\u043E\u0440\u0430\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u043F\u043E\u0441\u043B\u0435 \u0442\u043E\u0433\u043E, \u043A\u0430\u043A \u0441\u0431\u0435\u0436\u0430\u0432\u0448\u0438\u0435 \u0441 \u043A\u0430\u0440\u0442\u0438\u043D \u041A\u0440\u0430\u0441\u043A\u0430, \u041A\u043B\u044F\u043A\u0441\u0430 \u0438 \u0411\u043B\u0438\u043A \u0440\u0435\u0448\u0438\u043B\u0438 \u043E\u0442\u043E\u043C\u0441\u0442\u0438\u0442\u044C \u0430\u0440\u0442-\u0441\u043E\u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0443 \u0437\u0430\xA0\u043F\u0440\u0435\u043D\u0435\u0431\u0440\u0435\u0436\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u0435 \u0432 \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u043C \u0438\u0441\u0441\u043A\u0443\u0441\u0442\u0432\u0435."), /*#__PURE__*/react.createElement("p", null, "\u0418\u0445 \u043F\u043B\u0430\u043D \u0441\u043E\u0441\u0442\u043E\u0438\u0442 \u0432 \u043F\u0435\u0440\u0435\u043C\u0430\u043D\u0438\u0432\u0430\u043D\u0438\u0438 \u043C\u043E\u043B\u043E\u0434\u044B\u0445 \u0445\u0443\u0434\u043E\u0436\u043D\u0438\u043A\u043E\u0432 \u043D\u0430\xA0\xAB\u0442\u0435\u043C\u043D\u0443\u044E\xBB \u0441\u0442\u043E\u0440\u043E\u043D\u0443, \u0443\u0431\u0435\u0436\u0434\u0430\u044F \u0438\u0445 \u0441\u043E\u0437\u0434\u0430\u0432\u0430\u0442\u044C \u043F\u043E\u0434\u0434\u0435\u043B\u043A\u0438."), /*#__PURE__*/react.createElement("p", null, "\u0422\u0435\u043F\u0435\u0440\u044C \u0432\u0430\u043C \u043F\u0440\u0435\u0434\u0441\u0442\u043E\u0438\u0442 \u0441\u0442\u0430\u043B\u044C \u043E\u0434\u043D\u0438\u043C \u0438\u0437 \u0445\u0443\u0434\u043E\u0436\u043D\u0438\u043A\u043E\u0432 \u0444\u0430\u043B\u044C\u0441\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440\u043E\u0432 \u0438 \u0437\u0430\u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E, \u0447\u0442\u043E\u0431\u044B \u0441\u043A\u0443\u043F\u0438\u0442\u044C \u0432\u0441\u0435\xA0\u043E\u0440\u0438\u0433\u0438\u043D\u0430\u043B\u044C\u043D\u044B\u0435 \u0440\u0430\u0431\u043E\u0442\u044B.")), /*#__PURE__*/react.createElement("div", {
        className: "character"
      }, /*#__PURE__*/react.createElement("div", {
        className: "img"
      }, /*#__PURE__*/react.createElement("div", {
        className: "wall"
      }), /*#__PURE__*/react.createElement("span", {
        dangerouslySetInnerHTML: {
          __html: (Character_1_default())
        }
      })), /*#__PURE__*/react.createElement("div", {
        className: "content"
      }, /*#__PURE__*/react.createElement("h1", null, "\u041A\u0440\u0430\u0441\u043A\u0430"), /*#__PURE__*/react.createElement("p", null, "\u0417\u0430\u0447\u0438\u043D\u0449\u0438\u043A \u0431\u0443\u043D\u0442\u0430 \u0438 \u0440\u0443\u043A\u043E\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C \u0433\u0440\u0443\u043F\u043F\u044B. \u0420\u0430\u0441\u0441\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u043C \u043D\u043E\u0432\u044B\u043C \u0445\u0443\u0434\u043E\u0436\u043D\u0438\u043A\u0430\u043C \u0447\u0442\u043E \u043A \u0447\u0435\u043C\u0443"))), /*#__PURE__*/react.createElement("div", {
        className: "character"
      }, /*#__PURE__*/react.createElement("div", {
        className: "img"
      }, /*#__PURE__*/react.createElement("span", {
        dangerouslySetInnerHTML: {
          __html: (Character_1_default())
        }
      }), /*#__PURE__*/react.createElement("div", {
        className: "wall"
      })), /*#__PURE__*/react.createElement("div", {
        className: "content"
      }, /*#__PURE__*/react.createElement("h1", null, "\u0411\u043B\u0438\u043A"), /*#__PURE__*/react.createElement("p", null, "\u041F\u043E\u0448\u0435\u043B \u0437\u0430 \u043A\u0440\u0430\u0441\u043A\u043E\u0439, \u043F\u043E\u0442\u043E\u043C\u0443 \u0447\u0442\u043E \u0435\u043C\u0443 \u0445\u043E\u0442\u0435\u043B\u043E\u0441\u044C \u043D\u043E\u0432\u044B\u0445 \u043E\u0449\u0443\u0449\u0435\u043D\u0438\u0439. \u0412 \u043A\u043E\u043C\u0430\u043D\u0434\u0435 \u043E\u0442\u0432\u0435\u0447\u0430\u0435\u0442 \u0437\u0430 \u0431\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440\u0438\u044E"))), /*#__PURE__*/react.createElement("div", {
        className: "character"
      }, /*#__PURE__*/react.createElement("div", {
        className: "content"
      }, /*#__PURE__*/react.createElement("h1", null, "\u041A\u043B\u044F\u043A\u0441\u0430"), /*#__PURE__*/react.createElement("p", null, "\u0422\u043E\u0442 \u0441\u0430\u043C\u044B\u0439 \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043D\u0435\u043F\u043E\u043D\u044F\u0442\u043D\u043E \u043A\u0430\u043A \u0432 \u043D\u0435\u0435 \u043F\u043E\u043F\u0430\u043B \u0438 \u0447\u0442\u043E \u0434\u0435\u043B\u0430\u0435\u0442.")), /*#__PURE__*/react.createElement("div", {
        className: "img"
      }, /*#__PURE__*/react.createElement("span", {
        dangerouslySetInnerHTML: {
          __html: (Character_1_default())
        }
      }), /*#__PURE__*/react.createElement("div", {
        className: "wall"
      }))), /*#__PURE__*/react.createElement("div", {
        className: "credits"
      }, /*#__PURE__*/react.createElement("h1", null, "\u0410\u0432\u0442\u043E\u0440\u044B"), /*#__PURE__*/react.createElement("div", {
        className: "authors"
      }, /*#__PURE__*/react.createElement("div", {
        className: "author"
      }, /*#__PURE__*/react.createElement("p", null, "\u0418\u0434\u0435\u044F, \u0440\u0430\u0440\u0430\u0431\u043E\u0442\u043A\u0430, \u0434\u0438\u0437\u0430\u0439\u043D \u0438 \u0442\u0434 \u0438 \u0442\u043F "), /*#__PURE__*/react.createElement("div", {
        className: "l"
      }, /*#__PURE__*/react.createElement("p", null, "\u0418\u043D\u0441\u0430\u0444\u0443\u0442\u0434\u0438\u043D\u043E\u0432\u0430 \u0412\u0430\u043B\u0435\u0440\u0438\u044F"), /*#__PURE__*/react.createElement("div", {
        className: "links"
      }, /*#__PURE__*/react.createElement("div", {
        className: "link"
      }, /*#__PURE__*/react.createElement("p", null, "Telegram"), /*#__PURE__*/react.createElement("a", {
        target: "_blank",
        rel: "noopener noreferrer",
        href: "https://t.me/ALeo75C"
      }, "@ALeo75C")), /*#__PURE__*/react.createElement("div", {
        className: "link"
      }, /*#__PURE__*/react.createElement("p", null, "e-mail"), /*#__PURE__*/react.createElement("a", {
        target: "_blank",
        href: "mailto:za.iz.pr@yandex.kz?subject=FakeArtClicker"
      }, "za.iz.pr@yandex.kz"))))), /*#__PURE__*/react.createElement("div", {
        className: "author"
      }, /*#__PURE__*/react.createElement("p", null, "\u041A\u0443\u0440\u0430\u0442\u043E\u0440\u0441\u043A\u0430\u044F \u0440\u0430\u0431\u043E\u0442\u0430"), /*#__PURE__*/react.createElement("div", {
        className: "l"
      }, /*#__PURE__*/react.createElement("p", null, "\u0417\u0430\u0445\u0430\u0440 \u0434\u0435\u043D\u044C"), /*#__PURE__*/react.createElement("div", {
        className: "links"
      }, /*#__PURE__*/react.createElement("a", null, "Sosial"), /*#__PURE__*/react.createElement("a", null, "Sosial"), /*#__PURE__*/react.createElement("a", null, "Sosial"))))), /*#__PURE__*/react.createElement("div", {
        className: "links"
      }, /*#__PURE__*/react.createElement("div", {
        className: "block"
      }, /*#__PURE__*/react.createElement("p", null, "\u0421\u0432\u044F\u0437\u0430\u043D\u043D\u044B\u0435 \u0441\u0441\u044B\u043B\u043A\u0438"), /*#__PURE__*/react.createElement("div", {
        className: "l"
      }, /*#__PURE__*/react.createElement("div", {
        className: "link"
      }, /*#__PURE__*/react.createElement("a", {
        target: "_blank",
        href: "https://ru.calameo.com/read/0069584285808aefc9398"
      }, "\u0412\u0438\u0437\u0443\u0430\u043B\u044C\u043D\u043E\u0435 \u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u0435")), /*#__PURE__*/react.createElement("div", {
        className: "link"
      }, /*#__PURE__*/react.createElement("a", {
        target: "_blank",
        href: " "
      }, "\u041F\u0440\u0435\u0437\u0435\u043D\u0442\u0430\u0446\u0438\u044F \u043F\u0440\u043E\u0435\u043A\u0442\u0430")))), /*#__PURE__*/react.createElement("div", {
        className: "block"
      }, /*#__PURE__*/react.createElement("p", null, "\u0421\u043E\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0435 \u0441\u0435\u0442\u0438"), /*#__PURE__*/react.createElement("div", {
        className: "l"
      }, /*#__PURE__*/react.createElement("div", {
        className: "link"
      }, /*#__PURE__*/react.createElement("a", {
        className: "sn",
        target: "_blank",
        href: "https://t.me/+DeB5Ajqj9aljYjli"
      }, /*#__PURE__*/react.createElement("span", {
        dangerouslySetInnerHTML: {
          __html: (telegram_default())
        }
      })), /*#__PURE__*/react.createElement("a", {
        target: "_blank",
        className: "sn",
        href: "https://www.twitch.tv/fakeg1rl"
      }, /*#__PURE__*/react.createElement("span", {
        dangerouslySetInnerHTML: {
          __html: (twitch_default())
        }
      })))))), /*#__PURE__*/react.createElement("div", {
        className: "footer"
      }, /*#__PURE__*/react.createElement("span", null, " \u041C\u043E\u0441\u043A\u0432\u0430"), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("a", {
        target: "_blank",
        href: "https://www.hse.ru/"
      }, "\u041D\u0418\u0423 \u0412\u0428\u042D")), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("a", {
        target: "_blank",
        href: "https://design.hse.ru/"
      }, "\u0428\u043A\u043E\u043B\u0430 \u0434\u0438\u0437\u0430\u0439\u043D\u0430")), /*#__PURE__*/react.createElement("span", null, " 2022 \u0433\u043E\u0434"))), /*#__PURE__*/react.createElement("div", {
        className: "col"
      }), /*#__PURE__*/react.createElement("div", {
        className: "col"
      }), /*#__PURE__*/react.createElement("div", {
        className: "col"
      }));
    }
  }]);

  return Info;
}(react.Component); // <div className="bor"></div>



;// CONCATENATED MODULE: ./src/javascript/components/1_Molecules/Menu.jsx
function Menu_typeof(obj) { "@babel/helpers - typeof"; return Menu_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, Menu_typeof(obj); }

function Menu_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Menu_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Menu_createClass(Constructor, protoProps, staticProps) { if (protoProps) Menu_defineProperties(Constructor.prototype, protoProps); if (staticProps) Menu_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function Menu_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) Menu_setPrototypeOf(subClass, superClass); }

function Menu_setPrototypeOf(o, p) { Menu_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Menu_setPrototypeOf(o, p); }

function Menu_createSuper(Derived) { var hasNativeReflectConstruct = Menu_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Menu_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Menu_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Menu_possibleConstructorReturn(this, result); }; }

function Menu_possibleConstructorReturn(self, call) { if (call && (Menu_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return Menu_assertThisInitialized(self); }

function Menu_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Menu_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function Menu_getPrototypeOf(o) { Menu_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Menu_getPrototypeOf(o); }



var Menu_Students = /*#__PURE__*/function (_Component) {
  Menu_inherits(Students, _Component);

  var _super = Menu_createSuper(Students);

  function Students(props) {
    Menu_classCallCheck(this, Students);

    return _super.call(this, props);
  }

  Menu_createClass(Students, [{
    key: "render",
    value: function render() {
      var _this = this;

      return /*#__PURE__*/react.createElement("div", {
        className: "Menu"
      }, /*#__PURE__*/react.createElement("div", {
        className: 'settings p' + this.props.pageid,
        onClick: function onClick() {
          return _this.props.onClick(4);
        }
      }, "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438"), /*#__PURE__*/react.createElement("div", {
        className: 'statistic p' + this.props.pageid,
        onClick: function onClick() {
          return _this.props.onClick(3);
        }
      }, "\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430"), /*#__PURE__*/react.createElement("div", {
        className: 'shop p' + this.props.pageid,
        onClick: function onClick() {
          return _this.props.onClick(2);
        }
      }, "\u0410\u0443\u043A\u0446\u0438\u043E\u043D"), /*#__PURE__*/react.createElement("div", {
        className: 'artists p' + this.props.pageid,
        onClick: function onClick() {
          return _this.props.onClick(1);
        }
      }), /*#__PURE__*/react.createElement("div", {
        onClick: function onClick() {
          return _this.props.onClick(6);
        },
        className: 'info p' + this.props.pageid
      }, "\u041E\u0431 \u0438\u0433\u0440\u0435"));
    }
  }]);

  return Students;
}(react.Component); // <div className="bor"></div>



// EXTERNAL MODULE: ./src/assets/back.svg
var back = __webpack_require__(749);
var back_default = /*#__PURE__*/__webpack_require__.n(back);
;// CONCATENATED MODULE: ./src/javascript/components/2_Organisms/Body.jsx
function Body_typeof(obj) { "@babel/helpers - typeof"; return Body_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, Body_typeof(obj); }

function Body_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Body_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Body_createClass(Constructor, protoProps, staticProps) { if (protoProps) Body_defineProperties(Constructor.prototype, protoProps); if (staticProps) Body_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function Body_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) Body_setPrototypeOf(subClass, superClass); }

function Body_setPrototypeOf(o, p) { Body_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Body_setPrototypeOf(o, p); }

function Body_createSuper(Derived) { var hasNativeReflectConstruct = Body_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Body_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Body_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Body_possibleConstructorReturn(this, result); }; }

function Body_possibleConstructorReturn(self, call) { if (call && (Body_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return Body_assertThisInitialized(self); }

function Body_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Body_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function Body_getPrototypeOf(o) { Body_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Body_getPrototypeOf(o); }













var Content = /*#__PURE__*/function (_Component) {
  Body_inherits(Content, _Component);

  var _super = Body_createSuper(Content);

  function Content(props) {
    Body_classCallCheck(this, Content);

    return _super.call(this, props);
  }

  Body_createClass(Content, [{
    key: "render",
    value: function render() {
      var _this = this;

      var pageId = this.props.page;
      var phase = this.props.phase;
      var page = '';
      var partClassName = 'Part ';

      if (pageId == 0) {
        page = /*#__PURE__*/react.createElement(_2_Organisms_Studio, null);
      } else if (pageId == 1) {
        page = /*#__PURE__*/react.createElement(_2_Organisms_Study, null);
      } else if (pageId == 2) {
        page = /*#__PURE__*/react.createElement(_2_Organisms_Shop, null);
      } else if (pageId == 3) {
        page = /*#__PURE__*/react.createElement(_2_Organisms_Statistic, null);
      } else if (pageId == 4) {
        page = /*#__PURE__*/react.createElement(_2_Organisms_Settings, null);
      } else if (pageId == 5) {
        page = /*#__PURE__*/react.createElement(Gallery, {
          data: this.props.gallery
        });
      } else if (pageId == 6) {
        page = /*#__PURE__*/react.createElement(Info, null);
        partClassName += 'noscrolling';
      } else {
        page = /*#__PURE__*/react.createElement("div", null, "LOL");
      } // <div className="border"></div>


      var character = this.props.phrase.character;
      var story = this.props.story ? 'story' : '';
      var characterId = this.props.phrase.character == 'Клякса' ? 2 : this.props.phrase.character == 'Краска' ? 1 : 0;
      return /*#__PURE__*/react.createElement("div", {
        className: "Content"
      }, /*#__PURE__*/react.createElement("div", {
        className: "GameHeader"
      }, /*#__PURE__*/react.createElement("div", {
        className: 'back p' + pageId,
        onClick: function onClick() {
          return _this.props.changePage(0);
        }
      }, /*#__PURE__*/react.createElement("span", {
        dangerouslySetInnerHTML: {
          __html: (back_default())
        }
      })), /*#__PURE__*/react.createElement("div", {
        className: "cover",
        onClick: function onClick() {
          return _this.props.changePrathe(true);
        }
      }, /*#__PURE__*/react.createElement("div", {
        className: "h_l"
      }), /*#__PURE__*/react.createElement("div", {
        className: "h_r"
      })), /*#__PURE__*/react.createElement("div", {
        className: 'CharacterBlock c_' + characterId
      }, /*#__PURE__*/react.createElement("span", {
        className: "Character",
        dangerouslySetInnerHTML: {
          __html: (Character_1_default())
        }
      }), /*#__PURE__*/react.createElement("div", {
        className: 'Message ' + story
      }, /*#__PURE__*/react.createElement("h2", null, character), /*#__PURE__*/react.createElement("p", null, this.props.phrase.text))), /*#__PURE__*/react.createElement(Menu_Students, {
        pageid: pageId,
        onClick: this.props.changePage
      })), /*#__PURE__*/react.createElement("div", {
        className: "Page"
      }, /*#__PURE__*/react.createElement("div", {
        className: "wrapper n4"
      }, /*#__PURE__*/react.createElement("div", {
        className: "Cover_rigth_1"
      })), /*#__PURE__*/react.createElement("div", {
        className: "wrapper n5"
      }, /*#__PURE__*/react.createElement("div", {
        className: "Cover_rigth_2"
      })), /*#__PURE__*/react.createElement("div", {
        className: partClassName
      }, page)));
    }
  }]);

  return Content;
}(react.Component);


// EXTERNAL MODULE: ./src/assets/band.svg
var band = __webpack_require__(488);
var band_default = /*#__PURE__*/__webpack_require__.n(band);
// EXTERNAL MODULE: ./src/assets/close.svg
var assets_close = __webpack_require__(793);
var close_default = /*#__PURE__*/__webpack_require__.n(assets_close);
;// CONCATENATED MODULE: ./src/javascript/components/1_Molecules/Banner.jsx
function Banner_typeof(obj) { "@babel/helpers - typeof"; return Banner_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, Banner_typeof(obj); }

function Banner_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Banner_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Banner_createClass(Constructor, protoProps, staticProps) { if (protoProps) Banner_defineProperties(Constructor.prototype, protoProps); if (staticProps) Banner_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function Banner_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) Banner_setPrototypeOf(subClass, superClass); }

function Banner_setPrototypeOf(o, p) { Banner_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Banner_setPrototypeOf(o, p); }

function Banner_createSuper(Derived) { var hasNativeReflectConstruct = Banner_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Banner_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Banner_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Banner_possibleConstructorReturn(this, result); }; }

function Banner_possibleConstructorReturn(self, call) { if (call && (Banner_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return Banner_assertThisInitialized(self); }

function Banner_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Banner_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function Banner_getPrototypeOf(o) { Banner_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Banner_getPrototypeOf(o); }

function Banner_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var Banner = /*#__PURE__*/function (_Component) {
  Banner_inherits(Banner, _Component);

  var _super = Banner_createSuper(Banner);

  function Banner(props) {
    var _this;

    Banner_classCallCheck(this, Banner);

    _this = _super.call(this, props);

    Banner_defineProperty(Banner_assertThisInitialized(_this), "close", function () {
      var banner = document.getElementsByClassName('Banner')[0];
      banner.classList.add('hidden');
    });

    return _this;
  }

  Banner_createClass(Banner, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react.createElement("div", {
        className: "Banner",
        onClick: this.close
      }, /*#__PURE__*/react.createElement("div", {
        className: "content"
      }, /*#__PURE__*/react.createElement("div", {
        className: "characters"
      }, /*#__PURE__*/react.createElement("span", {
        dangerouslySetInnerHTML: {
          __html: (band_default())
        }
      })), /*#__PURE__*/react.createElement("p", null, "\u2014 \u0427\u0442\u043E \u0438\u0441\u043A\u043B\u044E\u0447\u0438\u043B\u0438 \u0438\u0437 \u0445\u0443\u0434\u043E\u0436\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0439 \u0430\u043A\u0430\u0434\u0435\u043C\u0438\u0438 \u0438 \u0445\u043E\u0447\u0435\u0448\u044C \u043F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0438\u043C?"), /*#__PURE__*/react.createElement("p", null, "\u2014 \u041F\u0440\u0438\u0441\u043E\u0435\u0434\u0438\u043D\u044F\u0439\u0441\u044F \u043A \u043D\u0430\u043C!"), /*#__PURE__*/react.createElement("p", null, "\u2014 \u041C\u044B \u0445\u043E\u0442\u0438\u043C \u0437\u0430\u043F\u043E\u043B\u043E\u043D\u0438\u0442\u044C \u0432\u0435\u0441\u044C \u0430\u0440\u0442-\u0440\u044B\u043D\u043E\u043A \u043F\u043E\u0434\u0434\u0435\u043B\u043A\u0430\u043C\u0438, \u043D\u0430\u0434\u0435\u0435\u043C\u0441\u044F \u043D\u0430 \u0442\u0432\u043E\u044E \u043F\u043E\u043C\u043E\u0449\u044C"), /*#__PURE__*/react.createElement("div", {
        className: "back"
      }), /*#__PURE__*/react.createElement("div", {
        className: "cover"
      }), /*#__PURE__*/react.createElement("div", {
        className: "close"
      }, /*#__PURE__*/react.createElement("span", {
        dangerouslySetInnerHTML: {
          __html: (close_default())
        }
      }))));
    }
  }]);

  return Banner;
}(react.Component); // <div className="bor"></div>



;// CONCATENATED MODULE: ./src/javascript/containers/Game.jsx
function Game_typeof(obj) { "@babel/helpers - typeof"; return Game_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, Game_typeof(obj); }

function Game_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Game_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Game_createClass(Constructor, protoProps, staticProps) { if (protoProps) Game_defineProperties(Constructor.prototype, protoProps); if (staticProps) Game_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function Game_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) Game_setPrototypeOf(subClass, superClass); }

function Game_setPrototypeOf(o, p) { Game_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Game_setPrototypeOf(o, p); }

function Game_createSuper(Derived) { var hasNativeReflectConstruct = Game_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Game_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Game_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Game_possibleConstructorReturn(this, result); }; }

function Game_possibleConstructorReturn(self, call) { if (call && (Game_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return Game_assertThisInitialized(self); }

function Game_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Game_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function Game_getPrototypeOf(o) { Game_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Game_getPrototypeOf(o); }

function Game_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // import * as GameActions from '../actions'





 // выводить размер галереи

var Game = /*#__PURE__*/function (_React$Component) {
  Game_inherits(Game, _React$Component);

  var _super = Game_createSuper(Game);

  function Game(props) {
    var _this;

    Game_classCallCheck(this, Game);

    _this = _super.call(this, props);

    Game_defineProperty(Game_assertThisInitialized(_this), "pistureSell", function () {
      _this.props.general.paintings[0].forEach(function (paint, i) {
        if (paint.status == 10) {
          paint.timeToSale -= 1;

          if (paint.autoSell) {
            paint.timeFraction = paint.timeToSale / _this.props.general.units[1].speed;
          } else {
            paint.timeFraction = paint.timeToSale / _this.props.general.speedOfSale;
          }

          if (paint.timeToSale <= 0) {
            _this.props.actions.sell(i);
          }
        }
      });
    });

    return _this;
  }

  Game_createClass(Game, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var actions = this.props.actions;
      setInterval(function () {
        var props = _this2.props.general;

        if (props.loading) {
          actions.load();
        } else {
          var students = props.units[0];
          var dealers = props.units[1];

          if (students.level > 0) {
            actions.paint(1);
          }

          if (dealers.level > 0 && props.autoSale) {
            actions.autoSell();
          }

          _this2.pistureSell();

          if (props.galleriesIsActive) {
            actions.galleryWorking();
          }

          actions.chandePhase();
          actions.getPhrase();
          actions.save();
        }
      }, 1000);
    }
  }, {
    key: "render",
    value: function render() {
      var props = this.props.general;
      var actions = this.props.actions;
      var banner = props.moneyGained == 0 ? /*#__PURE__*/react.createElement(Banner, null) : null;

      if (!this.props.general.loading) {
        return /*#__PURE__*/react.createElement("div", {
          className: "Game"
        }, banner, /*#__PURE__*/react.createElement(_2_Organisms_Clicker, null), /*#__PURE__*/react.createElement(Content, {
          page: props.pageid,
          phase: props.phase,
          phrase: props.phrase,
          story: props.story,
          gallery: props.paintings[2][props.openGalleryId],
          changePage: actions.chandePage,
          changePrathe: actions.getPhrase
        }));
      } else {
        return /*#__PURE__*/react.createElement("div", {
          className: "Game"
        }, /*#__PURE__*/react.createElement("p", null, "LOADING"));
      }
    }
  }]);

  return Game;
}(react.Component);

var Game_mapStateToProps = function mapStateToProps(state) {
  return {
    general: state.general
  };
};

var Game_mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: (0,redux/* bindActionCreators */.DE)({
      paint: paint,
      sell: sell,
      chandePage: chandePage,
      autoSell: autoSell,
      galleryWorking: galleryWorking,
      chandePhase: chandePhase,
      getPhrase: getPhrase,
      save: save,
      load: load
    }, dispatch)
  };
};

/* harmony default export */ const containers_Game = (connect(Game_mapStateToProps, Game_mapDispatchToProps)(Game));
;// CONCATENATED MODULE: ./src/game.jsx






 // prettier-ignore
// const clientId = document.cookie
//   .match(/_ga=(.+?);/)[1]
//   .split('.')
//   .slice(-2)
//   .join('.')

var clientId = document.cookie.split(';')[1].split('.').slice(-2).join('.');
var game_initialState = Object.assign({}, initialState/* baseState */.a, {
  clientId: clientId
});
var store = (0,configureStore["default"])({
  general: game_initialState
}); // console.log('STORE', store.getState())

document.addEventListener('DOMContentLoaded', function () {
  (0,react_dom.render)( /*#__PURE__*/react.createElement(components_Provider, {
    store: store
  }, /*#__PURE__*/react.createElement(containers_Game, null)), document.body.appendChild(document.createElement('div')));
});
})();

/******/ })()
;