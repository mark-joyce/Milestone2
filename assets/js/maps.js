                var map;
                var InforObj = [];
                var centerCords = {
                  lat: 0,
                  lng: 16
                };

                var markersOnMap = [{
                    placeName: "Bali - Indonesia",
                    contentMarker: '</h1><p>Lorem ipsum dolor sit amet, detraxit.</p></div>',
                    LatLng: [{
                      lat: -8.650374779810114,
                      lng: 115.13611793518066
                    }]
                  },
                  {
                    placeName: "Chiang Mai - Thailand",
                    contentMarker: '</h1><p>Lorem ipsum dolor sit detraxit.</p></div>',
                    LatLng: [{
                      lat: 18.788911265422144,
                      lng: 98.98707389831543
                    }]
                  },
                  {
                    placeName: "Buenos Aires - Argentina",
                    contentMarker: '</h1><p>Lorem ipsum, vel ea tantas omittam detraxit.</p></div>',
                    LatLng: [{
                      lat: -34.607568127801215,
                      lng: -58.43756675720214
                    }]
                  },
                  {
                    placeName: "Prague - Czech Republic",
                    contentMarker: '</h1><p>Lorem ipsum dolor sit amet, vel ea tantas.</p></div>',
                    LatLng: [{
                      lat: 50.087409586962714,
                      lng: 14.421272277832031
                    }]
                  },
                  {
                    placeName: "Medellin - Colombia",
                    contentMarker: '</h1><p>Lorem ipsum, omittam detraxit.</p></div>',
                    LatLng: [{
                      lat: 6.24440122931306,
                      lng: -75.57297706604004
                    }]
                  },
                  {
                    placeName: "Lisbon - Portugal",
                    contentMarker: '</h1><p>Lorem ipsum dolor sit amet, vel ea detraxit.</p></div>',
                    LatLng: [{
                      lat: 38.708218629351634,
                      lng: -9.136676788330078
                    }]
                  },
                  {
                    placeName: "Budapest - Hungary",
                    contentMarker: '</h1><p>Lorem ipsum dolor sit amet, tantas omittam detraxit.</p></div>',
                    LatLng: [{
                      lat: 47.498473895818734,
                      lng: 19.039735794067383
                    }]
                  },
                  {
                    placeName: "Ho Chi Minh City - Vietnam",
                    contentMarker: '</h1><p>Lorem ipsum dolor sit amet, vel ea tantas omittam detraxit.</p></div>',
                    LatLng: [{
                      lat: 10.775638537653744,
                      lng: 106.7021369934082
                    }]
                  },
                  {
                    placeName: "Kuala Lumpur - Malaysia",
                    contentMarker: '</h1><p>Lorem ipsum dolor sit amet, vix mutat posse suscipit id, vel ea tantas omittam detraxit.</p></div>',
                    LatLng: [{
                      lat: 3.1569707170633405,
                      lng: 101.70086860656738
                    }]
                  }
                ];

                window.onload = function() {
                  initMap();
                };

                function addMarker() {
                  for (var i = 0; i < markersOnMap.length; i++) {
                    var contentString = '<div id="content"><h1>' + markersOnMap[i].placeName + markersOnMap[i].contentMarker;

                    const marker = new google.maps.Marker({
                      position: markersOnMap[i].LatLng[0],
                      label: labels[labelIndex++ % labels.length],
                      map: map
                    });

                    const infowindow = new google.maps.InfoWindow({
                      content: contentString
                    });

                    marker.addListener('click', function() {
                      closeOtherInfo();
                      infowindow.open(marker.get('map'), marker);
                      InforObj[0] = infowindow;
                    });
                  }
                }

                function closeOtherInfo() {
                  if (InforObj.length > 0) {
                    /* detach the info-window from the marker ... undocumented in the API docs */
                    InforObj[0].set("marker", null);
                    /* and close it */
                    InforObj[0].close();
                    /* blank the array */
                    InforObj.length = 0;
                  }
                }

                var labels = '123456789';
                var labelIndex = 0;

                function initMap() {
                  map = new google.maps.Map(document.getElementById('map'), {
                    zoom: 3,
                    gestureHandling: 'greedy',
                    disableDefaultUI: true,
                    restriction: {
                      latLngBounds: {
                        north: 85,
                        south: -85,
                        west: -180,
                        east: 180
                      }
                    },
                    center: {
                      lat: 0,
                      lng: 16
                    }
                  });
                  addMarker();
                }
