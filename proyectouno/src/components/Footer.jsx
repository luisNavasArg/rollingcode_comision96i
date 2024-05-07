import Mili from '../components/Mili'
const Footer = () => {
    const integrantes = ["Pedro Gonzalez", "Eva Rodriguez", "Ana Perez"];
    return (
        <footer>
            <nav>
                <ul type="none" style={{display:"flex",padding:'10px',justifyContent:"space-between"}}>
                    {integrantes.map((li, i) => <Mili text={li} key={i + "footer"}></Mili>)}
                </ul>
            </nav>
        </footer>
    )
}

export default Footer