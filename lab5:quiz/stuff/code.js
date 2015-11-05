$(document).ready(function() {
	console.log("Ready!!!!");
	$(document).ready(function() {
    $.ajax({ 
        type: 'GET', 
        url: 'stuff/info.json',  
        dataType: 'json',
        success: function (data) { 
         $.each(data.labs, function(index, element){
         	var building = '<li><a href="'+ element.directory + '" target="_blank">' + element.name+ '</a></li>'; 
         	$('#labs .given').append(building); 
        });
    	}
		});
    $.ajax({ 
        type: 'GET', 
        url: 'stuff/info.json',  
        dataType: 'json',
        success: function (data) { 
         $.each(data.labsolutions, function(index, element){
            var building = '<li><a href="'+ element.directory + '" target="_blank">' + element.name+ '<br>Solution</a></li>'; 
            $('#labs .done').append(building); 
        });
        }
        });
    });
});