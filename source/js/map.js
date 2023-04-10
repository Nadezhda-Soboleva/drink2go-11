let map;

const centerCoordinates = {
  lat: 59.968250,
  lng: 30.317450,
};

const mainIcon = L.icon({
  iconUrl: 'img/icons/stack.svg#marker',
  iconSize: [76, 100],
  iconAnchor: [38, 100],
});

const mainMarker = L.marker(centerCoordinates, {
  draggable: true,
  icon: mainIcon,
});

export const initMap = (zoomLevel) => {
  map = L.map('map').setView(centerCoordinates, zoomLevel);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
  ).addTo(map);

  mainMarker.addTo(map);
};
