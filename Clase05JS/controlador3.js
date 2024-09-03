
{

    /* for sirve en aquellos casos donde conozco 
    previamente la cantidad de iteraciones 
    
        iterador
        condicion de permanencia ó de fin
        incremento del iterador
    

    */

    /* while = mientras se cumpla una condición
    el proceso continua paso a paso */


    let continuaElProceso = '' // declarar y asignarle un valor a una variable

    continuaElProceso = prompt(" Desea cargar algún producto (SI/NO)");


  //  while(continuaElProceso === 'SI' || continuaElProceso === 'si') // mientras, la variable continuaElProceso === 'SI' 
    while(continuaElProceso.toUpperCase()==='SI') // mientras, la variable continuaElProceso === 'SI' 
    {
        console.log("esto se debería repetir");


        continuaElProceso = prompt("Continua el proceso ?. (SI/NO)");

    }

    console.log("termino el proceso");


}


/* UPPERCASE */