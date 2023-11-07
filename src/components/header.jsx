import React from 'react'
import logo from '../kfc-logo2.jpg'
import { Link } from 'react-router-dom'
export default function Header({person}){
 
  // let{name,age}=props     // second way
  return (
    <div className='container mb-3'>
    <nav className="navbar navbar-expand-lg navbar-light ">
    <Link className="navbar-brand" to={'/'}>
      <img src={logo} alt="" />
      </Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link className="btn nav-order-btn" to={'/'}>Start an order for Delivery <span className="sr-only"></span></Link>
        </li>
        
      </ul>
      <ul className="navbar-nav ms-auto">
      <li className="nav-item active">
          <a className="btn  me-2" href="#"><i className="bi bi-crosshair2"></i><span className='slocation'>select Location</span><i className="bi bi-caret-down-fill"></i></a>
        </li>
        <li className="nav-item active">
          <a className="btn btn-cart-counter me-2" href="#">0 <span className="sr-only"></span></a>
        </li>
        <li className="nav-item">
          <Link className="btn btn-danger" to={'/login'}>Register / sign in</Link>
        </li>
      </ul>
      
      
    </div>
    
  </nav>
  </div>
  )
}
