const fnCalculoRentabilidad = (monto) => {
  if (monto >= 500000 && monto < 1500000) {
    return (monto * 6) / 100;
  }
  if (monto >= 1500000 && monto < 5000000) {
    return (monto * 7.5) / 100;
  }
  if (monto >= 5000000 && monto < 25000000) {
    return (monto * 8.5) / 100;
  }
  if (monto >= 25000000) {
    return (monto * 9.5) / 100;
  }

  return 0;
};

const fnCalculoCliente = (monto, cliente) => {
  let rentabilidad = 0;
  if (cliente) {
    rentabilidad = (monto * 0.7) / 100;
  }

  return rentabilidad;
};

const fnCalculoAutorenovable = (monto, autorenovable) => {
  let rentabilidad = 0;
  if (autorenovable) {
    rentabilidad = (monto * 0.9) / 100;
  }

  return rentabilidad;
};

window.addEventListener("load", () => {
  const calcular = document.querySelector("#calcular");
  const capitalIngresado = document.querySelector("#capital");
  const esCliente = document.querySelector("#esCliente");
  const autorenovable = document.querySelector("#autorenovable");
  const resultado = document.querySelector("#resultado");

  calcular.addEventListener("click", () => {
    const capital = Number(capitalIngresado.value);

    if (capital) {
      const rentabilidadPlazoFijo = fnCalculoRentabilidad(capital);
      const rentabilidadClienteBanco = fnCalculoCliente(
        rentabilidadPlazoFijo,
        esCliente.checked
      );
      const rentabilidadAutorenovable = fnCalculoAutorenovable(
        rentabilidadPlazoFijo,
        autorenovable.checked
      );
      const rentabilidadTotal =
        rentabilidadPlazoFijo +
        rentabilidadClienteBanco +
        rentabilidadAutorenovable;

      resultado.innerHTML = `<h1>Rentabilidad Calculada<h1/>
      <h3>Capital invertido: $${capital}</h3>
      <h3>Rentabilidad Plajo Fijo: $${rentabilidadPlazoFijo}</h3>
      <h3>Adicional por Cliente del Banco: $${rentabilidadClienteBanco}</h3>
      <h3>Adicional por Plazo Fijo Autorenovable por 3 meses: $${rentabilidadAutorenovable}</h3>
      <h3>Rentabilidad Total: $${rentabilidadTotal}</h3>`;
    } else {
      resultado.innerHTML = "<h3>Ingrese datos válidos</h3>";
    }
  });
});
