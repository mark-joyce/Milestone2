var labels = '123456789';
var labelIndex = 0;

function initialize() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 2,
    gestureHandling: 'greedy',
    disableDefaultUI: true,
    center: {
      lat: 0,
      lng: 0
    }
  });

  // Canggu No.1
  var canggu = {
    lat: -8.650374779810114,
    lng: 115.13611793518066
  };

  var marker = new google.maps.Marker({
    position: canggu,
    map: map,
    label: labels[labelIndex++ % labels.length]
  });

  // Chiang Mai No.2
  var chiangmai = {
    lat: 18.788911265422144,
    lng: 98.98707389831543
  };

  var marker = new google.maps.Marker({
    position: chiangmai,
    map: map,
    label: labels[labelIndex++ % labels.length]
  });

  // Buenos Aires No.3
  var buenosaires = {
    lat: -34.607568127801215,
    lng: -58.43756675720214
  };

  var marker = new google.maps.Marker({
    position: buenosaires,
    map: map,
    label: labels[labelIndex++ % labels.length]
  });

  // Prague No.4
  var prague = {
    lat: 50.087409586962714,
    lng: 14.421272277832031
  };

  var marker = new google.maps.Marker({
    position: prague,
    map: map,
    label: labels[labelIndex++ % labels.length]
  });

  // Medellin No.5
  var medellin = {
    lat: 6.24440122931306,
    lng: -75.57297706604004
  };

  var marker = new google.maps.Marker({
    position: medellin,
    map: map,
    label: labels[labelIndex++ % labels.length]
  });

  // Lisbon No.6
  var lisbon = {
    lat: 38.708218629351634,
    lng: -9.136676788330078
  };

  var marker = new google.maps.Marker({
    position: lisbon,
    map: map,
    label: labels[labelIndex++ % labels.length]
  });

  // Budapest No.7
  var budapest = {
    lat: 47.498473895818734,
    lng: 19.039735794067383
  };

  var marker = new google.maps.Marker({
    position: budapest,
    map: map,
    label: labels[labelIndex++ % labels.length]
  });

  // Kuala Lumpur No.8
  var hochiminhcity = {
    lat: 10.775638537653744,
    lng: 106.7021369934082
  };

  var marker = new google.maps.Marker({
    position: hochiminhcity,
    map: map,
    label: labels[labelIndex++ % labels.length]
  });

  // Kuala Lumpur No.9
  var kualalumpur = {
    lat: 3.1569707170633405,
    lng: 101.70086860656738
  };

  var marker = new google.maps.Marker({
    position: kualalumpur,
    map: map,
    label: labels[labelIndex++ % labels.length]
  });

}

google.maps.event.addDomListener(window, 'load', initialize);
