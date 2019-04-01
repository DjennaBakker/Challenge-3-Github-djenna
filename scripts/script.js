 /*----------Het weer------------*/
function getAPIdata() {

	var url = "https://api.openweathermap.org/data/2.5/weather";
	var apiKey ="e7a75c6f939d56f3eea3ec4334e096c0";
	var city = "amsterdam,nl";

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
