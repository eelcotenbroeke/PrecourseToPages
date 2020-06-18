const eelcoCities = [
  {
    cityName: "Heino",
    zoomLevel: 10,
    latitude: 52.43661,
    longitude: 6.23282,
  },
  {
    cityName: "Velden",
    zoomLevel: 10,
    latitude: 48.36632,
    longitude: 12.25596,
  },
  {
    cityName: "Grubbenvorst",
    zoomLevel: 10,
    latitude: 51.42,
    longitude: 6.146,
  },
  {
    cityName: "The Hague",
    zoomLevel: 10,
    latitude: 52.07667,
    longitude: 4.29861,
  },
  {
    cityName: "Hong Kong",
    zoomLevel: 10,
    latitude: 22.302711,
    longitude: 114.177216,
  },
  {
    cityName: "San Jose",
    zoomLevel: 10,
    latitude: 9.934739,
    longitude: -84.087502,
  },
  {
    cityName: "Sydney",
    zoomLevel: 10,
    latitude: -33.865143,
    longitude: 151.2099,
  },
  {
    cityName: "Madrid",
    zoomLevel: 10,
    latitude: 40.416775,
    longitude: -3.70379,
  },
  {
    cityName: "Tel Aviv",
    zoomLevel: 10,
    latitude: 32.109333,
    longitude: 34.855499,
  },
];

function initMap(city) {
  const { zoomLevel, latitude, longitude, cityName } = city;
  let mapConfig = {
    zoom: zoomLevel,
    center: new google.maps.LatLng(latitude, longitude),
    mapTypeID: "roadmap",
  };
  let map = new google.maps.Map(document.getElementById("map"), mapConfig);
  let cityLocation = { lat: latitude, lng: longitude };
  let cityMarker = new google.maps.Marker({
    position: cityLocation,
    map: map,
    title: cityName,
  });
}

function initMapDefault() {
  initMap(eelcoCities[0]);
}

const prevButton = document.getElementById("previous");
const nextButton = document.getElementById("next");

let counter = 0;
prevButton.disabled = true;

function counterCheck(listOfCities) {
  if (counter >= listOfCities.length - 1) {
    nextButton.disabled = true;
  } else if (counter === 0) {
    prevButton.disabled = true;
  } else {
    nextButton.disabled = false;
    prevButton.disabled = false;
  }
  initMap(listOfCities[counter]);
}

nextButton.addEventListener("click", () => {
  counter++;
  counterCheck(eelcoCities);
});

prevButton.addEventListener("click", () => {
  counter--;
  counterCheck(eelcoCities);
});
