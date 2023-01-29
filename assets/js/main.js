(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
  }); 

  AOS.init();

  function RemoveReadMore() {
    window.addEventListener('scroll', () => {
        if (document.querySelectorAll('.scrollDown').length > 0) {
            let scrBtn = document.querySelector('.scrollDown');
            if (window.scrollY > 30 ) { //(scrBtn.offsetTop/2)
                scrBtn.classList.add('passed')
            }else{
                scrBtn.classList.remove('passed')
            }
        }
    }) 
}
RemoveReadMore()

  // sticky header
  function StickyHeader() {
    window.addEventListener('scroll', () => {
      let header = document.querySelector('.header-area')
      if (window.scrollY > header.clientHeight) {
        header.classList.add('sticky')
      }else{
        header.classList.remove('sticky')
      }
    })
  }
  StickyHeader()
 

  // owlCarousel
  $(".hero-items").owlCarousel({
    loop: true,
    margin: 0,
    items: 1,
    navText: [
      '<i class="fal fa-angle-left"></i>',
      '<i class="fal fa-angle-right"></i>'
    ],
    nav: true,
    dots: false,
    // responsive: {
    //   0: {
    //     items: 2
    //   },
    //   767: {
    //     items: 3
    //   },
    //   992: {
    //     items: 6
    //   }
    // }
  });

  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1000, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });
 
})(jQuery);
