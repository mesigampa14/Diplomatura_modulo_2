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
  const mesIngresado = document.querySelector("#mesIngresado");
  const btnValida = document.querySelector("#btnValida");
  const resultado = document.querySelector("#resultado");

  btnValida.addEventListener("click", () => {
    mesIngresado.value
      ? (resultado.innerHTML = `El dato ingresado: ${mesIngresado.value} <br/>${
          fnValidaMes(mesIngresado.value.toUpperCase()) ? "SI " : "NO "
        }corresponde a un mes válido`)
      : (resultado.innerHTML = `Ingrese un mes válido`);
  });
});
