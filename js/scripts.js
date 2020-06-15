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

TravelDestination.prototype.displayName = function() {
  return this.name;
  //sometype of append/.text/.html
} 

function TravelLog() {
  this.destinations = []
}

TravelLog.prototype.addDestination = function(destination) {
  this.destinations.push(destination);
}

$(document).ready(function(){
  $("form#form-one").submit(function(event) {
    event.preventDefault();
    let name = $("input#name").val();
    let location = $("input#location").val();
    let season = $("input#season").val();
    let recommend = $("input:radio[name=recommend]:checked").val();
    let stars = $("input#stars").val();
    let notes = $("input#notes").val();
    let image = $("input#image").val();    
  });
});