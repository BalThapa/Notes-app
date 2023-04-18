import React from 'react';
import "../index.css";

const Display = (props) => {
    return (
        <div className='notepad'>
            <div className='note'>
                <label for="firstname" id='Notefirstname'>First Name:</label>
               <p class= "text"></p>
            </div>
            <div className='note'>
                <label for="lastname" id='Notelastname'>Last Name:</label>
                <p class= "text"></p>
            </div>
            <div className='note'>
                <label for="contact" id='Notecontact'>Phone:</label>
                <p class= "text"></p>
            </div>
            <div className='note'>
                <label for="role" id='Noterole'>Role:</label>
                <p class= "text"></p>
            </div>
            <div className='note'>
                <label for="message" id='Notemessage'>Message:</label>
                <p class= "text"></p>
            </div>
        </div>
    );
};

export default Display;