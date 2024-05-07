import Mili from '../components/Mili'
const Header=()=>{
    const links = ['Inicio','Nosotros','Contactanos']
    return(
        <header>
            <nav>
                <ul>
                    {links.map((li,i)=><Mili text={li} key={i+"list"}></Mili>)}
                </ul>
            </nav>
        </header>
    )
}
export default Header