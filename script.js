import{ barcelona, roma, paris, londres} from './ciudades.js';

let enlaces = document.querySelectorAll('a');
let tituloElemento = document.getElementById('titulo');
let subTituloElemento = document.getElementById('subtitulo');
let precioElemento = document.getElementById('precio');
let parrafoElemento = document.getElementById('parrafo');

// evento click

enlaces.forEach(function(enlace){
    enlace.addEventListener('click', function(){
        enlaces.forEach(function(enlace){
            enlace.classList.remove('active');
    // agregar active al que corresponda
        });
        this.classList.add('active');
    let contenido = obtenerContenido(this.textContent);
    // traer la informacion del objeto correspondiente
        tituloElemento.innerHTML = contenido.titulo;
        subTituloElemento.innerHTML = contenido.subtitulo;
        precioElemento.innerHTML = contenido.precio;
        parrafoElemento.innerHTML = contenido.parrafo;
    });
});
    // mostrar el contenido del DOM

// funcion para traer la informacion correcta desde ciudades.js
function obtenerContenido(enlace){
    let contenido = {
    'Barcelona' : barcelona,
    'Roma': roma,
    'París': paris,
    'Londres': londres
    };
    return contenido[enlace]
}