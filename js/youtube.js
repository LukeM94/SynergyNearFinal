// Search for a specified string.
/*function search() {
	gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
	var key = 'AIzaSyBiKkP83_xBbADwqBpq1G7FmTYFPaFRWdM';
	gapi.client.setApiKey(key)
	var searchTerm = $('#query').val();
	var request = gapi.client.youtube.search.list({
		q: searchTerm,
		part: 'snippet'
	});

	request.execute(function(response) {
		var str = JSON.stringify(response.result);
		alert(data);
		$('#searchResults').html('<p>' + str + '</p>');
	});
}*/

// Get Uploads Playlist
function search(){
	var query = document.getElementById("searchTerms").value;
$.get(
   "https://www.googleapis.com/youtube/v3/search",{
   part : 'snippet',
   maxResults : '20',
   type : 'video',
   q : query,
   key: 'AIzaSyBiKkP83_xBbADwqBpq1G7FmTYFPaFRWdM'},
   function(data) {
	  var videos;
      $.each( data.items, function( i, item ) {
		  var video;
		  var id = item.id.videoId;
		  var embed = '<iframe width="500" height="300" src="https://www.youtube.com/embed/' + id + '" frameborder="0" allowfullscreen></iframe>';
		  var title = item.snippet.title;
		  var description = item.snippet.description;
		  var channel = item.snippet.channelTitle;
		  video = '<div class ="container" id="Result" style="margin-bottom:50px"><div class="row"><div class="col-xs-6" id="image">' + embed + '</div><div class="col-xs-6" id="links"><div id="Links" style="border: 2px solid; border-radius: 5px; margin:15px"><p style="margin:10px">' + title + '</p></div><div id="Links" style="border: 2px solid; border-radius: 5px; margin:15px"><p style="margin:10px">' + description + '</p></div><div id="Links" style="border: 2px solid; border-radius: 5px; margin:15px"><p style="margin:10px">' + channel + '</p></div></div></div></div>';
		  videos = videos + video;
      });
	  var element = document.getElementById("searchResults");
	  element.innerHTML = videos;
  }
);
}

//Get Videos
function getVids(pid){
    $.get(
        "https://www.googleapis.com/youtube/v3/playlistItems",{
        part : 'snippet',
        maxResults : 20,
        playlistId : pid,
        key: AIzaSyBiKkP83_xBbADwqBpq1G7FmTYFPaFRWdM},
        function(data) {
            var result;
            $.each( data.items, function( i, item ) {
                result = '<li>'+ item.snippet.title +'</li>';
                $('#results').append(results);
            });
        }
    );
}

/*function search(){
	var query = document.getElementById("searchTerms").value;
	var element = document.getElementById("cheese");
	element.innerHTML = query;
	alert(query);
}*/
