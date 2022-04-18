import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
import './Registration.css'
import SocialLogin from '../SocialLogin/SocialLogin';


const Registration = () => {
    const navigate = useNavigate()
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    if (user) {
        console.log('user',user)
    }
    const handleRegistration =async e => {
        e.preventDefault()

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });

        console.log('Updated profile');
        navigate('/home')

    }
    return (
        <div className='registration-form'>
            <h2 className='text-success text-center mt-5'>Register</h2>
            <form onSubmit={handleRegistration}>
                <input type="text" name="name" id="name" placeholder='Your Name' required />
                <input type="email" name="email" id="email" placeholder='Your Email' required />
                <input type="password" name="password" id="password" placeholder='Your Password' required />
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                <label className={`ps-2 ${agree ? 'text-primary' : 'text-danger'}`} htmlFor="terms"> Accept Car Service Terms and Conditions</label>

                <input
                    disabled={!agree}
                    className='btn-success w-50  mx-auto mt-2' type="submit" value="Register" />

            </form>
            <p>Already Registered <Link to='/login' className='text-danger text-decoration-none'> Please Login</Link></p>
            <SocialLogin></SocialLogin>

        </div>
    );
};

export default Registration;