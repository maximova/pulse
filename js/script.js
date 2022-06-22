$('.carousel__inner').slick({
  speed: 1200,
  // adaptiveHeight: true,
  prevArrow: '<button type="button" class="slick-prev"><img src="img/icon/left_arrow.svg"></button>',
  nextArrow: '<button type="button" class="slick-next"><img src="img/icon/right_arrow.svg"></button>',
  responsive: [{
    breakpoint: 992,
    settings: {
      dots: false,
      arrows: false
    }
  }]
});

// const slider = tns({
//     container: '.carousel__inner',
//     items: 1,
//     slideBy: 'page',
//     autoplay: false,
//     nav: false,
//     controls: false,
//   });

$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
  $(this)
    .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
    .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
});

function toggleSlide(item) {
  $(item).each(function (i) {
    $(this).on('click', function (e) {
      e.preventDefault();
      $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
      $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    })
  });
};

toggleSlide('.catalog-item__link');
toggleSlide('.catalog-item__link-back');

//modal
$('[data-modal=consultation]').on('click', function() {
  $('.overlay, #consultation').fadeIn('slow');
});
$('.modal__close').on('click', function() {
  $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
});

$('.button_mini').each(function(i) {
  $(this).on('click', function() {
    $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
    $('.overlay, #order').fadeIn('slow');
  })
});

$('#consultation-form').validate();
$('#consultation form').validate({
  rules: {
    name: "required",
    phone: "required",
    email: {
      required: true,
      email: true
    },
    messages: {
      name: "Введите, пожалуйста, своё имя",
      phone: "Введите, пожалуйста, свой номер телефона",
      email: {
        required: "Введите, пожалуйста, свою почту",
        email: "Некорректный адрес почты"
      }
    }
  }
});
$('#order form').validate();
