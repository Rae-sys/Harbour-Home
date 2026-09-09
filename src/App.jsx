
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/footer'
import Home from './pages/Home'
import Shop from './pages/shop'
import About from './pages/About'
import Livingroom from './pages/Livingroom'
import Bedroom from './pages/Bedroom'
import Kitchen from './pages/Kitchen'
import Contact from './pages/contact'
import Office from './pages/Office'

function App() {

  return (
    <>
    
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element= {<Home/>} />
            <Route path='/shop' element= {<Shop/>} />
             <Route path='/about' element= {<About/>} />
              <Route path='/contact' element= {<Contact/>} />
             

          <Route path='/livingroom' element= {<Livingroom/>}/>
          <Route path='/bedroom'  element= {<Bedroom/>}/>
          <Route path='/office' element= {<Office/>}/>
           <Route path='/kitchen' element= {<Kitchen/>}/>
           
          
        </Routes>
      <Footer/>
        
         
  
      </BrowserRouter> 
    </>
  )
}

export default App
