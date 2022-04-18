import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './Login.css'

const Login = () => {
    const navigate = useNavigate()
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleLogin = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(email, password)

    }
    if(user){
        navigate('/home')
    }
    return (
        <div className='login-form'>
            <h2 className='text-success text-center mt-5'>Please Login</h2>
            <form onSubmit={handleLogin}>
                <input type="email" name="email" id="email" placeholder='Your Email' required />
                <input type="password" name="password" id="password" placeholder='Your Password' required />
                <input type="submit" className='btn-success w-50 d-block mx-auto' value="Login" />

            </form>
            <p>New to Faisal's StudyPoint ? <Link to='/registration' className='text-danger text-decoration-none'> Please Register</Link></p>

        </div>
    );
};

export default Login;