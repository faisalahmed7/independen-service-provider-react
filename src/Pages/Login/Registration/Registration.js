import React from 'react';
import { Link } from 'react-router-dom';
import './Registration.css'

const Registration = () => {
    const handleRegistration = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value
        console.log(email, password)
    }
    return (
        <div className='registration-form'>
            <h2 className='text-success text-center mt-5'>Register</h2>
            <form onSubmit={handleRegistration}>
            <input type="text" name="name" id="name" placeholder='Your Name' required />
            <input type="email" name="email" id="email" placeholder='Your Email' required/>
            <input type="password" name="password" id="password"  placeholder='Your Password' required/>
            <input type="submit" className='btn-success w-50 d-block mx-auto' value="Register" />
            
            </form>
            <p>Already Registered <Link to='/login' className='text-danger text-decoration-none'> Please Login</Link></p>

        </div>
    );
};

export default Registration;