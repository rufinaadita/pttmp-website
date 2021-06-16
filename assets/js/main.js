

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

});
