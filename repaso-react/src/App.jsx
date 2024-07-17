import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Menu from './components/Menu';
import Home from './views/Home';
import About from './views/About';
import Contact from './views/Contac';
import Admin from './views/Admin';
import { useState } from 'react';
import Context from './components/UserContext';
import ProtectedRoutes from './routes/ProtectedRoutes';

function App() {
  const [user,setUser]=useState({
    "backgroundTheme":"light",
    "colorText":"dark",
    "admin":false
  })

  return (
    <Context.Provider value={{user,setUser}}>
    
    <BrowserRouter> 
    <Menu/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/admin' element={
          <ProtectedRoutes>
              <Admin/>
          </ProtectedRoutes>
          
          }/>
      </Routes>
    </BrowserRouter>
    </Context.Provider>
  )
}

export default App
