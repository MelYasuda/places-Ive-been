// business logic
function Country(country, city, season, landmarks, notes) {
  this.country = country;
  this.city = city;
  this.season = season;
  this.landmarks = landmarks;
  this.notes = notes;
}





// user interface
$(document).ready(function(){
  $("#new-place").submit(function(event) {
    event.preventDefault();
    var inputCountry = $("#new-country").val();
    var inputCity = $("#new-city").val();
    var inputSeason = $("#new-season").val();
    var inputLandmarks = $("#new-landmarks").val();
    var inputNotes = $("#new-notes").val();

    var newCountry = new Country(inputCountry, inputCity, inputSeason, inputLandmarks, inputNotes);

    $("#places").append("<li class='country'>" + newCountry.country + "</li>");


    $(".country").last().click(function(){
      $("#show-place").show();
      $("#show-place h2").text(newCountry.country);
      $(".city").text(newCountry.city);
      $(".season").text(newCountry.season);
      $(".landmarks").text(newCountry.landmarks);
      $(".notes").text(newCountry.notes);
    });
  });
});
