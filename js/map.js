import{ createSimilarAds } from './card.js';
import{showErrorMessage, removeErrorMessage, setCardQuantityOfTen} from './util.js';

const getAddressValue = function() {
  const address = document.querySelector('#address');
  address.value = `${35.68951}  ${139.69171}`;
  return address;
};

const map = L.map('map-canvas');
map.on('load', () =>  {
  fetch('https://24.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((data) =>
      setCardQuantityOfTen(data)
        .forEach((ad) => {
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
getAddressValue();
const setView = function() {
  map.setView({
    lat: 35.68951,
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
      lat: 35.68951,
      lng: 139.69171,
    },
    {
      draggable: true,
      icon: mainIcon,
    },
  );
  mainMarker.addTo(map);
  mainMarker.on('moveend', (evt) => {
    document.querySelector('#address').value = `${evt.target.getLatLng().lat.toFixed(5)}  ${evt.target.getLatLng().lng.toFixed(5)}`;
    return mainMarker;
  });
  return mainMarker;
};
export {map, setMainMarker, setView};
