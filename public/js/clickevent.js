$("#submit").on("click", function(event) {
    event.preventDefault();

    let inputData = {
        city: $("#city").val()
    };
    
    $.post("/api/new", inputData)
        .then(function(data) {
            console.log(data)
        });
});

