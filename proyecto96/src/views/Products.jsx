import { useState } from "react"
import CardApp from "../components/CardApp";


const Products = ({products}) => {
    const [prod,setProd]=useState([]);
    
   products()
   .then(data=>{
    setProd(data)
   })

  return (
    <main className="main d-flex justify-content-around align-items-center flex-wrap">
       {prod.map((p,i)=><CardApp key={`prod${i}`} product={p}/>)} 
    </main>
  )
}

export default Products