function ingresar() {
  let valor;

  valor = Number(prompt("Ingrese un valor"));

  if (isNaN(valor)) {
    console.log("El valor ingresado no es numérico");
  } else {
    console.log(`El monto ingresado es $${valor.toFixed(2)}`);

    valor <= 160000
      ? console.log(
          `El descuento aplicado es del 50% por un valor de $${(
            valor * 0.5
          ).toFixed(2)}`
        )
      : (console.log(`El descuento aplicado es el tope permitido de $80.000.`),
        // En el ejercicio menciona:
        // "Realice un programa que permita calcular el porcentaje de descuento sabiendo que no se puede pasar el límite establecido."
        // por lo tanto, calculo y muestro el porcentaje con la siguiente línea
        console.log(
          `El porcentaje de descuento respecto al monto ingresado es de ${(
            (80000 * 100) /
            valor
          ).toFixed(2)}`
        ));
  }
}
