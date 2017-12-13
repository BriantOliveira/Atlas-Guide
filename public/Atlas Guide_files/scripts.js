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
    // console.log(parseFloat(latitude))
    // console.log(parseFloat(longitude))

    settings = {
        position: {lat:parseFloat(latitude), lng:parseFloat(longitude)},
        map: map,
        title: name
    }
    addMapMarker(settings)
    // let marker = new google.maps.Marker(settings);
    // map.panTo({lat:parseFloat(latitude),lng:parseFloat(longitude)})
    // map.setZoom(15)


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
    // let marker = new google.maps.Marker(settings);
    // mapMarkers.push(marker);
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
