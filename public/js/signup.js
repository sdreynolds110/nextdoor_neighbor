$(document).ready(function() {
  // Getting references to our form and input
  var signUpForm = $("form.signup");
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.email || !userData.password) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(email, password) {
    $.post("/api/signup", {
      email: email,
      password: password
    })
      .then(function(data) {
        window.location.replace("/members");
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }

  //script for grabbing variables to send to backend to add business information to database
  let registerForm=$(".register-form");
  let name=$("#name"); 
  let businessName=$("#businessName");
  let address=$("#address");
  let city= $("#city");
  let state= $("#state");
  let zipcode= $("#zipCode");
  let website= $("#website");

  registerForm.on("submit", function(event) {
    event.preventDefault();
    var registerData = {
      name: name.val().trim(),
      businessname: businessName.val().trim(), 
      address: address.val().trim, 
      city: city.val().trim, 
      state: state.val().trim, 
      zipcode: zipcode.val().trim, 
      website: website.val().trim
    };

    if (!registerData.name || !registerData.businessname || !registerData.address || !registerData.city || !registerData.state || !registerData.zipcode || !registerData.website) {
      return;
    }
    // If we have all data run the registerUser function
    registerUser(registerData);
    name.val("");
    businessname.val("");
    address.val("");
    city.val("");
    state.val("");
    zipcode.val("");
    website.val("")
  });

  


  function registerUser(name, businessname, address, city, state, zipcode, website) {
    $.post("/api/register", {
      name: name,
      businessname: businessname, 
      address: address, 
      city: city, 
      state: state, 
      zipcode: zipcode, 
      website: website, 
    })
      .then(function(data) {
        window.location.replace("/");
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
  }
});
