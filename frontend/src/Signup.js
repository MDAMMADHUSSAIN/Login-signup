import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import Validation from './SignupValidation';

function Signup() {

    const [values, setValues] = useState({
        username:'',
        email :'',
        password:'',
        repeatpassword:''
    })
    const[errors, setErrors] = useState({})

    const handleInput = (event) =>{
        setValues(prev => ({...prev, [event.target.name]: event.target.value}))
    }
    const handleSubmit = (event =>{
        event.preventDefault();
        setErrors(Validation(values))
    })

  return (
    <div className='d-flex justify-content-center align-items-center bg-dark vh-100'>
    <div className='bg-white p-3 rounded w-25'>
        <h2>Signup</h2>
        <form action="" onSubmit={handleSubmit}>
        <div className="mb-3">
                <label htmlFor="name"><strong>User name</strong></label>
                <input type="text" placeholder="Enter Your Name" className='form-control rounded-0' name ='username' onChange={handleInput}/>
                {errors.username && <span className ='text-danger'>{errors.username}</span>}
            </div>
            <div className="mb-3">
                <label htmlFor="email"><strong>Email</strong></label>
                <input type="email" placeholder="Enter your Email" className='form-control rounded-0' name ='email' onChange={handleInput} />
                {errors.email && <span className='text-danger'>{errors.email}</span>}
            </div>

            <div className="mb-3">
                <label htmlFor="passwword"><strong>Password</strong></label>
                <input type="password" placeholder="create a Password" className='form-control rounded-0' name='password' onChange={handleInput} />
                {errors.password && <span className ='text-danger'>{errors.password}</span>}
            </div>
            <div className="mb-3">
                <label htmlFor="repeatpasswword"><strong>Repeat-Password</strong></label>
                <input type="password" placeholder="Enter Password Again" className='form-control rounded-0' name='repeatpassword' onChange={handleInput} />
                {errors.repeatpassword && <span className ='text-danger'>{errors.repeatpassword}</span>}
            </div>
            
            <button className="btn btn-primary w-100 rounded-0 mb-3">Sign up</button>
            
            <p>You agree to our terms & Policies</p>
            <p className="text-danger">Already have an Account?</p>
            <Link to ="/" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">Login</Link>
          
        </form>
    </div>
</div>
  )
}

export default Signup
