const fnCalculoPorcentaje = (tipoArticulo) => {
  let porcentaje = 0;
  switch (tipoArticulo) {
    case 1:
      porcentaje = 21;
      break;
    case 2:
      porcentaje = 27;
      break;
    case 3:
      porcentaje = 10.5;
      break;
    case 4:
      porcentaje = 5;
      break;
    case 5:
      porcentaje = 0;
      break;
  }
  return porcentaje;
};

window.addEventListener("load", () => {
  const calcular = document.querySelector("#calcular");
  const importeBaseIngresado = document.querySelector("#importeBase");
  const tipoArticulo = document.querySelector("#tipoArticulo");
  const resultado = document.querySelector("#resultado");

  calcular.addEventListener("click", () => {
    let porcentajeImpuesto = 0;
    const importeBase = Number(importeBaseIngresado.value);
    const tipo = Number(tipoArticulo.value);
    if (importeBase && importeBase > 0) {
      porcentajeImpuesto = fnCalculoPorcentaje(tipo);
      importeIVA = (importeBase * porcentajeImpuesto) / 100;
      importeFinal = importeBase + importeIVA;

      resultado.innerHTML = `<h3>Importe Base: $${importeBase}</h3>
      <h3>Importe IVA: $${importeIVA}</h3>
      <h3>Importe Final: $${importeFinal}</h3>`;
    } else {
      resultado.innerHTML = "<h3>Ingrese datos válidos</h3>";
    }
  });
});
