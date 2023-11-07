import React from 'react'
import Card from './card'
import { Link } from 'react-router-dom'

function Main({products}) {
  function createSlug(input) {
    return input
      .toLowerCase() // Convert the string to lowercase
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/[^a-z0-9-]/g, '') // Remove non-alphanumeric characters and hyphens
      .replace(/-+/g, '-') // Replace consecutive hyphens with a single hyphen
      .trim(); // Trim any leading or trailing hyphens
  }
  return (
    <>

      <div className='container'>
        <div className='row '>

          {
            products.map((product,index)=>{
              const slug=createSlug(product.title)
              return(
                <div key={index} className='col-md-3 mb-5 card-details'>

                  <Link to={`/product/${slug}`}></Link>
                  
                  <Card prop={product}/>
                  
                      
                </div>
              )
            })
          }

        </div>

      </div>
     {/* {
        products.map((product,index)=><Card key={index}/>)
      } */}

    


    </>
  )
}

export default Main
