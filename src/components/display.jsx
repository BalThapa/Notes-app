import React from 'react';
import "../index.css";

const Display = (props) => {
    return (
        <div className='notepad'>
            <h2>Notepad</h2>
            <div className='note'>             
               <p>FirstName:<span type="text-box">{props.firstname}</span></p>
            </div>
            <div className='note'>
                <p>LastName:<span>{props.lastname}</span></p>
            </div>
            <div className='note'>
                <p>Phone:<span>{props.phone}</span></p>
            </div>
            <div className='note'>
                <p>Role:<span>{props.role}</span></p>
            </div>
            <div className='note'>
                <p>Message:<span>{props.message}</span></p>
            </div>
        </div>
    );
};

export default Display;