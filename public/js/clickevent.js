    $("#submit").on("click", function(event) {
      event.preventDefault();
      var cityInput = $("#input")
        .val()
        .trim();
  
        cityInput = cityInput.replace(/\s+/g, "").toLowerCase();
  
      $.get("/api/city/" + cityInput, function(data) {
          console.log(data)
        });
  });