latitude = 40.6125986;
longitude = -75.3596242;
let center = { lat: latitude , lng: longitude };
document.getElementById("latitude").innerHTML = center.lat;
document.getElementById("longitude").innerHTML = center.lng;

function initMap(addMarker, latitude, longitude) {
    latitude = Number(document.getElementById("latitude").innerHTML);
    longitude = Number(document.getElementById("longitude").innerHTML);
    center = {
        lat: latitude, lng: longitude
    }

    myMap = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: center
    });
    var myLatlng = new google.maps.LatLng(center.lat, center.lng);
    var myMarkerOptions = {
        position: myLatlng,
        map: myMap
    };
    var myMarker = new google.maps.Marker(myMarkerOptions);
    console.log(myMarkerOptions);
    console.log(`lat: ${myLatlng.latitude}, lng: ${myLatlng.longitude}`);


//    function addMarker() {
}
    const el = document.getElementById("submit");
    el.addEventListener("click", function() {
    const marker2 = new google.maps.Marker({ 
        latitude: document.getElementById("latitude").innerHTML,
        longitude: document.getElementById("longitude").innerHTML,
        center: { lat: latitude, lng: longitude },
        position: center,
        map: myMap
    });
        console.log(`In event listener: center: {${center.lat},${center.lng}}`)
        console.log(`In event listener: lat: ${center.lat}, lng: ${center.lng}`)
});
