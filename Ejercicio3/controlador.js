function ingresar() {
  let precioCamion = 22000;
  let precioCamioneta = 12000;
  let precioAutomovil = 4000;
  let precioMoto = 1500;

  let montoCamion = 0;
  let montoCamioneta = 0;
  let montoAutomovil = 0;
  let montoMoto = 0;
  let montoTotal = 0;

  let cantidadCamion = 0;
  let cantidadCamioneta = 0;
  let cantidadAutomovil = 0;
  let cantidadMoto = 0;

  let continua = true;
  let continuaTx = "";
  let tipoVehiculo = "";

  while (continua) {
    continuaTx = prompt("¿Ingresa un nuevo vehículo? SI / NO");

    switch (continuaTx.toUpperCase()) {
      case "SI":
        tipoVehiculo = Number(
          prompt(`¿Que tipo de vehículo ingresó? 
    1 = CAMIÓN
    2 = CAMIONETA
    3 = AUTOMÓVIL
    4 = MOTO`)
        );
        switch (tipoVehiculo) {
          case 1:
            console.log(
              `El cliente debe abonar $${precioCamion} por un CAMIÓN`
            );
            cantidadCamion++;
            console.log(`Levante la barrera.`);
            break;
          case 2:
            console.log(
              `El cliente debe abonar $${precioCamioneta} por una CAMIONETA`
            );
            cantidadCamioneta++;
            console.log(`Levante la barrera.`);
            break;
          case 3:
            console.log(
              `El cliente debe abonar $${precioAutomovil} por un AUTOMÓVIL`
            );
            cantidadAutomovil++;
            console.log(`Levante la barrera.`);
            break;
          case 4:
            console.log(`El cliente debe abonar $${precioMoto} por una MOTO`);
            cantidadMoto++;
            console.log(`Levante la barrera.`);
            break;
          default:
            console.log("Ingrese datos correctos");
            break;
        }
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
  montoCamion = cantidadCamion * precioCamion;
  montoCamioneta = cantidadCamioneta * precioCamioneta;
  montoAutomovil = cantidadAutomovil * precioAutomovil;
  montoMoto = cantidadMoto * precioMoto;
  //--- También era posible realizarlo con acumuladores, de acuerdo con cada tipo de vehículo ---//

  montoTotal = montoCamion + montoCamioneta + montoAutomovil + montoMoto;

  console.log("Cantidad total de Camiones:", cantidadCamion);
  console.log(`Total cobrado de Camiones: $${montoCamion}`);
  console.log("Cantidad total de Camionetas:", cantidadCamioneta);
  console.log(`Total cobrado de Camionetas: $${montoCamioneta}`);
  console.log("Cantidad total de Automóviles:", cantidadAutomovil);
  console.log(`Total cobrado de Automóviles: $${montoAutomovil}`);
  console.log("Cantidad total de Motos:", cantidadMoto);
  console.log(`Total cobrado de Motos: $${montoMoto}`);
  console.log(`Total general cobrado: $${montoTotal}`);

  cantidadAutomovil == cantidadCamioneta
    ? console.log("La cantidad de camionetas y autos son iguales")
    : cantidadAutomovil < cantidadCamioneta
    ? console.log("Pasaron más camionetas que autos")
    : console.log("Pasaron más autos que camionetas");
}
