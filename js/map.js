import{createAdObject} from './data.js';
import{createSimilarAds} from './card.js';

const map = L.map('map-canvas')
  .setView({
    lat: 35.68950,
    lng: 139.69171,
  }, 10);
map.on('load', () =>  {
  const cardArray = createAdObject();
  cardArray.forEach((ad) => {
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
  });
});
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
export {map};
