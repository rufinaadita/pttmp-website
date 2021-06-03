

$(document).ready(function(){
    /*--------------- Navbar Shrink -------------------*/
   $(window).on("scroll",function(){
     if($(this).scrollTop() > 90){
         $(".navbar").addClass("navbar-shrink");
    }
    else{
        $(".navbar").removeClass("navbar-shrink");
     }
  });

  /*------------- Page Scrolling - ScrollIt -----------*/
  // $.scrollIt({
  //   topOffset: -50
  // });

  const sections = document.querySelectorAll('section[id]')

  window.addEventListener('scroll', scrollActive)

  function scrollActive(){
      const scrollY = window.pageYOffset

      sections.forEach(current =>{
          const sectionHeight = current.offsetHeight
          const sectionTop = current.offsetTop - 50;
          sectionId = current.getAttribute('id')

          if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
              document.querySelector('.navbar a[href*=' + sectionId + ']').classList.add('active')
          }else{
              document.querySelector('.navbar a[href*=' + sectionId + ']').classList.remove('active')
          }
      })
  }

  /*===== SCROLL REVEAL ANIMATION =====*/
  const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
  })
  /* SCROLL HOME */
  sr.reveal('.home,', {})


  /*--------------- Navbar Collapse ------------------*/
  $(".nav-link").on("click", function(){
    $(".navbar-collapse").collapse("hide");
  });

  /*--------------- Swiper Slide ---------------------*/
  function initParadoxWay() {
    "use strict";
   
    if ($(".testimonials-carousel").length > 0) {
        var j2 = new Swiper(".testimonials-carousel .swiper-container", {
            preloadImages: false,
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            grabCursor: true,
            mousewheel: false,
            centeredSlides: true,
            pagination: {
                el: '.tc-pagination',
                clickable: true,
                dynamicBullets: true,
            },
            navigation: {
                nextEl: '.listing-carousel-button-next',
                prevEl: '.listing-carousel-button-prev',
            },
            breakpoints: {
                1024: {
                    slidesPerView: 3,
                },
                
            }
        });
    }
    
    // bubbles -----------------
    
    setInterval(function () {
        var size = randomValue(sArray);
        $('.bubbles').append('<div class="individual-bubble" style="left: ' + randomValue(bArray) + 'px; width: ' + size + 'px; height:' + size + 'px;"></div>');
        $('.individual-bubble').animate({
            'bottom': '100%',
            'opacity': '-=0.7'
        }, 4000, function () {
            $(this).remove()
        });
    }, 350);
    
  }

  //   Init All ------------------
  $(document).ready(function () {
      initParadoxWay();
  });

});
