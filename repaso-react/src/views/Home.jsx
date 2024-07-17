import {useContext} from 'react'
import userContext from '../components/UserContext';

const Home = () => {
    const {user,setUser} =useContext(userContext);
    console.log(user);
    const cambiarTema=()=>{
        if (user.colorText=="dark") {
            setUser({
                "backgroundTheme":"dark",
                "colorText":"light"
                ,"admin":"true"  
              })
        }
        else{
            setUser({
                "backgroundTheme":"light",
                "colorText":"dark",
                "admin":"true"            })
        }
    }
  return (
    <div className={`t-${user.colorText}`}>
        <button onClick={cambiarTema}>Cambiar Tema</button>
        Home
        
        </div>
  )
}

export default Home