// Function to validate the form
function validateForm() {
  // Get form input values
  var firstName = document.getElementById("first-name").value.trim();
  var lastName = document.getElementById("last-name").value.trim();
  var city = document.getElementById("city").value.trim();
  var state = document.getElementById("state").value;
  var zipCode = document.getElementById("zip-code").value.trim();
  var areaCode = document.getElementById("area-code").value.trim();
  var phoneNumber = document.getElementById("phone-number").value.trim();
  var email = document.getElementById("email").value.trim();
  var confirmEmail = document.getElementById("confirm-email").value.trim();
  var mealPreference = document.querySelector('input[name="meal-preference"]:checked');
  var contactMethods = document.querySelectorAll('input[name="contact-method"]:checked');
  var contactTime = document.querySelector('input[name="contact-time"]:checked');
  var emailOpt = document.querySelectorAll('input[name="email-opt"]:checked');


  // Validate first name
  if (firstName === "") {
    errors.push("First name is required.");
  } else if (!/^[A-Za-z]+$/.test(firstName)) {
    errors.push("First name should contain alphabetic characters only.");
  }

  // Validate last name
  if (lastName === "") {
    errors.push("Last name is required.");
  } else if (!/^[A-Za-z]+$/.test(lastName)) {
    errors.push("Last name should contain alphabetic characters only.");
  }

  // Validate city
  if (city === "") {
    errors.push("City is required.");
  } else if (!/^[A-Za-z]+$/.test(city)) {
    errors.push("City should contain alphabetic characters only.");
  }

  // Validate state
  if (state === "") {
    errors.push("Please select a state.");
  }

  // Validate zip code
  if (zipCode === "") {
    errors.push("Zip code is required.");
  } else if (!/^\d{5}$/.test(zipCode)) {
    errors.push("Zip code should be 5 digits only.");
  }

  // Validate area code
  if (areaCode === "") {
    errors.push("Area code is required.");
  } else if (!/^\d{3}$/.test(areaCode)) {
    errors.push("Area code should be 3 digits only.");
  }

  // Validate phone number
  if (phoneNumber === "") {
    errors.push("Phone number is required.");
  } else if (!/^\d{7}$/.test(phoneNumber)) {
    errors.push("Phone number should be 7 digits only.");
  }

  // Validate email address
  if (email === "") {
    errors.push("Email address is required.");
  } else if (!/^[\w.-]+@[\w.-]+\.[A-Za-z]{2,}$/.test(email)) {
    errors.push("Invalid email address.");
  }

  // Validate email confirmation
  if (email !== confirmEmail) {
    errors.push("Email addresses do not match.");
  }

  // Validate meal preference
  if (!mealPreference === "") {
    errors.push("Please select a meal preference.");
  }

  // Validate contact methods
  if (contactMethods.length < 2 === "") {
    errors.push("Please select at least two contact methods.");
  }

  // Validate best time of contact option
  if (!contactTime === "") {
    errors.push("Please select the best time to be contacted.");
  }
  
  // Validate email notification option
  if (emailOpt === "") {
    errors.push("Please select at least one notifaction option.");
  }

  // If there are errors, display them and prevent form submission
  if (errors.length > 0) {
    var errorString = "Errors:\n";
    for (var i = 0; i < errors.length; i++) {
      errorString += "- " + errors[i] + "\n";
    }
    alert(errorString);
    return false;
  } else {
    // If there are no errors, construct the form data object
    var formData = {
      "First Name": firstName,
      "Last Name": lastName,
      "Address": city + ", " + state + ", " + zipCode,
      "Phone Number": "(" + areaCode + ") " + phoneNumber,
      "Email": email,
      "Meal Preference": mealPreference.value,
      "Contact Methods": [],
      "Comments": document.getElementById("comments").value.trim()
    };

    // Add selected contact methods to the form data object
    for (var j = 0; j < contactMethods.length; j++) {
      formData["Contact Methods"].push(contactMethods[j].value);
    }

    // Display form data and allow form submission
    alert("Form data:\n" + JSON.stringify(formData));
    return true;
  }
}

// Function to reset the form
function resetForm() {
  document.getElementById("my-form").reset();
}
