import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const { name, description, image, price, id } = service

    const navigate = useNavigate()

    const navigateToCheckOut = id => {
        navigate(`/service/${id}`)
    }
    return (
        <div className='service-container'>
            <img src={image} alt=''></img>
            {/* <img className='w-100' src={image} alt="" /> */}
            <div className="img-text">
            <h2 className='text-center'>{name}</h2>
            <p>Price: {price}</p>
            <p>{description}</p>
            
            </div>
            <button onClick={()=> navigateToCheckOut(id)} className='btn'>Select Service</button>
        </div>
    );
};

export default Service;