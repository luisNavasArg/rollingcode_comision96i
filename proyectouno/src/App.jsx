import {capturarHora,segundos} from './utils/hora';
import MiButton  from "./components/MiButton";
import Encabezado from "./components/Header";
function App() {
  let fecha=capturarHora()
  let nombre="Julián"
  let apellido="Alvarez"
  let alumnos =["Gustavo","Luciana","Joel","Juan","Felipe"]
  return (
    <div style={{backgroundColor:"orange"}}>
      <h1>Proyecto de React</h1>
      <Encabezado/>
      <MiButton title="Inicio"/>
      <MiButton/>
      <MiButton/>
      <p>{fecha}</p>
      <p>Hola {nombre} {apellido}</p>
      <img style={{width:'450px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoT3in3lrNYyGVL8n2hjQgyVzSO_SaLEX-JNowqCrjTQ&s" alt="" />
      {alumnos.map(function (alumno,i) {
        return <p key={i}>{alumno}</p>
      })}
      {alumnos.map(function (alumno,i) {
        return <p key={i+"dos"}>{alumno}</p>
      })}
      {segundos()}
    </div>
  )
}

export default App
