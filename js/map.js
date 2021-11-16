import{createAdObject} from './data.js';
import{createSimilarAds} from './card.js';

const map = L.map('map-canvas')
  .on('load', () =>  {
    createAdObject();
    for (let i = 0; i<createAdObject().length; i++) {
      createSimilarAds(createAdObject()[i]);
    }
  })
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
}
mainMarker.on('moveend', (evt) => {
  document.querySelector('#address').value = `${evt.target.getLatLng().lat}  ${evt.target.getLatLng().lng}`;
});
export {map};
