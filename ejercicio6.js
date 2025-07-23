"use strict";
function describirPersona(persona) {
    return `La persona se llama ${persona.nombre} y tiene ${persona.edad} años.`;
}
const datosPersona = { nombre: "Ana", edad: 25 };
console.log(describirPersona(datosPersona));
