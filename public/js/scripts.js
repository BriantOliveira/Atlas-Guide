
function doSomething(e) {
    jQuery( "#results" ).toggle()

    // gkey = document.getElementById('gkey').value;
    // city = document.getElementById('city').value.replace(" ", "+");
    // venue = document.getElementById('venue').value;
    
    // jQuery.ajax({
    //     type: "GET",
    //     url: '/search/'+venue+'/'+city,

    // }).done(function(data){
    //     alert(data)
    // })
    // $.get( '/search/'+venue+'/'+city, function(data){
    //     alert(data)
    // } )

    // jQuery.get( 'search/'+venue+'/'+city, function( data ) {
    //     $( ".results" ).html( data );
    //     alert( "Load was performed." );
    //   });


    // $.ajax({
    //     type: 'GET',
    //     url: '/search/'+venue+'/'+city,
    //     success: (results)=>{
    //         alert("results")
    //         $('.results').data(results)
    //     },
    //     error: function (xhr, ajaxOptions, thrownError) { //Add these parameters to display the required response
    //         //alert(xhr.status);
    //         alert("Ajax error: ", ajaxOptions);
    //     },
    // })

    // let gglurl = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+in+San+Francisco&key="+gkey
    // city.replace(" ", "+")
    // let placeAPIStart = "https://maps.googleapis.com/maps/api/place/"
    // let googlesearch = placeAPIStart + "?query="+venue+"+in+"+ city.replace(" ", "+") +"&key="+gkey
    
    
    // fetch(googlesearch).then((googleresults)=>{
    //     return googleresults.json()
    // }).then((json)=>{

    //    json.results.forEach((result)=>{
    //        console.log(result.name)
    //    })

    //    console.log("status:", json.status)
    // }).catch((err)=>{
    //     console.log(err.message)
    // })
    return false;
}

$("body").on("submit", function(e){
    e.preventDefault();
    gkey = document.getElementById('gkey').value;
    city = document.getElementById('city').value.replace(" ", "+");
    venue = document.getElementById('venue').value;
    $("div").animate({left: '250px'});
    jQuery.ajax({
        type: "GET",
        url: '/search/'+venue+'/'+city,

    }).done(function(data){
        alert(data)
    })

    
});

