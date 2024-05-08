import {capturarHora} from './utils/hora';
import MiButton  from "./components/MiButton";
import Encabezado from "./components/Header";
import Footer from './components/Footer'
import Imagen from "./components/Imagen";
import { useEffect, useState } from 'react';
function App() {
  let fecha=capturarHora()
  //hook
  const [view,setView]=useState(false)
  //función para mostrar los autos
  const mostrarAutos=()=>{
    setView(true)
  }
  //función para ocultar los autos
  const ocultarAutos=()=>{
    setView(false)
  }
  let imgs = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-DEEaQMdFNtZmmDkvle3bBKd2YlXZrKI3Jna8cFevlg&s",
    "https://resizer.iproimg.com/unsafe/1280x/filters:format(webp)/https://assets.iprofesional.com/assets/jpg/2020/03/492392.jpg",
    "https://cdn.buttercms.com/BrtSyftSG0slRtSjbuRw"
  ]
 
  
    return (
    <div style={{backgroundColor:"orange"}}>
      <h1>Proyecto de React</h1>
      <Encabezado/>
      <MiButton title="Inicio"/>
      <MiButton title="Mostrar Autos" mostrar={mostrarAutos}/>
      <MiButton title="Ocultar Autos" mostrar={ocultarAutos} />
      <p>{fecha}</p>
      {view?
      <div style={{display:"flex",justifyContent:"space-around", margin:"10px"}}>
      {imgs.map((ruta,index)=><Imagen key={index+"imgs"} src={ruta} texto="Imagen"/>)}
    </div>
      :"falso"}
      
      
      <img style={{width:'450px'}} 
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoT3in3lrNYyGVL8n2hjQgyVzSO_SaLEX-JNowqCrjTQ&s" alt="" />
      
      <Footer/>
    </div>
   
  )
}

export default App
