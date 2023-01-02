const clockContainer = document.querySelector('#section_clock_align');

function updateClock() {
  const now = new Date();
  clockContainer.innerHTML = now.toLocaleTimeString();
}

setInterval(updateClock, 1000); // Update the clock every second

const menuContainer = document.querySelector('#section_menu_flex');


const menuButton = document.getElementById("button_align");
    const menu = document.getElementById("section_menu_flex");

    menuButton.addEventListener("click", () => {
      menu.style.display = menu.style.display === "none" ? "flex" : "none";
    });

// const icons = document.querySelector('.icon-1');

// icons.forEach(icon => {
//   icon.addEventListener('click', () => {
//     // Open the application associated with the icon here
//   });
// });