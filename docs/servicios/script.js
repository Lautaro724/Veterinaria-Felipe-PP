//---------------------------CONFIGURACIÓN DE ANIMACIÓN DEL MENÚ(SWIPER)----------------------------------//
var swiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 3000, // 3 SEGUNDOS ENTRE CADA SERVICIO
    disableOnInteraction: false,
  },
  loop: false, // REPITE DESDE EL PRINCIPIO CUANDO PASA EL ÚLTIMO SERVICIO
});


//---------------------------ANIMACIÓN PARA TRANSICIONAR DE UNA PÁGINA A OTRA-----------------------------//
function transitionToPage(href) {
    gsap.to('body', {
        opacity: 0,
        duration: 0.5,
        ease: 'power1.inOut',
        onComplete: () => window.location.href = href
    });
}

document.addEventListener('DOMContentLoaded', () => {
    gsap.from('body', {
        opacity: 0,
        duration: 0.5,
        ease: 'power1.inOut'
    });

    document.querySelectorAll('a.anim_transicion').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            transitionToPage(href);
        });
    });
});