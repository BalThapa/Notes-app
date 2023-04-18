import React from 'react';
import "../index.css";

const Display = (props) => {
    return (
        <div className='notepad'>
            <div className='note'>
                <label>First Name:</label>
               <p><span>{props.firstname}</span></p>
            </div>
            <div className='note'>
                <label>Last Name:</label>
                <p><span>{props.lastname}</span></p>
            </div>
            <div className='note'>
                <label>Phone:</label>
                <p><span>{props.phone}</span></p>
            </div>
            <div className='note'>
                <label>Role:</label>
                <p><span>{props.role}</span></p>
            </div>
            <div className='note'>
                <label>Message:</label>
                <p><span>{props.message}</span></p>
            </div>
        </div>
    );
};

export default Display;