let pageSlider = new Swiper('.page', {
    wrapperClass: "page__wrapper",
    slideClass: "page__screen",

    direction: 'vertical',

    slidesPerView: 'auto',

    parallax: true,

    mousewheel: {
        sensitivity: 1,
    },

    speed: 800,

    watchOverflow: true,
    observer: true,

    observeSlideChildren: true,

    init: false,

    on: {
        init: function () {
            menuSlider();
            setScrollType();
        },
        slideChange: function () {
            menuSliderRemove();
            menuLinks[pageSlider.realIndex].classList.add('_active');
        },
        resize: function () {
            setScrollType();
        },
    },
});

let menuLinks = document.querySelectorAll('.nav__link');

function menuSlider() {
    if (menuLinks.length > 0) {
        menuLinks[pageSlider.realIndex].classList.add('_active');
        for (let index = 0; index < menuLinks.length; index++) {
            const menuLink = menuLinks[index];
            menuLink.addEventListener("click", function (e) {
                menuSliderRemove();
                pageSlider.slideTo(index, 800);
                menuLink.classList.add('_active');
                e.preventDefault();
            });
        }
    }
}

function menuSliderRemove() {
    let menuLinkActive = document.querySelector('.nav__link._active');
    if (menuLinkActive) {
        menuLinkActive.classList.remove('_active');
    }
}
let wrapper = document.querySelector('.wrapper');

function setScrollType() {

    if (wrapper.classList.contains('_free')) {
        wrapper.classList.remove('_free');
        pageSlider.params.freeMode = false;
    }
    
    for (let index = 0; index < pageSlider.slides.length; index++) {

        const pageSlide = pageSlider.slides[index];
        const pageSlideContent = pageSlide.querySelector('.screen__content');
        if (pageSlideContent) {
            const pageSlideContentHeight = pageSlideContent.offsetHeight;
            if (pageSlideContentHeight > window.innerHeight) {
                wrapper.classList.add('_free');
                pageSlider.params.freeMode = true;
                break;
            }
        }
    }

}


pageSlider.init();

var mySwiper = new Swiper('.services__cards', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    loop: true,
    nested: true,
    spaceBetween: 100,

});

let topNav = document.getElementById("header__menu")
let navToggle = document.getElementById("nav_toggle");
navToggle.onclick = function () {
    navToggle.classList.toggle("active");
    topNav.classList.toggle("responsive")

}