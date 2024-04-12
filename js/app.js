let dataJson = {
  "usuarios":[
      {
          "nombre":"Luis Navas",
          "email":"lpipnavas@gmail.com",
          "clave":"123456"
      },
      {
        "nombre":"Julián Alvarez",
        "email":"julianalvarez@gmail.com",
        "clave":"123456"
    },
    {
      "nombre":"Messi",
      "email":"messi@gmail.com",
      "clave":"123456"
  }
  ]
}
// console.log(dataJson.usuarios[0].email);
// localStorage.setItem('usuarios',JSON.stringify(dataJson));

let vista=`
<h1 class="bg-dark text-center text-white m-3 p-3">Localstorage y formularios</h1>
        <div class="row">
            <div class="col-6 d-flex justify-content-center">
                
            </div>
            <div class="col-6">
                <h2>Lista</h2>

            </div>
        </div>
`;

document.querySelector("#form").addEventListener("submit",function (e) {
  e.preventDefault();
  let email = document.querySelector("input[name=email]").value;
  let clave = document.querySelector("input[name=clave]").value;

   let data = dataJson.usuarios.find(function (usu) {
      if (email==usu.email && clave==usu.clave) {
        return usu
      }
  })
  
  if (data!=undefined) {
    alert("Hola "+data.nombre+" te damos la bienvenida!");
    let btn = document.querySelector("#btn-cerrar");
    guardarData("usuario",data);
    setTimeout(()=>{
      document.querySelector(".container").innerHTML+=vista;
      btn.click();
    },2000)

    
  }else{
    alert("Los datos ingresados no son correctos!");
  }
  
})
window.onload=function () {
  if(capturarData("usuario")!=null){
    let data = capturarData("usuario");
    alert("Hola "+data.nombre+" te damos la bienvenida!");
    let container = document.querySelector(".container");
    container.innerHTML+=vista;
    container.innerHTML+="<button onclick='cerrar()' class='btn btn-primary'>cerrar</button>"
  }
}
function cerrar() {
  window.localStorage.removeItem("usuario");
  alert("Gracias por tu visita!");
  document.body.innerHTML=`
  <div class="container">
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Ingresar
        </button>
        
    </div>
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="">
                    <h1 class="text-center" >Ingresar</h1>
                </div>
                <div class="d-flex justify-content-end">
                    <button type="button" class="btn  text-danger" data-bs-dismiss="modal" aria-label="Close">X</button>
                </div>
                <div class="modal-body d-flex justify-content-center">
                    <form action=""  id="form" class="w-75 bg-dark bg-opacity-25" method="get">
                        <div class="m-4">
                            <label class="form-label" for="email">Email</label>
                            <input class="form-control" name="email" type="text" id="email">
                        </div>
                        <div class="m-4">
                            <label class="form-label" for="clave">Clave</label>
                            <input class="form-control" name="clave" type="password" id="clave">
                        </div>
                        <div class="m-4">
                            <button class="btn btn-dark bg-dark bg-opacity-50" type="submit">Ingresar</button>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button id="btn-cerrar" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    
                </div>
            </div>
        </div>
    </div>
  `;
}
function guardarData(item,data) {
  window.localStorage.setItem(item,JSON.stringify(data));
}
function capturarData(item) {
    return JSON.parse(window.localStorage.getItem(item));
}

