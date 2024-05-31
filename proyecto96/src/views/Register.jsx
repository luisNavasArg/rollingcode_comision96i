import { useEffect } from 'react'
import {Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import {hashSync} from 'bcryptjs-react'
const Register = ({validarUsuario,crearUsuario}) => {
    const {register,handleSubmit,formState:{errors},reset}=useForm();
   
    //ciclo de vida de un componente
    const agregarUsuario=async(obj)=>{
      let usu = await validarUsuario(obj.email)
      if(usu?.id != undefined){
        alert("El usuario existe")

      }
    }
  return (
    <main className="main d-flex justify-content-around align-items-center flex-wrap">
      <Form onSubmit={handleSubmit(agregarUsuario)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Usuario </Form.Label>
        <Form.Control 
        type="usuario" 
        placeholder="Ingresa el usuario" 
        {...register("usuario",{required:"El usuario es un campo obligatorio"})}
        />
        <Form.Text>
          {errors.email?.message}
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email </Form.Label>
        <Form.Control 
        type="email" 
        placeholder="Ingresa el email" 
        {...register("email",{required:"El email es un campo obligatorio"})}
        />
        <Form.Text>
          {errors.email?.message}
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" autoComplete='false'
        {...register("password",{required:"La contraseña es obligatoria"})}/>
        <Form.Text>
          {errors.password?.message}
        </Form.Text>
      </Form.Group>
     
      <Button variant="primary" type="submit">
        Ingresar
      </Button>
    </Form>
    </main>
  
  )
}

export default Register