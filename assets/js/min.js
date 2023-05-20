function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  
  
  var windowOn = $(window);
  
  windowOn.on('load', function () {
    $("#loading").delay(500).fadeOut("slow");
  });
  
  
  windowOn.scroll(function () {
    if ($(this).scrollTop() > 300) {
      $('.sticky-top').addClass('shadow-sm').css('top', '0px');
    } else {
      $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
    }
  });
//slider


$(document).ready(function () {
    $('.one-time').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      rtl: true,
      autoplaySpeed: 2000,
      dots: true,
      prevArrow: '<button class="slick-prev prev-arrow"><i class="fa-solid fa-angle-right"></i></button>',
      nextArrow: '<button class="slick-next next-arrow"><i class="fa-solid fa-angle-left"></i></button>',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 1008,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 800,
          settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    })
  });
  
  const plus = document.querySelector(".plus"),
    minus = document.querySelector(".minus"),
    num = document.querySelector(".num");

window.addEventListener("load", ()=> {
    if (localStorage["num"]) {
        num.innerText = localStorage.getItem("num");
    } else {
        let a = "01";
        num.innerText = a;
    }
});

plus.addEventListener("click", ()=> {
    a = num.innerText;
    a++;
    a = (a < 10) ? "0" + a : a;
    localStorage.setItem("num", a);
    num.innerText = localStorage.getItem("num");
});

minus.addEventListener("click", ()=> {
    a = num.innerText;
    if (a > 1) {
        a--;
        a = (a < 10) ? "0" + a : a;
        localStorage.setItem("num", a);
        num.innerText = localStorage.getItem("num");
    }
});


function togglePasswordVisibility() {
  var passwordInput = document.getElementById("password-input");
  var toggleIcon = document.querySelector(".toggle-password");
  
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleIcon.style.backgroundImage = '<i class="fa-light fa-eye"></i>'; /* Replace with your open eye icon image */
  } else {
    passwordInput.type = "password";
    toggleIcon.style.backgroundImage = '<i class="fa-sharp fa-regular fa-eye-slash"></i>'; /* Replace with your eye icon image */
  }
}
