import {Navigate} from 'react-router-dom'
import {useContext} from 'react'
import userContext from '../components/UserContext';
const ProtectedRoutes = ({children}) => {
    const {user} =useContext(userContext);
    const admin = user.admin;
    console.log(admin);
    if (admin==true) {
        return children
    }else{
        return <Navigate to="/"/>
        
    }
  
}

export default ProtectedRoutes