// SMOOTH SCROLL

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// NAVIBATION BAR - scrolling effect

$(window).on("scroll", function() {
  if($(window).scrollTop()) {
    $('nav').addClass('black');
  }
  else {
    $('nav').removeClass('black');
  }
});

  $(document).ready(function(){

  // NAVIBATION BAR - menu toggle

    $(".menu-icon").on("click", function() {
      $("nav ul").toggleClass("showing");
    });

  // BX SLIDER

    $('.bxslider').bxSlider({
      mode: 'fade',
      pager: false,
      auto: true,
      autoHover: true,
      responsive: true
    });

  // NEWSLETTER POPUP

    $('#open').click(function(){
      $('#popup_container').toggle();
    });
    
    $('#close').click(function(){
      $('#popup_container').toggle();
    });

  // CONTACT POPUP

    $('#open_msg').click(function(){
      $('#popup_container_msg').toggle();
    });
    
    $('#close_msg').click(function(){
      $('#popup_container_msg').toggle();
    });
});


// NEWSLETTER VALIDATE

function validateForm() {
  let x = document.forms["newsletterForm"]["fullname"].value;
  if (x == "") {
    alert("Full Name must be filled out");
    return false;
  }
}

