const createSimilarAds = (ad) => {
  const template = document.querySelector('#card').content.querySelector('.popup');
  const similarAd = template.cloneNode(true);
  similarAd.querySelector('.popup__avatar').src = ad.author.avatar;
  similarAd.querySelector('.popup__title').textContent = ad.offer.title;
  similarAd.querySelector('.popup__text--address').textContent = ad.offer.address;
  similarAd.querySelector('.popup__text--price').textContent = `${ad.offer.price  } ₽/ночь`;
  similarAd.querySelector('.popup__type').textContent = ad.offer.type;
  if (ad.offer.type === 'flat') {
    similarAd.querySelector('.popup__type').textContent = 'Квартира';
  }
  if (ad.offer.type === 'bungalow') {
    similarAd.querySelector('.popup__type').textContent = 'Бунгало';
  }
  if (ad.offer.type === 'house') {
    similarAd.querySelector('.popup__type').textContent = 'Дом';
  }
  if (ad.offer.type === 'palace') {
    similarAd.querySelector('.popup__type').textContent = 'Дворец';
  }
  if (ad.offer.type === 'hotel') {
    similarAd.querySelector('.popup__type').textContent = 'Отель';
  }
  similarAd.querySelector('.popup__text--capacity').textContent = `${ad.offer.rooms} комнаты для ${ad.offer.guests} гостей`;
  similarAd.querySelector('.popup__text--time').textContent = `Заезд после ${  ad.offer.checkin  }, выезд до ${  ad.offer.checkout}`;
  const popFeature = similarAd.querySelectorAll('.popup__feature');
  const popupFeatures = similarAd.querySelector('.popup__features');
  for (let i = 0; i<popFeature.length; i++) {
    popFeature[i].remove();
  }
  for (let i = 0; i<ad.offer.features.length; i++) {
    const popupFeaturesCollection = document.createElement('li');
    popupFeaturesCollection.classList.add('popup__feature');
    popupFeaturesCollection.classList.add(`popup__feature--${  ad.offer.features[i]}`);
    popupFeatures.appendChild(popupFeaturesCollection);
  }
  const popupDescription = similarAd.querySelector('.popup__description');
  popupDescription.textContent = ad.offer.description;
  const photosList = similarAd.querySelector('.popup__photo');
  const popupPhotos = similarAd.querySelector('.popup__photos');
  photosList.remove();
  for (let i = 0; i<ad.offer.photos.length; i++) {
    const popPhotos = document.createElement('img');
    popPhotos.classList.add('popup__photo');
    popPhotos.width = '45';
    popPhotos.height = '40';
    popPhotos.src = ad.offer.photos[i];
    popupPhotos.appendChild(popPhotos);
  }
  if (ad.offer.features === '' || ad.offer.features === undefined) {
    popupFeatures.remove();
  }
  if (ad.offer.description.textContent === '' || ad.offer.description.textContent === undefined) {
    popupDescription.remove();
  }
  if (ad.offer.photos === '' || ad.offer.photos === undefined) {
    popupPhotos.remove();
  }
  return similarAd;
};

export {createSimilarAds};
