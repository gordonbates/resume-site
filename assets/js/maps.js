function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: 46.619261,
            lng: -33.134766
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    var locations = [{
            lat: 27.4705,
            lng: 153.0260
        },
        {
            lat: 33.8688,
            lng: 151.2093
        },
        {
            lat: 31.9523,
            lng: 115.8613
        },
        {
            lat: 17.9618,
            lng: 122.2370
        },
        {
            lat: 12.4637,
            lng: 130.8444
        },
        {
            lat: 7.7407,
            lng: 98.7784
        },
        {
            lat: 10.0956,
            lng: 99.8404
        },
        {
            lat: 1.3521,
            lng: 103.8198
        },
        {
            lat: 27.6648,
            lng: 81.5158
        },
        {
            lat: 51.5072,
            lng: 0.1276
        },
        {
            lat: 53.3498,
            lng: 6.2603
        },

    ];

    var markers = locations.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerClusterer = new MarkerClusterer(map, markers, {
        imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"
    });
}