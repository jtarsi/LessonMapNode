let myMap;
let center = { lat: 40.6125986, lng: -75.3596242 };

function initMap() {
    myMap = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
    });
    var myLatlng = new google.maps.LatLng(center.lat, center.lng);
    var myMarkerOptions = {
        position: myLatlng,
        map: myMap
    };
    var myMarker = new google.maps.Marker(myMarkerOptions);

}

window.initMap = initMap;