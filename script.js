const modal = document.querySelector(".modal");
const modalButton = document.querySelector(".modal_button");
const Modalclose = document.querySelector(".fa-xmark");
const modalOverlay = document.querySelector(".modal_overlay");

const handleClose = () => {
  modal.style.display = "none";
  modalButton.style.display = "block";
  modalOverlay.style.display = "none";
};

const handleOpen = () => {
  const instruct = document.querySelector("main");
  modal.style.display = "block";
  modalButton.style.display = "none";
  modalOverlay.style.display = "block";
  instruct.style.display = "none";
};

Modalclose.addEventListener("click", handleClose);
modalButton.addEventListener("click", handleOpen);
