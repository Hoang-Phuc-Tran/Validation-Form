var province = null; // holds province
var postalCode = null; // holds postal code
var city = null; // holds city name
var address = null; // holds address
var inputName = null; // hold the user's first and last name
var alpha = /^[a-z A-Z]+$/; // Regular expression
var num = /^[0-9]+$/; // Regular expression
var nameRegExp = /^[a-zA-Z]+ [a-zA-Z]+$/; // Regular expression for validating name
var addressRegExp = /^[0-9]+[a-zA-Z ]+[a-zA-Z ]+$/; // Regular expression for validating address
var cityRegExp = /^[a-zA-Z]+(?:[\s][a-zA-Z]+)*$/; // Regular expression for validating city
var postalCodeExp = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/; // Regular expression for validating Canadian postal code

/*
 * Function: checkName()
 * Description : This function will check the name from the user' input
 * Parameters : NONE
 * Returns : it returns true if the name is valid, otherwise false
 */
function checkName() {
  // Clean the error message
  document.getElementById("errorMessage1").innerHTML = "";
  // Get the value from input
  inputName = document.getElementById("nameText").value;
  // Check if the value is empty or not
  if (inputName.length == 0) {
    document.getElementById("errorMessage1").innerHTML =
      "Your name cannot be BLANK!";
    return false;
  }
  // if the name matches with regular expression, it will be return true
  else if (inputName.match(nameRegExp)) {
    return true;
  } else {
    document.getElementById("errorMessage1").innerHTML =
      "Your first and last name must contain only characters and one space!";
    return false;
  }
}

/*
 * Function: checkStreetAddress()
 * Description : This function will check the street address from the user' input
 * Parameters : NONE
 * Returns : it returns true if the street address is valid, otherwise false
 */
function checkStreetAddress() {
  // Clean the error message
  document.getElementById("errorMessage2").innerHTML = "";
  // Get the value from input
  address = document.getElementById("addressText").value;

  // Check if the value is empty or not
  if (address.length == 0) {
    document.getElementById("errorMessage2").innerHTML =
      "Your street address cannot be BLANK!";
    return false;
  }
  // if the street address matches with regular expression, it will be return true
  else if (address.match(addressRegExp)) {
    return true;
  } else {
    document.getElementById("errorMessage2").innerHTML =
      "Your street address must be comprised of a sequence of numbers followed by a space and then alphabetic characters";
    return false;
  }
}

/*
 * Function: checkCity()
 * Description : This function will check the city from the user' input
 * Parameters : NONE
 * Returns : it returns true if the city is valid, otherwise false
 */
function checkCity() {
  // Clean the error message
  document.getElementById("errorMessage3").innerHTML = "";
  city = document.getElementById("cityText").value;
  // Check if the value is empty or not
  if (city.length == 0) {
    document.getElementById("errorMessage3").innerHTML =
      "Your city cannot be BLANK!";
    return false;
  }
  // if the street address matches with regular expression, it will be return true
  else if (city.match(cityRegExp)) {
    return true;
  } else {
    document.getElementById("errorMessage3").innerHTML =
      "Your city must be comprised of alphabetic characters!";
    return false;
  }
}

/*
 * Function: checkProvince()
 * Description : This function will check the province from the user' input
 * Parameters : NONE
 * Returns : it returns true if the province is valid, otherwise false
 */
function checkProvince() {
  // Clean the error message
  document.getElementById("errorMessage5").innerHTML = "";
  province = document.getElementById("province1").value;
  // Check if the value is empty or not
  if (province == null || province == "") {
    document.getElementById("errorMessage5").innerHTML =
      "You need to select your Province!";
    return false;
  } else {
    return true;
  }
}

/*
 * Function: checkPostalCode()
 * Description : This function will check the postal code from the user' input
 * Parameters : NONE
 * Returns : it returns true if the postal code is valid, otherwise false
 */
function checkPostalCode() {
  // Clean the error message
  document.getElementById("errorMessage4").innerHTML = "";
  postalCode = document.getElementById("postalCodeText").value;
  // Check if the value is empty or not
  if (postalCode.length == 0) {
    document.getElementById("errorMessage4").innerHTML =
      "Your postal code cannot be BLANK!";
    return false;
  }
  // if the street address matches with regular expression, it will be return true
  else if (postalCode.match(postalCodeExp)) {
    return true;
  } else {
    document.getElementById("errorMessage4").innerHTML =
      "Your postal code is not correct!";
    return false;
  }
}

/*
 * Function: checkRadioButtons()
 * Description : This function will check the optional radio buttons is pressed or not
 * Parameters : NONE
 * Returns : it returns true if the postal code is valid, otherwise false
 */
function checkRadioButtons() {
  // clean the error message and hide the optional select
  document.getElementById("errorMessage6").innerHTML = "";
  document.getElementById("section6.1").style.display = "none";
  document.getElementById("section6.2").style.display = "none";
  // Check if the faculty option is pressed or not
  if (document.getElementById("option1").checked) {
    // Uncheck the option
    document.getElementById("study").checked = false;
    document.getElementById("laptop").checked = false;
    document.getElementById("bus").checked = false;
    document.getElementById("enjoy").checked = false;
    // Display the optional select after the faculty option is pressed
    document.getElementById("section6.1").style.display = "block";
    return true;
  }
  // Check if the student option is pressed or not
  if (document.getElementById("option2").checked) {
    // Uncheck the option
    document.getElementById("teach").checked = false;
    document.getElementById("drive").checked = false;
    document.getElementById("lunch").checked = false;
    // Display the optional select after the student option is pressed
    document.getElementById("section6.2").style.display = "block";
    return true;
  } else {
    return false;
  }
}

/*
 * Function: checkValidation()
 * Description : This function will check all the user's input before submitting the from
 * Parameters : NONE
 * Returns : NONE
 */
function checkValidation() {
  var name = checkName();
  var address = checkStreetAddress();
  var city = checkCity();
  var province = checkProvince();
  var postalCode = checkPostalCode();
  var radioButtons = checkRadioButtons();

  var final = name && address && city && province && postalCode && radioButtons;

  if (radioButtons == false) {
    document.getElementById("errorMessage6").innerHTML =
      "You need choose an option!";
    event.preventDefault();
  }
  if (final == true) {
    document.getElementById("errorMessage7").innerHTML =
      "Thank you! Your form is submitted successfully!";
  } else {
    document.getElementById("errorMessage7").innerHTML =
      "Sorry! Your form is not correct!";
    event.preventDefault();
  }
}

/*
 * Function: clearForm()
 * Description : This function will clear all the from to the default
 * Parameters : NONE
 * Returns : NONE
 */
function clearForm() {
  document.getElementById("nameText").value = "";
  document.getElementById("errorMessage1").innerHTML = "";
  document.getElementById("addressText").value = "";
  document.getElementById("errorMessage2").innerHTML = "";
  document.getElementById("cityText").value = "";
  document.getElementById("errorMessage3").innerHTML = "";
  document.getElementById("province1").value = "";
  document.getElementById("errorMessage5").innerHTML = "";
  document.getElementById("postalCodeText").value = "";
  document.getElementById("errorMessage4").innerHTML = "";
  document.getElementById("option1").checked = false;
  document.getElementById("option2").checked = false;
  document.getElementById("section6.1").style.display = "none";
  document.getElementById("section6.2").style.display = "none";
  document.getElementById("errorMessage6").innerHTML = "";
  document.getElementById("errorMessage7").innerHTML = "";
  document.getElementById("teach").checked = false;
  document.getElementById("drive").checked = false;
  document.getElementById("lunch").checked = false;
  document.getElementById("study").checked = false;
  document.getElementById("laptop").checked = false;
  document.getElementById("bus").checked = false;
  document.getElementById("enjoy").checked = false;
}
