document.addEventListener('DOMContentLoaded', () => {
  const swiperCard = document.querySelector('.swiper-card');

  if (swiperCard) {
    const swiperCardFunc = () => {
      if (window.innerWidth <= 910 && swiperCard.dataset.mobile == 'false') {
        var swiper = new Swiper(swiperCard, {
          loop: true,
          pagination: {
            el: '.swiper-card__pagination',
            clickable: true,
          },
          breakpoints: {
            320: {
              slidesPerView: 1,
              slidesPerGroup: 1,
              spaceBetween: 10,
            },
            500: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
            },
          },
        });
        swiperCard.dataset.mobile = 'true';
      }

      if (window.innerWidth > 910) {
        swiperCard.dataset.mobile = 'false';
        if (swiperCard.classList.contains('swiper-container-initialized')) {
          swiper.destroy();
        }
      }
    };
    swiperCardFunc();
    window.addEventListener('resize', () => {
      swiperCardFunc();
    });
  }

  //modal
  const modalClose = document.querySelector('.swiper-card__modal-close');
  const modalWindow = document.querySelector('.swiper-card__modal');
  const modalMore = document.querySelector('.js-open-modal');

  modalMore.addEventListener('click', () => {
    modalWindow.classList.add('open');
  });

  modalClose.addEventListener('click', () => {
    modalWindow.classList.remove('open');
  });

  
});
