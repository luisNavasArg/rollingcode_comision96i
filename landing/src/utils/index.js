const urlUsuarios="http://localhost:3000/usuarios";
const urlProductos="http://localhost:3000/productos";
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
export const eliminarProducto=async(id)=>{
    try {
        let producto = await axios.delete(`${urlProductos}/${id}`);
        return producto
    } catch (error) {
        console.log(error);
    }
}
//Trek
// updateProduct(1,{marca:"Trek", "precio": 1500,
// descripcion: "Ligera y rápida, perfecta para ciclismo de carretera.",
// imagen: "url_de_imagen_ruta.jpg",
// categoria: "Ruta",
// stock: 8})

// crearProducto({marca:"Nueva", "precio": 15000,
// descripcion: "Ligera y rápida, perfecta para ciclismo de carretera.",
// imagen: "url_de_imagen_ruta.jpg",
// categoria: "Invierno",
// stock: 28})
eliminarProducto("1af0");





