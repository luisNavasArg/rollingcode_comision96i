import {Link,NavLink} from 'react-router-dom'

const Menu = () => {
  return (
    <nav>
        
        <Link to='/'>
            Home
        </Link>
        <NavLink to='/about'>
            About
        </NavLink>
        <NavLink to='/contact'>
            Contact
        </NavLink>
        <NavLink to='/admin'>
            Admin
        </NavLink>
    </nav>
  )
}

export default Menu