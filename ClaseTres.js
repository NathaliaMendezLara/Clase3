// Ciclo por conteo
/*
for( let i = 0 ; i < 10 ; i ++ ) {

    console.log( i );

}

*/


//solicitar nombre + voto + se repita 3 veces Trea hacer contador de votos y alerta de que partido gano

for( let i = 0 ; i < 3 ; i ++) {

    let nombre = prompt ("ingresa tu nombre");
    let partido = prompt("A cual partido votas A o B");
    
    if( partido == "A"){
        console.log("el nombre del usuario es" + nombre);
        console.log("Voto por A");
    }
    else if(partido == "B"){
        console.log("el nombre del usuario es" + nombre);
        console.log("Voto por B");

    }
    else{
        console.log(" voto incorrecto");
    }
    

}

//Conteo  5 vueltas con breack (termina el ciclo)

for( let i= 0 ; i < 5; i++){
    if( i == 4){
        breack;
    }
    console.log(i);
}


//Ejemplo 1
// continuo (salteo lo que viene abajo del conteo)

for( let i= 0 ; i < 10; i++){
    if( i == 4){
        continue;
    }
    console.log(i);
}

//Ejemeplo 2

for( let i = 0 ; i < 10 ; i ++){
    let cliente= prompt("ingrese su  nombre")
}


//Ejemplo 3

// For lo utilizo cuando se cuantas vueltas voy a dar y while cuando no se cuantas veces debo repetir el bucle

//while = mientras
/*
var i= 0;
while( i < 10){
    console.log(i);
    i ++ // es la variable + 1 o puede ser tambien i= i + 1 
}
*/


//Ejemplo 4
//Con la palabra exit se finaliza la solicitud de ingresar nombre
var nombreUsuario = prompt("Ingrese su nombre"); // lo ingreso fuera del bucle para ir actualizando el dato

while( nombreUsuario != "Exit"){
    console.log("Bienvenido al sistema" + nombreUsuario);
    nombreUsuario =prompt("Ingrese su nombre");

}

//do while, no es necesario que se cumpla la primera condicion / hacer mientras, hago un proceso mientras la condicion se cumpla

do{
let usuario= prompt("ingrese su nombre");
let voto= prompt("ingrese su voto");
}
while( usuario != "Salir");

//ejercicio / programa que muestre las tablas hasta la tabla del 10

let ingreseUnNumero= prompt("tabla de cual numero queres: ");


for( let i = 1 ; i <= 10 ; i ++){
    console.log( ingreseUnNumero * i);

}

//Software que pida dos numeros al usuario y que muestre la suma y que reste

do{
    let ingreseUnNumero = parseInt(prompt("Ingrese un numero")) ;
    let ingresaUnSegundoNumero = parseInt(prompt("Ingrese un nuevo numero")) ; ;
    let suma= ingreseUnNumero + ingresaUnSegundoNumero;
    alert("la suma es:  " + suma)
    let opcion =prompt("Seguir Si o No");
    }
while (opcion != "No");

// otra forma con while

var opcion= prompt("Queres seguir Si o No");

while( opcion != No){

    let ingreseUnNumero = parseInt(prompt("Ingrese un numero")) ;
    let ingresaUnSegundoNumero = parseInt(prompt("Ingrese un nuevo numero")) ; ;
    let suma= ingreseUnNumero + ingresaUnSegundoNumero;
    opcion= prompt("Queres seguir Si o No");
}
