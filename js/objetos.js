//objetos

//propiedades
/*distanciaARecorrer, bateria, estacion de carga*/
/*
let carMarte={
    
    carga:100,
    cantRuedas:12,
    tamanioMaximoMuestra:20,
    distanciaMaxima:9,
    distanciaGanchos:100,
    cargaXmetro:5,//gasto por metro
    recoleccionMuestra:function (tamanio,distancia) {
        if (tamanio<this.tamanioMaximoMuestra) {
            if (distancia < this.distanciaGanchos) {
                return "La recolección de la muestra está en proceso";
            }
            else{
                return "La distancia es mayor a la distancia máxima";
            }
        }else{
            return "El tamaño es mayor al tamaño máximo";
        }
    },
    calcularDistanciaARecorrer:function(distanciaArecorrer){
        if (distanciaArecorrer <=  this.distanciaMaxima) {
            let distanciaReal=distanciaArecorrer*2;
            let calculoCarga = this.carga-(this.cargaXmetro*distanciaReal);
            this.carga=calculoCarga;
            return this.carga;
            
        }else{
            return "La distancia a recorrer supera la máxima"
        }
    }
}
console.log(carMarte);
console.log(carMarte.calcularDistanciaARecorrer(9,carMarte.carga));
console.log(carMarte.carga);

console.log(carMarte.recoleccionMuestra(18,150));
carMarte.name="CarMarte";
console.log(carMarte.name);
console.log(carMarte["name"]);
carMarte["name"]="Comision96i"
console.log(carMarte["name"]);
*/
//Create ,Read, Update y Delete

// carMarte.hora="21:00";
// console.log(carMarte.hora);
// delete carMarte.hora;
// console.log(carMarte);

// for (const cantRuedas in carMarte) {
//     if (Object.hasOwnProperty.call(carMarte, cantRuedas)) {
//         console.log(carMarte[cantRuedas]);
        
//     }
// }
// console.log(carMarte.calcularDistanciaARecorrer);

// let carro = Object.keys(carMarte);
// console.log(carro);
// for (let i = 0; i < carro.length; i++) {
//     console.log(carro[i]);
// }

let curso={
    nombre:"React",
    dias:["Lunes","Miéscoles","Viernes"],
    alumnos:[
        {nombre:"Lautaro",
        email:"lautaro@gmail.com",
        apellido:"Biñon",
        direccion:{
            calle:"Paraguay",
            altura:100,
            piso:1,
            depto:"4E",
            ciudad:"Lules",
            provincia:"Tucumán"
            }
        }
    ],
    enviarEmail:function () {
        let alumnos=[];
        for (let i = 0; i < this.alumnos.length; i++) {
            alumnos.push(this.alumnos[i].email)
        }
        return alumnos;
    }
}
// console.log(curso.enviarEmail());
//función constructora
function Alumno(nombre,apellido,edad) {
    this.nombre=nombre;
    this.apellido=apellido;
    this.edad=edad;
}
const joel= new Alumno("Joel","Rodríguez",24);
console.log(joel);

let docente = new Object();
docente.nombre="Luis";
docente["edad"]=29;
console.log(docente);

let tutor =Object.create(docente);
tutor.nombre="Luis";
tutor.edad=29;
console.log(tutor);

console.log(docente==tutor);
//objetos globales
// Object, Array, Function Boolean Number
//objetos de utilidades
// Math , Date,RegExp
//Objeto de errores Error
console.log(Math.floor(Math.random()*10));