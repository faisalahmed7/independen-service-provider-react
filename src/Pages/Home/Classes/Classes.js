import React from 'react';
import './Classes.css'

const Classes = () => {
    return (
        <div className='text-center'>
            <h2 className='mt-5 mb-5 text-success'>Educational Qualification</h2>
            <div className='details'>
                
                <div className='varsity-details'>
                <h3 className='text-danger'>UnderGraduate</h3>
                <p>Bangladesh University Of Engineering Technology(BUET)</p>
                <p>Department: EEE</p>
                <p>Thesis: Modeling and analysis of three-phase grid-tied photovoltaic systems.</p>
                </div>
                <div className='varsity-details'>
                <h3 className='text-danger'>PostGraduate</h3>
                <p>Bangladesh University Of Engineering Technology(BUET)</p>
                <p>Department: EEE</p>
                <p>Thesis: Design and simulation of three phase inverter for grid connected photovoltic systems.</p>
                </div>
            </div>
        </div>
    );
};

export default Classes;