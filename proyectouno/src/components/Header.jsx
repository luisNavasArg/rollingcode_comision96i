const Header=()=>{
    const links = ['Inicio','Nosotros','Contactanos']
    return(
        <header>
            <nav>
                <ul>
                {links.map((li,i)=><li key={i+"list"}>{li}</li>)}
                </ul>
            </nav>
        </header>
    )
}
export default Header