/* Slideshow */

var imgArray = new Array(4);
var index = 0;

function cycle() {
document.gym.src = imgArray[index].src;
index++;
if(index > 3) {
    index = 0;
}
setTimeout("cycle()", 2000);
return;
}
function startup() {
imgArray[0] = new Image;
imgArray[0].src = "gym1.gif";
imgArray[1] = new Image;
imgArray[1].src = "gym2.gif";
imgArray[2] = new Image;
imgArray[2].src = "gym3.gif";
imgArray[3] = new Image;
imgArray[3].src = "gym4.gif";

cycle();
return;
}

/* Form Validation */

let subButton = document.getElementById("subButton");

subButton.addEventListener("click", validateFName);
subButton.addEventListener("click", validateLName);
subButton.addEventListener("click", validateMail);
subButton.addEventListener("click", validateNumber);
subButton.addEventListener("click", validateAge);

//Check if name is entered

function validateFName() {
    let name = document.getElementById("first-name");
    if (name.validity.valueMissing) {
        name.setCustomValidity("Enter your first name");
    } else {
        name.setCustomValidity("");
    }
}

function validateLName() {
    let name = document.getElementById("last-name");
    if (name.validity.valueMissing) {
        name.setCustomValidity("Enter your last name");
    } else {
        name.setCustomValidity("");
    }
}


//Check if email is entered

function validateMail() {
    let email = document.getElementById("email");
    if (email.validity.valueMissing) {
        email.setCustomValidity("Enter your Email address");
    } else {
        email.setCustomValidity("");
    }
}

//check if phone number is entered and length

function validateNumber() {
    let number = document.getElementById("phone");
    if (number.validity.valueMissing) {
        number.setCustomValidity("Enter your phone number");
    } else {
        number.setCustomValidity("");
    }
}

//check if age is entered

function validateAge() {
    let age = document.getElementById("age");
    if (age.validity.valueMissing) {
        age.setCustomValidity("Enter your age");
    } else {
        age.setCustomValidity("");
    }
}

/* BMI CALC */
function calculateBMI() {
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);

    let bmi = (weight / height / height) * 10000;

    let resultElement = document.getElementById("result");
    
    if (!isNaN(bmi)) {
        if (bmi < 18.5) {
            resultElement.innerText = "You are underweight :(";
        } else if (bmi >= 18.5 && bmi < 24.9) {
            resultElement.innerText = "You are Healthy :)";
        } else if (bmi >= 24.9 ) {
            resultElement.innerText = "You are Overweight :(";
        } 
    } else {
        resultElement.innerText = "Please enter valid weight and height.";
    }
}

