// навигация 
window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});

// анимация появления
var isScrolling = false;
 
window.addEventListener("scroll", throttleScroll, false);

function throttleScroll(e) {
  if (isScrolling == false) {
    window.requestAnimationFrame(function() {
      scrolling(e);
      isScrolling = false;
    });
  }
  isScrolling = true;
}

document.addEventListener("DOMContentLoaded", scrolling, false);

var intro = document.querySelector("#content__intro");
var about1 = document.querySelector("#about1");
var about2 = document.querySelector("#about2");
var about3 = document.querySelector("#about3");
var about4 = document.querySelector("#about4");
var title = document.querySelector("#title");
var dish__block1 = document.querySelector("#dish__block1");
var dish__block2 = document.querySelector("#dish__block2");
var team = document.querySelector("#content__team");
var cnt__title = document.querySelector("#cnt__title");
var cnt__right = document.querySelector("#cnt__right");
var cnt__left = document.querySelector("#cnt__left");

function scrolling(e) {
// блок интро
  if (isFullyVisible(intro)) {
    intro.classList.add("active");
  } else {
    intro.classList.remove("active");
  }
//   блок О нас
  if (isFullyVisible(about1)) {
    about1.classList.add("active");
  } else {
    about1.classList.remove("active");
  }
  if (isFullyVisible(about2)) {
    about2.classList.add("active");
  } else {
    about2.classList.remove("active");
  }
  if (isFullyVisible(about3)) {
    about3.classList.add("active");
  } else {
    about3.classList.remove("active");
  }
  if (isFullyVisible(about4)) {
    about4.classList.add("active");
  } else {
    about4.classList.remove("active");
  }
// Menu
  if (isFullyVisible(title)) {
    title.classList.add("active");
  } else {
    title.classList.remove("active");
  }
  if (isFullyVisible(dish__block1)) {
    dish__block1.classList.add("active");
  } else {
    dish__block1.classList.remove("active");
  }
  if (isFullyVisible(dish__block2)) {
    dish__block2.classList.add("active");
  } else {
    dish__block2.classList.remove("active");
  }
// Team
  if (isFullyVisible(team)) {
    team.classList.add("active");
  } else {
    team.classList.remove("active");
  }
// Contact
  if (isFullyVisible(cnt__title)) {
    cnt__title.classList.add("active");
  } else {
    cnt__title.classList.remove("active");
  }
  if (isFullyVisible(cnt__left)) {
    cnt__left.classList.add("active");
  } else {
    cnt__left.classList.remove("active");
  }
  if (isFullyVisible(cnt__right)) {
    cnt__right.classList.add("active");
  } else {
    cnt__right.classList.remove("active");
  }
}

function isFullyVisible(el) {
  var elementBoundary = el.getBoundingClientRect();

  var top = elementBoundary.top;
  var bottom = elementBoundary.bottom;
  var height = elementBoundary.height;

  return ((top + height >= 0) && (height + window.innerHeight >= bottom));
}

// nav toggle
let topNav = document.getElementById("nav");
let navToggle = document.getElementById("nav_toggle");
let body = document.body;
navToggle.onclick = function () {
    navToggle.classList.toggle("active");
    topNav.classList.toggle("responsive");
    body.classList.toggle("overflow-hidden")
}



/* Smooth scroll */
$("[data-scroll]").on("click", function(event) {
  event.preventDefault();
  
  var $this = $(this),
      blockId = $this.data('scroll'),
      blockOffset = $(blockId).offset().top;
  
  
  $("html, body").animate({
     scrollTop: blockOffset            
  }, 1000);

  topNav.classList.remove("responsive");
  navToggle.classList.remove("active");
  body.classList.remove("overflow-hidden");
});