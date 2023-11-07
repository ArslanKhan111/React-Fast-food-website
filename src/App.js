import Home from './pages/Home'
import { Routes, Route } from "react-router-dom"
import Login from './pages/Login';
import About from './pages/About';
import Details from './pages/Details';

function App() {

  return(
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='about-us' element={<About/>}/>
      <Route path='/product/:slug' element={<Details/>}/>
    </Routes>
    
    </>
      

  )

  



 
}

export default App;
