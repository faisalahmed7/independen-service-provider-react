import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {

    const handleLogin = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value
        console.log(email, password)
    }
    return (
        <div className='login-form'>
            <h2 className='text-success text-center mt-5'>Please Login</h2>
            <form onSubmit={handleLogin}>
            <input type="email" name="email" id="email" placeholder='Your Email' required/>
            <input type="password" name="password" id="password"  placeholder='Your Password' required/>
            <input type="submit" className='btn-success w-50 d-block mx-auto' value="Login" />
            
            </form>
            <p>New to Faisal's StudyPoint ? <Link to='/registration' className='text-danger text-decoration-none'> Please Register</Link></p>

        </div>
    );
};

export default Login;