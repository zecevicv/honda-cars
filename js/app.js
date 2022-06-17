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

headerCategories.addEventListener('click', (e) => {
  if (window.scrollY < 1) {
    header.classList.toggle('header-white');
  } 
  body.classList.toggle('no-scroll');
});

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