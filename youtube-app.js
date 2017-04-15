
var OMDB_BASE_URL = 'https://www.omdbapi.com/';

$(function(){
	$("form").submit(function(event){
		var input = $(".search").val();
		var query = {
		    s: input,
		    r: 'json'
		}
		$.getJSON(OMDB_BASE_URL, query, function(data) {
			console.log(data);
		});
	});
});