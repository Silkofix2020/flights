function toggleTripType() {
  const tripType = document.querySelector('input[name="trip"]:checked').value;
  const roundTripElements = document.querySelectorAll(".round-trip-only");
  const multiCityElements = document.querySelectorAll(".multi-city-only");

  if (tripType === "round-trip") {
    roundTripElements.forEach((el) => (el.style.display = "flex"));
    multiCityElements.forEach((el) => (el.style.display = "none"));
  } else if (tripType === "multi-city") {
    roundTripElements.forEach((el) => (el.style.display = "none"));
    multiCityElements.forEach((el) => (el.style.display = "flex"));
  } else {
    roundTripElements.forEach((el) => (el.style.display = "none"));
    multiCityElements.forEach((el) => (el.style.display = "none"));
  }
}
function togglePassengerDropdown() {
  document.querySelector(".passenger-options").classList.toggle("active");
}

function closePassengerDropdown() {
  document.querySelector(".passenger-options").classList.remove("active");
}

function updatePassengerCount(type, change) {
  const countElement = document.getElementById(`${type}-count`);
  let count = parseInt(countElement.textContent);
  count = Math.max(0, count + change);
  countElement.textContent = count;
  updatePassengerSelectText();
}

function updatePassengerSelectText() {
  const adultCount = parseInt(
    document.getElementById("adult-count").textContent
  );
  const childCount = parseInt(
    document.getElementById("child-count").textContent
  );
  const infantCount = parseInt(
    document.getElementById("infant-count").textContent
  );

  const text = `${adultCount} adult, ${childCount} child, ${infantCount} infant`;
  document.querySelector(".passenger-select").textContent = text;
}
