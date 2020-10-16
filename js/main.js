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
  var modalopen = $(".modal-header")

  function openModal() { 
    modalopen.addClass("modal-header--visible")
  };
  function closeModal() {
     modalopen.removeClass("modal-header--visible")
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

  $(".form").each(function () {
    $(this).validate({
    messages: {
      phone: {
        required: "Ваш Номер",
        minlength: "номер содержит 11 символов"
      },
      email: {
        required: "Заполните поле",
        email: "Формат почты @mail.ru"
      },
      password: {
        required: "Введите пароль",
        minlength: "пароль из 5 символов"
      },
    },
  });
});



  var openModal2 = document.querySelector(".header__button");
  openModal2.addEventListener("click", function () {
    document
      .querySelector(".modal__log")
    .classList.toggle("modal__log--activ")
  });
  var modalButton = $(".header__button")
  var closebutton = $(".modal__log--close")
  modalButton.on("click", openModal2)
  closebutton.on("click", closeModal2)
  var modalLog = $(".modal__log")

  function openModal2() {
    modalLog.addClass("modal__log--activ")
  }
  function closeModal2() {
    modalLog.removeClass("modal__log--activ")
  }
});
