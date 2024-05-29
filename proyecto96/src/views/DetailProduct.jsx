import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import { capturarUnProducto } from '../utils'
import { Card } from 'react-bootstrap'

const DetailProduct = () => {
    const [prod,setProd]=useState({})
    const {id}=useParams();
    const getProduct=async(id)=>{

        try {
            let producto = await capturarUnProducto(id)
            setProd(producto.data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
      getProduct(id)
      console.log(prod);
    }, [])
    
  return (
    <main className="main d-flex justify-content-around align-items-center flex-wrap">
        <Card className='img-card-detail'>
        <Card.Img  variant="top" src={prod.src}/>
        <Card.Body>
            <Card.Title>{prod.name}</Card.Title>
            <Card.Text>{prod.description}</Card.Text>
            <Card.Text>Precio: ${prod.price}</Card.Text>
        </Card.Body>
    </Card>
    </main>
  )
}

export default DetailProduct