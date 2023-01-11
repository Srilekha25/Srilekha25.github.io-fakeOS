//Displaying the Clock
// Update the clock every second
const clockContainer = document.querySelector("#section__clock--align");

const updateClock = () => {
  const now = new Date();
  clockContainer.innerHTML = now.toLocaleTimeString();
}

setInterval(updateClock, 1000); 

//To display container for start button
const menuButton = document.getElementById("section__start-button--align");
const menu = document.getElementById("section__menu--flex");

menuButton.addEventListener("click", () => {
  menu.style.display = menu.style.display === "none" ? "flex" : "none";
});


//Display nothing when clicked on the screen

var onTheScreen = document.getElementById("section__background--image");
onTheScreen.addEventListener("click", event =>{

  if (event.target === onTheScreen) {
        menu.style.display = "none";
      }
});


//Enabling drag and drop
//Source code extracted from https://www.w3schools.com/howto/howto_js_draggable.asp
dragElement(document.getElementById("section__temp-convertor--form"));
dragElement(document.getElementById("section__notepad--form"));
dragElement(document.getElementById("section__image-resizer--form"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}






