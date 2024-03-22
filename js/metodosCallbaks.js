// //foreach

// let alumnos =["Juan","Alberto","Cecilia","Felipe","Diego"];
// alumnos.push("Ignacio");
// alumnos=[...alumnos,"Lautaro"];
// console.log(alumnos);
// for (let i = 0; i < alumnos.length; i++) {
//    console.log(alumnos[i]);
    
// }
// console.log("Con el forEach");
// // alumnos.forEach(function (alumno) {
// //     console.log(alumno);
// // });

// alumnos.forEach((alumno)=>console.log(alumno));

// //filter

// let nuevoArray=alumnos.filter((alumno)=>{ 
// if (alumno =="Lautaro") {
//     return alumno;
// }
// });
// console.log(nuevoArray);

// let numeros =[45,78,43,24];
// console.log(numeros);
// let num=0;
// let suma =numeros.filter(numero=>{
//     num=num+numero;
//     return num;
// });
// console.log(num);

// //find

// console.log(alumnos.find((alumno)=>alumno=="Felipe"));
// //map crea una copia del array 
// console.log(numeros.map(numero=>numero));

class Encuesta {
    constructor(preguntas){
        this.preguntas=preguntas
    }
    mostrarPreguntas(){
        this.preguntas.forEach((pregunta,i) => {
            console.log(`${i+1}. ${pregunta.texto}`);
            // console.log(i+1+". "+pregunta.texto);
        });
    }
}
class Pregunta{
    constructor(texto){
        this.texto=texto;
    }
}
class PreguntaAbierta extends Pregunta{
    constructor(texto){
        super(texto)
    }
}
// let PreguntaAbierta1 = new Pregunta("¿Cuantos numeros hay?","Texto respueta 1")
class PreguntaOpcionMultiple extends Pregunta {
        constructor(texto,opciones){
            super(texto);
            this.opciones=opciones;
            
        }
        mostrarOpciones(){
            console.log("Opciones");
            this.opciones.forEach((opcion,index)=>{
                console.log(`${index+1}. ${opcion}`);
            })
        }
    
    }
// let opcion = new PreguntaOpcionMultiple(false,true)
// console.log(opcion.Mostrarrespuesta1());
// console.log(PreguntaAbierta1);

let pregunta1 = new PreguntaAbierta("Cuál es su nombre?");
let pregunta2= new PreguntaOpcionMultiple("¿Cuál es tu color favorito de estas opsciones?",["Rojo","Verde","Azul"]);
let encuesta = new Encuesta([pregunta1,pregunta2]);
encuesta.mostrarPreguntas();
pregunta2.mostrarOpciones();







