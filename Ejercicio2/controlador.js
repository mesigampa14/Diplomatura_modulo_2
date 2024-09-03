function ingresar() {
  let codigo, cantidad, precio;

  codigo = Number(prompt("Ingrese un código del producto"));
  cantidad = Number(prompt("Ingrese la cantidad de productos"));

  if (isNaN(codigo) || isNaN(cantidad) || cantidad <= 0) {
    console.log("Ingrese datos correctos");
  } else {
    switch (codigo) {
      case 1:
        precio = 38;
        break;
      case 2:
        precio = 31;
        break;
      case 3:
        precio = 46;
        break;
    }
    cantidad < 5
      ? precio
      : cantidad >= 5 && cantidad <= 10
      ? (precio = precio - 2)
      : (precio = precio - 4);

    pagar = precio * cantidad;
    console.log("Codigo: ", codigo);

    console.log("Cantidad: ", cantidad);
    console.log("Precio respecto a la cantidad:", precio);
    console.log("Total a pagar", pagar);
  }
}
