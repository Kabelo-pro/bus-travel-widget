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

// Destination costs and points required
const destinations = {
  Khayelitsha: { cost: 40, pointsRequired: 40 },
  Dunoon: { cost: 25, pointsRequired: 25 },
  "Mitchells Plain": { cost: 30, pointsRequired: 30 },
};

// Calculate function
function calculate() {
  // Get input values
  const points = parseInt(pointsInput.value);
  const startLocation = startLocationSelect.value;
  const isPeakTime = peakRadio.checked;
  const isReturnTrip = returnCheckbox.checked;

  // Get the cost and points required for the selected start location
  const { cost, pointsRequired } = destinations[startLocation];

  // Calculate the cost per trip based on the travel time
  let costPerTrip = isPeakTime ? cost * 1.25 : cost;

  // Calculate the number of trips based on the available points
  let numberOfTrips = Math.floor(points / pointsRequired);

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

// Event listener
calculateButton.addEventListener("click", calculate);
