const evento = document.getElementById('button_send')
const enviarFormulario = () => {
	let nombre = document.getElementById('input_nombre').value.trim();
	let apellido = document.getElementById('input_apellido').value.trim();
	let mensaje = document.getElementById('mensaje').value.trim();
	let numero = 5493704123456;
	//---------MENSAJE DE ALERTA AL NO COMPLETAR LOS INPUTS Y ENVIAR EL FORMULARIO(librería "toastr")---------//
	if (nombre === "" || apellido === "" || mensaje === "") {
        toastr.options = {
            "closeButton": true,
            "debug": false,
            "newestOnTop": false,
            "progressBar": false,
            "positionClass": "toast-center",
            "preventDuplicates": true,
            "onclick": null,
            "showDuration": "300",
            "hideDuration": "1000",
            "timeOut": "5000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        }
        toastr.warning('Por favor, completa todos los campos antes de enviar sus datos.');
        return;
    }
    //---------ENVIA LOS DATOS INTRODUCIDOS MEDIANTE EL USO DE WHATSAPP---------//
	var win= window.open(`https://wa.me/${numero}?text=Hola%20mi%20nombre%20es%20${nombre}%20${apellido}, Asunto:%20${mensaje}`,'_blank');

}
//---------ABRE LA APLICACIÓN DE WHATSAPP EN UNA VENTANA---------//
evento.addEventListener('click', enviarFormulario)


//---------------------------ANIMACIÓN PARA TRANSICIONAR DE UNA PÁGINA A OTRA--------------------------------// 
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




