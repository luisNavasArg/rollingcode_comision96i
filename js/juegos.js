document.body.style.display = "flex";
document.body.style.justifyContent = "center";
let tablero = document.getElementById("contenedor");
tablero.style.backgroundColor = "black";
tablero.style.width = '450px';
tablero.style.height = '450px';
tablero.style.display = "flex";
tablero.style.flexWrap = "wrap";
tablero.style.boxSizing = "border-box";

let arrayCuadros=[
    [null,null,null],
    [null,null,null],
    [null,null,null]];

for (let i = 0; i < 9; i++) {
    tablero.innerHTML += `<div  id='cuadro${i}' onclick='jugar(this)' class='cuadro'></div>`;
}
let cuadros = document.getElementsByClassName("cuadro");
for (let index = 0; index < cuadros.length; index++) {
    cuadros[index].style.backgroundColor = "white";
    cuadros[index].style.width = '148px';
    cuadros[index].style.height = '148px';
    cuadros[index].style.border = '1px solid yellow';
    cuadros[index].style.fontSize="120px";
    cuadros[index].style.display="flex";
    cuadros[index].style.justifyContent="center";
    cuadros[index].style.alignItem="center";

}
let letra ="X";
function cambiarLetra() {
    if (letra=="X") {
        letra="O"
    }else{
        letra="X";
    }
}
function jugar(o){
    let elemento = document.getElementById(`${o.id}`);
    let cuadro = o.id[o.id.length-1];
    switch (cuadro) {
        case '0':
            if(arrayCuadros[0][0]!=null){
                return false;
            }else{
                arrayCuadros[0][0]=letra;
            }
            break;
        case '1':
            if(arrayCuadros[0][1]!=null){
                return false;
            }else{
                arrayCuadros[0][1]=letra;
            }
            break;
        case '2':
            if(arrayCuadros[0][2]!=null){
                return false;
            }else{
                arrayCuadros[0][2]=letra;
            }
            break;
        case '3':
            if(arrayCuadros[1][0]!=null){
                return false;
            }else{
                arrayCuadros[1][0]=letra;
            }
            break;
        case '4':
            if(arrayCuadros[1][1]!=null){
                return false;
            }else{
                arrayCuadros[1][1]=letra;
            }
            break;
        case '5':
            if(arrayCuadros[1][2]!=null){
                return false;
            }else{
                arrayCuadros[1][2]=letra;
            }
            break;
        case '6':
            if(arrayCuadros[2][0]!=null){
                return false;
            }else{
                arrayCuadros[2][0]=letra;
            }
            break;
        case '7':
            if(arrayCuadros[2][1]!=null){
                return false;
            }else{
                arrayCuadros[2][1]=letra;
            }
            break;
        case '8':
            if(arrayCuadros[2][2]!=null){
                return false;
            }else{
                arrayCuadros[2][2]=letra;
            }
            break;
        default:
            break;
    }
    elemento.innerText=letra;
    cambiarLetra();
    console.log(arrayCuadros);
}


