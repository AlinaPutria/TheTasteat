// loader
let maskL = document.querySelector('.maskL');
window.addEventListener('load', () => {
  maskL.classList.add('hide');
  setTimeout(() => {
    maskL.remove();
  }, 1000)
});
// ANIMATION
const scrollElements = document.querySelectorAll(".js-scroll");
const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};
const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};
const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};
const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};
const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}
window.addEventListener("scroll", () => {
  handleScrollAnimation();
});

// SLIDER
const swiper_home = new Swiper('.home-swiper', {
  speed: 1000,
  slidesPerView: 4,
  loop: false,
  spaceBetween: 35,
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  mousewheel: {
    invert: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 5
    },
    425: {
      slidesPerView: 1,
      spaceBetween: 5
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 15
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 15
    }
  }
});
// .....................
//Get the button:
const mybutton = document.getElementById("myBtn");
const rootElement = document.documentElement;

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
mybutton.addEventListener("click", scrollToTop);
// 
// SCROLL TO
$(document).ready(function(){
	$('.header-top-link-link').click(function () { // 1
		elementClick = $(this).attr('href');
		destination = $(elementClick).offset().top;
		$('body,html').animate({scrollTop: destination }, 1000);
	});
});