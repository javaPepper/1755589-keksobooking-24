import{getRandomNum, getRandomNumDecimal, getUrl, getTitleNum, getRandomLength, getRandomFeatures, getRandomPhotos} from './util.js';
const TYPEARRAY = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const CHECKINVALUE = ['12:00', '13:00', '14:00'];
const CHECKOUTVALUE = ['12:00', '13:00', '14:00'];
const ADARRAY = [];
const getAdObject = function (avatarNum, titleString) {
  const adObject = {
    author: {
      avatar: avatarNum,
    },
    offer: {
      title: titleString,
      address: `${getRandomNumDecimal(35.65000, 35.70000, 5)  }, ${  getRandomNumDecimal(139.70000, 139.80000, 5)}`,
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
      lng: getRandomNumDecimal(139.70000, 139.80000, 5),
    },
  };
  return adObject;
};
const createAdObject = function () {
  for (let i=1; i<=10; i++) {
    ADARRAY[i]=getAdObject(getUrl(i), getTitleNum(i));
  }
  return ADARRAY;
};

createAdObject();

