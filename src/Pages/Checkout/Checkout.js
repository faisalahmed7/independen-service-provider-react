import React from 'react';
import { Link, useParams } from 'react-router-dom';

import './Checkout.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {
    
    const { serviceId } = useParams()

    const handleProceed=e=>{
        e.preventDefault()
        const name=e.target.name.value
        const address=e.target.address.value
        const mobile=e.target.mobile.value
        const email=e.target.email.value
        const subject=e.target.subject.value

        toast('Congratulation You Have Enrolled for Desire Subject')
        
    }
    return (
        <div className='student-form text-center'>
            <h2 className='text-success text-center mt-5'>Your Information</h2>
            <form onSubmit={handleProceed}>
                <input type="text" name="name" id="name" placeholder='Your Name' required />
                <input type="text" name="address" id="address" placeholder='Your Address' required />
                <input type="text" name="mobile" id="mobile" placeholder='Mobile ' required />
                <input type="email" name="email" id="email" placeholder='Your Email' required />
                <input type="text" name="subject" id="subject" placeholder='Your Desire Subject' required />
               <input className='btn btn-success w-50  mx-auto mt-2' type="submit" value="Proceed" />
            </form>
            <ToastContainer/>
           
       <Link className='btn btn-info d-block text-decoration-none  text-center' to='/home'>Back</Link>

        </div>
    );
};

export default Checkout;