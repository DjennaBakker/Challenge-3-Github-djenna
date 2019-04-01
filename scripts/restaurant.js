function getAPIdata1(){

  fetch("https://www.triposo.com/api/20181213/poi.json?location_id=Amsterdam&tag_labels=frequented_by_locals&tag_labels=eatingout&order_by=-frequented_by_locals_score&fields=id,name,snippet&account=8PHVSXLI&token=307wjnun33tfwxa751h024hxkthzg18l")

  // parse to JSON format
  .then(function(response) {
    if(!response.ok) { 
      throw Error(response.statusText);
    }
    return response.json();
  })

  .then(function(response) {

    var restaurant = Math.floor((Math.random() * response.results.length -1) + 1);
      console.log(response.results[restaurant]);

      var hiddenAmsterdam =  '<div class="hiddenAmsterdam">';
  		  hiddenAmsterdam +=   '<div class="name"> '+response.results[restaurant].name+' </div>';
        hiddenAmsterdam +=	 '<div class="snippet"> '+ response.results[restaurant].snippet +' </div>';
        hiddenAmsterdam +=	 '<div class="score"> '+ Math.round(response.results[restaurant].frequented_by_locals_score * 10) / 10 +' </div>';
  		  hiddenAmsterdam += '</div>';

      document.getElementById("APIbier").innerHTML=hiddenAmsterdam;

  })

  // catch error
  .catch(function (error) {
    onAPIError(error);
  });
  }

  // init data stream
  getAPIdata1();
