class Empresa {
    nombre;
    constructor(nombre){
        this.nombre=nombre
    }
    recaudacionTotal(){

    }
    cantVecesRecorrida(){

    }
}

class Reserva extends Empresa{
    codigo;
    cantPasajeros;
    estacionInicial;
    estacionFinal;
    precioPorEstacion=70; 
    constructor(nombre,cp,ei,ef){
        super(nombre)
        this.codigo=Date.now();
        this.cantPasajeros=cp;
        this.estacionInicial=ei;
        this.estacionFinal=ef;
    }
    capturarPrecio(){
        return this.cantPasajeros*
        (this.capturarDistancia(this.estacionInicial,this.estacionFinal)*this.precioPorEstacion)
    }
    capturarDistancia(inicio,fin){
        return Math.abs(inicio-fin)
    }
}
let reservas =[];

// let reserva = new Reserva("Trenes Argentinos",3,9,1);
// // reservas.push(reserva);
// reservas=[...reservas,reserva];
// console.log(reservas);
// setTimeout(()=>{
//     reservas = [...reservas, new Reserva("Trenes argentinos",5,1,9)];
//     console.log(reservas);
// },2000);

function crearReserva() {
    //capturamos elementos del DOM
    let pasajeros = document.querySelector("#pasajeros").value;
    let inicio=document.querySelector("#EstacionInical").value;
    let fin=document.querySelector("#EstacionFinal").value;
    console.log(pasajeros.value);
    let rs = new Reserva("Trenes Argentinos",Number(pasajeros),Number(inicio),Number(fin));
    rs.monto=rs.capturarPrecio();
    rs.cerrado=false;
    reservas=[...reservas,rs];
    mostrarReservas(reservas)
}

function mostrarReservas(array) {
    let elemento = document.getElementById("root");
    let titulo ="Reserva";
    elemento.innerHTML=`
    <table>
        <thead>
            <tr>
                <th>${titulo}</th>
                <th>Desde</th>
                <th>Hasta</th>
                <th>Monto</th>
            </tr>
        </thead>
        <tbody id="cuerpo"></tbody>
    </table>
    `;
    let cuerpo = document.querySelector("#cuerpo");
    array.forEach((item)=>{
        
        cuerpo.innerHTML+=`
        <tr>
            <td class="${item.cerrado?"Cerrado":"abierta"}">${item.codigo}</td>
            <td>${capturarNombre(item.estacionInicial)}</td>
            <td>${capturarNombre(item.estacionFinal)}</td>
            <td>${item.monto}</td>
        </tr>
        
        `;
    })

}
function capturarNombre(num) {
    switch (num) {
        case 1:
            return "Buenos Aires";
        case 2:
            return "Zarate";
        case 3:
            return "Rosario Sur";
        case 4:
            return "Rosario Norte";
        case 5:
            return "Galvez";
        case 6:
            return "Rafaela";
        case 7:
            return "Sunchales";
        case 8:
            return "La banda";
        case 9:
            return "San Miguel";
    
        default:
            break;
    }
    return 
}