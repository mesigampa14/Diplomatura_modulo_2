
{

    console.log("funcionando");

    let precioProducto = 0;// esta variable es para leer el precio de cada uno de los productos

    let totalCompra = 0; // esta variables es para acumular los productos comprados

    let cantidadDeProductos = 0 //


    for(let iterador = 1; iterador <= 3;iterador = iterador + 1)
    {

        // al declararla aqui dentro lo que sucede es que destruye una anterior y crea una nueva
        // lectura de los productos
        precioProducto = Number(prompt(`Ingrese Precio Producto ${iterador}`));

        // mostrar item x item el precio de los productos
        console.log(`el precio cargado ${iterador} es igual ${precioProducto}`);

        // acumulador de totales //
        totalCompra = totalCompra + precioProducto;

        // contador de productos comprados
        cantidadDeProductos = cantidadDeProductos + 1;

        // ir visualizando el total a pagar 
        console.log(`SubTotal igual a ${totalCompra}`);
    }

    console.log(`El Total de la Compra es:= ${totalCompra} y la cantidad de productos ${cantidadDeProductos}`);

}
/*
{

    let Numero = 0;
    let Numero = 0;

}
*/


/*

    englobar todo en otro ciclo repetitivo que se repita tantas veces como clientes queden en la cola del super
        primer ciclo repetitivo engloba la carga de producto a producto de 1 cliente


*/