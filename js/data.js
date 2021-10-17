import{getUrl, getTitleNum, getRandomNum, getRandomNumDecimal, getRandomIndex} from './util.js';
const TYPEARRAY = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const CHECKINVALUE = ['12:00', '13:00', '14:00'];
const CHECKOUTVALUE = ['12:00', '13:00', '14:00'];
const FEATURES = [];
const FEATURESARRAY = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = [];
const PHOTOSARRAY = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
const  getRandomFeatures = function(){
  for (let i = 0; i<=getRandomIndex(FEATURESARRAY); i++) {
    FEATURES[i]  = FEATURESARRAY[i];
  }
  return FEATURES;
};
function  getRandomPhotos(){

  for (let i = 0; i<=getRandomIndex(PHOTOSARRAY); i++) {
    PHOTOS[i] = PHOTOSARRAY[i];
  }
  return PHOTOS;
}
const getAdObject = function (avatarNum, titleString) {
  const adObject = {
    author: {
      avatar: avatarNum,
    },
    offer: {
      title: titleString,
      address: `${getRandomNumDecimal(35.65000, 35.70000, 5)  }, ${  getRandomNumDecimal(139.70000, 139.80000, 5)}`,
      price: getRandomNum(100, 50000),
      type: TYPEARRAY[getRandomIndex(TYPEARRAY)],
      rooms: getRandomNum(1, 4),
      guests: getRandomNum(1, 8),
      checkin: CHECKINVALUE[getRandomIndex(CHECKINVALUE)] ,
      checkout: CHECKOUTVALUE[getRandomIndex(CHECKOUTVALUE)],
      features: getRandomFeatures(),
      description: 'Комната',
      photos: getRandomPhotos(),
    },
    location: {
      lat: getRandomNumDecimal(35.65000, 35.70000, 5),
      lng: getRandomNumDecimal(139.70000, 139.80000, 5),
    },
  };
  return adObject;
};

const adArray = [];

const createAdObject = function () {
  for (let i=1; i<=10; i++) {
    adArray[i]=getAdObject(getUrl(i), getTitleNum(i));
  }
  return adArray;
};
export{createAdObject};
