function initialize() {
  var mapOptions = {
    zoom: 18,
	scrollwheel: false,
    center: new google.maps.LatLng(59.936255,30.321091)
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'),
                                mapOptions);
  var image = "../img/map-image.png";
  var myLatLng = new google.maps.LatLng(59.936118, 30.321008);
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image
  });
}
google.maps.event.addDomListener(window, 'load', initialize);
