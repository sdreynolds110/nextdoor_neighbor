$(document).ready(function() {
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
console.log(registerData)
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