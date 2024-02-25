
//FUNCIONES 

/*let nombre = 'Nacho';
let ciudad  = 'Bogota';
let gusto = 'Crema';

let parrafo = document.querySelector(".parrafo1");


function cambiarTexto(nombre, ciudad, gusto){
    let contenido = `Me llamo ${nombre}, me gusta mucho la ciudad de ${ciudad}
     Me encanta comer helado con barquillos y mi gusto favorito es el de ${gusto}. 
     Deseo poder trabajar en el mundo TI.`

     return contenido;
}

parrafo.innerText = cambiarTexto(nombre, ciudad, gusto);*/

// js menu responsive

let menu_responsive = document.querySelector(".checkbtn");
menu_responsive.onclick = function () {
  navBar = document.querySelector(".navbar");
  navBar.classList.toggle("active");
};
 // js formulario 

const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 caracteres`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});



