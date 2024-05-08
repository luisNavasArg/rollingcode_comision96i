import { useEffect } from "react";
const Imagen=({src,texto})=>{
    useEffect(() => {
        console.log("se renderizó el componente");
      
        return () => {
          alert("estamos por cerrar el componente")
        }
      }, [])
    return(
        <img style={{width:'420px'}} src={src} alt={texto} />
    )
}
export default Imagen