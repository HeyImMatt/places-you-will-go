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

TravelLog.prototype.findDestination = function(name) {
  for (let i = 0; i < this.destinations.length; i++) {
    if (this.destinations[i].name === name) {
      return this.destinations[i]
    }
  }
  return false;
}

$(document).ready(function(){
  
  let travelLog = new TravelLog();

  function displayTravelDetails(travelDetailToDisplay) {
    let placesList = $("ul#places");
    let htmlForPlacesInfo = "";
    travelDetailToDisplay.destinations.forEach(function (place) {
      htmlForPlacesInfo += "<li>" + place.name + "</li>";
    });
    placesList.html(htmlForPlacesInfo);
  }

  function attachPlaceListeners() {
    $("ul#places").on("click", "li", function() {
      let destinationObject = travelLog.findDestination(this.textContent);
      console.log(destinationObject.imgLink)
      $(".destination").text(destinationObject.name)
      $(".location").text(destinationObject.location)
      $(".season").text(destinationObject.season)
      $(".recommend").text(destinationObject.recommended)
      $(".rating").text(destinationObject.rating)
      $(".notes").text(destinationObject.notes)
      $(".image").html(`<img src=${destinationObject.imgLink} alt="Place Image">`)
    });
  };
  $("form#form-one").submit(function(event) {
    event.preventDefault();
    let name = $("input#name").val();
    let location = $("input#location").val();
    let season = $("input#season").val();
    let recommend = $("input:radio[name=recommend]:checked").val();
    let rating = $("input#rating").val();
    let notes = $("input#notes").val();
    let imgLink = $("input#image").val();    
    
    let travelDestination = new TravelDestination(name, location, season, rating, recommend, notes, imgLink)
    travelLog.addDestination(travelDestination);
    displayTravelDetails(travelLog);
    attachPlaceListeners();
  });
});