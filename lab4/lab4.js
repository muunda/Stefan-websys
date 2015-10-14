$(document).ready(function() {
	console.log("Ready!!!!");
	$("#coverart").click(function() {
    $.ajax({ 
        type: 'GET', 
        url: 'lab4JSON.json',  
        dataType: 'json',
        success: function (data) { 
        	$( "#site" ).remove();
        	$('body').append('<div class = "song"><ul id="headings"><li class = "name">Song</li><li class = "artist">Artist</li><li class = "album">Album</li><li class = "art">Cover</li><li class = "date">Date</li><li class = "genre">Genre</li><li class = "link">Website</li></ul></div>');
         $.each(data.songs, function(index, element){
         	var building = '<div class = "song"><ul>'+ 
         		'<li class = "name">'+ element.name+ '</li>'+
         		'<li class = "artist">'+ element.artist+ '</li>'+
         		'<li class = "album">'+ element.album+ '</li>'+ 
         		'<li class = "art"><img src="'+ element.art+ '"alt=""></li>'+ 
         		'<li class = "date">'+ element.date+ '</li>'+ 
         		'<li class = "genre">'+ element.genre+ '</li>'+ 
         		'<li class = "link">'+ element.link+ '</li>'+ 
         		'</ul></div>';
         		$('body').append(building);
        });
    	}
		});
	});
}); 