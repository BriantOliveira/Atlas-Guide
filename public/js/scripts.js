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
        //console.log(data)
        $("#results").html(data)
    })
}

/*************************
*   Map Marker Functions
**************************/
const mapMarkers = []

    function addMapMarker(settings){
        const marker = new google.maps.Marker(settings);
        mapMarker.append(marker);
    }

    function setAllMapMarkers(map){
        for( let i = 0; i < markers.length; i++ ){
            markers[i].setMap(map);
        }
        mapMarkers = [];
    }

    function clearMarkers(){
        setAllMapMarkers(null);
    }