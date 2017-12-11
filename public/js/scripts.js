$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > $(window).height()){
            $(".nav-down").css({"background-color":"#E6C274"});
        }
        else{
            $(".navbar").css({"background-color":"transparent"});
        }
    });
});

function markMap(obj){
    clickedItem = event.target;
    name = clickedItem.dataset.name
    latitude = clickedItem.dataset.lat
    longitude = clickedItem.dataset.lng
    placeId = clickedItem.dataset.placeid
    
    settings = {
        position: {lat:parseFloat(latitude), lng:parseFloat(longitude)},
        map: map,
        title: name
    }
    addMapMarker(settings)

}

/******************************
*   Google Places API Search
*******************************/
function searchInCity(){
    city = document.getElementById('city').value.replace(" ", "+");
    venue = document.getElementById('venue').value;
    let sourceData;
    let template;

    $.ajax({
        type: "GET",
        url: '/search/'+venue+'/'+city,
    }).done(function(data){
        $("#results").html(data)
    })
}

/*************************
*   Map Marker Functions
**************************/
//const mapMarkers = Array()
var mapMarker;

function addMapMarker(settings){
    if( mapMarker ){
        deleteMapMarker();
    }
    
    mapMarker = new google.maps.Marker(settings);
    map.panTo(settings.position)
    map.setZoom(15)
}

function deleteMapMarker(){
    mapMarker.setMap(null)
    mapMarker = null
}

function setAllMapMarkers(map){
    for( let i = 0; i < markers.length; i++ ){
        markers[i].setMap(map);
    }
    this.mapMarkers = [];
}

function clearMarkers(){
    setAllMapMarkers(null);
}