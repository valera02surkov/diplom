$(document).ready(function () {

  var openmobil = $(".header__mobail")//мобильное окно
  var closemobil = $(".modal__close")//мобильное окно
  var mobilmodal = $(".modal-header")//мобильное окно


  openmobil.on("click", openmobiled)//мобильное окно
  closemobil.on("click", closemobiled)//мобильное окно

  
  function openmobiled() {
    mobilmodal.addClass("modal-header--visible")//мобильное окно
  }
  function closemobiled() {
    mobilmodal.removeClass("modal-header--visible")//мобильное окно
  }

  var opnelog = $(".modal__log")//модалка для входа
  var openlog = $(".header__button")//модалка для входа
  var closelog = $(".modal__log--close")//модалка для входа

  openlog.on("click", openmobiler)//модалка для входа
  closelog.on("click", closemobiler)//модалка для входа

  function openmobiler() {
    opnelog.addClass("modal__log--activ")
  }
  function closemobiler() {
    opnelog.removeClass("modal__log--activ")
  }


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

  var tabsitem = $('.trend__header--txt')
  var contentitem = $('.trend__flex')

  tabsitem.on("click", function (event) {
    var activContent = $(this).attr("data-target");
    tabsitem.removeClass("trend__header--txt__activ");
    contentitem.removeClass("trend__flex--activ");
    $(activContent).addClass('trend__flex--activ');
    $(this).addClass('trend__header--txt__activ');
  });
});