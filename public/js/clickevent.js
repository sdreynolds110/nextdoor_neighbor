    $("#city").on("click", function(event) {
      console.log("it worked")
      event.preventDefault();
      var cityInput = $(".input")
        .val()
        .trim();
  
        cityInput = cityInput.replace(/\s+/g, "").toLowerCase();
  
      $.get("/api/beauty/city/" + cityInput, function(data) {
          console.log(data)
        });
  });