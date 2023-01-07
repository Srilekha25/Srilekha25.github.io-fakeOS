const clockContainer = document.querySelector("#section_clock_align");

function updateClock() {
  const now = new Date();
  clockContainer.innerHTML = now.toLocaleTimeString();
}

setInterval(updateClock, 1000); // Update the clock every second

const menuContainer = document.querySelector("#section_menu_flex");
const menuButton = document.getElementById("button_align");
const menu = document.getElementById("section_menu_flex");

menuButton.addEventListener("click", () => {
  menu.style.display = menu.style.display === "none" ? "flex" : "none";
});

// const notepad = document.getElementById('icon-1');
// const notepadSection = document.getElementById('section__notepad--textarea');

// notepad.addEventListener('click', function() {
//   notepadSection.style.display = notepadSection.style.display === 'none' ? "flex" : "none";
// });

// const tempConvertor = document.getElementById('icon-2');
// const sectionTempConvertor = document.getElementById('section__temp-convertor--form');

// tempConvertor.addEventListener('click', function() {
// sectionTempConvertor.style.display = sectionTempConvertor.style.display === 'none' ? "flex" : "none";
// });


