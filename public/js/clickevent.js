    $("#city").on("click", function(event) {
      event.preventDefault();
      var cityInput = $(".input")
        .val()
        .trim();
  
        cityInput = cityInput.replace(/\s+/g, "").toLowerCase();
  
      $.get("/api/beauty/city/" + cityInput, function(data) {
          console.log(data)
        });
      $.get("/api/grocerystores/city/" + cityInput, function(data1) {
          console.log(data1)
        });
      $.get("/api/retailers/city/" + cityInput, function(data2) {
          console.log(data2)
        });
      $.get("/api/restaurants/city/" + cityInput, function(data3) {
          console.log(data3)
        });

      window.location.href="/map.html";
  });