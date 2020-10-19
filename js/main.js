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
  var mobillog =$(".modal__button")
  var closelog = $(".modal__log--close")//модалка для входа

  mobillog.on("click" ,openmobiler )
  openlog.on("click", openmobiler)//модалка для входа
  closelog.on("click", closemobiler)//модалка для входа

  function openmobiler() {
    opnelog.addClass("modal__log--activ")
    mobilmodal.removeClass("modal-header--visible")
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
        name: {
          required: "Ваш логин",
          minlength: "Не менее 4 символов"
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
  
  var buttonPrev = $(".history-button--prev")
  var buttonNext = $(".history-button--next")
  buttonNext.on("click", activesCikl)
  buttonPrev.on("click", activesCikl)
  function activesCikl() {
    buttonNext.addClass("history-button--next__activ")
    buttonPrev.addClass("history-button--prev__activ")
    buttonPrev.on("click", actives)
    function actives() {
      buttonNext.addClass("history-button--next__activ")
      buttonPrev.on("click", desactiv)
      function desactiv() {
        buttonPrev.removeClass("history-button--prev__activ")
        buttonNext.addClass("history-button--next__activ")
        buttonNext.on("click", activesCikl)
        buttonPrev.on("click", activesCikl)
      }
    }
    buttonNext.on("click", desactiv)
    function desactiv() {
      buttonNext.removeClass("history-button--next__activ")
    }
  }


  var tabsitem = $('.trend__header--txt')
  var contentitem = $('.trend__flex')

  tabsitem.on("click", function (event) {
    var activContent = $(this).attr("data-target");
    tabsitem.removeClass("trend__header--txt__activ");
    contentitem.removeClass("trend__flex--activ");
    $(activContent).addClass('trend__flex--activ');
    $(this).addClass('trend__header--txt__activ');
  });


  var link = $(".modal__menu")
  link.on("click", rem)
  var closer = $(".modal-header")
  function rem() { 
    closer.removeClass("modal-header--visible")
  };
});