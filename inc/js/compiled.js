jQuery(document).ready((function(e){e("html").delay(300).queue((function(t){e(this).addClass("loaded"),t()})),e(".read-more--open").click((function(t){t.preventDefault(),e(this).prev().slideToggle("slow"),e(this).fadeOut("slow")})),e(".read-more-wrapper--close").click((function(t){t.preventDefault(),e(".read-more-wrapper").slideUp("slow"),e(".read-more--open").fadeIn("slow")})),e(".menu-trigger").click((function(t){t.preventDefault(),e(this).toggleClass("clicked"),e(".menu-trigger__icon").toggleClass("active"),e(".offscreen-nav").toggleClass("active")})),e(".expanding-section__trigger").click((function(t){t.preventDefault(),e(this).closest(".expanding-section").addClass("open"),e(this).fadeOut("slow"),e(".expanding-section__head .heading").fadeOut("slow");var s=e(this).closest(".expanding-section");setTimeout((function(){e("html, body").animate({scrollTop:e(s).offset().top-100},"slow")}),400)})),e(".expanding-section__close").click((function(t){e(this).closest(".expanding-section").removeClass("open"),e(".expanding-section__head .heading").fadeIn("slow"),e(".expanding-section__trigger").fadeIn("slow")})),e(".tabbed-section__head--tab").click((function(t){var s=e(this).attr("data-tab");e(".tabbed-section__head--tab.active").removeClass("active"),e(this).addClass("active"),e(".tabbed-section__body--item.visible").removeClass("visible"),e(".tabbed-section__body--item."+s).addClass("visible")})),e(".js-toggle-trigger").click((function(t){t.preventDefault(),e(".js-toggle-target.open").slideUp(300),e(".js-toggle-target.open").removeClass("open "),e(this).siblings(".js-toggle-target").slideDown(300),e(this).siblings(".js-toggle-target").addClass("open"),e(".js-toggle-parent.active").removeClass("active"),e(this).closest(".js-toggle-parent").addClass("active");var s=e(this).closest(".js-toggle-parent"),i=e(this).outerHeight()+e("nav").outerHeight();setTimeout((function(){e("html, body").animate({scrollTop:e(s).offset().top-i},"slow")}),400)})),e(".menu__item--trigger").click((function(t){t.preventDefault(),e(".child-menu.open").removeClass("open").slideUp(300),e(this).siblings(".child-menu").slideDown(300),e(this).siblings(".child-menu").addClass("open"),e(".map-block__menu--item.active").removeClass("active"),e(this).closest(".map-block__menu--item").addClass("active")})),e(".menu__item--trigger").click((function(t){var s="#"+e(this).attr("data-target");e("g.active").removeClass("active"),e("path.active").removeClass("active"),e(s).addClass("active"),e("#map-marker").removeClass("active")})),e(".child").click((function(t){e("#map-marker").removeClass("active");var s=e(this).attr("data-target"),i="#"+e(this).attr("data-target");e("path.active").removeClass("active"),e(i).addClass("active");var a=e(i).position().left,o=e(i).position().top-e(".map-block__map").offset().top,l=a-e(".map-block__map").offset().left;o+=document.getElementById(s).getBBox().height/2,l+=document.getElementById(s).getBBox().width/2;var n=e(".map-block").width()-a;e("#map-marker").css({top:o,left:l}),e("#map-marker__line").css({width:n}),setTimeout((function(){e("#map-marker").addClass("active")}),500),e(".map-block__country--item.active").removeClass("active"),e(".map-block__country--item."+s).addClass("active")})),localStorage.theme?e("body").addClass(localStorage.theme):e("body").addClass("dark-theme"),e(".switch-wrapper").click((function(){e("body").hasClass("dark-theme")?(e("body").removeClass("dark-theme").addClass("light-theme"),localStorage.theme="light-theme"):(e("body").removeClass("light-theme").addClass("dark-theme"),localStorage.theme="dark-theme")})),e(document).ready((function(){e(".tabbed-section").length&&(e(".tabbed-section__head--tab:nth-child(1)").addClass("active"),e(".tabbed-section__body--item:nth-child(1)").addClass("visible"))})),e((function(){var t=e("nav"),s=e(".home-hero .content");e(window).scroll((function(){e(window).scrollTop()>=50?(t.addClass("scrolled"),s.addClass("fade-out")):(t.removeClass("scrolled"),s.removeClass("fade-out"))}))})),e(".item input").focusin((function(){e(this).closest(".item").addClass("active")})),e(".item input").blur((function(){!e(this).val().length>0&&e(this).closest(".item").removeClass("active")})),e(".item textarea").focusin((function(){e(this).closest(".item").addClass("active")})),e(".item textarea").blur((function(){!e(this).val().length>0&&e(this).closest(".item").removeClass("active")})),e.fn.isOnScreen=function(){var t=e(window),s={top:t.scrollTop(),left:t.scrollLeft()};s.right=s.left+t.width(),s.bottom=s.top+t.height();var i=this.offset();return i.right=i.left+this.outerWidth(),i.bottom=i.top+this.outerHeight(),!(s.right<i.left||s.left>i.right||s.bottom<i.top||s.top>i.bottom)},e(".slide-up, .slide-down, .slide-right, .slow-fade").each((function(){e(this).isOnScreen()&&e(this).addClass("active")})),e.fn.isInViewport=function(){var t=e(this).offset().top,s=t+e(this).outerHeight(),i=e(window).scrollTop(),a=i+e(window).height();return s>i&&t<a},e(window).on("resize scroll",(function(){e(".slide-up, .slide-down, .slide-right, .slow-fade").each((function(){e(this).isInViewport()&&e(this).addClass("active")}))}));var t=e(".owl-carousel.itinerary-carousel");t.owlCarousel({loop:!0,margin:0,nav:!1,lazyLoad:!0,dots:!1,responsive:{0:{items:1},600:{items:1},800:{items:1},1200:{items:1}}}),e(".owl-next").click((function(){t.trigger("next.owl.carousel")})),e(".owl-prev").click((function(){t.trigger("prev.owl.carousel")}))}));