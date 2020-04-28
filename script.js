function initMap() {
  var hotdog = {lat: 41.864413, lng: -87.818513};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: hotdog
  });

  var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Portillo's Hotdogs</h1>'+
      '<div id="bodyContent">'+
      '<p>Portillo's Hotdogs</p>'
      '<p> This is where I go to eat my favorite burger, The Double Bacon Cheeseburger!'</p>
      '</div>'+
      '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  var marker = new google.maps.Marker({
    position: uluru,
    map: map,
    title: 'Portillo's Hotdogs'
  });
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
}
