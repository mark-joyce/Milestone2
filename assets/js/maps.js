// Initialize and add the map
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 2,
    center: new google.maps.LatLng(0, 0),
    mapTypeId: 'terrain',
    gestureHandling: 'greedy'
  });

  // The location of Top 10 Destinations
  var canggu = {
    lat: -8.650374779810114,
    lng: 115.13611793518066
  };
  var chiangmai = {
    lat: 18.788911265422144,
    lng: 98.98707389831543
  };
  var buenosaires = {
    lat: -34.607568127801215,
    lng: -58.43756675720214
  };
  var prague = {
    lat: 50.087409586962714,
    lng: 14.421272277832031
  };
  var medellin = {
    lat: 6.24440122931306,
    lng: -75.57297706604004
  };
  var lisbon = {
    lat: 38.708218629351634,
    lng: -9.136676788330078
  };
  var budapest = {
    lat: 47.498473895818734,
    lng: 19.039735794067383
  };
  var hochiminhcity = {
    lat: 10.775638537653744,
    lng: 106.7021369934082
  };
  var kualalumpur = {
    lat: 3.1569707170633405,
    lng: 101.70086860656738
  };
  var mexicocity = {
    lat: 19.432600481483334,
    lng: -99.13328647613525
  };




  // The markers
  var marker = new google.maps.Marker({
    position: canggu,
    map: map
  });
    var marker = new google.maps.Marker({
    position: chiangmai,
    map: map
  });
    var marker = new google.maps.Marker({
    position: buenosaires,
    map: map
  });
    var marker = new google.maps.Marker({
    position: prague,
    map: map
  });
    var marker = new google.maps.Marker({
    position: medellin,
    map: map
  });
    var marker = new google.maps.Marker({
    position: lisbon,
    map: map
  });
    var marker = new google.maps.Marker({
    position: budapest,
    map: map
  });
    var marker = new google.maps.Marker({
    position: hochiminhcity,
    map: map
  });
    var marker = new google.maps.Marker({
    position: kualalumpur,
    map: map
  });
    var marker = new google.maps.Marker({
    position: mexicocity,
    map: map
  });
}
