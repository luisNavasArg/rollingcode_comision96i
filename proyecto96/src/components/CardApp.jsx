import {Button, Card} from 'react-bootstrap'
import { NavLink } from "react-router-dom";
import { eliminarProducto } from "../utils/index";
import Swal from 'sweetalert2'
import '../App.css'
const CardApp = ({product}) => {
    const eliminar=(id)=>{
        Swal.fire({
            title: "Deseas eliminar el producto?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "SI",
            denyButtonText: `NO`
          }).then(async(result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                await eliminarProducto(id)
                Swal.fire("Elimando con éxito el producto!", "", "success");
            } else if (result.isDenied) {
              Swal.fire("No se eliminó el producto", "", "info");
            }
          });
    }
  return (
    <Card className='img-card'>
        <Card.Img  variant="top" src={product.src}/>
        <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <Button className='my-4' variant="primary">
                <NavLink className="nav-link" to={`admin/detalleProducto/${product.id}`}>
                    Ver el detalle
                </NavLink>
            </Button>
            <Button className='my-4' variant="success">
                <NavLink className="nav-link" to={`admin/modificarProducto/${product.id}`}>
                    Modificar
                </NavLink>
            </Button>
            <Button className='my-4' variant="danger" onClick={()=>eliminar(product.id)}>
                    Eliminar
            </Button>
        </Card.Body>
    </Card>
  )
}

export default CardApp