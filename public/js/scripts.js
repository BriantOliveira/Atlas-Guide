
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

function searchInCity(){
    city = document.getElementById('city').value.replace(" ", "+");
    venue = document.getElementById('venue').value;
    
    jQuery.ajax({
        type: "GET",
        url: '/search/'+venue+'/'+city
    }).done(function(data){
        scraped = []
        console.log("Data:", data);
        data.results.forEach((rowObject)=>{
            newRow = [rowObject.name, rowObject.formatted_address]
            scraped.push(rowObject.name)   
        })
    });
}

function createHTMLTable(doubleAry){
    var table = document.createElement('table');
    var tableBody = document.createElement('tbody');
    
    doubleAry.forEach((givenRow)=> {
        var newRow = document.createElement('tr');
        givenRow.forEach((givenCell)=>{
            var newCell = document.createElement('td');
            newCell.appendChild(document.createTextNode(givenCell));
            newRow.appendChild(newCell);
        });
        tableBody.appendChild(newRow);
        table.appendChild(tableBody);
    });
    return table;
}