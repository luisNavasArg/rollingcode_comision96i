let users=leerUsuarios() || []; 
let form = document.querySelector(".form");
let inputEmail =document.querySelector("input[id=email]");
let mensaje =document.querySelector("#emailExiste");
inputEmail.addEventListener("focusout",validarEmail);
form.addEventListener("submit",function (e) {
    e.preventDefault();
    let email = inputEmail.value;
    let password = document.querySelector("input[id=password]").value;
    users=[...users,{id:Date.now(),email,password}];   
    crearUsuarios(users);
    inputEmail.value="";
    document.querySelector("input[id=password]").value="";

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

     


    
   
