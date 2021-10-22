const log = console.log;
const mapCanvas = document.querySelector('#map-canvas');

const similarCardTemplate = document.querySelector('#card').content;
const popup = similarCardTemplate.querySelector('.popup');
const popupAvatar = popup.querySelector('.popup__avatar');
const cardElement = similarCardTemplate.cloneNode(true);

const renderCards = function (object) {
  popupAvatar.src = object.author.avatar;
  mapCanvas.appendChild(cardElement);
};

export {renderCards};

