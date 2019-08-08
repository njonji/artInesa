"use strict"
jQuery(document).ready(function () {
  
    /* PRELOADER*/
    $("#status").delay(150).fadeOut()
    $("#preloader").delay(250).fadeOut()

  }) 


  jQuery(document).ready(function () {
      /* RIPPLES */
      $(".header").ripples({
        dropRadius: 15,
        perturbance: 0.005,
      })
      
  })

  jQuery(document).ready(function () {
    
    /* NAVBAR */
    $(window).scroll(function() {
      var top = $(window).scrollTop();
      if(top>=0)  {
        $(".navbar").addClass('header__nav-white') 
        $(".nav-item").addClass('header__nav-white-item')
        $(".header__nav--logo").attr("src","img/Logo/inesalogo.png")
        $(".dark-span").addClass('white-span') 
       

      } else 
            if ($(".navbar").hasClass('header__nav-white') & $(".nav-item").hasClass('header__nav-white-item') ) {
                $(".navbar").removeClass('header__nav-white') & $(".nav-item").removeClass('header__nav-white-item') 
                & $(".dark-span").removeClass('white-span') & $(".header__nav--logo").attr("src","img/Logo/inesalogocrnitrans.png")
              
      }
    }); 
    /* NAVBAR END */
})

   jQuery(document).ready(function () {
  /* SCROLL SPY JQ */
    $('body').scrollspy({ target: '.navbar' })
  })     

  
  jQuery(document).ready(function () {
      /* SMOOTH SCROLL*/
      $("a.smooth-scroll").click(function(e) {
        e.preventDefault()
        //Get section ID like #about itd...
        var section_id = $(this).attr("href");
        $("html, body").animate({
          scrollTop:$(section_id).offset().top 
        }, 1250)
    })
 })  


 jQuery(document).ready(function () {
    /* NAV X*/
    $(".navbar-toggler").on("click", function () {
      if($(".zaiks").hasClass('fa-bars')) {
        $(".zaiks").removeClass('fa-bars') & $(".zaiks").addClass('fa-times') 
        & $(".navbar").addClass('header__nav-white') & $(".nav-item").addClass('header__nav-white-item')
        & $(".dark-span").addClass('white-span') &  $(".header__nav--logo").attr("src","img/Logo/inesalogo.png")

      } else {
        $(".zaiks").removeClass('fa-times') & $(".zaiks").addClass('fa-bars')
      }
    })
  })    


  jQuery(document).ready(function () {
        /* GALERIJA ISOTOPE*/
        $("#isotope-container").isotope({
          //Filter item on click
        })

        $("#isotope-filters").on("click", "button", function () {
          //Get Filter Value
          var filterValue = $(this).attr("data-filter")

          //Filter Gallery
          $("#isotope-container").isotope({
            filter:filterValue
          })
      
        })
    })     
  jQuery(document).ready(function () {
          /* MAGNIFIC POPUP BEZ GALERIJE */
          $(".drawings").magnificPopup({
            delegate: 'a', // child items selector, by clicking on it popup will open
            type: 'image'
        })
    })     
  
  jQuery(document).ready(function () {

        /* MAGNIFIC POPUP SA GALERIJE */
          $(".galerija__slike").magnificPopup({
            delegate: 'a', // child items selector, by clicking on it popup will open
            type: 'image',
            gallery:{
              enabled:true
            }
        })
 
    })  
    
    
  









