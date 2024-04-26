function leerUsuarios() {
    let usuarios = localStorage.getItem("usuarios");
    return JSON.parse(usuarios)
}
function crearUsuarios(data) {
    console.log(data);
    window.localStorage.setItem("usuarios", JSON.stringify(data))
}
function modificarUsuario(i, nuevosDatos) {
    let id =Number(i)
   
    let usuarios = leerUsuarios();
    let nuevosUsuarios = usuarios.filter((usuario) => {
        if (usuario.id == id) {
            let obj = {id,email:nuevosDatos.email,password:nuevosDatos.password};
            return obj;
        } else {
            return usuario;
        }
    })
    console.log(nuevosUsuarios);
    crearUsuarios(nuevosUsuarios);
}
function eliminarUsuario(id) {
    let usuarios = leerUsuarios();
    let nuevosUsuarios = usuarios.filter((usuario) => {
        if (usuario.id != id) {
            return usuario;
        }

    })
    crearUsuarios(nuevosUsuarios);
    mostrarUsuarios()
}

function mostrarUsuarios() {
    let adminRoot = document.getElementById("adminRoot");
    let usuarios = leerUsuarios();
    adminRoot.innerHTML = ``;
    usuarios.forEach(usuario => {
        adminRoot.innerHTML += `
    <li>${usuario.email}
    <button onclick="formModicarUsuario(${usuario.id})">modificar</button> 
    <button onclick="eliminarUsuario(${usuario.id})">eliminar</button></li>
    `

    });

}
mostrarUsuarios()
function formModicarUsuario(id) {
    let usuarios = leerUsuarios();
    let usuario=usuarios.filter((usu)=>{
        if(usu.id==id){
            return usu
        }
    })
    
    let adminRoot = document.getElementById("adminRoot");
    adminRoot.innerHTML = `
    <form class="formModificar" >
    <div class="mb-3">
            <input type="text" class="form-control" id="id" value="${id}" hidden>
        </div>
        <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" aria-describedby="emailHelp" value=${usuario[0].email}>
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">Contraseña</label>
            <input type="text" class="form-control" id="password" value="${usuario[0].password}">
        </div>
        <div class="mb-3">
            <button  type="button" onclick="procesarForm(${id})" class="btn btn-primary" >Modificar</button>
        </div>
    </form>
    `
}
function procesarForm(id) {

    let formId = document.querySelector("input[id=id]").value;
    let password = document.querySelector("input[id=password]").value;
    let email = document.querySelector("input[id=email]").value;
    console.log(email,formId);
    modificarUsuario(formId, {email:email,password})
}
