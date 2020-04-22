function initMap() {

  var uluru = {lat: 41.864677, lng: -87.818539};

  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 12, center: uluru});

  var marker = new google.maps.Marker({position: uluru, map: map});
}
google.maps.event.addDomListener(window, 'load', init);
