var correo = document.getElementById('email');
var mensaje = document.getElementById('mensaje');
var enviar = document.getElementById('enviar');
var foto = document.getElementById('foto-perfil');
var cancion = document.getElementById('cancion');

/* Variables del segundo Formulario*/ 
var nombre = document.getElementById('fullname');
var cedula = document.getElementById('CI');
var telefono = document.getElementById('telefono');
var email = document.getElementById('email');
var boton = document.getElementById('boton');

boton.addEventListener('click', (e) =>{
    e.preventDefault();
    console.log(nombre.value)
    console.log(cedula.value)
    //console.log(telefono.value)
    console.log(email.value)
    nombre.value = "";
    cedula.value = "";
    //telefono.value = "";
    email.value = "";

})



enviar.addEventListener('click', (e) =>{
    e.preventDefault();
    console.log(correo.value)
    console.log(mensaje.value)
    correo.value = "";
    mensaje.value = "";
})








var estado = 0;
function playMusic(){
    if(estado == 0){
        cancion.play();
        estado += 1
    } else{
        cancion.pause()
        estado -= 1
    }
}
foto.addEventListener('click', playMusic)
