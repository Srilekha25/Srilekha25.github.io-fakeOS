const appendElementWithText = (elementType, text, parentElement) => {
  const createdElement = document.createElement(elementType);
  const textNode = document.createTextNode(text);
  createdElement.appendChild(textNode);
  parentElement.appendChild(createdElement);
};

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
  document.querySelector('#Temperature').value = '';
  const deleteEverything = document.querySelector('#message');

//   console.log(deleteEverything);

//   deleteEverything.parentNode.removeChild(deleteEverything);
//   if (deleteEverything) {
//     message.removeChild(deleteEverything);
//   }

});
function fahrenheitToCelcius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function celciusToFahrenheit(celcius) {
  return (celcius * 9) / 5 + 32;
}

// let icon = document.getElementById("icon-1");
// let btnfortest = document.querySelector("fortest");

let modal = document.getElementById("section__temp-convertor--form");

let icon1 = document.getElementById("icon-1");

var span = document.getElementsByClassName("span__close--align")[0];

icon1.onclick = function() {
    console.log("coming in");
    modal.style.display = "flex";
  }
  
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }