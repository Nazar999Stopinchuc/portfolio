


$(function () {

  let $page = $('html, body');
  $('.menu__link, .logo, .header__scrol').click(function () {
    $page.animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 800);
    return false;
  });

  $('.burger, .menu__link').click(function () {
    $('.burger, .menu__list').toggleClass('active');
    $('body').toggleClass('lock');
  });

});

window.onscroll = function headerFixed() {
  let header = document.querySelector('.header__wrapper');

  if (window.pageYOffset > 55) {
    header.classList.add('header__wrapper--fixed');
  } else {
    header.classList.remove('header__wrapper--fixed');
  }
}


var mixer = mixitup('.works__content');









