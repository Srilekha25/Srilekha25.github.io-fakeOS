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



//Display the Image Resizer when icon is clicked

let ImageResizer = document.getElementById("icon-3");
let imageResizerModal = document.getElementById("section__image-resizer--form");
let imageResizerflex = document.getElementById("section__image-resizer--flex");

ImageResizer.addEventListener("click", () => {
  console.log("coming inside image resizer when icon is clicked");
  //imageResizerModal.style.display="block";
  imageResizerModal.classList.add("section__image-resizer--form--display-mode");
});

//Close the Image Resizer when X is clicked
document.getElementById("button__close--align").addEventListener("click", () => {
  //imageResizerModal.style.display="none";
  imageResizerModal.classList.remove("section__image-resizer--form--display-mode");
});

//End of Image Resizer