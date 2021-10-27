/* eslint-disable no-useless-concat */
//const log = console.log;
let rooms = 'комнаты';
let guests = 'гостей';
const mapCanvas = document.querySelector('#map-canvas');

const similarCardTemplate = document.querySelector('#card').content;
const cardElement = similarCardTemplate.cloneNode(true);

const popup = cardElement.querySelector('.popup');
const popupAvatar = popup.querySelector('.popup__avatar');
const popupTitle = popup.querySelector('.popup__title');
const popupAddress = popup.querySelector('.popup__text--address');
const popupPrice = popup.querySelector('.popup__text--price');
const popupType = popup.querySelector('.popup__type');
const popupCapacity = popup.querySelector('.popup__text--capacity');
const popupTime = popup.querySelector('.popup__text--time');

const popupFeatures = popup.querySelector('.popup__features');
const popFeature = popup.querySelectorAll('.popup__feature');
const popupDescription = popup.querySelector('.popup__description');
const popupPhotos = popup.querySelector('.popup__photo');

const renderCards = function (object) {

  popupAvatar.src = object.author.avatar;
  popupTitle.innerHTML = object.offer.title;
  popupAddress.innerHTML = object.offer.address;
  popupPrice.innerHTML = `${object.offer.price  } ₽/ночь`;
  popupType.innerHTML = object.offer.type;
  if (object.offer.type === 'flat') {
    popupType.innerHTML = 'Квартира';
  }
  if (object.offer.type === 'bungalow') {
    popupType.innerHTML = 'Бунгало';
  }
  if (object.offer.type === 'house') {
    popupType.innerHTML = 'Дом';
  }
  if (object.offer.type === 'palace') {
    popupType.innerHTML = 'Дворец';
  }
  if (object.offer.type === 'hotel') {
    popupType.innerHTML = 'Отель';
  }
  if (object.offer.rooms === 1) {
    rooms = 'комната';
  }
  if (object.offer.guests === 1) {
    guests = 'гостя';
  }
  popupCapacity.innerHTML = `${object.offer.rooms  } ${  rooms  } ` + 'для' + ` ${  object.offer.guests  } ${  guests}`;
  popupTime.innerHTML = `Заезд после ${  object.offer.checkin  }, выезд до ${  object.offer.checkout}`;
  for (let i = 0; i<popFeature.length; i++) {
    popFeature[i].remove();
  }
  for (let i = 0; i<object.offer.features.length; i++) {
    popupFeatures.appendChild(popFeature[i]);
  }
  popupDescription.innerHTML= object.offer.description;
  for (let i = 0; i<3; i++) {
    popupPhotos.src = object.offer.photos[i];
  }
  mapCanvas.appendChild(cardElement);
};

export {renderCards};

