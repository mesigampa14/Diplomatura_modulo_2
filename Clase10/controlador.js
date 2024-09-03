const fnDevolverValorDelAuto = (autoSeleccionado) => {
  let valorDelAuto = 0;
  switch (autoSeleccionado) {
    case 1:
      valorDelAuto = 25000000;
      break;
    case 2:
      valorDelAuto = 29000000;
      break;
    case 3:
      valorDelAuto = 35000000;
      break;
  }
  return valorDelAuto;
};

const fnMinimoExigible = (valorDelAuto, porcentajeGerente) => {
  return (valorDelAuto * porcentajeGerente) / 100;
};

const fnDevolverCuotaFinanciacion = (diferencia, plan) => {
  let mensajeFinanciacion = "";
  let valorCuota = 0;

  if (plan === 1) {
    //24 cuotas
    valorCuota = (diferencia + (diferencia * 10) / 100) / 24;
    mensajeFinanciacion = `vamos a financiar ${diferencia} en 24 coutas de ${valorCuota}`;
  }
  if (plan === 2) {
    //48 cuotas
    valorCuota = (diferencia + (diferencia * 20) / 100) / 48;
    mensajeFinanciacion = `vamos a financiar ${diferencia} en 48 coutas de ${valorCuota}`;
  }
  if (plan === 3) {
    //60 cuotas
    valorCuota = (diferencia + (diferencia * 50) / 100) / 60;
    mensajeFinanciacion = `vamos a financiar ${diferencia} en 60 coutas de ${valorCuota}`;
  }
  return mensajeFinanciacion;
};

window.addEventListener("load", () => {
  console.log("La app está funcionando");
  const idSelectorVehiculo = document.querySelector("#idSelectorVehiculo");
  const idDineroAEntregar = document.querySelector("#idDineroAEntregar");
  const idBtnCalcular = document.querySelector("#idBtnCalcular");
  const idSelectorFinanciacion = document.querySelector(
    "#idSelectorFinanciacion"
  );
  const idBtnAceptar = document.querySelector("#idBtnAceptar");
  const idApellido = document.querySelector("#idApellido");
  const datosPersonales = document.querySelector("#datosPersonales");
  const idAceptaLlamada = document.querySelector("#idAceptaLlamada");

  let vehiculoSeleccionado = 0;
  let valorVehiculoSeleccionado = 0;
  let dineroAEntregar = 0;
  let minimoExigible = 0;
  let diferenciaAFinanciar = 0;
  let planFinanciacion = 0;
  let mensajeFinanciacion = "";

  datosPersonales.style.display = "none";

  idBtnCalcular.addEventListener("click", () => {
    console.log(idSelectorVehiculo.value);
    vehiculoSeleccionado = Number(idSelectorVehiculo.value);
    valorVehiculoSeleccionado = fnDevolverValorDelAuto(vehiculoSeleccionado);
    console.log(valorVehiculoSeleccionado);
    dineroAEntregar = Number(idDineroAEntregar.value);
    console.log(dineroAEntregar);
    minimoExigible = fnMinimoExigible(valorVehiculoSeleccionado, 50);
    console.log(minimoExigible);
    if (dineroAEntregar > minimoExigible) {
      /* la entrega es mayor al maximo exigible */
      if (dineroAEntregar < valorVehiculoSeleccionado) {
        console.log("se cumplen las dos condiciones");
        diferenciaAFinanciar = valorVehiculoSeleccionado - dineroAEntregar;
        console.log(diferenciaAFinanciar);
        planFinanciacion = Number(idSelectorFinanciacion.value);
        console.log(planFinanciacion);
        mensajeFinanciacion = fnDevolverCuotaFinanciacion(
          diferenciaAFinanciar,
          planFinanciacion
        );
        console.log(mensajeFinanciacion);
      } else {
        alert(
          "Estimado cliente, el importe ingresado es mayor al valor del auto"
        );
      }
    } else {
      alert(
        `Por decisiones comerciales requerimos como minimo de entrega mayor a ${minimoExigible}`
      );
    }
  });
  idBtnAceptar.addEventListener("click", () => {
    apellidoIngresado = idApellido.value;
    console.log(`Sr. ${apellidoIngresado} nos comunicaremos a la brevedad`);
  });
  idAceptaLlamada.addEventListener("change", () => {
    datosPersonales.style.display =
      datosPersonales.style.display == "block" ? "none" : "block";
  });
});
