import{ createSimilarAds } from './card.js';
import{showErrorMessage, removeErrorMessage} from './util.js';

const map = L.map('map-canvas');
map.on('load', () =>  {
  fetch('https://24.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((data) =>
      data.forEach((ad) => {
        const icon = L.icon({
          iconUrl: 'img/pin.svg',
          iconSize: [40, 40],
          iconAnchor: [20, 40],
        });
        const marker = L.marker(
          {
            lat:ad.location.lat,
            lng:ad.location.lng,
          },
          {
            icon,
          },
        );
        marker
          .addTo(map)
          .bindPopup(createSimilarAds(ad));
      }))
    .catch(() => {
      const err = showErrorMessage('Произошла ошибка, сейчас мы всё исправим');
      removeErrorMessage(err);
    });
});
const setView = function() {
  map.setView({
    lat: 35.68950,
    lng: 139.69171,
  }, 12);
};
setView();
L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);
const mainIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});
const setMainMarker = function() {
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
  mainMarker.on('moveend', (evt) => {
    document.querySelector('#address').value = `${evt.target.getLatLng().lat}  ${evt.target.getLatLng().lng}`;
  });
  return mainMarker;
};
export {map, setMainMarker, setView};
