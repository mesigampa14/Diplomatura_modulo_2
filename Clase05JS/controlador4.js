
{
    let continuaCargandoProductos = ''; // aqui declaro la variable que determinará la permanencia en el ciclo while

    continuaCargandoProductos = prompt("Desea cargar algun producto ? (SI/NO)"); // esta pregunta me permite saber si ingreso al ciclo o no 

    let precioProducto = 0; // aqui declaro e inicializo una variable para leer los precios de los productos
    let totalVenta = 0; // esta variable será la que me permita acumular los valores
    let cantidadProductos = 0; // esta variable contendrá la cantidad de productos vendidos.

    // este sería el inicio de la estructura repetitiva
    while(continuaCargandoProductos.toUpperCase() === 'SI')
    {
        cantidadProductos = cantidadProductos + 1 // esto es un contador de productos

        precioProducto = Number(prompt(`Ingrese el Precio del Producto ${cantidadProductos}`)); // aqui leo los importes

        totalVenta = totalVenta + precioProducto; // aqui voy haciendo la acumulación de los importes
     

        console.log(`El precio leido del producto ${cantidadProductos} es igual a ${precioProducto}`);
        console.log(`El Total de la venta hasta aqui es ${totalVenta}`);



        continuaCargandoProductos = prompt("Continua Cargando ?. (SI/NO)");
    }
    // este sería el final del ciclo repetitivo



    console.log(`El Total a Pagar por el cliente es ${totalVenta}`);

    /* RESUMEN 
    
        Las estructuras repetitivas me permiten reflejar procesos
        de la vida real o no, que implican una repetició de procesos.

            FOR => 
                - tengo que conocer previamente la cantidad de iteraciones que debo realizar
                - es que todas las condiciones van en el mismo conjunto de parametros (iterador, condicion permanencia, incremento iterador)
            WHILE => 
                - no es necesario conocer la cantidad de iteraciones previamente
                - las condiciones de permanencia e ingreso al ciclo deben ser programadas por el desarrollador
                - no debo cometer el error de no poner condición de fin.
                - en cada paso, debo preguntar o analizar si estamos en condiciones de terminr el ciclo
                - la variable de iteración, en algunos casos no es necesaria pero 
            DO WHILE


            forEach()

            
    
    
    */




}