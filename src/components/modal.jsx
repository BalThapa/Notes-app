import React from 'react';

const Modal = (props) => {
    return (
        
        <div className="modal" >
            <h2>This is your note</h2>
             <div className='view'>
                <label>First Name:</label>
                <p><span>{props.firstname}</span></p> 
            </div>
            <div className='view'>
                <label>Last Name:</label>
                <p><span>{props.lastname}</span></p>    
            </div>
            <div className='view'>
                <label>Phone:</label>
                <p><span>{props.phone}</span></p> 
            </div>
            <div className='view'>
                <label>Role:</label>
                <p><span>{props.role}</span></p> 
            </div>
            <div className='view'>
                <label for="message" id='Notemessage'>Message:</label>
                <p><span>{props.message}</span></p> 
            </div>

            <button className='sure'>YES, I AM SURE.</button>
            <button className='sure'>NO, DON'T POST IT.</button>
        </div>
    );
};

export default Modal;