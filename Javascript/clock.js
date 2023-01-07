const clockContainer = document.querySelector("#section_clock_align");

function updateClock() {
  const now = new Date();
  clockContainer.innerHTML = now.toLocaleTimeString();
}

setInterval(updateClock, 1000); // Update the clock every second

//To display container for start button
const menuButton = document.getElementById("button_align");
const menu = document.getElementById("section_menu_flex");

menuButton.addEventListener("click", () => {
  menu.style.display = menu.style.display === "none" ? "flex" : "none";
});

const appendElementWithText = (elementType, text, parentElement) => {
  const createdElement = document.createElement(elementType);
  const textNode = document.createTextNode(text);
  createdElement.appendChild(textNode);
  parentElement.appendChild(createdElement);
};

//start of temperature convertor
let messageArr = [];
const form = document.querySelector(".section__temp-convertor--form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const temperatureInput = document.querySelector("#Temperature").value.trim();
  const temperatureUnit = document.querySelector("#Convertor").value;

  if (isNaN(temperatureInput) || temperatureInput <= 0) {
    messageArr.push(
      `${temperatureInput} is not equal to number or less than zero. Please enter correct values`
    );
    appendElementWithText("div", messageArr, message);
  } else if (temperatureUnit === "fahrenheit") {
    const temperatureInCelcius = fahrenheitToCelcius(temperatureInput);
    messageArr.push(
      `${temperatureInput}°F is equivalent to ${temperatureInCelcius}°C`
    );
    appendElementWithText("div", messageArr, message);
  } else if (temperatureUnit === "celcius") {
    const temperatureInFahrenheit = celciusToFahrenheit(temperatureInput);
    messageArr.push(
      `${temperatureInput}°C is equivalent to ${temperatureInFahrenheit}°F`
    );
    appendElementWithText("div", messageArr, message);
  }
  document.querySelector("#Temperature").value = "";
  const deleteEverything = document.querySelector("#message");
});
function fahrenheitToCelcius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function celciusToFahrenheit(celcius) {
  return (celcius * 9) / 5 + 32;
}
//End of Temperature Convertor

//Display the temperature convertor when icon is clicked
let TempConvertorIcon = document.getElementById("icon-1");
let tempConvertorModal = document.getElementById(
  "section__temp-convertor--form"
);
TempConvertorIcon.addEventListener("click", () => {
  console.log("coming in on icon once clicked");
  tempConvertorModal.classList.toggle("section__temp-convertor--form--display-mode");
});

//Close the temperature convertor when X is clicked
document.getElementById("span__close--align").addEventListener("click", () => {
  tempConvertorModal.style.display = "none";
});

//Display nothing when clicked on the screen

var onTheScreen = document.querySelector("img");
window.onclick = function (event) {
  if (event.target == onTheScreen) {
    menu.style.display = "none";
    modal.style.display = "none";
  }
};
