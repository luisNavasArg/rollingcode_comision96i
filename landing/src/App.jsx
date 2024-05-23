import './App.css'
import {capturarProductos} from './utils/index'
function App() {
  
  capturarProductos().then().then(data=>console.log(data))
  
  return (
    <div>
      Landing
      <a href="http://localhost:3000/usuarios">Ver Usuarios</a>
    </div>
  )
}

export default App
