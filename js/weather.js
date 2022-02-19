function onGeoSuccess(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log("you live in", lat, lng);
}

function onGeoFailed() {
    alert("Can't find you.")
}


navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoFailed);
onGeoSuccess