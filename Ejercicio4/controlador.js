function ingresar() {
  let continua = true;
  let nota = 0;

  let desaprobados = 0;
  let aprobados = 0;
  let muyBueno = 0;
  let excelentes = 0;
  let incorrecto = 0;

  while (continua) {
    continuaTx = prompt("¿Ingresa una nueva nota? SI / NO");

    switch (continuaTx.toUpperCase()) {
      case "SI":
        nota = Number(prompt(`Ingresar nota de un trabajo`));
        nota >= 0 && nota <= 4
          ? (desaprobados++, console.log("Nota para desaprobado"))
          : nota > 4 && nota <= 7
          ? (aprobados++, console.log("Nota para aprobado"))
          : nota > 7 && nota < 10
          ? (muyBueno++, console.log("Nota para muy bueno"))
          : nota == 10
          ? (excelentes++, console.log("Nota para excelente"))
          : (incorrecto++, console.log("Ingrese una nota válida"));
        continua = true;
        break;
      case "NO":
        continua = false;
        break;
      default:
        console.log("Ingrese valor correcto");
        break;
    }
  }

  console.log("Cantidad de notas desaprobadas:", desaprobados);
  console.log("Cantidad de notas aprobadas:", aprobados);
  console.log("Cantidad de notas muy buenas:", muyBueno);
  console.log("Cantidad de notas excelentes:", excelentes);
  console.log("Cantidad de notas incorrectas:", incorrecto);
}
