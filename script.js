// Initialize and add the map
function initMap() {
  // The location of Uluru
  var uluru = {lat: 41.864410, lng:  -87.818508};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}
google.maps.event.addDomListener(window, 'load', init);
