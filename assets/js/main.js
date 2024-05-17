/**
*
* -----------------------------------------------------------------------------
*
* Template : Echooling - Online Education HTML Template
* Author : reacthemes
* Author URI : https://reactheme.com/

* -----------------------------------------------------------------------------
*
**/

(function ($) {
  "use strict";

  //Menu Code Here
  $("#backmenu").backResponsiveMenu({
    resizeWidth: '991',
    animationSpeed: 'medium',
    accoridonExpAll: false
  });

  //Menu Active Here
  var path = window.location.href;
  $('.react-menus li a').each(function () {
    if (this.href === path) {
      $(this).addClass('react-current-page');
    }
  });

  // Sticky Menu
  var header = $('.react-header');
  var win = $(window);
  win.on('scroll', function () {
    var scroll = win.scrollTop();
    if (scroll < 100) {
      header.removeClass("react-sticky");
    } else {
      header.addClass("react-sticky");
    }
  });

  /*-------------------------------------
      Parallax Sidebar
  -------------------------------------*/
  var back_parallax = $('.parallax');
  if (back_parallax.length) {
    $('.parallax').parallax();
  }

  // Elements Animation
  if ($('.wow').length) {
    var wow = new WOW({
      boxClass: 'wow', // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset: 0, // distance to the element when triggering the animation (default is 0)
      mobile: false, // trigger animations on mobile devices (default is true)
      live: true // act on asynchronously loaded content (default is true)
    });
    wow.init();
  }

  if ($('.counter').length) {
    $('.counter').counterUp({
      delay: 10,
      time: 2000
    });
  }

  // magnificPopup init
  var imagepopup = $('.image-popup');
  if (imagepopup.length) {
    $('.image-popup').magnificPopup({
      type: 'image',
      callbacks: {
        beforeOpen: function () {
          this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure animated zoomInDown');
        }
      },
      gallery: {
        enabled: true
      }
    });
  }


  //Taggle Js
  $('#menu-btn').on('click', function (e) {
    $(this).toggleClass("back__close");
    e.preventDefault();
  });

  // search-bar toggle
  $(".search-btn").click(function () {
    $('.search-input').toggleClass('show');
  });


  // Home Slider
  if ($('.home-sliders').length) {
    $('.home-sliders').owlCarousel({
      loop: true,
      items: 1,
      margin: 0,
      autoplay: false,
      slideSpeed: 800,
      nav: true,
      dots: false,
      responsive: {
        0: {
          dots: false,
          nav: false,
        },
        768: {
          dots: false,
        },
      }
    })
  }

  // Client Slider Part
  if ($('.client-slider').length) {
    $('.client-slider').owlCarousel({
      loop: true,
      items: 1,
      margin: 0,
      autoplay: false,
      slideSpeed: 300,
      nav: true,
      dots: false,
      center: false,
      responsive: {
        0: {
          items: 1,
          center: false,
        },
        575: {
          items: 1,
          center: false,
        },
        767: {
          items: 1,
          center: false,
        },
        1200: {
          items: 1,
        },
      }
    })
  }

  // Client Slider Part
  if ($('.event-slider').length) {
    $('.event-slider').owlCarousel({
      loop: true,
      items: 4,
      margin: 25,
      autoplay: false,
      slideSpeed: 300,
      nav: false,
      dots: true,
      center: false,
      responsive: {
        0: {
          items: 1,
          center: false,
        },
        575: {
          items: 1,
          center: false,
        },
        767: {
          items: 2,
          center: false,
        },
        1200: {
          items: 4,
          dots: true,
        },
      }
    })
  }

  // Client Slider Part
  if ($('.feedreact-slider').length) {
    $('.feedreact-slider').owlCarousel({
      loop: true,
      items: 3,
      margin: 25,
      autoplay: false,
      slideSpeed: 300,
      nav: true,
      dots: false,
      center: false,
      responsive: {
        0: {
          items: 1,
          center: false,
        },
        575: {
          items: 1,
          center: false,
        },
        767: {
          items: 2,
          center: false,
        },
        1200: {
          items: 3,
          dots: false,
        },
      }
    })
  }

  // Client Slider Part
  if ($('#react-blog-slider').length) {
    $('#react-blog-slider').owlCarousel({
      loop: true,
      items: 3,
      margin: 20,
      autoplay: false,
      slideSpeed: 300,
      nav: false,
      dots: false,
      center: false,
      responsive: {
        0: {
          items: 1,
          center: false,
        },
        575: {
          items: 1,
          center: false,
        },
        767: {
          items: 2,
          center: false,
        },
        1200: {
          items: 3,
        },
      }
    })
  }

  if ($('.gallery-Slider-6').length) {
    $('.gallery-Slider-6').owlCarousel({
      loop: true,
      items: 1,
      center: true,
      margin: 0,
      nav: true,
      dots: false,
      smartSpeed: 800,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
          center: true,
        },
        575: {
          items: 2,
          center: true,
        },
        767: {
          items: 4,
          center: true,
        },
        1200: {
          items: 6,
        },
      }
    })
  }

  // Skill bar 
  var skillbar = $('.skillbars');
  if (skillbar.length) {
    $('.skillbars').skillBars({
      from: 0,
      speed: 4000,
      interval: 100,
      decimals: 0,
    });
  }

  //filter js
  var pifilter = $('.react-grid');
  if (pifilter.length) {
    $('.react-grid').imagesLoaded(function () {
      $('.react-filter').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
          filter: filterValue
        });
      });
      var $grid = $('.react-grid').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
          columnWidth: '.grid-item',
        }
      });
    });
  }

  // portfolio Filter
  var filterbutton = $('.react-filter button');
  if (filterbutton.length) {
    $('.react-filter button').on('click', function (event) {
      $(this).siblings('.active').removeClass('active');
      $(this).addClass('active');
      event.preventDefault();
    });
  }

  // Course Portfolio Filter
  var pifilter = $('.grid');
  if (pifilter.length) {
  $('.grid').isotope({
    itemSelector: '.grid-item',
  });
  $('.filter-button-group').on( 'click', 'li', function() {
    var filterValue = $(this).attr('data-filter');
    $('.grid').isotope({ filter: filterValue });
    $('.filter-button-group li').removeClass('active');
    $(this).addClass('active');
  });}


  //Videos popup jQuery 
  var popup = $('.custom-popup');
  if (popup.length) {
    $('.custom-popup').magnificPopup({
      disableOn: 10,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false
    });
  }

  //Image popup jQuery
  $('a.btn-gallery').on('click', function (event) {
    event.preventDefault();

    var gallery = $(this).attr('href');

    $(gallery).magnificPopup({
      delegate: 'a',
      type: 'image',
      removalDelay: 300,
      mainClass: 'mfp-fade',
      gallery: {
        enabled: true
      }
    }).magnificPopup('open');
  });


  //preloader
  $(window).on('load', function () {
    $("#react__preloader").delay(500).fadeOut(300);
    $("#react__preloader").delay(500).fadeOut(300);
  })

  // scrollTop init
  var pitotop = $('#backscrollUp');
  if (pitotop.length) {
    win.on('scroll', function () {
      if (win.scrollTop() > 350) {
        pitotop.fadeIn();
      } else {
        pitotop.fadeOut();
      }
    });
    pitotop.on('click', function () {
      $("html,body").animate({
        scrollTop: 0
      }, 500)
    });
  }
  var lastScrollTop = 0;
  $(window).scroll(function (event) {
    var st = $(this).scrollTop();
    if (st > lastScrollTop) {
      $("#backscrollUp").removeClass("react__up___scroll");
    } else {
      $("#backscrollUp").addClass("react__up___scroll");
    }
    lastScrollTop = st;
  });


  // langueges-slider
  let languegeSlider = $('.languegeSlider');
  if (languegeSlider.length) {
    var swiper = new Swiper(".languegeSlider", {
      slidesPerView: 5,
      spaceBetween: 0,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      centeredSlides: true,
      breakpoints: {
        1500: {
          slidesPerView: 6,
        },
        991: {
          slidesPerView: 4,
        },
        767: {
          slidesPerView: 4,
        },
        575: {
          slidesPerView: 3,
        },
        0: {
          slidesPerView: 3,
        }
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      }
    });
  }

  // trending-slider
  let trendingSlider = $('.trendingSlider');
  if (trendingSlider.length) {
    var swiper = new Swiper(".trendingSlider", {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      centeredSlides: true,
      breakpoints: {
        1500: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 3,
        },
        767: {
          slidesPerView: 2,
        },
        575: {
          slidesPerView: 1,
        },
        0: {
          slidesPerView: 1,
        }
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      navigation: {
        nextEl: ".trending-button-next",
        prevEl: ".trending-button-prev"
      }
    });
  }
  // trending-slider-5
  let trendingSlider_5 = $('.trendingSlider-5');
  if (trendingSlider_5.length) {
  var swiper = new Swiper(".trendingSlider-5", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    centeredSlides: true,
    breakpoints: {
      1500: {
        slidesPerView: 3,
      },
      991: {
        slidesPerView: 3,
      },
      767: {
        slidesPerView: 2,
      },
      575: {
        slidesPerView: 1,
      },
      0: {
        slidesPerView: 1,
      }
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    }
  });
}
  // trending-slider-5
  let coursesSlider_6 = $('.coursesSlider-6');
  if (coursesSlider_6.length) {
  var swiper = new Swiper(".coursesSlider-6", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    centeredSlides: true,
    breakpoints: {
      1500: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 2,
      },
      575: {
        slidesPerView: 1,
      },
      0: {
        slidesPerView: 1,
      }
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    }
  });
}
  // trending-slider-5
  let testimonialsSlider_5 = $('.testimonialsSlider-5');
  if (testimonialsSlider_5.length) {
  var swiper = new Swiper(".testimonialsSlider-5", {
    slidesPerView: 1,
    spaceBetween: 0,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    centeredSlides: true,
    breakpoints: {
      1500: {
        slidesPerView: 1,
      },
      991: {
        slidesPerView: 1,
      },
      767: {
        slidesPerView: 1,
      },
      575: {
        slidesPerView: 1,
      },
      0: {
        slidesPerView: 1,
      }
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    navigation: {
      nextEl: ".testimonials-slider-prev-btn",
      prevEl: ".testimonials-slider-next-btn"
    }
  });
}


  // testimonials-slider
  let testimonialsSlider = $('.testimonialsSlider');
  if (testimonialsSlider.length) {
  var swiper = new Swiper(".testimonialsSlider", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    centeredSlides: true,
    breakpoints: {
      1500: {
        slidesPerView: 3,
      },
      991: {
        slidesPerView: 3,
      },
      767: {
        slidesPerView: 2,
      },
      575: {
        slidesPerView: 1,
      },
      0: {
        slidesPerView: 1,
      }
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    navigation: {
      nextEl: ".testimonials-button-next",
      prevEl: ".testimonials-button-prev"
    }
  });
}
  // testimonials-slider
  let testimonialsSlider6 = $('.testimonialsSlider6');
  if (testimonialsSlider6.length) {
  var swiper = new Swiper(".testimonialsSlider6", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    centeredSlides: true,
    breakpoints: {
      1500: {
        slidesPerView: 3,
      },
      991: {
        slidesPerView: 3,
      },
      767: {
        slidesPerView: 2,
      },
      575: {
        slidesPerView: 1,
      },
      0: {
        slidesPerView: 1,
      }
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    navigation: {
      nextEl: ".testimonials-slider-next-btn",
      prevEl: ".testimonials-slider-prev-btn"
    }
  });
}


  // blog-slider
  let blogSlider_5 = $('.blogSlider-5');
  if (blogSlider_5.length) {
  var swiper = new Swiper(".blogSlider-5", {
    slidesPerView: 4,
    slidesPerColumn: 4,
    spaceBetween: 20,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    breakpoints: {
      1500: {
        slidesPerView: 4,
      },
      991: {
        slidesPerView: 3,
      },
      767: {
        slidesPerView: 2,
      },
      575: {
        slidesPerView: 1,
      },
      0: {
        slidesPerView: 1,
      }
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    navigation: {
      nextEl: ".blog-slider-next-btn",
      prevEl: ".blog-slider-prev-btn"
    }
  });
}

  $(document).on('click', '.navigation-btn', function() {
    var show = $(this).data('show');
    $(show).removeClass("hide").siblings().addClass("hide");
  });
  
  $(document).on('click', '.navigation-btn', function(){
    $(this).addClass('active').siblings().removeClass('active')
  })

  //   click to scroll
  $(document).ready(function () {
    $(".scrollDown").click(function (event) {
      $("html, body").animate({
        scrollTop: "+=800px"
      }, 800);
    });
  });


  // Common-slider
  let swiperCommon = $('.swiperCommon');
  if (swiperCommon.length) {
  var swiper = new Swiper(".swiperCommon", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    centeredSlides: true,
    breakpoints: {
      1500: {
        slidesPerView: 3,
      },
      991: {
        slidesPerView: 3,
      },
      767: {
        slidesPerView: 2,
      },
      575: {
        slidesPerView: 1,
      },
      0: {
        slidesPerView: 1,
      }
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    navigation: {
      nextEl: ".testimonials-slider-next-btn",
      prevEl: ".testimonials-slider-prev-btn"
    }
  });
}

  $(document).on('click', '.navigation-btn', function() {
    var show = $(this).data('show');
    $(show).removeClass("hide").siblings().addClass("hide");
  });
  
  $(document).on('click', '.navigation-btn', function(){
    $(this).addClass('active').siblings().removeClass('active')
  })

  //   click to scroll
  $(document).ready(function () {
    $(".scrollDown").click(function (event) {
      $("html, body").animate({
        scrollTop: "+=800px"
      }, 800);
    });
  });

  

// Image popups
$('#image-popups').magnificPopup({
  delegate: 'a',
  type: 'image',
  image: {
            verticalFit: true
          },
  removalDelay: 500,
  callbacks: {
    beforeOpen: function() {
       this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
       this.st.mainClass = this.st.el.attr('data-effect');
    }
  },
  closeOnContentClick: false,
  midClick: true
});


// Home Seven QNA Dropdown
$(document).on('click', '.question', function(){
  var element = $(this).parent(".qna-dropdown-item");
  element.toggleClass('show').siblings().removeClass('show')
})


})(jQuery);