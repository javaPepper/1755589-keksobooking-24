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
};

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
};

function getRandomLength() {
  randomFeatures = Math.ceil(Math.random() * (featuresArray.length - 0) + 0);
  return randomFeatures;
};

function  getRandomFeatures(){
for (let i = 0; i<=featuresNum; i++) {
  features[i]  = featuresArray[i];
}
 return features;
};

function getRandomLengthPhotos() {
  randomPhotos = Math.ceil(Math.random() * (photosArray.length - 0) + 0);
  return randomPhotos;
};

function  getRandomPhotos(){

for (let i = 0; i<=photosNum; i++) {
photos[i] = photosArray[i]
}
 return photos;
};

let firstAd = {

avatarNum: '0' + 1,
avatarAddress: 'url(img/avatars/user/' + avatarNum + '.png)', // написать функцию добавления числа от 01 до 10
//addressValueLat,
//addressValueLng,
addressValueLat: getRandomNumDecimal(35.65000, 35.70000, 5),
addressValueLng: getRandomNumDecimal(139.70000, 139.80000, 5),
result: 0,
roomType: ['palace', 'flat', 'house', 'bungalow', 'hotel'],
roomsNum: 0,
guestsNum: 0,
checkinValue: ['12:00', '13:00', '14:00'],
checkoutValue: ['12:00', '13:00', '14:00'],
featuresValue: ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'],
photosArray: ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'],
locationValue: {
lat: getRandomNumDecimal(35.65000, 35.70000, 5),
lng: getRandomNumDecimal(139.70000, 139.80000, 5)
},
featuresArray: ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'],
features: [],
randomFeatures,
featuresNum: getRandomLength(),
photos: [],
randomPhotos,
photosNum: getRandomLengthPhotos(),

author: {
  avatar: avatarAddress
},
offer: {
  title: '1-е объявление',
  address: addressValueLat + ' ' + addressValueLng,
  price: result,
  type: roomType,
  rooms: roomsNum,
  guests: guestsNum,
  checkin: checkinValue,
  checkout: checkoutValue,
  features: getRandomFeatures(),
  description: 'Комната',
  photos: getRandomPhotos(),
  location: locationValue
},
firstAd.offer.price = getRandomNum(100, 50000),
firstAd.offer.rooms = getRandomNum(1, 4),
firstAd.offer.guests = getRandomNum(1, 8)
};
