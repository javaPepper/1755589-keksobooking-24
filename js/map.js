import{createAdObject} from './data.js';

const map = L.map('map-canvas')
  .setView({
    lat: 35.68950,
    lng: 139.69171,
  }, 10);
L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);
const mainIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
});
const icon = L.icon({
  iconUrl: 'img/pin.svg',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
});
const mainMarker = L.marker(
  {
    lat: 35.68950,
    lng: 139.69171,
  },
  {
    draggable: true,
    icon: mainIcon,
  },
);
mainMarker.addTo(map);
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
  similarAd.querySelector('.popup__description').textContent = ad.offer.description;
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
  return similarAd;
};
const setAdLatLng = (ad) => {
  const marker = L.marker(
    {
      lat:ad.location.lat,
      lng:ad.location.lng,
    },
    {
      icon: icon,
    },
  );
  marker
    .addTo(map)
    .bindPopup(createSimilarAds(ad));
  return ad;
};

for (let i = 0; i<createAdObject().length; i++) {
  setAdLatLng(createAdObject()[i]);
  createSimilarAds(createAdObject()[i]);
}
export {map};
