import React from 'react'
import { products } from '../Data/data'

function Card({prop}) {
  
  return (
    
    <div className="card">
        <img src={prop.Image} className="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">{prop.title}</h5>
        <p className="card-text">{prop.description}</p>
        <div className='btn d-flex justify-content-between'>
        <strong>Rs.{prop.price}</strong>
        <a href="#" className="btn btn-danger ">Add to Cart</a>
        </div>
        </div>
    </div>
    
  )
}

export default Card
