// Assigns slider and slider value to variables
let slider = document.getElementById("time");
let sliderOutput = document.getElementById("slider-value");

// Initializes the displayed slider value
sliderOutput.innerHTML = slider.value;

// Sets the slider value to update when slider is moved
slider.oninput = function() {
  sliderOutput.innerHTML = this.value;
};

// Calculates the interest given the user inputs and displays on page
function calculateInterest() {
  // Assigns input values to variables
  let originalSum = document.getElementById("amount").value;;
  let rate = document.getElementById("rate").value;
  let frequency = document.getElementById("frequency").value;;
  let time = document.getElementById("time").value;

  // Calculates the interest
  let interest = originalSum * ((1 + ((rate / 100) / frequency)) ** frequency * time);

  // Rounds interest value to 2 decimal points and inserts a dollar sign
  interest = "$" + interest.toFixed(2);

  // Displays calculated interest on the page
  document.getElementById("interest").innerHTML = interest;

  // Prevents form from refreshing page on button click
  event.preventDefault();
}




