$(function () {
  const animation = () => {
    $('.fade-in-up').each(function () {
      const target = $(this).offset().top;
      const scroll = $(window).scrollTop();
      const windowHeight = $(window).height();
      if (scroll > target - windowHeight) {
        $(this).css('opacity', '1');
        $(this).css('transform', 'translateY(0)');
      }
    });
  }
  animation();
  $(window).scroll(function () {
    animation();
  });

  const swiper = new Swiper('.swiper-container', {
    slidesPerView: 2,
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-btn-next',
      prevEl: '.swiper-btn-prev',
    },
  });
});


let i = 0;
// let printString;
const moji = "MESSAGE SENT";

const sendMessage = () => {
  document.getElementById("submit").textContent = moji.substring(0, i++);
  if (i <= moji.length) {
    setTimeout("sendMessage()", 150);
  }
}
