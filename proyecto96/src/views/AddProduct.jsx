import { useForm } from "react-hook-form";
import '../App.css'
import {Button, Form, FormControl,FormGroup, FormLabel, FormSelect } from 'react-bootstrap';
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";

const AddProduct = ({cargarData}) => {
    const {register,handleSubmit,formState:{errors},reset}=useForm();
    const navigate=useNavigate();
    const addItem=async(obj)=>{
        console.log(obj);
       let response = await cargarData(obj);
        if (response) {
                Swal.fire({
                    title: "Se agregó el producto con éxito!",
                    text: "Cool!",
                    icon: "success"
                  });
                reset()  
        }else{
            Swal.fire({
                icon: "error",
                title: "No se pudo agregar el producto",
                text: "Ocurrio un problema intenta más tarde!"
              });
        }
        
        
        
    }
  return (
    <main className="main d-flex justify-content-around align-items-center flex-wrap">
    <Form className="w-50" onSubmit={handleSubmit(addItem)} method="POST">
        <FormGroup >
            <Form.Label >
                Nombre
            </Form.Label>
            <FormControl 
            type="text"
            {...register("name",{required:"El nombre es obligatorio"})}
            />
            <Form.Text className="text-danger">
                {errors.name?.message}
            </Form.Text>
        </FormGroup>
        <FormGroup >
            <Form.Label >
                Descripción
            </Form.Label>
            <FormControl 
            type="text"
            {...register("description",{required:"Este campo es obligatorio"})}
            />
            <Form.Text className="text-danger">
                {errors.description?.message}
            </Form.Text>
        </FormGroup>
        <FormGroup >
            <Form.Label >
                Precio
            </Form.Label>
            <FormControl 
            type="text"
            {...register("price",{required:"Este campo es obligatorio"})}
            />
            <Form.Text className="text-danger">
                {errors.price?.message}
            </Form.Text>
        </FormGroup>
        <FormGroup >
            <Form.Label >
                Url
            </Form.Label>
            <FormControl 
            type="text"
            {...register("src",{required:"Este campo es obligatorio"})}
            />
            <Form.Text className="text-danger">
                {errors.src?.message}
            </Form.Text>
        </FormGroup>
        <FormGroup >
            <Form.Label>
                Categoria
            </Form.Label>
            <FormSelect 
            type="text"
            {...register("category",{required:"Este campo es obligatorio"})}
            >
                <option value="cafeteria">Cafetería</option>
                <option value="bebidas">Bebidas</option>
                <option value="Platos">Platos</option>
                <option value="entradas">Entradas</option>
            </FormSelect>
            <Form.Text className="text-danger">
                {errors.category?.message}
            </Form.Text>
        </FormGroup>
        <FormGroup className="my-4">
            <Button type="submit">Agregar Producto</Button>
        </FormGroup>
    </Form>
    </main>
  )
}

export default AddProduct