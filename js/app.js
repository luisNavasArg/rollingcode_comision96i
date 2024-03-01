// alert("estamos conectados al index");
//condicional doble
/*
let numero = 119;
if(numero <= 18){
    //ejecuta si es verdadero
    alert("El número "+numero+" es menor de 18");
}else{
    // Ejecutacuando la condición es falsa
    alert("El número "+numero+" es mayor de 18");
}

//condicional anidado
let rol = "docentes";

if (rol=="alumno") {
    alert("Bienvenido alumno");
}else if(rol=="docente"){
    alert("Bienvenido docente");
}else{
    alert("ese rol no existe");
}*/

//rango desde 5 a 10
/*
let num = 0;

if (num >=5) {
    if (num <= 10) {
        alert(" está dentro del rango");
    }else{
        alert("Esta fuera del rango");
    }
    
}else{
    alert("Esta fuera del rango");
}
*/
// let x=20;
/*
if (x>=5 && x<=10) {
    alert(" está dentro del rango");
}else{
    alert("Esta fuera del rango");
}*/
//operadores asignación = aritméticos+-/* % 
/*
console.log(x);
x++;
console.log(x);
x--;
console.log(x);
let llueve=true;
console.log(llueve);
console.log(!llueve);
*/
// operadores condicionales == === < > <= >= !=
/*
console.log('12'!==12);
// operadores logicos && ||

let finde=false;
let es_feriado=false;
//or cumple una de las dos condiciones
if (finde || es_feriado) {
    console.log("No es laborable hoy");
}else{
    console.log("Es un día laborable");
}
// y && se tienen cumplir las dos condiciones

if (!finde && !es_feriado) {
    console.log("Es un día laborable");
}else{
    console.log("Es un día laborable");
}
let dia = prompt("Ingresa el día");
switch (dia) {
    case "Lunes":
        console.log("Me levanto con un poco de fiaca");
        break;
    case "viernes":
        console.log("Me levanto con muchas ganas porque viene el finde");  
        break;

    default:
        console.log("Ese día no es valido");
        break;
}
*/
// true && true = true
// false && true = false
// true && false = false
// false && false = false 

// true || false = true
// false || true = true
// true || true = true
// false || false = false

// bucles | estructuras repetitivas
/*
let alumnos = [];
alumnos[0]="Cecilia";
alumnos[1]="Gustavo";
alumnos[2]="Luciana";
alumnos[3]="Alberto";
alumnos[50]="Ángel";
let x = 4;
let rango = x>=4 && x<50;

while (x < 50) {
    
    alumnos[x]=null;
    x++;
}
console.log(alumnos);*/

// mostrar la tabla del 8 en la consola
/*
let numero = prompt("Ingresa tu número para mostrar la tabla");
let num = 1;

while (num <= 10) {
    console.log(numero+ ' X ' +num + ' = ' +num*numero);
    num++;
}*/
// salida  8 x 1 = 8
/*
let num2 = 1;

do {
    console.log(num2);
    num2++;
} while (num2 < 10);
*/
// let numIngresado =prompt("Ingresa tu número");
// let numeros=[];
// for(let a=0;a <10;a++){
//     numeros[a]=a*3;
// }
// numIngresado
// console.log(numeros);

// for (let i = 1; i < 10; i++) {
//     console.log(numIngresado+ ' X ' +i + ' = ' +i*numIngresado);
// }

let numero = [];
let numIngresado = "";
while (numIngresado != '0') {
    numIngresado = prompt("Ingresa un número");
    console.log("La longitud es "+numero.length);
    if (numIngresado!='0') {
        numero[numero.length]=numIngresado;
    }
    
}
console.log(numero);






















