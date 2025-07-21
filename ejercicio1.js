"use strict";
const maxEstudiantes = 5;
let nombre_Estudiantes = [
    "Pepe",
    "Jose",
    "David",
    "Gustavo",
    "Fermin",
];
let calificaciones_Estudiantes = [9, 6, 8, 6, 7];
let inscripcionAbierta = true;
let estudiantesInscritos = 3;
function espaciosDisponibles() {
    const espaciosLibres = maxEstudiantes - estudiantesInscritos;
    return espaciosLibres < 0 ? 0 : espaciosLibres;
}
console.log(espaciosDisponibles()); // Ahora debería mostrar 2
