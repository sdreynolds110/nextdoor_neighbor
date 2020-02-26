document.getElementsByClassName("submit").onclick = function() {searchButton()};

function searchButton() {
    let userInput = input.val();
        sessionStorage.setItem("searchItem", userInput);

        let passOffInfo = sessionStorage.getItem("searchItem");
    
    let selectAll = all.val();
        sessionStorage.setItem("searchAll", selectAll);

        let passOffInfo = sessionStorage.getItem("searchAll");

    let selectBeauty = beauty.val();
        sessionStorage.setItem("searchBeauty", selectBeauty);

        let passOffInfo = sessionStorage.getItem("searchBeauty");

    let selectRestaurant = restaurant.val();
        sessionStorage.setItem("searchRestaurant", selectRestaurant);

        let passOffInfo = sessionStorage.getItem("searchRestaurant");

    let selectRetail = retail.val();
        sessionStorage.setItem("searchRetail", selectRetail);

        let passOffInfo = sessionStorage.getItem("searchRetail");

    let selectGrocery = grocery.val();
        sessionStorage.setItem("searchGrocery", selectGrocery);

        let passOffInfo = sessionStorage.getItem("searchGrocery");




    // app.all('/', function (req, res, next) {
    //     console.log("working");
    //     next()
    // })
    app.use('/', function (req, res, next) {
        console.log("working");
        next(
            "SELECT * FROM "
        )
    })
}
