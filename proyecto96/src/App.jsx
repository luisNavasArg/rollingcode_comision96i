import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./common/Footer";
import NavbarApp from './common/NavbarApp';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './views/Home';
import About from './views/About';
import Login from './views/Login';
import ErrorScreen from './views/ErrorScreen';
import {crearProducto,capturarProductos,updateProduct,validarUsuario,crearUsuario,ingresoUsuario} from './utils/index'
import AddProduct from './views/AddProduct';
import Products from './views/Products';
import DetailProduct from './views/DetailProduct';
import UpdateProduct from './views/UpdateProduct';
import Register from './views/Register';
import { ContextUser } from './components/ContextUser';
import { useState } from 'react';
import RoutesPrivates from './routes/RoutesPrivates';
function App() {
  
  const cargarData=async(obj)=>{
    let product= await crearProducto(obj)
    return product
  }
  const [user,setUser]=useState({
    "id": 0,
      "user": "",
      "password": "",
      "email": "",
      "admin": true
  })
  const cargarProductos=async()=>{
    
    try {
      let products = await capturarProductos();
      return products
    } catch (error) {
      console.log(error);
    }
  }
 
  return (
    <ContextUser.Provider value={{user,setUser}}>
    <BrowserRouter>
      <NavbarApp/>
        <Routes>
          {/* <Route path='/' element={<Home/>}/> */}
          <Route path='/' element={<Products products={cargarProductos}/>}/>
          <Route path='/nosotros' element={<About/>}/>
          <Route path='/ingresar' element={<Login ingresoUsuario={ingresoUsuario}/>}/>
          <Route path="/admin" element={<RoutesPrivates/>}>
              <Route path='/admin/agregarProducto' 
              element={<AddProduct cargarData={cargarData}/>}/>
              <Route path='/admin/detalleProducto/:id' 
              element={<DetailProduct />}/>
              <Route path='/admin/modificarProducto/:id' 
              element={<UpdateProduct updateData={updateProduct} />}/>
          </Route>
          <Route path='/registrarse' element={
          <Register validarUsuario={validarUsuario} crearUsuario={crearUsuario}/>}/>
          
          <Route path='*' element={<ErrorScreen/>}/>
        </Routes>
      <Footer/>
    </BrowserRouter>
    </ContextUser.Provider>
  )
}

export default App
