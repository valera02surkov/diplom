$(document).ready(function () {
  var openModal = document.querySelector(".header__mobail");
  openModal.addEventListener("click", function () {
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
  function closeModal() {
     modalHeader.removeClass("modal-header--visible")
  };
  var comitSwiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
})
});
