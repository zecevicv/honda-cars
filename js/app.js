/* #Header
    ======================================================= */

// Scroll BG Color change
const header = document.querySelector('.header');

if (header) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      header.classList.add('header-white');
    } else {
      header.classList.remove('header-white');
    }
  });

  if (window.scrollY > 0) {
    header.classList.add('header-white');
  } else {
    header.classList.remove('header-white');
  }
}

// Hamburger
const hamburgerBtn = document.querySelector('.header .hamburger');
const headerNav = document.querySelector('.header-nav');

if (hamburgerBtn) {
  hamburgerBtn.addEventListener('click', (e) => {
    hamburgerBtn.classList.toggle('is-active');
    header.classList.toggle('show-menu');
    body.classList.toggle('no-scroll');
  });
}

if (headerNav) {
  if (window.innerWidth < 1024) {
    headerNav.style.display = 'none';
    setTimeout(() => {
      headerNav.style.display = 'flex';
    }, 250);
  }
}

// Categories
const headerCategories = document.querySelector('.header-categories .collapse-toggler');

if (headerCategories) {
  headerCategories.addEventListener('click', (e) => {
    if (window.scrollY < 1) {
      header.classList.toggle('header-white');
    } 
    body.classList.toggle('no-scroll');
  });
}

/* #Banner Slider
======================================================= */
if (document.querySelector('.banner-slider .swiper')) {
  new Swiper('.banner-slider .swiper', {
    effect: 'fade',
    loop: true,
    pagination: {
      el: '.banner-slider .swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.banner-slider .swiper-button-next',
      prevEl: '.banner-slider .swiper-button-prev',
    },
  });
}

/* #News Slider
======================================================= */
if (document.querySelector('.news .swiper')) {
  new Swiper(".news .swiper", {
    pagination: {
      el: ".news .swiper-pagination",
      type: "progressbar",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.13
      },
      1024: {
        slidesPerView: 3
      }
    },
    navigation: {
      nextEl: '.news .next',
      prevEl: '.news .prev',
    },
  });
}

/* #Car Color
======================================================= */
if (document.querySelector('.car-color .swiper')) {
  var swiper = new Swiper(".car-color .thumbs", {
    slidesPerView: 'auto',
    watchSlidesProgress: true,
  });

  var swiper2 = new Swiper(".car-color .gallery", {
    thumbs: {
      swiper: swiper,
    },
  });
}

/* #Car Color
======================================================= */
if (document.querySelector('.car-slider-1 .swiper')) {
  var swiper = new Swiper(".car-slider-1 .thumbs", {
    slidesPerView: 'auto',
    watchSlidesProgress: true,
  });

  var swiper2 = new Swiper(".car-slider-1 .gallery", {
    thumbs: {
      swiper: swiper,
    },
  });
}

/* #Car Gallery Slider
======================================================= */
if (document.querySelector('.car-gallery .swiper')) {
  new Swiper(".car-gallery .swiper", {
    centeredSlides: true,
    loop: true,
    pagination: {
      el: ".car-gallery .swiper-pagination",
      type: "progressbar",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.28
      },
      1024: {
        slidesPerView: 1.71
      }
    },
    navigation: {
      nextEl: '.car-gallery .next',
      prevEl: '.car-gallery .prev',
    },
  });
}

/* #Car Slider 2 Slider
======================================================= */
if (document.querySelector('.car-slider-2 .swiper')) {
  new Swiper(".car-slider-2 .swiper", {
    pagination: {
      el: ".car-slider-2 .swiper-pagination",
      type: "progressbar",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.13
      },
      1024: {
        slidesPerView: 2
      }
    },
    navigation: {
      nextEl: '.car-slider-2 .next',
      prevEl: '.car-slider-2 .prev',
    },
  });
}

/* #Range Sliders
  ======================================================= */
if (document.querySelector('#rangeSlider1')) {
  var rangeSLider = new rSlider({
    target: '#rangeSlider1',
    values: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    range: false,
    tooltip: false,
    scale: false,
    labels: false,
    set: [5]
  });
}

if (document.querySelector('#rangeSlider2')) {
  var rangeSLider = new rSlider({
    target: '#rangeSlider2',
    values: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    range: false,
    tooltip: false,
    scale: false,
    labels: false,
    set: [5]
  });
}

if (document.querySelector('#rangeSlider3')) {
  var rangeSLider = new rSlider({
    target: '#rangeSlider3',
    values: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    range: false,
    tooltip: false,
    scale: false,
    labels: false,
    set: [5]
  });
}