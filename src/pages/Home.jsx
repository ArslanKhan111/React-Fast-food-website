import React from 'react'
import { useState } from 'react';
import '../App.css';
import Footer from '../components/Footer';

import Main from '../components/Main';
import Header from '../components/header';
import {data} from '../Data/data';
import Categories from '../components/Categories';
function Home() {
  return (
    <div>
        <Header/>
        <Categories categories={data.categories}/>
        <Main products={data.products}/>
        <Footer/>
        
    </div>
  )
}

export default Home
