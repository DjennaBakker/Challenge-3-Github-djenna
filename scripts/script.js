 /*---------------------Het weer------------------------------------*/
function getAPIdata() {

	var url = "https://api.openweathermap.org/data/2.5/weather";
	var apiKey ="e7a75c6f939d56f3eea3ec4334e096c0";
	var city = "tokyo";

	var request = url + "?" + "appid=" + apiKey + "&" + "q=" + city;
	
	fetch(request)
	
	.then(function(response) {
		if(!response.ok) { 
			throw Error(response.statusText);
		}
		return response.json();
	})
	
	.then(function(response) {
		onAPISucces(response);	
	})
	
	// catch error
	.catch(function (error) {
		onAPIError(error);
	});
}

function onAPISucces(response) {
	var place = response.name;
	// get type of weather in string format
	var type = response.weather[0].description;

	// get temperature in Celcius
	var degC = Math.floor(response.main.temp - 273.15);

	// render weather in DOM
	var weatherBox = document.getElementById('weather');
	weatherBox.innerHTML = place + '<br>' +degC + "&#176;C <br>" + type;

}

function onAPIError(error) {
	console.error('Request failed', error);
	var weatherBox = document.getElementById('weather');
	weatherBox.className = 'hidden'; 
}

// init data stream
getAPIdata();


 /*-----------------------Restaurant------------------------------------*/
function getAPIdata1(){

  fetch("https://www.triposo.com/api/20181213/local_highlights.json?latitude=35.6802544&longitude=139.75606925168603&tag_labels=sightseeing|cuisine-Sushi|cuisine-Ramen|cuisine-Tempura|cuisine-Kobe_beef&max_distance=2000&poi_fields=id,name,coordinates,snippet")


  // parse to JSON format
  .then(function(response) {
    if(!response.ok) { 
      throw Error(response.statusText);
    }
    return response.json();
  })

  .then(function(response) {

    var restaurant = Math.floor((Math.random() * response.results.length ));
      console.log(response.results[restaurant]);

      var hiddenAmsterdam = '<div class="tokyo">';
        hiddenAmsterdam += '<div class="name"> '+response.results[0].pois[0].name+' </div>';
        hiddenAmsterdam += '<div class="snippet"> ' +response.results[0].pois[0].snippet+' </div>';     
        hiddenAmsterdam += '</div>';

      document.getElementById("APItokyo").innerHTML=hiddenAmsterdam;

  })

  // catch error
  .catch(function (error) {
    onAPIError(error);
  });
  }

  // init data stream
  getAPIdata1();


