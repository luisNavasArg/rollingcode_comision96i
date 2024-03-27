// let numeros =[45,25,46,86,18];
// numeros.forEach(numero=>console.log(numero));
// let pares=[];
// let impares = numeros.filter(numero=>{
//     if (numero%2!=0) {
//         return numero
//     }else{
//         pares.push(numero)
//     }
// });
// console.log(impares);
// numeros.forEach((numero,i)=>{
//     console.log("N° "+(i+1)+") "+numero);
// })
// console.log(pares);
// let time =0;
// let miTime=setInterval(function () {
//     time++;
//     console.log(time);
//     if (time==10) {
//         clearInterval(miTime)
//     }
// },1000);
// setTimeout(()=>{
//     console.log("Hola a todos!");
//     window.location.reload(true);
// },2000)
//Capturando el elemnto del dom
let principal= 
document.getElementById("contenedor");
principal.style.backgroundColor="red";
principal.style.color="white";
principal.style.display="inline";
// principal.style.position="absolute";
principal.style.left="50px";
let posInicial=50;
function moverElemento() {
    posInicial+=50;
    principal.style.left=posInicial+"px";
    console.log("moviendo el elemento");
}
// setInterval(function () {
//     moverElemento()
// },1000);
// setInterval(()=>{
//     moverElemento()
// },1000)

// for (let i = 0; i < 20; i++) {
//     document.body.innerHTML+="<p>Estamos agregando este elemento</p>";
    
// }

let cajas = document.getElementsByClassName("caja");

    for (let index = 0; index < cajas.length; index++) {
        cajas[index].innerHTML="Hola a todos";
        
    }

cajas[0].style.backgroundColor="red";
cajas[0].innerText="Hola a todos otra vez";
cajas[1].style.backgroundColor="yellow";
cajas[2].style.backgroundColor="blue";
let num = 1;

let opacidad=setInterval(()=>{
    num-=.20;
    cajas[0].style.opacity=num;

    if(num.toFixed(2)==0.2){
        clearInterval(opacidad);
    }
},1000)
let numeroRandon=Math.random()*10;
console.log(numeroRandon.toFixed(2));





