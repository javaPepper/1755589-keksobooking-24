const TYPEARRAY = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const CHECKINVALUE = ['12:00', '13:00', '14:00'];
const CHECKOUTVALUE = ['12:00', '13:00', '14:00'];
const adArray = [];
const photos = [];
const features = [];
const featuresArray = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const photosArray = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];

function getRandomNum(from, to) {

  from = Math.ceil(from);
  to = Math.floor(to);

  let result = Math.floor(Math.random() * (to - from + 1)) + from;

  if (from >= to) {
    result = false;

  }
  if (from<0||to<0) {
    result = false;

  }

  return result;
}

function getRandomNumDecimal(from, to, decimal) {

  let resultFloat = Math.random() * (to - from) + from;

  if (from >= to) {
    resultFloat = false;

  }
  if (from<0||to<0) {
    resultFloat = false;

  }
  resultFloat = resultFloat.toFixed(decimal);
  return resultFloat;
}

const getUrl = function(number) {
  if (number<10) {
    return  'img/avatars/user/0' + number + '.png';
  }
  return 'img/avatars/user' + number + '.png';
};

function getRandomLength(array) {
  return Math.floor(Math.random()*(array.length - 0) + 0);
}

const getTitleNum = function (num) {
  return num + '-е объявление';
};

function  getRandomFeatures(){
  for (let i = 0; i<=getRandomLength(featuresArray); i++) {
    features[i]  = featuresArray[i];
  }
  return features;
}

function  getRandomPhotos(){

  for (let i = 0; i<=getRandomLength(photosArray); i++) {
    photos[i] = photosArray[i];
  }
  return photos;
}

const getAdObject = function (avatarNum, titleString) {
  let adObject = {
    author: {
      avatar: avatarNum,
    },
    offer: {
      title: titleString,
      address: getRandomNumDecimal(35.65000, 35.70000, 5) + ', ' + getRandomNumDecimal(139.70000, 139.80000, 5),
      price: getRandomNum(100, 50000),
      type: TYPEARRAY[getRandomLength(TYPEARRAY)],
      rooms: getRandomNum(1, 4),
      guests: getRandomNum(1, 8),
      checkin: CHECKINVALUE[getRandomLength(CHECKINVALUE)] ,
      checkout: CHECKOUTVALUE[getRandomLength(CHECKOUTVALUE)],
      features: getRandomFeatures(),
      description: 'Комната',
      photos: getRandomPhotos(),
    },
    location: {
      lat: getRandomNumDecimal(35.65000, 35.70000, 5),
      lng: getRandomNumDecimal(139.70000, 139.80000, 5)
    },
  };
  return adObject;
};

let createAdObject = function () {
  for (let i=1; i<=10; i++) {
    adArray[i]=getAdObject(getUrl(i), getTitleNum(i));
  }
  return adArray;
};

createAdObject();
