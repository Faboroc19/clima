var infoLatitud;
var infoLongitud;
var infoLongitudString;
var infoLatitudString;
var getUrl;


$( document ).ready(function() {
    geolocation();

    setTimeout(function () {
      getUrl = "https://api.darksky.net/forecast/ea76e78f539ef7dae1879fd1a45d3628/" + infoLatitudString + "," + infoLongitudString;
        jQuery.ajax({
          type: "GET",
          url: getUrl,
          contentType: "application/json; charset=utf-8",
          dataType: "json",
          success: function (data, status, jqXHR) {
              console.log(data);
          },

          error: function (jqXHR, status) {
              console.log("Error");
          }
        });
    }, 500);
});


function geolocation(){
  if ("geolocation" in navigator){
      navigator.geolocation.getCurrentPosition(function(position){
        infoLatitud = position.coords.latitude;
        infoLongitud = position.coords.longitude;
        infoLatitudString = infoLatitud.toString();
        infoLongitudString = infoLongitud.toString();
        $("#result").html(position.coords.latitude+" "+ position.coords.longitude);
      });
  }else{
      console.log("Browser doesn't support geolocation!");
  }
}
