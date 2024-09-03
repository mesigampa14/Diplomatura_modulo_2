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

const fnValidaMes = (mes) => {
  let valida = false;
  switch (mes) {
    case "ENERO":
      valida = true;
      break;
    case "FEBRERO":
      valida = true;
      break;
    case "MARZO":
      valida = true;
      break;
    case "ABRIL":
      valida = true;
      break;
    case "MAYO":
      valida = true;
      break;
    case "JUNIO":
      valida = true;
      break;
    case "JULIO":
      valida = true;
      break;
    case "AGOSTO":
      valida = true;
      break;
    case "SEPTIEMBRE":
      valida = true;
      break;
    case "OCTUBRE":
      valida = true;
      break;
    case "NOVIEMBRE":
      valida = true;
      break;
    case "DICIEMBRE":
      valida = true;
      break;
  }
  return valida;
};

window.addEventListener("load", () => {
  const calcular = document.querySelector("#calcular");
  const importeBase = document.querySelector("#importeBase");
  const tipoArticulo = document.querySelector("#tipoArticulo");
  const resultado = document.querySelector("#resultado");

  calcular.addEventListener("click", () => {
    if (Number(importeBase.value) && Number(importeBase.value) > 0) {
      resultado.innerHTML = "<h3>OK madafaca</h3>";
    } else {
      resultado.innerHTML = "<h3>Ingrese datos válidos</h3>";
    }

    console.log(importeBase.value);
    console.log(tipoArticulo.value);
  });
});
