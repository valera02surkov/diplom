$(document).ready(function () {
  var openModal = document.querySelector(".header__mobail");
  openModal.addEventListener("click", function () {
    console.log("клик");
    document
      .querySelector(".modal-header")
      .classList.toggle("modal-header--visible")
  });
  var closeModalButton = $(".modal__close")
  var modalHeader = $(".modal-header")
  modalHeader.on("click", openModal);
  closeModalButton.on("click", closeModal);

  function openModal() { 
    modalHeader.addClass("modal-header--visible")
  };
  function closeModal(event) {
     modalHeader.removeClass("modal-header--visible")
  }
});
