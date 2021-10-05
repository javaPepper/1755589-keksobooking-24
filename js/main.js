let avatarAddress = img/avatars/user/01.png; // написать функцию добавления числа от 01 до 10 
let result = 0;
let roomType = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
let roomsNum = 0;
let guestsNum = 0;
const checkinValue = ['12:00', '13:00', '14:00'];
const checkoutValue = ['12:00', '13:00', '14:00'];
let featuresValue = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
let photosValue = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 
'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 
'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
let locationValue = {
lat: getRandomNumDecimal(35.65000, 35.70000, 5),
lng: getRandomNumDecimal(139.70000, 139.80000, 5)
};

function getRandomNum(from, to) {

  from = Math.ceil(from); // округляем минимальное число в большую сторону
  to = Math.floor(to); // округляем максимальное число в меньшую сторону

  let result = Math.floor(Math.random() * (to - from + 1)) + from; // вычисляем любое целое число в диапазоне включительно

  if (from >= to) { // проверяем, что параметр "до" больше параметра "от"
    result = false;

  }
  if (from<0||to<0) { // проверяем, что параметры больше 0
    result = false;

  }

  return result;
}


function getRandomNumDecimal(from, to, decimal) {

  let resultFloat = Math.random() * (to - from) + from; // вычисляем любое число с плавающей точкой в диапазоне включительно

  if (from >= to) { // проверяем, что параметр "до" больше параметра "от"
    resultFloat = false;

  }
  if (from<0||to<0) { // проверяем, что параметры больше 0
    resultFloat = false;

  }
  resultFloat = resultFloat.toFixed(decimal); // задаем параметр decimal
  return resultFloat;
}

let author = {
  avatar: avatarAddress 
}
  

let offer = {
  title: '1-е объявление',
  address: '{{location.lat}}, {{location.lng}}',
  price: result,
  type: roomType,
  rooms: roomsNum,
  guests: guestsNum,
  checkin: checkinValue,
  checkout: checkoutValue,
  features: featuresValue,
  description: 'Комната',
  photos: photosValue,
  location: locationValue
}
offer.price = getRandomNum(100, 50000);
offer.roomsNum = getRandomNum(1, 4);
offer.guestsNum = getRandomNum(1, 8);