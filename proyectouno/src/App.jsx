import {capturarHora,segundos} from './utils/hora';
import MiButton  from "./components/MiButton";
import Encabezado from "./components/Header";
import Footer from './components/Footer'
import Imagen from "./components/Imagen";
function App() {
  let fecha=capturarHora()
  let nombre="Julián"
  let apellido="Alvarez"
  let alumnos =["Gustavo","Luciana","Joel","Juan","Felipe"]
  let imgs = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-DEEaQMdFNtZmmDkvle3bBKd2YlXZrKI3Jna8cFevlg&s",
    "https://resizer.iproimg.com/unsafe/1280x/filters:format(webp)/https://assets.iprofesional.com/assets/jpg/2020/03/492392.jpg",
    "https://cdn.buttercms.com/BrtSyftSG0slRtSjbuRw"
  ]
  return (
    <div style={{backgroundColor:"orange"}}>
      <h1>Proyecto de React</h1>
      <Encabezado/>
      <MiButton title="Inicio"/>
      <MiButton/>
      <MiButton/>
      <p>{fecha}</p>
      <p>Hola {nombre} {apellido}</p>
      <div style={{display:"flex",justifyContent:"space-around", margin:"10px"}}>
        {imgs.map((ruta,index)=><Imagen key={index+"imgs"} src={ruta} texto="Imagen"/>)}
      </div>
      
      <img style={{width:'450px'}} 
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoT3in3lrNYyGVL8n2hjQgyVzSO_SaLEX-JNowqCrjTQ&s" alt="" />
      {alumnos.map(function (alumno,i) {
        return <p key={i}>{alumno}</p>
      })}
      {alumnos.map(function (alumno,i) {
        return <p key={i+"dos"}>{alumno}</p>
      })}
      {segundos()}
      <Footer/>
    </div>
   
  )
}

export default App
