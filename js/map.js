$('.map-container')
    .click(function () {
        $(this).find('#googleMap').addClass('clicked')
    })
    .mouseleave(function () {
        $(this).find('#googleMao').removeClass('clicked')
    });

$(document).ready(function () {
    initMap();
});

function initMap() {
    const mapProperties = {
        center: {
            lat: 50.061293,
            lng: 19.938181
        },
        zoom: 14,
        maxZoom: 16,
        minZoom: 6,
        disableDefaultUI: true,
        zoomControl: true,
        scrollwheel: false,
        styles: [
            {
                "featureType": "all",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "weight": "2.00"
            }
        ]
    },
            {
                "featureType": "all",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#9c9c9c"
            }
        ]
    },
            {
                "featureType": "all",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "on"
            }
        ]
    },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#f2f2f2"
            }
        ]
    },
            {
                "featureType": "landscape",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ffffff"
            }
        ]
    },
            {
                "featureType": "landscape.man_made",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ffffff"
            }
        ]
    },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
            }
        ]
    },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -100
            },
                    {
                        "lightness": 45
            }
        ]
    },
            {
                "featureType": "road",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#eeeeee"
            }
        ]
    },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#7b7b7b"
            }
        ]
    },
            {
                "featureType": "road",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#ffffff"
            }
        ]
    },
            {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
            }
        ]
    },
            {
                "featureType": "road.arterial",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
            }
        ]
    },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
            }
        ]
    },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#46bcec"
            },
                    {
                        "visibility": "on"
            }
        ]
    },
            {
                "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#c8d7d4"
            }
        ]
    },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#070707"
            }
        ]
    },
            {
                "featureType": "water",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#ffffff"
            }
        ]
    }
]
    };

    const map = new google.maps.Map(document.getElementById('googleMap'), mapProperties);


    const markerProperties = {
        position: {
            lat: 50.061293,
            lng: 19.938181
        },
        icon: 'img/google-maps-marker-1.png',
        map: map,
        animation: google.maps.Animation.DROP,
    };

    const marker = new google.maps.Marker(markerProperties);


    function toggleBounce() {
        if (marker.getAnimation() !== null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
    };

    marker.addListener('click', toggleBounce);
}
