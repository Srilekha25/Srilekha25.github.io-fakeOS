//Display nothing when clicked on the screen

var onTheScreen = document.getElementById("section__background--image");
window.onclick = function (event) {
  if (event.target === onTheScreen) {
    menu.style.display = "none";
  }
};

//Displaying the Clock
// Update the clock every second
const clockContainer = document.querySelector("#section_clock_align");

function updateClock() {
  const now = new Date();
  clockContainer.innerHTML = now.toLocaleTimeString();
}

setInterval(updateClock, 1000); 

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

//Display the temperature convertor when icon is clicked
let TempConvertorIcon = document.getElementById("icon-1");
const tempConvertorDisplayMode = document.getElementById("container__temp-convertor-content--flex")
let tempConvertorModal = document.getElementById("section__temp-convertor--form");

TempConvertorIcon.addEventListener("click", () => {
  console.log("coming in on icon once clicked");
  tempConvertorModal.classList.toggle("section__temp-convertor--form--display-mode");
});

//Close the temperature convertor when X is clicked
document.getElementById("span__close--align").addEventListener("click", () => {
  tempConvertorModal.style.display = "none";
});

//End of Temperature Convertor

//Start of Image Resizer

const fileInput = document.querySelector(".resizer__file");
const widthInput = document.querySelector(".resizer__input--width");
const heightInput = document.querySelector(".resizer__input--height");
const aspectToggle = document.querySelector(".resizer__aspect");
const canvas = document.querySelector(".resizer__canvas");
const canvasCtx = canvas.getContext("2d");

let activeImage, originalWidthToHeightRatio;

fileInput.addEventListener("change", (e) => {
  const reader = new FileReader();

  reader.addEventListener("load", () => {
    openImage(reader.result);
  });

  reader.readAsDataURL(e.target.files[0]);
});

widthInput.addEventListener("change", () => {
  if (!activeImage) return;

  const heightValue = aspectToggle.checked
    ? widthInput.value / originalWidthToHeightRatio
    : heightInput.value;

  resize(widthInput.value, heightValue);
});

heightInput.addEventListener("change", () => {
  if (!activeImage) return;

  const widthValue = aspectToggle.checked
    ? heightInput.value * originalWidthToHeightRatio
    : widthInput.value;

  resize(widthValue, heightInput.value);
});

function openImage(imageSrc) {
  activeImage = new Image();

  activeImage.addEventListener("load", () => {
    originalWidthToHeightRatio = activeImage.width / activeImage.height;

    resize(activeImage.width, activeImage.height);
  });

  activeImage.src = imageSrc;
}

function resize(width, height) {
  canvas.width = Math.floor(width);
  canvas.height = Math.floor(height);
  widthInput.value = Math.floor(width);
  heightInput.value = Math.floor(height);

  canvasCtx.drawImage(activeImage, 0, 0, Math.floor(width), Math.floor(height));
}

//End of Image Resizer


//Display the Image Resizer when icon is clicked

let ImageResizer = document.getElementById("icon-3");





