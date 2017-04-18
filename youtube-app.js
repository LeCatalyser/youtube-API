
var youtube_base_URL = 'https://www.googleapis.com/youtube/v3/search';


$(function(){
	$("form").submit(function(event){
		event.preventDefault();
		var input = $(".search").val();
		var query = {
		    q: input,
		    key: "AIzaSyBEuPnd9L3XtxsWUXEjqbBHKpuoz0qITh0",
		    part: "snippet",
		    type: "video",
		  
		}
		$.getJSON(youtube_base_URL, query, function(data) {
			renderData(data, input);
		});
	});

});

var renderData = function(data, input) {
	console.log(data);
	// $('.results').html(data.items[0].snippet.thumbnails.default.url);
	
	var items = data.items.map(function(item) {
		return 	`<a href="https://www.youtube.com/watch?v=${item.id.videoId}" target="_blank"><img src ="${item.snippet.thumbnails.default.url}"></a>`
	});

	$('.results').html(items);
	// $('.results').html(`
	// 	${items.join("")}
	// `)
	
	//   + <a href="blank"
}

