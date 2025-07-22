function esMayorDeEdad(edad: number): boolean {
  if (edad >= 18) {
    return true;
  } else {
    return false;
  }
}
console.log(esMayorDeEdad(22));
console.log(esMayorDeEdad(15));
