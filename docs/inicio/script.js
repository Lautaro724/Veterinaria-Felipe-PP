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

    document.querySelectorAll('.anim_transicion').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            transitionToPage(href);
        });
    });
});


//---------------------------ANIMACIÓN PARA QUE LOS ELEMENTOS SE DESVANEZCAN Y SE DESPLACEN HACIA ARRIBA-------------------------------- 
gsap.from(".cuerpo_inicio", { 
    duration: 2, 
    y: 50, 
    opacity: 0, 
    ease: "power2.out" 
});

gsap.from(".header_", { 
    duration: 2, 
    y: -50, 
    opacity: 0, 
    ease: "power2.out" 
});

gsap.from(".footer_", { 
    duration: 2, 
    y: 50, 
    opacity: 0, 
    ease: "power2.out" 
});
