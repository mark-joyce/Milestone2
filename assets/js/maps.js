                var map;
                var InforObj = [];
                var centerCords = {
                  lat: 0,
                  lng: 16
                };

                var markersOnMap = [{
                    placeName: "Bali - Indonesia",
                    contentMarker: '</h1><h5><u>What You Need To Know:</u></h5><ul><li>Lifestyle + Quality of Life - Laid Back, Outdoors but Humid With Poor Healthcare</li><li>Cost of Living - Average of $1000 Per Month</li><li>Things To Do In The Area - Surf or Swim At The Beach, Nice Restaraunts and Nightlife, Hiking Trails In The Green Hills</li><li>Visa Requirements - eVisa Upon Arrival</li><li>Nomad Friendliness - Internet Speed = 20mb/ps, Lots of Places To Work From, Friendly to Foreigners</li></ul> <button href="https://weworkremotely.com/" target=”_blank” class="button">Find Remote Work</button><button href="https://www.skyscanner.com/" target=”_blank” class="button">Book Your Flight</button><button href="https://www.airbnb.com/" target=”_blank” class="button">Book Accommodation</button></div>',
                    LatLng: [{
                      lat: -8.650374779810114,
                      lng: 115.13611793518066
                    }]
                  },
                  {
                    placeName: "Chiang Mai - Thailand",
                    contentMarker: '</h1><h5><u>What You Need To Know:</u></h5><ul><li>Lifestyle + Quality of Life - </li><li>Cost of Living - </li><li>Things To Do In The Area - </li><li>Visa Requirements - </li><li>Nomad Friendliness</li></ul> <button href="https://weworkremotely.com/" target=”_blank” class="button">Find Remote Work</button><button href="https://www.skyscanner.com/" target=”_blank” class="button">Book Your Flight</button><button href="https://www.airbnb.com/" target=”_blank” class="button">Book Accommodation</button></div>',
                    LatLng: [{
                      lat: 18.788911265422144,
                      lng: 98.98707389831543
                    }]
                  },
                  {
                    placeName: "Buenos Aires - Argentina",
                    contentMarker: '</h1><h5><u>What You Need To Know:</u></h5><ul><li>Lifestyle + Quality of Life - </li><li>Cost of Living - </li><li>Things To Do In The Area - </li><li>Visa Requirements - </li><li>Nomad Friendliness</li></ul> <button href="https://weworkremotely.com/" target=”_blank” class="button">Find Remote Work</button><button href="https://www.skyscanner.com/" target=”_blank” class="button">Book Your Flight</button><button href="https://www.airbnb.com/" target=”_blank” class="button">Book Accommodation</button></div>',
                    LatLng: [{
                      lat: -34.607568127801215,
                      lng: -58.43756675720214
                    }]
                  },
                  {
                    placeName: "Prague - Czech Republic",
                    contentMarker: '</h1><h5><u>What You Need To Know:</u></h5><ul><li>Lifestyle + Quality of Life - </li><li>Cost of Living - </li><li>Things To Do In The Area - </li><li>Visa Requirements - </li><li>Nomad Friendliness</li></ul> <button href="https://weworkremotely.com/" target=”_blank” class="button">Find Remote Work</button><button href="https://www.skyscanner.com/" target=”_blank” class="button">Book Your Flight</button><button href="https://www.airbnb.com/" target=”_blank” class="button">Book Accommodation</button></div>',
                    LatLng: [{
                      lat: 50.087409586962714,
                      lng: 14.421272277832031
                    }]
                  },
                  {
                    placeName: "Medellin - Colombia",
                    contentMarker: '</h1><h5><u>What You Need To Know:</u></h5><ul><li>Lifestyle + Quality of Life - </li><li>Cost of Living - </li><li>Things To Do In The Area - </li><li>Visa Requirements - </li><li>Nomad Friendliness</li></ul> <button href="https://weworkremotely.com/" target=”_blank” class="button">Find Remote Work</button><button href="https://www.skyscanner.com/" target=”_blank” class="button">Book Your Flight</button><button href="https://www.airbnb.com/" target=”_blank” class="button">Book Accommodation</button></div>',
                    LatLng: [{
                      lat: 6.24440122931306,
                      lng: -75.57297706604004
                    }]
                  },
                  {
                    placeName: "Lisbon - Portugal",
                    contentMarker: '</h1><h5><u>What You Need To Know:</u></h5><ul><li>Lifestyle + Quality of Life - </li><li>Cost of Living - </li><li>Things To Do In The Area - </li><li>Visa Requirements - </li><li>Nomad Friendliness</li></ul> <button href="https://weworkremotely.com/" target=”_blank” class="button">Find Remote Work</button><button href="https://www.skyscanner.com/" target=”_blank” class="button">Book Your Flight</button><button href="https://www.airbnb.com/" target=”_blank” class="button">Book Accommodation</button></div>',
                    LatLng: [{
                      lat: 38.708218629351634,
                      lng: -9.136676788330078
                    }]
                  },
                  {
                    placeName: "Budapest - Hungary",
                    contentMarker: '</h1><h5><u>What You Need To Know:</u></h5><ul><li>Lifestyle + Quality of Life - </li><li>Cost of Living - </li><li>Things To Do In The Area - </li><li>Visa Requirements - </li><li>Nomad Friendliness</li></ul> <button href="https://weworkremotely.com/" target=”_blank” class="button">Find Remote Work</button><button href="https://www.skyscanner.com/" target=”_blank” class="button">Book Your Flight</button><button href="https://www.airbnb.com/" target=”_blank” class="button">Book Accommodation</button></div>',
                    LatLng: [{
                      lat: 47.498473895818734,
                      lng: 19.039735794067383
                    }]
                  },
                  {
                    placeName: "Ho Chi Minh City - Vietnam",
                    contentMarker: '</h1><h5><u>What You Need To Know:</u></h5><ul><li>Lifestyle + Quality of Life - </li><li>Cost of Living - </li><li>Things To Do In The Area - </li><li>Visa Requirements - </li><li>Nomad Friendliness</li></ul> <button href="https://weworkremotely.com/" target=”_blank” class="button">Find Remote Work</button><button href="https://www.skyscanner.com/" target=”_blank” class="button">Book Your Flight</button><button href="https://www.airbnb.com/" target=”_blank” class="button">Book Accommodation</button></div>',
                    LatLng: [{
                      lat: 10.775638537653744,
                      lng: 106.7021369934082
                    }]
                  },
                  {
                    placeName: "Kuala Lumpur - Malaysia",
                    contentMarker: '</h1><h5><u>What You Need To Know:</u></h5><ul><li>Lifestyle + Quality of Life - </li><li>Cost of Living - </li><li>Things To Do In The Area - </li><li>Visa Requirements - </li><li>Nomad Friendliness</li></ul> <button href="https://weworkremotely.com/" target=”_blank” class="button">Find Remote Work</button><button href="https://www.skyscanner.com/" target=”_blank” class="button">Book Your Flight</button><button href="https://www.airbnb.com/" target=”_blank” class="button">Book Accommodation</button></div>',
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
                    var contentString = '<div id="heading"><h1>' + markersOnMap[i].placeName + markersOnMap[i].contentMarker;

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
