$("#submit").on("click", function(event) {
    event.preventDefault();

    let inputData = {
        city: $("#city").val()
    };

    app.get("/api/beauty/city/:inputData", function(req, res) {
        console.log(req.params.inputData)
        db.Beauty.findAll({
          where: {
            city: req.params.inputData
          }
        }).then(function(results) {
          // results are available to us inside the .then
          res.json(results);
        });
      });
});