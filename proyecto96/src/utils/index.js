const urlUsuarios="http://localhost:3000/users";
const urlProductos="http://localhost:3000/products";
import axios from 'axios'
//CRUD
export const capturarProductos=async()=>{
    try {
        let productos =await fetch(urlProductos)
        return productos.json()
    } catch (error) {
        console.log(error);
    }
   
}
export const updateProduct=async(id,obj)=>{
    console.log(obj);
    try {
        let producto = await axios.put(`${urlProductos}/${id}`,obj);
        return producto
    } catch (error) {
        console.log(error);
    }
}
export const crearProducto=async(obj)=>{
     
    try {
        let producto = await axios.post(urlProductos,obj);
        return producto
    } catch (error) {
        console.log(error);
    }
}
export const capturarUnProducto=async(id)=>{
    console.log(id);
    try {
        let producto = await axios.get(`${urlProductos}/${id}`);
        return producto
    } catch (error) {
        console.log(error);
    }
}

export const eliminarProducto=async(id)=>{
    try {
        let producto = await axios.delete(`${urlProductos}/${id}`);
        return producto
    } catch (error) {
        console.log(error);
    }
}
