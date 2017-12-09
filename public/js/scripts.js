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
