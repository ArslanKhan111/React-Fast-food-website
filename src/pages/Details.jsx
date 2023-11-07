import React from 'react'
import Categories from '../components/Categories'
import Header from '../components/header'
import { data } from '../Data/data'
import { useParams } from 'react-router-dom'

export default function Details() {

    const {slug}=useParams()
    console.log(slug)
    
        function createSlug(input) {
          return input
            .toLowerCase() // Convert the string to lowercase
            .replace(/\s+/g, '-') // Replace spaces with hyphens
            .replace(/[^a-z0-9-]/g, '') // Remove non-alphanumeric characters and hyphens
            .replace(/-+/g, '-') // Replace consecutive hyphens with a single hyphen
            .trim(); // Trim any leading or trailing hyphens
        }
    const p=data.products.find((a)=> createSlug(a.title)===slug)
    console.log(p)
  return (
    <div className='container'>
      <Header/>
      <Categories categories={data.categories}/>
      
      <h2>Details : {slug}</h2>
      {p.description}
      
    </div>
  )
}


