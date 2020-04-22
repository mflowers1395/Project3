var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 41.864677, lng: -87.818539},
    zoom: 8
  });
}
google.maps.event.addDomListener(window, 'load', init);
