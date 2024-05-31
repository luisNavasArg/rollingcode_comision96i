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
    try {
        let producto = await axios.put(`${urlProductos}/${id}`,obj);
        return producto
    } catch (error) {
        return 
    }
}
export const crearProducto=async(obj)=>{
    try {
        await axios.post(urlProductos,obj);
        return true
    } catch (error) {
        return false
    }
}
export const capturarUnProducto=async(id)=>{
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
//CRUD Usuarios

export const validarUsuario=async(email)=>{
    let usuarios = await axios.get(urlUsuarios);
    let {data}= usuarios;
    let respuesta = data.find(usuario=>usuario.email==email)
    return respuesta
}
export const crearUsuario=async(obj)=>{
    try {
        let usuario = await axios.post(urlUsuarios,obj);
    return usuario
    } catch (error) {
        console.log(error);
    }
}
