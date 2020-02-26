$("#submit").on("click", function(event) {
    event.preventDefault();

    let inputData = {
        state: $("#state").val()
    };
    
    $.post("/api/new", inputData)
        .then(function(data) {
            console.log(data)
        });
});

