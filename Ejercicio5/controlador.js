const fnValidaMes = (mes) => {
  let valido = false;
  switch (mes) {
    case "ENERO":
      valido = true;
      break;
    case "FEBRERO":
      valido = true;
      break;
    case "MARZO":
      valido = true;
      break;
    case "ABRIL":
      valido = true;
      break;
    case "MAYO":
      valido = true;
      break;
    case "JUNIO":
      valido = true;
      break;
    case "JULIO":
      valido = true;
      break;
    case "AGOSTO":
      valido = true;
      break;
    case "SEPTIEMBRE":
      valido = true;
      break;
    case "OCTUBRE":
      valido = true;
      break;
    case "NOVIEMBRE":
      valido = true;
      break;
    case "DICIEMBRE":
      valido = true;
      break;
  }
  return valido;
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
