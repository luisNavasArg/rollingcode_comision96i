import { useContext, useEffect } from 'react'
import {Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import {hashSync} from 'bcryptjs-react'
import Swal from 'sweetalert2'
import { ContextUser } from '../components/ContextUser';

const Register = ({validarUsuario,crearUsuario}) => {
  //accediendo al contexto
  const {user}=useContext(ContextUser)
    console.log(user);
    const 
    {register,handleSubmit,formState:{errors},reset}=useForm();
   
    //ciclo de vida de un componente
    const agregarUsuario=async(obj)=>{
      let usu = await validarUsuario(obj.email)
      if(usu?.id != undefined){
        Swal.fire({
          icon: "error",
          title: "Ese email ya se encuentra registrado",
          text: "Intente con otro!"
        });

      }else{
        let usuarioNuevo={
          user:obj.user,
          password:hashSync(obj.password,12),
          email:obj.email,
          admin:false
        }
        let creandoUsuario = await crearUsuario(usuarioNuevo)
        console.log(creandoUsuario);

      }
    }
  return (
    <main className="main d-flex justify-content-around align-items-center flex-wrap">
      <Form onSubmit={handleSubmit(agregarUsuario)}>
      <Form.Group className="mb-3" >
        <Form.Label>Usuario </Form.Label>
        <Form.Control 
        type="usuario" 
        placeholder="Ingresa el usuario" 
        {...register("user",
        {required:"El usuario es un campo obligatorio"})}
        />
        <Form.Text>
          {errors.user?.message}
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" >
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
        Registrarse
      </Button>
    </Form>
    </main>
  
  )
}

export default Register