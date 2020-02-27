$("#submit").on("click", function(event) {
    event.preventDefault();

    let inputData = {
        city: $("#city").val()
    };
    
    $.ajax("/api/new", { type: "POST", data: inputData })
        .then(function() {
            $("#city").val("");
            location.reload();
        });
});

