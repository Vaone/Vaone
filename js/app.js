VANTA.NET({
  el: "#section1",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 600.0,
  // maxWidth: 500.00,
  scale: 1.0,
  scaleMobile: 1.0,
  color: 0x062858,
  backgroundColor: 0xf3f3f3,
  points: 10.0,
  maxDistance: 20.0,
  spacing: 15.0,
  showDots: true,
});

function showall() {
  let card = document.getElementsByClassName("card");
  let i;
  for (i = 0; i < card.length; i++) {
    card[i].style.display = "block";
  }
}

function hideall() {
  let card = document.getElementsByClassName("card");
  let i;
  for (i = 0; i < card.length; i++) {
    card[i].style.display = "none";
  }
}

function showLp() {
  let catLp1 = document.getElementById("card1");
  let catLp2 = document.getElementById("card6");
  let catLp3 = document.getElementById("card7");
  let catLp4 = document.getElementById("card2");
  catLp1.style.display = "block";
  catLp2.style.display = "block";
  catLp3.style.display = "block";
  catLp4.style.display = "block";
}

function showFb() {
  // let catFb2 = document.getElementById("card5");
  let catFb3 = document.getElementById("card8");
  // catFb2.style.display = "block";
  catFb3.style.display = "block";
}

function showSk() {
  let catLp1 = document.getElementById("card3");
  // let catLp2 = document.getElementById("card4");
  // let catLp3 = document.getElementById("card9");
  // let catLp4 = document.getElementById("card1");
  catLp1.style.display = "block";
  // catLp2.style.display = "block";
  // catLp3.style.display = "block";
  // catLp4.style.display = "block";
}

$("#btn__all").click(function () {
  showall();
});

$("#btn__lp").click(function () {
  hideall();
  showLp();
});

$("#btn__fb").click(function () {
  hideall();
  showFb();
});

$("#btn__sk").click(function () {
  hideall();
  showSk();
});

// scroll onclick
const menuLinks = document.querySelectorAll(".nav__link[data-goto]");
if (menuLinks.length > 0) {
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });

  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (
      menuLink.dataset.goto &&
      document.querySelector(menuLink.dataset.goto)
    ) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue =
        gotoBlock.getBoundingClientRect().top + pageYOffset;

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth",
      });
      e.preventDefault();
    }
  }
}

// hover on card
let cards = document.querySelectorAll(".card");
for (let i = 0; i < cards.length; i++) {
  let card = cards[i];
  let currentSrc = cards[i].querySelector("img").src;
  card.onmouseover = function (e) {
    let toggleSrc = currentSrc.replace(".png", ".gif");
    cards[i].querySelector("img").src = toggleSrc;
  };
  card.onmouseout = function (e) {
    let toggleSrc = currentSrc.replace(".gif", ".png");
    cards[i].querySelector("img").src = toggleSrc;
  };
}

// Contact modal
let contactBtn = document.querySelector(".nav__link--btn");
let cntWindow = document.querySelector("#contact__modal");

let contactCloseBtn = document.querySelector("#contact__close");
contactBtn.addEventListener("click", function (e) {
  document.body.classList.add("_lock");
  cntWindow.classList.add("_active");
});
contactCloseBtn.addEventListener("click", function (e) {
  document.body.classList.remove("_lock");
  cntWindow.classList.remove("_active");
});
// console.log(close__btn);

// resume modal
let resumeBtn = document.querySelector("#resume");
let resumeWindow = document.querySelector("#resume__modal");
let resumeCloseBtn = document.querySelector("#resume__close");
resumeBtn.addEventListener("click", function (e) {
  document.body.classList.add("_lock");
  resumeWindow.classList.add("_active");
});
resumeCloseBtn.addEventListener("click", function (e) {
  document.body.classList.remove("_lock");
  resumeWindow.classList.remove("_active");
});

// отправка формы
"use strict"

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('form');
  form.addEventListener('submit', formSend);
  
  async function formSend(e) {
      e.preventDefault();
      let error = formValidate(form);
      
      let formData = new FormData(form);

      if (error === 0) {
          form.classList.add('_sending');
          let response = await fetch('sendEmail.php', {
              method: 'POST',
              body: formData
          });
          if (response.ok) {
              let result = await response.json();
              alert(result.message);
              form.reset();
              form.classList.remove('_sending');
          } else {
              alert('Ошибка');
          }
      } else {
          alert('Заполните обязательные поля');
          form.classList.remove('_sending');
      }
  };
  function formValidate(form) {
      let error = 0;
      let formReq = document.querySelectorAll('._req');
      
      for (let index = 0; index < formReq.length; index++) {
          const input = formReq[index];
          formRemoveError(input);
          
          if (input.classList.contains('_email')){
              if (emailTest(input)) {
                  formAddError(input);
                  error++;
              } else {
                  if (input.value === '') {
                      formAddError(input);
                      error++;
                  }
              }
          }
          else if (input.classList.contains('_name')){
              if (input.value === '') {
                  formAddError(input);
                  error++;
              }
          } 
      }
      return error;
  };
  function formAddError(input) {
      input.parentElement.classList.add('_error');
      input.classList.add('_error');
  };
  function formRemoveError(input) {
      input.parentElement.classList.remove('_error');
      input.classList.remove('_error');
  };

  function emailTest(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
  };
});