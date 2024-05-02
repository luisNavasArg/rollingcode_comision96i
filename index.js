console.log("Estamos en el entorno de node!");
const PI=3.1416
let numeros =[];
numeros.push(14)
console.log(numeros);
const alumno = {}
alumno.nombre="Gustavo";
console.log(alumno);
const suma=(a,b)=>a+b
console.log(suma(4,3));
//template string
let saludo =`Hola, ${alumno.nombre}`;
console.log(saludo);
//objetos literales
const obj = {
    nombre:"Mi nombre",
    apellido:"Mi apellido",
    dni:12345678,
    direccion:{calle:"mi calle",altura:"mi número",piso:"mi piso"},
    equiposFavoritos:["equipo1","equipo2"],
    mostrarNombreCompleto:function(){
       return `${obj.nombre} ${obj.apellido}`
    },
    activo:true
}
obj.nombre="Luis";
console.log(obj.mostrarNombreCompleto());
numeros.push(258)
console.log(numeros);
numeros.push(36)
console.log(numeros);
numeros.pop()
console.log(numeros);
//agrega en la primera posición
numeros.unshift(-25)
console.log(numeros);
//elimina el primero
// numeros.shift()
// console.log(numeros);
// //elimina a partir de la posición, la cantidad
// numeros.splice(0,1)
// console.log(numeros);

// const alumnos=["Luciana","Gustavo","Joel","Alberto"];
// const buscarAlumno=alumnos.find(function (alumno) {
//     //estrictamente distinto
//     return alumno!="Gustavo"
// })
// console.log(buscarAlumno);

// const buscarAlumno2=alumnos.map(function (alumno) {
//     //estrictamente distinto
//     return alumno!=="Luciana"
// })
// console.log(buscarAlumno2);

/*
console.log(obj);
numeros=[58,25,...numeros]
console.log(numeros.reverse());

let cursos=[]
let curso={
    propiedades:"valores"
}*/

const cursos=[
    {id:1,nombre:"html"},
    {id:2,nombre:"css"},
    {id:3,nombre:"javascript"}
]
function eliminarCurso(params) {
    let misCursos=cursos.filter(curso=>curso.nombre!=params)
    return misCursos
}
function capturarCurso(nombre) {
    return cursos.filter(curso=>curso.nombre===nombre)
}

console.log(eliminarCurso("javascript"));
console.log(capturarCurso("css"));
let misNumeros=[14,5,6,9,7,8,4]
function potencia() {
    return misNumeros.map(numero=>numero*numero)
}
console.log(potencia());

function Name(nombre) {
    this.nombre=nombre
    
}

const miName=nombre=>`Hola como te va mi nombre es ${nombre}`
console.log(miName("LUis"));
let alum =new Name("Julián");


console.log(alum);
let objeto = new Object();
objeto.id=89
console.log(objeto);
objeto.activo=true

if (objeto.activo) {
    console.log("Esta permitido entrar al sitio");
}else{
    console.log("No estás activo comunicate con el administrador");
}
let activo=objeto.activo
console.log(activo?"Esta permitido entrar al sitio":"No estás activo comunicate con el administrador");

module.exports=cursos