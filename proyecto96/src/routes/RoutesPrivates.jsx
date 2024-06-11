import {useContext} from 'react';
import {Navigate,Outlet} from 'react-router-dom'
import { ContextUser } from '../components/ContextUser';

const RoutesPrivates = () => {
    //accediendo al contexto
  const {user}=useContext(ContextUser)
  console.log(user.admin); 

  if (user.admin) {
    return <Outlet/>
  }else{
    <Navigate to="/dashboard" replace={true} />
}
}

export default RoutesPrivates