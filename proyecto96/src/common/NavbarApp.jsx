import {useContext} from 'react'
import { ContextUser } from '../components/ContextUser'
import {Navbar,Nav} from 'react-bootstrap'
import {Link,NavLink} from 'react-router-dom'

const NavbarApp = () => {
    const {user,setUser}=useContext(ContextUser);
    const logout=()=>{
        setUser({
            "id": 0,
              "user": "",
              "password": "",
              "email": "",
              "admin": false
          })
    }
  return (
    <Navbar className='d-flex justify-content-center text-white'>
        <Nav className='me-auto'>
            
            <Link className='navbar-branch' to="/">
                <img src="" alt="" />
            </Link>
            <NavLink className='nav-link' to="/">
                Inicio
              
            </NavLink>
            
            {user.admin?
            <>
            <NavLink className='nav-link' to="/admin/agregarProducto">
                Agregar Producto
            </NavLink>
            <NavLink className='nav-link' onClick={logout}>
                Salir
            </NavLink>
            </>
            
            
            :<>
            <NavLink className='nav-link' to="/nosotros">
                Nosotros
            </NavLink>
            <NavLink className='nav-link' to="/ingresar">
                Ingresar
            </NavLink>
            <NavLink className='nav-link' to="/registrarse">
                Registrarse
            </NavLink>
            </>}
            
            
            

        </Nav>

    </Navbar>
  )
}

export default NavbarApp