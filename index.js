// Modal
const showModal = document.querySelector("#show-modal");

const closeModal = document.querySelector("#close-modal");

const modalContent = document.querySelector(".modal");

const body = document.querySelector("body");

const handleModalOpen = () => {
  modalContent.style.display = "flex";
  setTimeout(() => handlecloseModal(), 6000);
};

const handlecloseModal = () => {
  modalContent.style.display = "none";
};

showModal.addEventListener("click", handleModalOpen);

closeModal.addEventListener("click", handlecloseModal);

// --------------------------------------------------------------------------------------------------------------------------------

// Toast
const showToast = document.querySelector("#show-toast");

const closeToast = document.querySelector("#close-toast");

const toastContent = document.querySelector(".toast");

const handleToastOpen = () => {
  toastContent.style.display = "flex";
  setTimeout(() => handleToastClose(), 5000);
};

const handleToastClose = () => {
  toastContent.style.display = "none";
};

showToast.addEventListener("click", handleToastOpen);

closeToast.addEventListener("click", handleToastClose);
