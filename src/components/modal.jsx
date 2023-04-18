import React from 'react';

const Modal = () => {
    return (
        <div className='modal'>
            <h2>This is your note</h2>
             <div className='view'>
                <label for="firstname" id='Notefirstname'>First Name:</label>
                <p></p> 
            </div>
            <div className='view'>
                <label for="lastname" id='Notelastname'>Last Name:</label>
                <p></p>    
            </div>
            <div className='view'>
                <label for="contact" id='Notecontact'>Phone:</label>
                <p></p> 
            </div>
            <div className='view'>
                <label for="role" id='Noterole'>Role:</label>
                <p></p> 
            </div>
            <div className='view'>
                <label for="message" id='Notemessage'>Message:</label>
                <p></p> 
            </div>

            <button className='sure'>YES, I AM SURE.</button>
            <button className='sure'>NO, DON'T POST IT.</button>
        </div>
    );
};

export default Modal;