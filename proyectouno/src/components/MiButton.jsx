const MiButton = ({title,mostrar}) => {
  return (

    <button style={{backgroundColor:"black",
                    color:"white",
                    padding:"20px",
                    border:"1px solid red"}}
                    onClick={mostrar}
            
                    >{title}
    </button>
  )
}

export default MiButton