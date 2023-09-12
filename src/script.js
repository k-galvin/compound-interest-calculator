// Variables to keep track of page elements
const slider = document.getElementById("time");
const sliderOutput = document.getElementById("slider-value");
const principalInput = document.getElementById("amount");
const rateInput = document.getElementById("rate");
const frequencyInput = document.getElementById("frequency");
const timeInput = document.getElementById("time");
const totalOutput = document.getElementById("total");
const profitOutput = document.getElementById("profit");
const button = document.getElementById("button");

// Calculates the interest given the user inputs and displays on page
button.addEventListener('click', () => {
  // Creates variables to store input values
  const principal = principalInput.value;;
  const rate = rateInput.value;
  const frequency = frequencyInput.value;;
  const time = timeInput.value;

  // Calculates the interest
  const total = principal * ((1 + ((rate / 100) / frequency)) ** (frequency * time));

  // Calculates the profit
  const profit = total - principal;

  // Checks if total is a valid numerical input
  if (isNaN(total)) {
    // Displays error messages
    totalOutput.textContent = 'Invalid input!';
    profitOutput.textContent = 'Invalid input!';
  } else {
    // Displays calculated total and profit
    totalOutput.textContent = '$' + total.toFixed(2);
    profitOutput.textContent = '$' + profit.toFixed(2);
  }

})

// Initializes the displayed slider value
sliderOutput.innerHTML = slider.value;

// Sets the slider value to update when slider is moved
slider.oninput = () => sliderOutput.textContent = slider.value;







