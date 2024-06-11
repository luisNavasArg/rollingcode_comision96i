import {Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

function Login({ingresoUsuario}) {
  const 
    {register,handleSubmit,formState:{errors},reset}=useForm();
  const ingresar=async(obj)=>{
    try {
   
      let ingr = await ingresoUsuario(obj)
      console.log(ingr);
    } catch (error) {
      console.log(error);
    }
  }
    return (
    <main className="main d-flex justify-content-around align-items-center flex-wrap">
    <Form onSubmit={handleSubmit(ingresar)}>
      <Form.Group className="mb-3" >
        <Form.Label>Email </Form.Label>
        <Form.Control 
        type="email" 
        placeholder="Enter email"
        {...register("email",
        {required:"El email es un campo obligatorio"})}
         />
        
        <Form.Text className="text-muted">
        {errors.email?.message}
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" 
        placeholder="Password" 
        {...register("password",
        {required:"El password es un campo obligatorio"})}
        autoComplete='false'/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Recuerdame" {...register("recuerdame")} name="recuerdame" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Ingresar
      </Button>
    </Form>
    </main>
  );
}

export default Login;