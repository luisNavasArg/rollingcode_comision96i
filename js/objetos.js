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

//Notación Literal
const juego={
    
    altura:'300px',
    ancho:'300px',
    personaje:[{visible:true,vidas:5,puntos:0,}],
    enemigos:[{visible:true,animacion:true,resistencia:true}],
    saltar:function (p) {
        p.pos.y=+10;
    },
    caminar:function(p){
        p.pos.x=+10
    }
}
//Función constructora

function Clientes(nombre,apellido,direccion,telefono) {
    this.nombre=nombre;
    this.apellido=apellido;
    this.direccion=direccion;
    this.telefono=telefono;
}
//instanciamos la función
let carmenRamirez= new Clientes("Carmen","Ramirez","Callao 530",1170314256);
console.log(carmenRamirez.apellido);

const obj = new Object();

obj.name="Juego";
obj["numero"]=1425;

console.log(obj);

let juego2 = Object.create(obj);
juego2.name="Mario ";
juego2.puntos=1425566;
console.log(juego2);

class Vehiculo{
    //ruedas, velocidades, volante
    constructor(ruedas,velocidades,volante){
        this.ruedas=ruedas;
        this.velocidades=velocidades;
        this.volante=volante;
    }
}

const vehiculo = new Vehiculo(4,5,true);
// console.log(vehiculo);
class Auto extends Vehiculo{
    constructor(ruedas,velocidades,volante,marca){
        super(ruedas,velocidades,volante);
        this.marca=marca;
    }
}
let auto = new Auto(4,5,true,"Fiat");
let auto2 = new Auto(4,5,true,"Renault");
let auto3 = new Auto(4,5,true,"Checvolet");
console.log(auto);
console.log(auto2);

class Moto extends Vehiculo{
    constructor(ruedas,velocidades,volante,marca){
        super(ruedas,velocidades,volante);
        this.marca=marca;
    }
}
let moto = new Moto(2,3,true,"Scott");
console.log(moto);

class Cafetera{
    static id=0;
    #azucar;
    constructor(cafe,agua){
        this.cafe=cafe;
        this.agua=agua;
        Cafetera.id=Cafetera.id+1;
        this.id=Cafetera.id;
        this.#azucar=2;
    }
    preparaCafe(){
       
        if (this.cafe) {
            if (this.agua) {

                return "Espere un momento su café se está preparando con "+this.#azucar+' cubos de azucar';
            }else{
                return "No hay agua!"
            }
            
        }else{
            return "No tiene café!"
        }
    }
    agregarCafe(){
        // this.cafe=true;
        this.cafe=this.#cambiarValor(this.cafe);
        return "Se está agregando el cafe"
    }
    agregarAgua(){
        this.agua=true;
        return "Se está agregando el agua"
    }
    agregarAzucar(){
        this.#azucar=this.#azucar+1;
        return "Se está agregando un cubo de azucar"
    }
    #cambiarValor(val){
        return !val
    }
}
let cafe = new Cafetera(true,false);
let cafe2 = new Cafetera(false,true);
console.log(cafe.preparaCafe());
console.log(cafe.agregarAgua());
console.log(cafe.agregarAzucar());
console.log(cafe.preparaCafe());
console.log(cafe);
console.log(cafe2.preparaCafe());
console.log(cafe2.agregarCafe());
console.log(cafe2.agregarAzucar());
console.log(cafe2.agregarAzucar());

console.log(cafe2.preparaCafe());

// console.log(Cafetera);

class Empresa {
    #cuil;
    #nombre;
    #telefono;
    #direccion;
    #codigoP;
    constructor(cuil,nombre){
        this.#cuil=cuil;
        this.#nombre=nombre;

    }
    getCuil(){
        return this.#cuil;
    }
    getNombre(){
        return this.#nombre;
    }
    setCuil(cuil){
        this.#cuil=cuil;
    }
    setNombre(nombre){
        this.#nombre=nombre
    }
}
let empresa= new Empresa(234565432,"Rollingcode");
console.log(empresa.getCuil());
empresa.setCuil(23567342);
console.log(empresa.getCuil());
console.log(empresa.getNombre());