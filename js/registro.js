let users=[
    {id:2, email:"lpipnavas@gmail.com",password:"123"}
];
let form = document.querySelector(".form");
let inputEmail =document.querySelector("input[id=email]");
let mensaje =document.querySelector("#emailExiste");
inputEmail.addEventListener("focusout",validarEmail);
form.addEventListener("submit",function (e) {
    e.preventDefault();
    let email = inputEmail.value;
    let password = document.querySelector("input[id=password]").value;
    console.log(email,password);
})

function validarEmail() {
    let email = inputEmail.value;
    
    users.forEach((user)=>{
        if(user.email== email){
            mensaje.innerText="El email existe!"
            setTimeout(()=>{
                mensaje.innerText=""
                inputEmail.value=""
              
            },2000)
        }
    })

}
function crearUsuario(usuario) {

    
}
    
   
