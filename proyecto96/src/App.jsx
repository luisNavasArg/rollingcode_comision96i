import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./common/Footer";
import NavbarApp from './common/NavbarApp';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './views/Home';
import About from './views/About';
import Login from './views/Login';
import ErrorScreen from './views/ErrorScreen';
import {crearProducto,capturarProductos,updateProduct,validarUsuario,crearUsuario} from './utils/index'
import AddProduct from './views/AddProduct';
import Products from './views/Products';
import DetailProduct from './views/DetailProduct';
import UpdateProduct from './views/UpdateProduct';
import Register from './views/Register';

function App() {
  
  const cargarData=async(obj)=>{
    let product= await crearProducto(obj)
    return product
  }
  const cargarProductos=async()=>{
    
    try {
      let products = await capturarProductos();
      return products
    } catch (error) {
      console.log(error);
    }
  }
 
  return (
    <BrowserRouter>
      <NavbarApp/>
        <Routes>
          {/* <Route path='/' element={<Home/>}/> */}
          <Route path='/' element={<Products products={cargarProductos}/>}/>
          <Route path='/nosotros' element={<About/>}/>
          <Route path='/ingresar' element={<Login/>}/>
          
          <Route path='/registrarse' element={<Register validarUsuario={validarUsuario} crearUsuario={crearUsuario}/>}/>
          <Route path='/admin/agregarProducto' 
          element={<AddProduct cargarData={cargarData}/>}/>
          <Route path='/admin/detalleProducto/:id' 
          element={<DetailProduct />}/>
          <Route path='/admin/modificarProducto/:id' 
          element={<UpdateProduct updateData={updateProduct} />}/>
          <Route path='*' element={<ErrorScreen/>}/>
        </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
