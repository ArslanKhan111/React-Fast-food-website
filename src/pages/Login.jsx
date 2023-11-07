import React from 'react'
import Header from '../components/header'

function Login() {
  return (
    <div>
      <Header/>
      <h1 className='container' style={{marginLeft:'40%',color: 'white' }}>Login Page</h1>
          <form className='container form2'>
         <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label" style={{color:'white'}}>Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        <div id="emailHelp" className="form-text" style={{color:'white'}}>We'll never share your email with anyone else.</div>
      </div>
      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label" style={{color:'white'}}>Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1"/>
      </div>
      <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
        <label className="form-check-label" for="exampleCheck1" style={{color:'white'}}>Check me out</label>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </div>
  )
}

export default Login
