import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/inicio/Home';
import NavBar from './components/general/NavBar';
import MaderaLista from './components/madera/MaderaLista';
import Contacto from './components/contacto/Contacto';
import MaderaInfo from './components/madera/MaderaInfo';
import Footer from './components/general/Footer';


function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <BrowserRouter>
      <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/catalogo' element={<MaderaLista></MaderaLista>}></Route>
          <Route path='/contacto' element={<Contacto></Contacto>}></Route>
          <Route path='/info/:id' element={<MaderaInfo></MaderaInfo>}></Route>
        </Routes>
      <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App
