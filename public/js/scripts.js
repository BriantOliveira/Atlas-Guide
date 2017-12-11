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
    //console.log(clickedItem.dataset.name)
    //console.log(Object.keys(latitude[0]))
    // console.log(latlong)
    // console.log(name)
    // console.log(placeId)
    console.log(parseFloat(latitude))
    console.log(parseFloat(longitude))
    
    settings = {
        position: {lat:parseFloat(latitude), lng:parseFloat(longitude)},
        title: "hello"
    }
    //addMapMarker(settings)
    let marker = new google.maps.Marker(settings);
    marker.setMap(map)
    map.panTo({lat:parseFloat(latitude),lng:parseFloat(longitude)})
    map.setZoom(15)
    //mapMarkers.push(marker);

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
const mapMarkers = Array()

function addMapMarker(settings){
    let marker = new google.maps.Marker(settings);
    mapMarkers.push(marker);
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