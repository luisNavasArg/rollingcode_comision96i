//bucles while, do while operadores, for 
/*
let x=0;
while (x < 10) {
    
   x++ 
   console.log(x);
}
let a=20;
do {
    a++ 
   console.log(a);
} while (a < 21);
*/
//palabra reservada(Variableinicial;condición,incremento){ Instrucciones o sentencias}
/*
for(let a=0; a < 10;a++){
    console.log(2*a);
}
*/
//arrays

//palabra reservada nombre operador de asignación [valor, valor2,....]
// let alumnos=["Alberto","Cecilia","Diego","Felipe","Guillermo"];
// alumnos=["Lautaro"];
// console.log(alumnos.length);
// alumnos[alumnos.length]="Lautaro";
// alumnos[alumnos.length]=12345;
// console.log(alumnos);

//el objeto
//palabra reservada nombre operador de asignación {propiedad:valor}
// let mouse = {color:"verde",cable:true,cantBotones:3};
// console.log(mouse);
// console.log(mouse.color);

// alumnos.push("Luciana","Juan","Ignacio");
/*
let curso ={
    nombre:"Html css y Javascript",
    duracion:"3 meses",
    horario:{
        hora:"19 a 21:30",
        dias:[
            "Lunes",
            "Miércoles"]
        },
    docentes:["Luis","Ángel"],
    alumnos:alumnos
    
}

for (let i = 0; i < curso.docentes.length; i++) {
    console.log(curso.docentes[i]);   
}
for (let i = 0; i < curso.alumnos.length; i++) {
    console.log(curso.alumnos[i]);   
}
*/
//tenemos la cafetería y queremos mostrar los prductos en la consola
/*
const cafeteria = [
    { nombre: "Café americano", categoria: "Bebida", cantidad: 20 },
    { nombre: "Croissant", categoria: "Alimento", cantidad: 15 },
    { nombre: "Tarta de manzana", categoria: "Postre", cantidad: 8 },
    { nombre: "Té verde", categoria: "Bebida", cantidad: 25 },
    { nombre: "Sandwich de pollo", categoria: "Alimento", cantidad: 10 },
    { nombre: "Brownie", categoria: "Postre", cantidad: 12 }
];

console.log(cafeteria[0]);
*/
// producto tipo cantidad
/*
for (let i = 0; i < cafeteria.length; i++) {
    console.log("Producto: "+ cafeteria[i].nombre +" tipo: "+cafeteria[i].categoria+" cantidad:  "+cafeteria[i].cantidad);
    
    
}

const productos = [
    { nombre: "Manzanas", categoria: "Frutas", cantidad: 10 },
    { nombre: "Leche", categoria: "Lácteos", cantidad: 2 },
    { nombre: "Pan", categoria: "Panadería", cantidad: 5 },
    { nombre: "Zanahorias", categoria: "Verduras", cantidad: 8 }
];
*/
//crear un script para agregar más productos

// productos[productos.length]={ nombre: "Bananas", categoria: "Frutas", cantidad: 38 };
//metodo para agregar un elemento al array enla última posición
// productos.push({ nombre: "Queso", categoria: "Lácteos", cantidad: 18 });
//siempre usamos dentro de un array el mismo tipo de dato
// console.log(productos);

//Crear un script para guardar datos en el array productos
//entana emergente para confirmar si seguimos agregando o no
/*
let continuar;
do {
    continuar = confirm("Pulsa aceptar para agregar o cancelar");
    */
// console.log(continuar);
/*
if (continuar) {
    let nombre = prompt("Ingresa el nombre");
    let categoria =prompt("Categoria");
    let cantidad = Number(prompt("cantidad"));
    if (nombre==null || categoria ==null || cantidad==0 || Number.isNaN(cantidad)) {
        alert("Falta agregar alguno de los datos");
        continuar = confirm("Pulsa aceptar para agregar o cancelar");
    }else{
        productos.push({nombre:nombre,categoria:categoria,cantidad:cantidad});
    }
    
}
} while (continuar);
*/

// console.log(productos);
// let num =Number(prompt("ingresa un número"));
// console.log(num);
// console.log();

// let num =Number(prompt("ingresa un número"));
// alert(typeof num);
// document.write(num);
// alert(Number.isNaN(num));

