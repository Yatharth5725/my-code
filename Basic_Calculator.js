// JavaScript code for calculator functionality

// Select the input box
let inputBox = document.getElementById("inputBox");

// Select all buttons
let buttons = document.querySelectorAll("button");

// Initialize string variable to store input
let string = "";

// Add event listeners to all buttons
buttons.forEach((element) => {
  element.addEventListener("click", (b) => {
    // If "=" button is clicked
    if (b.target.innerText === "=") {
      // Evaluate the expression
      string = string === "" ? "0" : string;
      try {
        string = String(eval(string));
        inputBox.value = string;
      } catch (error) {
        inputBox.value = "Error(Press AC)";
      }
    }
    // If "AC" button is clicked
    else if (b.target.innerText === "AC") {
      // Clear the input
      string = "";
      inputBox.value = string;
    }
    // If "DEL" button is clicked
    else if (b.target.innerText === "DEL") {
      // Delete the last character
      string = string.substring(0, string.length - 1);
      inputBox.value = string;
    }
    // If "%" button is clicked
    else if (b.target.innerText === "%") {
      // Calculate percentage
      const currentValue = parseFloat(inputBox.value);
      const percentageValue = currentValue / 100;
      string = String(percentageValue);
      inputBox.value = string;
    }
    // For other buttons
    else {
      // Append the button value to input
      string += b.target.innerText;
      inputBox.value = string;
    }
  });
});
