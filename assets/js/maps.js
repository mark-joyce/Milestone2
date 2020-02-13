                var map;
                var InforObj = [];

                var markersOnMap = [{
                    placeName: "Bali - Indonesia",
                    contentMarker: '</h1><h5><u>What You Need To Know:</u></h5><h6><ul><li>Lifestyle + Quality of Life - Laid Back, Outdoors but Humid With Poor Healthcare</li><li>Cost of Living - Average of $1000 Per Month</li><li>Things To Do In The Area - Surf or Swim At The Beach, Nice Restaraunts and Nightlife, Hiking Trails In The Green Hills</li><li>Visa Requirements - eVisa Upon Arrival</li><li>Nomad Friendliness - Internet Speed = 20mb/ps, Lots of Places To Work From, Friendly to Foreigners</li></ul></h6> <a class="button" href="https://weworkremotely.com/" target=”_blank”>Find Remote Work</a> <a class="button" href="https://www.skyscanner.ie/flights-to/dps/cheap-flights-to-bali-(denpasar)-airport.html" target=”_blank”>Book Your Flight</a> <a class="button" href="https://www.airbnb.com/s/Bali--Indonesia/homes" target=”_blank”>Book Your Accommodation</a></div>',
                    LatLng: [{
                      lat: -8.650374779810114,
                      lng: 115.13611793518066
                    }]
                  },
                  {
                    placeName: "Chiang Mai - Thailand",
                    contentMarker: '</h1><h5><u>What You Need To Know:</u></h5><h6><ul><li>Lifestyle + Quality of Life - City Living, Outdoors but Poor Air Quality</li><li>Cost of Living - Average of $1005 Per Month</li><li>Things To Do In The Area - Walk the Bustling City, Visit Ancient Temples, Walk the Jungle Landscape</li><li>Visa Requirements - eVisa Upon Arrival</li><li>Nomad Friendliness - Internet Speed = 20mb/ps, Lots of Places To Work From, Walkable Everywhere</li></ul></h6> <a class="button" href="https://weworkremotely.com/" target=”_blank”>Find Remote Work</a> <a class="button" href="https://www.skyscanner.ie/flights-to/cnx/cheap-flights-to-chiang-mai-airport.html" target=”_blank”>Book Your Flight</a> <a class="button" href="https://www.airbnb.com/s/Chiang-Mai-Thailand/homes" target=”_blank”>Book Your Accommodation</a></div>',
                    LatLng: [{
                      lat: 18.788911265422144,
                      lng: 98.98707389831543
                    }]
                  },
                  {
                    placeName: "Buenos Aires - Argentina",
                    contentMarker: '</h1><h5><u>What You Need To Know:</u></h5><h6><ul><li>Lifestyle + Quality of Life - City Living, Nature-Driven but Not The Safest</li><li>Cost of Living - Average of $1260 Per Month</li><li>Things To Do In The Area - Outdoor Sports, Nice Restaraunts and Nightlife, Hiking In The Mountains</li><li>Visa Requirements - None For 90 Days</li><li>Nomad Friendliness - Internet Speed = 8mb/ps, Welcoming to Business Owners, Friendly to Foreigners</li></ul></h6> <a class="button" href="https://weworkremotely.com/" target=”_blank”>Find Remote Work</a> <a class="button" href="https://www.skyscanner.ie/flights-to/buea/cheap-flights-to-buenos-aires.html" target=”_blank”>Book Your Flight</a> <a class="button" href="https://www.airbnb.com/s/Buenos-Aires--Argentina/homes" target=”_blank”>Book Your Accommodation</a></div>',
                    LatLng: [{
                      lat: -34.607568127801215,
                      lng: -58.43756675720214
                    }]
                  },
                  {
                    placeName: "Prague - Czech Republic",
                    contentMarker: '</h1><h5><u>What You Need To Know:</u></h5><h6><ul><li>Lifestyle + Quality of Life - City Life, Cozy but Very Touristy</li><li>Cost of Living - Average of $2040 Per Month</li><li>Things To Do In The Area - See Beautiful Architecture, Nice Restaraunts and Nightlife, Walk the Cobbled Streets</li><li>Visa Requirements - None for 90 Days</li><li>Nomad Friendliness - Internet Speed = 26mb/ps, Very Convenient, Very Safe</li></ul></h6> <a class="button" href="https://weworkremotely.com/" target=”_blank”>Find Remote Work</a> <a class="button" href="https://www.skyscanner.ie/flights-to/prg/cheap-flights-to-prague-airport.html" target=”_blank”>Book Your Flight</a> <a class="button" href="https://www.airbnb.com/s/Prague--Czech-Republic/homes" target=”_blank”>Book Your Accommodation</a></div>',
                    LatLng: [{
                      lat: 50.087409586962714,
                      lng: 14.421272277832031
                    }]
                  },
                  {
                    placeName: "Medellin - Colombia",
                    contentMarker: '</h1><h5><u>What You Need To Know:</u></h5><h6><ul><li>Lifestyle + Quality of Life - City Life, Nestled in the Mountains but Not The Safest</li><li>Cost of Living - Average of $1200 Per Month</li><li>Things To Do In The Area - Play Football Outdoors, Nice Restaraunts and Nightlife, Hike The Mountains</li><li>Visa Requirements - None for 90 Days</li><li>Nomad Friendliness - Internet Speed = 7mb/ps, Lots of Places To Work From, Very Walkable</li></ul></h6> <a class="button" href="https://weworkremotely.com/" target=”_blank”>Find Remote Work</a> <a class="button" href="https://www.skyscanner.ie/flights-from/mdea/cheap-flights-from-medellin.html" target=”_blank”>Book Your Flight</a> <a class="button" href="https://www.airbnb.com/s/Medellin--Antioquia--Colombia/homes" target=”_blank”>Book Your Accommodation</a></div>',
                    LatLng: [{
                      lat: 6.24440122931306,
                      lng: -75.57297706604004
                    }]
                  },
                  {
                    placeName: "Lisbon - Portugal",
                    contentMarker: '</h1><h5><u>What You Need To Know:</u></h5><h6><ul><li>Lifestyle + Quality of Life - Laid Back, Fun but has Sub-Par Hospitals</li><li>Cost of Living - Average of $2075 Per Month</li><li>Things To Do In The Area - Swim At The Beach, Nice Restaraunts and Nightlife, Visit Galleries and Museums</li><li>Visa Requirements - None For 90 Days</li><li>Nomad Friendliness - Internet Speed = 21mb/ps, Lots of Places To Work From, Friendly to Foreigners</li></ul></h6> <a class="button" href="https://weworkremotely.com/" target=”_blank”>Find Remote Work</a> <a class="button" href="https://www.skyscanner.ie/flights-to/lis/cheap-flights-to-lisbon-airport.html" target=”_blank”>Book Your Flight</a> <a class="button" href="https://www.airbnb.com/s/Lisbon--Portugal/homes" target=”_blank”>Book Your Accommodation</a></div>',
                    LatLng: [{
                      lat: 38.708218629351634,
                      lng: -9.136676788330078
                    }]
                  },
                  {
                    placeName: "Budapest - Hungary",
                    contentMarker: '</h1><h5><u>What You Need To Know:</u></h5><h6><ul><li>Lifestyle + Quality of Life - City Life, Outdoors but Poor Racial Tolerance</li><li>Cost of Living - Average of $1600 Per Month</li><li>Things To Do In The Area - See Beautiful Architecture, Nice Restaraunts and Nightlife, Do History Day Tours</li><li>Visa Requirements - None For 90 Days</li><li>Nomad Friendliness - Internet Speed = 34mb/ps, Lots of Places To Work From, Very Safe and Walkable</li></ul></h6> <a class="button" href="https://weworkremotely.com/" target=”_blank”>Find Remote Work</a> <a class="button" href="https://www.skyscanner.ie/flights-to/bud/cheap-flights-to-budapest-airport.html" target=”_blank”>Book Your Flight</a> <a class="button" href="https://www.airbnb.com/s/budapest/homes" target=”_blank”>Book Your Accommodation</a></div>',
                    LatLng: [{
                      lat: 47.498473895818734,
                      lng: 19.039735794067383
                    }]
                  },
                  {
                    placeName: "Ho Chi Minh City - Vietnam",
                    contentMarker: '</h1><h5><u>What You Need To Know:</u></h5><h6><ul><li>Lifestyle + Quality of Life - Laid Back, Outdoors but Noisy and Chaotic With Traffic</li><li>Cost of Living - Average of $1010 Per Month</li><li>Things To Do In The Area - Eat Local Foods, Nice Restaraunts and Nightlife, Digital Nomad Meetups</li><li>Visa Requirements - eVisa Upon Arrival</li><li>Nomad Friendliness - Internet Speed = 9mb/ps, Lots of Places To Work From, Friendly to Foreigners</li></ul></h6> <a class="button" href="https://weworkremotely.com/" target=”_blank”>Find Remote Work</a> <a class="button" href="https://www.skyscanner.ie/flights-from/sgn/cheap-flights-from-ho-chi-minh-city-airport.html" target=”_blank”>Book Your Flight</a> <a class="button" href="https://www.airbnb.com/s/Ho-Chi-Minh-City--Ho-Chi-Minh--Vietnam/homes" target=”_blank”>Book Your Accommodation</a></div>',
                    LatLng: [{
                      lat: 10.775638537653744,
                      lng: 106.7021369934082
                    }]
                  },
                  {
                    placeName: "Kuala Lumpur - Malaysia",
                    contentMarker: '</h1><h5><u>What You Need To Know:</u></h5><h6><ul><li>Lifestyle + Quality of Life - Laid Back, Outdoors but Humid With Poor Healthcare</li><li>Cost of Living - Average of $1000 Per Month</li><li>Things To Do In The Area - Meetup With Other Nomads, Nice Restaraunts and Nightlife, Hiking Trails In The Green Hills</li><li>Visa Requirements - eVisa Upon Arrival</li><li>Nomad Friendliness - Internet Speed = 10mb/ps, Lots of Places To Work From, Walkable and Safe</li></ul></h6> <a class="button" href="https://weworkremotely.com/" target=”_blank”>Find Remote Work</a> <a class="button" href="https://www.skyscanner.ie/flights-from/kulm/cheap-flights-from-kuala-lumpur.html" target=”_blank”>Book Your Flight</a> <a class="button" href="https://www.airbnb.com/s/Kuala-Lumpur-Malaysia/homes" target=”_blank”>Book Your Accommodation</a></div>',
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