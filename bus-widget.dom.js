

// DOM references
const pointsInput = document.getElementById("points");
const startLocationSelect = document.getElementById("startLocation");
const peakRadio = document.getElementById("peakRadio");
const offPeakRadio = document.getElementById("offPeakRadio");
const returnCheckbox = document.getElementById("returnCheckbox");
const calculateButton = document.getElementById("calculateButton");
const singleTripsOutput = document.getElementById("singleTrips");
const pricePerTripSingleOutput = document.getElementById("pricePerTripSingle");
const returnTripsOutput = document.getElementById("returnTrips");
const pricePerTripOutput = document.getElementById("pricePerTrip");



// Calculate function
function calculate() {
    // Get input values
    const points = parseInt(pointsInput.value);
    const startLocation = startLocationSelect.value;
    const isPeakTime = peakRadio.checked;
    const isReturnTrip = returnCheckbox.checked;
  
    // Calculate cost per trip and number of trips
    let costPerTrip = 0;
    let numberOfTrips = 0;
  
    // Determine the cost and points required for the selected start location
    let cost = 0;
    let pointsRequired = 0;
  
    if (startLocation === "Khayelitsha") {
      cost = 40;
      pointsRequired = 1;
    } else if (startLocation === "Dunoon") {
      cost = 25;
      pointsRequired = 1;
    } else if (startLocation === "Mitchells Plain") {
      cost = 30;
      pointsRequired = 1;
    }
  
    // Calculate the cost per trip based on the travel time
    if (isPeakTime) {
      costPerTrip = cost + (cost * 0.25); // Increase by 25% during peak time
    } else {
      costPerTrip = cost;
    }
  
    // Calculate the number of trips based on the available points
    numberOfTrips = Math.floor(points / pointsRequired);
  
    // Update DOM elements with calculated values
    singleTripsOutput.textContent = numberOfTrips;
    pricePerTripSingleOutput.textContent = `R${costPerTrip.toFixed(2)}`;
  
    // Calculate number of return trips and cost per return trip
    if (isReturnTrip) {
      const returnCostPerTrip = costPerTrip * 2; // Cost per return trip is double the cost per trip
      const numberOfReturnTrips = Math.floor(numberOfTrips / 2); // Each return trip requires 2 single trips
  
      // Update DOM elements with calculated values
      returnTripsOutput.textContent = numberOfReturnTrips;
      pricePerTripOutput.textContent = `R${returnCostPerTrip.toFixed(2)}`;
    } else {
      returnTripsOutput.textContent = "0";
      pricePerTripOutput.textContent = "R0.00";
    }
  }
  

// Event listeners
calculateButton.addEventListener("click", calculate);