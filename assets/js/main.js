$(document).ready(function () {
  $(".slider").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 590,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".single-item").slick({
    autoplay: true,
    arrows: false,
    infinite: true,
    autoplaySpeed: 2000,
  });
});
window.addEventListener('scroll', function() {
  const header = document.querySelector('.sticky-header');
  const scrollPosition = window.scrollY;
console.log('salam')
  if (scrollPosition > 0) {
      header.classList.add('visible');
  } else {
      header.classList.remove('visible');
  }
});
const scrollToTopButton = document.getElementById('scrollToTop');

window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        scrollToTopButton.style.bottom = '20px';
    } else {
        scrollToTopButton.style.bottom = '-60px';
    }
});

scrollToTopButton.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
