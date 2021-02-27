var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    loop:true,
    pagination: {
      el: '.swiper-pagination',
    },
});



// toggleBars
const barToggle = document.querySelector('.bars');
const sideBar = document.querySelector('.sidebar');
const closeSide = document.querySelector('.close');


barToggle.addEventListener('click' , function(){
    sideBar.classList.toggle("show-sidebar");
});

closeSide.addEventListener('click' , function(){
    sideBar.classList.remove('show-sidebar');
});







