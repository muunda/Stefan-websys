$(document).ready(function() {
	console.log("Ready!!!!");
	$("#coverart").click(function() {
  	alert( "Handler for .click() called." );
    $.ajax({ 
        type: 'GET', 
        url: 'lab4JSON.json',  
        dataType: 'json',
        success: function (data) { 
         $.each(data.songs, function(index, element){
         	var building = '<div class = "songs"><ul id="headings">'+ 
         		'<li class = "name">'+ element.name+ '</li>'+
         		'<li class = "artist">'+ element.artist+ '</li>'+
         		'<li class = "album">'+ element.album+ '</li>'+ 
         		'<li class = "art"><img src="'+ element.art+ '"alt=""></li>'+ 
         		'<li class = "date">'+ element.date+ '</li>'+ 
         		'<li class = "genre">'+ element.genre+ '</li>'+ 
         		'<li class = "link">'+ element.link+ '</li>'+ 
         		'</ul></div>';
         		alert(building);
         		$('body').append(building);
        });
    	}
		});
	});
}); 