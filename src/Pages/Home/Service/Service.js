import React from 'react';
import './Service.css'

const Service = ({service}) => {
    const { name, description, image, price, id } = service
    return (
        <div className='service-container'>
            <img className='w-100' src={image} alt="" />
            <h2>{name}</h2>
            <p>Price:  {price}</p>
            <p>{description}</p>
            <button className='btn'>Select Service</button>
        </div>
    );
};

export default Service;