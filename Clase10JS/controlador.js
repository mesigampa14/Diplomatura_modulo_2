/*
Una prestigiosa concesionaria de autos lanza una promoción muy importante buscando como objetivo promover la venta de vehículos cero kilómetros que tiene en Stock.
	para ello contrata un programador Web Full Stack con la intención que mediante una aplicación web permita a los interesados simular la operatoria de compra y de esta manera no saturar sus oficinas con personas interesadas en la "operatoria".

	El dueño de la concesionaria plantea el siguiente esquema: El usuario podrá elegir tres modelos de vehículo que tenemos disponibles.

	Vehiculo1 => con un precio de venta de 25.000.000
	Vehiculo2 => con un precio de venta de 29.000.000
	Vehiculo3 => con un precio de venta de 35.000.000

	El Gerente nos da las siguientes indicaciones

1)	deberá elegir el vehículo en el cual está interesado
2)	podrá ingresar el importe a entregar de contado, que siempre, deberá ser mayor al 50% del valor del vehículo elegido y lógicamente menor al valor total del vehículo.
3ro) entendemos que el resto (diferencia será financiada bajo la siguiente modalidad).

	Podrá elegir entre los siguientes esquemas de financiación

a)	el total a financiar con un 10% en 24 cuotas
b)	el total a financiar con un 20% en 48 cuotas
c)	el total a financiar con un 50% en 60 cuotas.

Si el cliente decide recibir mayor información por parte de nuestros vendedores, que tenga un lugar donde pueda colocar sus datos personales, (apellido, nombre), teléfonos, correo electrónico y nos comunicaremos, es decir un representante estaría en condiciones de comunicarse con, siempre y cuando active la casilla de “aprobación de comunicarnos vía privada”.


*/


    /* Aqui construimos una función del tipo arrow
    function. que recibe como parametro el auto seleccionado
    y devuelve su valor comercial */

    const fnDevolverValorDelAuto = (autoSeleccionado)=>
        {
            let valorDelAuto = 0;

            switch(autoSeleccionado)
            {
                case 1:
                    {
                        valorDelAuto = 25000000.00;
                        break;
                    }

                case 2:
                    {
                        valorDelAuto = 29000000.00;
                        break;
                    }

                case 3:
                    {
                        valorDelAuto = 35000000.00;
                        break;
                    }
            }

            return valorDelAuto;
        }

    const fnMinimoExigible = (valorDelAuto,porcentajeGerente)=>
        {
            return (valorDelAuto * porcentajeGerente)/100;
        }

    const fnDevolverCuotaFinanciacion = (diferencia,plan)=>{

        let mensajeFinanciacion = "";
        let valorCuota = 0;
        if(plan === 1) /* son 24 cuotas */
        {
            valorCuota = (diferencia + (diferencia * 10)/100)/24;
            mensajeFinanciacion = `vamos a financiar ${diferencia} en 24 cuotas de ${valorCuota}`;
        }
        if(plan === 2) /* son 48 cuotas */
        {
            valorCuota = (diferencia + (diferencia * 20)/100)/48;
            mensajeFinanciacion = `vamos a financiar ${diferencia} en 48 cuotas de ${valorCuota}`;
        }
        if(plan === 3) /* son 60 cuotas */
        {
            valorCuota = (diferencia + (diferencia * 50)/100)/60;
            mensajeFinanciacion = `vamos a financiar ${diferencia} en 60 cuotas de ${valorCuota}`;
        }

        return mensajeFinanciacion;


    }

window.addEventListener("load",()=>{

    console.log("la aplicación esta funcionando");

    /* En esta parte estoy vinculandome con la vista a traves
    de constantes a sus objetos u elementos HTML */
    const idSelectorVehiculo = document.querySelector("#idSelectorVehiculo");
    const idBtnCalcular = document.querySelector("#idBtnCalcular");
    const idDineroAEntregar = document.querySelector("#idDineroAEntregar");
    const idSelectorDePlanFinanciacion = document.querySelector("#idSelectorDePlanFinanciacion");
    const idBtnAceptar = document.querySelector("#idBtnAceptar");
    const idApellido = document.querySelector("#idApellido");
    const idDatosPersonales = document.querySelector("#idDatosPersonales");
    const idAceptaLlamada = document.querySelector("#idAceptaLlamada");

    /* Aqui voy mostrando esas constantes para
    verificar que estoy capturando bien 
    esos elementos u objetos */

    console.log(idSelectorVehiculo);
    console.log(idBtnCalcular);
    console.log(idDineroAEntregar);
    console.log(idSelectorDePlanFinanciacion);
    console.log(idDatosPersonales);

    idDatosPersonales.style.display = 'none';

    /* Estado de la aplicación */
    let VehiculoSeleccionado = 0;
    let valorVehiculoSeleccionado = 0;
    let dineroAEntregar = 0;
    let minimoExigible = 0;
    let diferenciaAFinanciar = 0;
    let planFinanciacion = 0;
    let mensajeFinanciacion = "";
    let apellidoIngresado = "";


    idBtnCalcular.addEventListener("click",()=>{

        //console.log(idSelectorVehiculo.value);
        console.log(VehiculoSeleccionado);

        VehiculoSeleccionado = Number(idSelectorVehiculo.value);

        //console.log(fnDevolverValorDelAuto(VehiculoSeleccionado));

        valorVehiculoSeleccionado = fnDevolverValorDelAuto(VehiculoSeleccionado);

        console.log(valorVehiculoSeleccionado);
       
        dineroAEntregar = Number(idDineroAEntregar.value);

        console.log(dineroAEntregar);

        minimoExigible = fnMinimoExigible(valorVehiculoSeleccionado,50);

        console.log(minimoExigible);

        if(dineroAEntregar > minimoExigible)
        {
            /* por aqui la entrega es mayor al minimo
            exigible */

            console.log("por aqui tengo que hacer la financiación");

            if(dineroAEntregar < valorVehiculoSeleccionado)
            {
                /* por aqui se estaría cumpliendo la segunda condición
                que sería que la entrega debe ser menor al total del 
                vehiculo */

                console.log("por aqui se cumplen las dos condiciones");

                diferenciaAFinanciar = valorVehiculoSeleccionado - dineroAEntregar;

                console.log(diferenciaAFinanciar);

                planFinanciacion = Number(idSelectorDePlanFinanciacion.value);

                console.log(planFinanciacion);

                mensajeFinanciacion = fnDevolverCuotaFinanciacion(diferenciaAFinanciar,planFinanciacion);

                console.log(mensajeFinanciacion);

            }
            else
            {
                alert("Estimado cliente, el importe ingresado es mayor al valor del auto");
            }

        }
        else
        {
            alert(`por decisiones comerciales requerimos como mínimo de entrega un importe mayor a ${minimoExigible}`);
        }

       

    })

    idBtnAceptar.addEventListener("click",()=>{

        apellidoIngresado = idApellido.value;

        alert(`Sr. ${apellidoIngresado} nos comunicaremos con ud. a la brevedad`);

    })

     idAceptaLlamada.addEventListener("change",()=>
        {
            console.log("aqui deberia mostrar el div");

            idDatosPersonales.style.display = 'block';
        })


})