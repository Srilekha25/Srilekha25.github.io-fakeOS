//Display the Notepad when icon is clicked

let notepadIcon = document.getElementById("icon-2");
let notepadModal = document.getElementById("section__notepad--form");

notepadIcon.addEventListener("click", () => {
  
  console.log("coming inside notepad when icon is clicked");
  notepadModal.style.display="flex";
  notepadModal.classList.add("section__notepad--form--display-mode");
});

//Close the Image Resizer when X is clicked
document.getElementById("button__close--align").addEventListener("click", () => {
  notepadModal.classList.remove("section__notepad--form--display-mode");
});