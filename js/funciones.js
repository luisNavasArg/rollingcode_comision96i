//declaramos la función declarada 
/*
function calculadora(ope, num, num2){
    // console.log(typeof ope,typeof num, typeof num2);
    // switch (ope) {
    //     case '+':
    //         return num+num2;
    //     case '-':
    //         return num-num2;    
    //     case '/':
    //         return num/num2;
    //     case '*':
    //         return num*num2; 
    
    //     default:
    //         return "No es una operación valida";
           
    // }
    if(ope=='+'){
        return num +num2
    }else if( ope=='-'){
        return num -num2
    }else if( ope=='/'){
        return num/num2
    }else if( ope=='*'){
        return num*num2
    }else{
        return "No es una operación valida";
    }

}
//invocar o llamar a la función

// console.log(calculadora('-',2,14));
// console.log(calculadora('/',2,14));
// console.log(calculadora('*',2,14));
// console.log(calculadora('+',2,14));

//metodos de los arrays
let numeros =[14,25,36,89,4,1,55,14];

function buscarEnArray(arr,valor) {
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i]==valor) {
    //         return true;
    //     }
        
    // }
    // return false;
    return arr.includes(valor)
}
console.log(buscarEnArray(numeros,114));
let nombres=["Luis","Ángel","Cecilia","Gonzalo","Alberto"];

console.log(buscarEnArray(nombres,"Cecilia"));

let alumno={
    nombre:"Felipe",
    edad:25,
    apellido:"Sarco",
    direccion:"Tucumán"
}
function contarPropiedades(obj) {
    return Object.keys(obj)
}*/
// console.log(contarPropiedades(alumno));
// function concatenarArrays(arr,arr2) {
//     return arr.concat(arr2)
//     // return arr.push(arr2)
// }
// console.log(concatenarArrays(numeros,nombres));

// console.log(concatenarArrays(numeros,nombres));

//optener la posición de algún valor

// console.log(nombres.indexOf('Cecilia'));
/*
function eliminarRegistroArray(arr,valor) {
    //si está
    let esta = arr.includes(valor);
    if (esta) {
        //capturamos la posicion
        let pos = arr.indexOf(valor);
        //sacamos el valor
        arr.splice(pos,1);
        return arr
    }
    

}
console.log(eliminarRegistroArray(nombres,"Luis"));
console.log(nombres);
console.log(nombres.sort());
console.log(nombres.reverse());


const productos = [
    { nombre: "Manzanas", categoria: "Frutas", cantidad: 10 },
    { nombre: "Leche", categoria: "Lácteos", cantidad: 2 },
    { nombre: "Pan", categoria: "Panadería", cantidad: 5 },
    { nombre: "Zanahorias", categoria: "Verduras", cantidad: 8 }
];
function esManzanas(fruta) {
    return fruta.nombre==="Manzanas"
    
}
console.log(productos.find(esManzanas));

let str ="Hola,cómo,están";
*/
// console.log("La longitud del texto es: "+str.length);
// console.log(str.indexOf("á"));
// console.log(str.search("o"));
// console.log(str.split(","));
// console.log(str.toUpperCase());
// console.log(str.toLocaleLowerCase());

console.log(saludar("Luis","Perez"));

function saludar(nombre,apellido) {
    return nombre+ " "+apellido;
}

//expresadas

let despedirse = function (nombre,apellido) {
    return "Adios¡ "+nombre+" "+apellido;
}
console.log(despedirse("Luis","Perez"));