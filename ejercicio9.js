"use strict";
function calcularPrecioFinal(precioBase, porcentajeImpuesto) {
    const precioBase1 = 100;
    const porcentajeImpuesto1 = 21;
    const precioFinal = precioBase + (precioBase * porcentajeImpuesto) / 100;
    return precioFinal;
    const precioBase2 = 250;
    const porcentajeImpuesto2 = 10;
    const precioFinal2 = precioBase + (precioBase * porcentajeImpuesto) / 100;
    return precioFinal;
}
console.log(calcularPrecioFinal(100, 21));
console.log(calcularPrecioFinal(250, 10));
