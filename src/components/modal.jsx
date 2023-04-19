import React from 'react';
import "../index.css"

const Modal = (props) => {
    return (
        <div className='overlay'>
        <div className="modal" >
            <h2>This is your note</h2>
             <div className='view'>
                <p>First Name:<span>{props.firstname}</span></p> 
            </div>
            <div className='view'>
                <p>Last Name:<span>{props.lastname}</span></p>    
            </div>
            <div className='view'>
                <p>Phone:<span>{props.phone}</span></p> 
            </div>
            <div className='view'>           
                <p>Role:<span>{props.role}</span></p> 
            </div>
            <div className='view'>
                <p>Message:<span>{props.message}</span></p> 
            </div>

            <button className='sure' onClick={props.click}>YES, I AM SURE.</button>
            <button className='sure'onClick={props.click}>NO, DON'T POST IT.</button>
        </div></div>
    );
};

export default Modal;