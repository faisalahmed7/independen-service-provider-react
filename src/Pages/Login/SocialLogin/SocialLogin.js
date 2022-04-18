import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import google from '../../../images/social/google.png'
// import github from '../../../images/social/github.png'

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate()

    let showError;
    if (error) {

        showError = <div>
            <p className='text-danger'>Error: {error.message}</p>
        </div>

    }
    if (user) {
        navigate('/home')
    }
    return (
        <div>
            <div
                className='d-flex align-items-center justify-center'>
                <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
                <p className='px-2 mt-2'>or</p>
                <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
            </div>
            {showError}

            <button onClick={() => signInWithGoogle()} style={{ borderRadius: '25px' }} className='btn social w-50 d-block mx-auto my-2'>
                <img style={{ width: "30px" }} src={google} alt="" />
                <span className='px-2'>Google Sign In</span>
            </button>
            {/* <button
                    
                    style={{ borderRadius: '25px' }} className='btn social w-50 d-block mx-auto my-2 mb-5'>
                    <img style={{ width: "30px" }} src={github} alt="" />
                    <span className='px-2'>GitHub Sign In</span>
                </button> */}


        </div>
    );
};

export default SocialLogin;