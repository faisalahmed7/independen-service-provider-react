import React from 'react';
import { useParams } from 'react-router-dom';
import './Checkout.css'

const Checkout = () => {
    const { serviceId } = useParams()
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Your Information</h2>
            <form>
                    <div className="input-group">
                        <label htmlFor="name">Your Name</label>
                        <input type="text" name="name" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Your Email</label>
                        <input readOnly type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="address">Address</label>
                        <input type="text" name="address" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="phone">Phone</label>
                        <input  type="text" name="confirm-Phone" id="" required />
                    </div>
                    
                    <input className='form-submit' type="submit" value="Proceed" />
                </form>
                </div>
        </div>
    );
};

export default Checkout;