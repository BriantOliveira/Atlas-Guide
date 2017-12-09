<<<<<<< HEAD
// $(function() {
//   $('a[href*=#]').on('click', function(e) {
//     e.preventDefault();
//     $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
//   });
// });

$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > $(window).height()){
            $(".nav-down").css({"background-color":"#E6C274"});
        }
        else{
            $(".navbar").css({"background-color":"transparent"});
        }

    })
})
=======

function doSomething(e) {
    jQuery( ".hidden" ).toggle()
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

    jQuery.ajax({
        type: "GET",
        url: '/search/'+venue+'/'+city,

    }).done(function(data){
        alert(data)
    })

    
});

>>>>>>> 71ab5a2423719d70247794002eecf9e81c135a38
