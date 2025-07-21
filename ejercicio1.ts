const maxEstudiantes: number = 5;
let nombre_Estudiantes: string[] = [
  "Pepe",
  "Jose",
  "David",
  "Gustavo",
  "Fermin",
];
let calificaciones_Estudiantes: number[] = [9, 6, 8, 6, 7];
let inscripcionAbierta: boolean = true;
let estudiantesInscritos: number = 3;

function espaciosDisponibles(): number {
  const espaciosLibres = maxEstudiantes - estudiantesInscritos;
  return espaciosLibres < 0 ? 0 : espaciosLibres;
}

console.log(espaciosDisponibles()); // Ahora debería mostrar 2
