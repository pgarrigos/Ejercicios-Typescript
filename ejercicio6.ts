interface persona {
  nombre: string;
  edad: number;
}

function describirPersona(persona: persona): string {
  return `La persona se llama ${persona.nombre} y tiene ${persona.edad} años.`;
}

const datosPersona = { nombre: "Ana", edad: 25 };
console.log(describirPersona(datosPersona));
