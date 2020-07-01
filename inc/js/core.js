//@prepros-prepend jquery.magnific-popup.js
jQuery(document).ready(function($) {


    $("html")
      .delay(300)
      .queue(function(next) {
        $(this).addClass("loaded");
        next();
      });

  /* CLASS AND FOCUS ON CLICK */

 $(".read-more--open").click(function(e) {
     e.preventDefault();
     $(this).prev().slideToggle('slow');
     $(this).fadeOut('slow');
  });

  $(".read-more-wrapper--close").click(function(e) {
      e.preventDefault();
      $('.read-more-wrapper').slideUp('slow');
      $(".read-more--open").fadeIn('slow');
   });

  $(".menu-trigger").click(function(e) {
    e.preventDefault();
    $(this).toggleClass("clicked");
    $('.menu-trigger__icon').toggleClass('active');
    $('.offscreen-nav').toggleClass('active');
  });

  /*$(".style-switch").click(function(e) {
    e.preventDefault();
    $('body').toggleClass('dark');
});*/

  $(".expanding-section__trigger").click(function(e) {
      e.preventDefault();
      $(this).closest('.expanding-section').addClass('open');
      $(this).fadeOut('slow');
      $('.expanding-section__head .heading').fadeOut('slow');
      var currentSection  = $(this).closest('.expanding-section');
      function scrollToTop(){
        $('html, body').animate({
            scrollTop: $(currentSection).offset().top - 100
        }, 'slow');
        }
        setTimeout(scrollToTop, 400);
   });

  $(".expanding-section__close").click(function(e) {
      $(this).closest('.expanding-section').removeClass('open');
      $('.expanding-section__head .heading').fadeIn('slow');
      $('.expanding-section__trigger').fadeIn('slow');
  });

  $(".tabbed-section__head--tab").click(function(e) {
      var selectedTab = $(this).attr("data-tab");
      $(".tabbed-section__head--tab.active").removeClass('active');
      $(this).addClass('active');
      $(".tabbed-section__body--item.visible").removeClass('visible');
      $(".tabbed-section__body--item." + selectedTab).addClass('visible');
  });

  $(".js-toggle-trigger").click(function(e) {
      e.preventDefault();
      $('.js-toggle-target.open').slideUp( 300 );
      $('.js-toggle-target.open').removeClass( 'open ' );
      $(this).siblings('.js-toggle-target').slideDown( 300);
      $(this).siblings('.js-toggle-target').addClass('open');
      $('.js-toggle-parent.active').removeClass('active');
      $(this).closest('.js-toggle-parent').addClass('active');
      var currentToggle = $(this).closest('.js-toggle-parent');
      var toggleTriggerHeight = $(this).outerHeight();
      var navHeight = $('nav').outerHeight();
      var scrollOffset = toggleTriggerHeight + navHeight;
      function scrollToTop(){
        $('html, body').animate({
            scrollTop: $(currentToggle).offset().top - scrollOffset
        }, 'slow');
        }
        setTimeout(scrollToTop, 400);
  });

  $(".menu__item--trigger").click(function(e) {
      e.preventDefault();
    $('.child-menu.open').removeClass('open').slideUp(300);
    $(this).siblings('.child-menu').slideDown(300);
    $(this).siblings('.child-menu').addClass('open');
    $(".map-block__menu--item.active").removeClass('active');
    $(this).closest('.map-block__menu--item').addClass('active');
  });

  $(".menu__item--trigger").click(function(e) {
      var selectedRegion = '#' + $(this).attr("data-target");
      $('g.active').removeClass('active');
      $('path.active').removeClass('active');
      $(selectedRegion).addClass('active');
      $('#map-marker').removeClass('active');
  });

  $(".child").click(function(e) {
      $('#map-marker').removeClass('active');
      var targetID = $(this).attr("data-target");
      var selectedCountry = '#' + $(this).attr("data-target");
      $('path.active').removeClass('active');
      $(selectedCountry).addClass('active');
      var leftPosition = $(selectedCountry).position().left;
      var topPosition = $(selectedCountry).position().top;
      var offsetTop = $('.map-block__map').offset().top;
      var offsetLeft = $('.map-block__map').offset().left;
      var markerTop = topPosition - offsetTop;
      var markerLeft = leftPosition - offsetLeft;
      var pathHeight = document.getElementById(targetID).getBBox().height / 2;
      var pathWidth = document.getElementById(targetID).getBBox().width / 2;
      markerTop = markerTop + pathHeight;
      markerLeft = markerLeft + pathWidth;
      var containerWidth = $('.map-block').width();
      var markerLine = containerWidth - leftPosition;
      $('#map-marker').css({
          "top": markerTop,
          "left": markerLeft
      });
      $('#map-marker__line').css({
          "width": markerLine
      });
      setTimeout(function(){
          $('#map-marker').addClass('active');
      }, 500);
      $('.map-block__country--item.active').removeClass('active');
      $('.map-block__country--item.' + targetID).addClass('active');


  });
/*
  $(window).on('load', function() {
      $('nav').slideDown(500);
      $('.busy-panel').removeClass('active');
  });

    $(".menu-wrapper__item").click(function(e) {
        $('.busy-panel').addClass('active');
        $('nav').slideUp(500);
    });
*/
    /*$('.switch-wrapper').click(function(e){
      $(this).toggleClass('switched');
  });*/



    // Check local storage and set theme
    if(localStorage.theme) {
        $('body').addClass( localStorage.theme );
    } else {
		$('body').addClass('dark-theme'); // set default theme. No need to set via php now
	}
    //Switch theme and store in local storage ...
    $(".switch-wrapper").click(function(){
         if ($('body').hasClass( 'dark-theme')){
            $('body').removeClass('dark-theme').addClass('light-theme');
            localStorage.theme = 'light-theme';
         } else  {
            $('body').removeClass('light-theme').addClass('dark-theme');
            localStorage.theme = 'dark-theme';
         }
       });

  /* ADD CLASS ON LOAD */
$(document).ready(function() {
  if ($('.tabbed-section').length){
    $( ".tabbed-section__head--tab:nth-child(1)" ).addClass( "active" );
    $( ".tabbed-section__body--item:nth-child(1)" ).addClass( "visible" );
  }
});

  /* ADD CLASS ON SCROLL */
  $(function() {
      var header = $("nav");
      var heroContent = $('.home-hero .content');
      $(window).scroll(function() {
          var scroll = $(window).scrollTop();

          if (scroll >= 50) {
              header.addClass("scrolled");
              heroContent.addClass("fade-out");
          } else {
              header.removeClass("scrolled");
              heroContent.removeClass("fade-out");
          }
      });
  });

  /* ADD CLASS IF FORM HAS INPUT */

  $(".item input").focusin(function() {
    $(this)
      .closest(".item")
      .addClass("active");
  });

  $(".item input").blur(function() {
    if (!$(this).val().length > 0) {
      $(this)
        .closest(".item")
        .removeClass("active");
    }
  });

  $(".item textarea").focusin(function() {
    $(this)
      .closest(".item")
      .addClass("active");
  });

  $(".item textarea").blur(function() {
    if (!$(this).val().length > 0) {
      $(this)
        .closest(".item")
        .removeClass("active");
    }
  });

  // ========== Add class if in viewport on page load

  $.fn.isOnScreen = function() {
    var win = $(window);

    var viewport = {
      top: win.scrollTop(),
      left: win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();

    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();

    return !(
      viewport.right < bounds.left ||
      viewport.left > bounds.right ||
      viewport.bottom < bounds.top ||
      viewport.top > bounds.bottom
    );
  };

  $(".slide-up, .slide-down, .slide-right, .slow-fade").each(function() {
    if ($(this).isOnScreen()) {
      $(this).addClass("active");
    }
  });

  // ========== Add class on entering viewport

  $.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
  };

  $(window).on("resize scroll", function() {
    $(".slide-up, .slide-down, .slide-right, .slow-fade").each(function() {
      if ($(this).isInViewport()) {
        $(this).addClass("active");
      }
    });
  });

  // ========== Owl Carousel

  var owlItinerary = $('.owl-carousel.itinerary-carousel');
  owlItinerary.owlCarousel({
      loop:true,
      margin:0,
      nav:false,
      lazyLoad: true,
      dots: false,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          800:{
              items:1
          },
          1200:{
              items:1
          }
      },
  });

  $(".owl-next").click(function() {
    owlItinerary.trigger('next.owl.carousel');
  });
  $('.owl-prev').click(function() {
    owlItinerary.trigger('prev.owl.carousel');
  });

  $(document).ready(function() {

      $('.gallery').magnificPopup({
          delegate: 'a.lightbox-gallery',
          type: 'image',
          gallery:{
              enabled:true
          }
      });
  });


}); //Don't remove ---- end of jQuery wrapper
