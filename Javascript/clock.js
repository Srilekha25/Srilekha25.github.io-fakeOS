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


//Display nothing when clicked on the screen

var onTheScreen = document.getElementById("section__background--image");
window.onclick = function (event) {
  if (event.target === onTheScreen) {
    menu.style.display = "none";
  }
};






