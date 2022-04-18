import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './Login.css'
import SocialLogin from '../SocialLogin/SocialLogin';


const Login = () => {
    const navigate = useNavigate()
    const location = useLocation();
    
    let from = location.state?.from?.pathname || "/";
    let displayError;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);


    const handleLogin = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(email, password)

    }

    if (error) {

        displayError = <p className='text-danger'>Error: {error.message}</p>


    }

    if (user) {
        navigate(from, { replace: true });
    }
    const resetPassword =async (e) => {
        const email = e.target.email.value;
        await sendPasswordResetEmail(email);
        alert('Sent email');
    }

    return (
        <div className='login-form'>
            <h2 className='text-success text-center mt-5'>Please Login</h2>
            <form onSubmit={handleLogin}>
                <input type="email" name="email" id="email" placeholder='Your Email' required />
                <input type="password" name="password" id="password" placeholder='Your Password' required />
                <input type="submit" className='btn-success w-50 d-block mx-auto' value="Login" />


            </form>
            {displayError}

            <p>New to Faisal's StudyPoint ? <Link to='/registration' className='text-danger text-decoration-none'> Please Register</Link></p>
            <p>Forget Password ?<Link to='/login' className='text-primary text-decoration-none' onClick={resetPassword}>Reset Password</Link></p>
            
            <SocialLogin></SocialLogin>

        </div>
    );
};

export default Login;