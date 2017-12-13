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

function hideItin(){
    $('.add-itin-modal').css('visibility', "hidden");
}

function showAddToItinerary(event){
    console.log(event.target)
    let gooleID = $(event.target).data('place_id')
    let name = $(event.target).data('name')
    $(".itin-title").html(name)
    $(".venue-detail").css("visibility", "hidden");
    $('.add-itin-modal').css('visibility', "visible");
}



function updateVenueDetail(e){
    markMap(e)
}

function markMap(event){
    console.log("event",event);
    let clickedItem = event.target;
    name = clickedItem.dataset.name;
    latitude = clickedItem.dataset.lat;
    longitude = clickedItem.dataset.lng;
    placeId = clickedItem.dataset.placeid;
    zoomLevel = map.getZoom();
    
    settings = {
        position: {lat:parseFloat(latitude), lng:parseFloat(longitude)},
        map: map,
        title: name
    }
    addMapMarker(settings, zoomLevel)
    $(".venue-detail").css("visibility", "visible");

}

function hideVenueDetail(){
    console.log("I'm herer");
    $(".venue-detail").css("visibility", "hidden");
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
        $("#results").html(data);
    });
}

function pointOfInterestSearch(){
    query = document.getElementById('query').value.replace(" ", "+");
    let sourceData;
    let template;

    $.ajax({
        type: "GET",
        url: '/search/' + query,
    }).done(function(data){
        $("#results").html(data);
    });
}


/*************************
*   Map Marker Functions
**************************/
//const mapMarkers = Array()
var mapMarker;

function addMapMarker(settings, zoom = 15){
    if( mapMarker ){
        deleteMapMarker();
    }

    mapMarker = new google.maps.Marker(settings);
    map.panTo(settings.position);
    map.setZoom(zoom);
}

function deleteMapMarker(){
    mapMarker.setMap(null);
    mapMarker = null;
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


/*************************
*   Smooth Scroll
**************************/
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
