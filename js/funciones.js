
//declaración de la función
//palabra reservada function nombre(parámetros){instrucciones}
function suma(num,num2) {
    let resultado=num+num2;
    
    return "El resultado de la suma de: "+num+" y "+num2+" es: "+resultado
}
function resta(num,num2) {
    let resultado=num-num2;
    
    return "El resultado de la resta de: "+num+" y "+num2+" es: "+resultado
}
function multi(num,num2) {
    let resultado=num*num2;
    
    return "El resultado de la multiplicación de: "+num+" y "+num2+" es: "+resultado
}
function div(num,num2) {
    let resultado=num/num2;
    
    return "El resultado de la división de: "+num+" y "+num2+" es: "+resultado
}
//Invocar o llamar a la funcion
// alert("Hola");
// console.log("hola");

document.write("<p>"+suma(4,7)+"</p>");
document.write(resta(4,7));
document.write("<p>"+multi(4,7)+"</p>");
document.write("<p>"+div(4,7)+"</p>");


let mouse={
    color:"verde",
    cable:true,
    moverCursor:function () {
        alert("se movió el mouse");
    }
}
mouse.moverCursor()
