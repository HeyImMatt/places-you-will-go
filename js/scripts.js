// Business Logic

function TravelDestination(name, location, season, rating, recommended, notes, imgLink) {
  this.name = name;
  this.location = location;
  this.season = season;
  this.rating = rating;
  this.recommended = recommended;
  this.notes = notes;
  this.imgLink = imgLink;
}

function TravelLog() {
  this.destinations = []
}

TravelLog.prototype.addDestination = function(destination) {
  this.destinations.push(destination);
}

$(document).ready(function(){

  let travelLog = new TravelLog();

  function displayTravelDetails(travelDetailToDisplay) {
    let placesList = $("ul#places");
    let htmlForPlacesInfo = "";
    console.log(travelDetailToDisplay);
    travelDetailToDisplay.destinations.forEach(function (place) {
      htmlForPlacesInfo += "<li>" + place.name + "</li>";
      console.log(htmlForPlacesInfo);
    });
  }

  $("form#form-one").submit(function(event) {
    event.preventDefault();
    let name = $("input#name").val();
    let location = $("input#location").val();
    let season = $("input#season").val();
    let recommend = $("input:radio[name=recommend]:checked").val();
    let rating = $("input#rating").val();
    let notes = $("input#notes").val();
    let image = $("input#image").val();    
    let travelDestination = new TravelDestination(name, location, season, rating, recommend, notes, image)
    console.log(travelDestination);

    travelLog.addDestination(travelDestination);

    displayTravelDetails(travelLog);
   


  });
});