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
  var comitSwiper = new Swiper('.comit__container', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  })
  
  var historySwiper = new Swiper('.history__swiper-container', {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.history-button--next',
      prevEl: '.history-button--prev',
    },
  })

  $(".email__imput").validate({
    messages: {
      email: {
        required: "Заполните поле",
        email: "Формат почты @mail.ru"
      }
    },
  });
});
