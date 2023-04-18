import React from 'react';

const Form = (props) => {
    return (
        <div className='form'>
            <form onSubmit={props.submit}>
            <div>
                <label for="firstname" id='firstname'>First Name</label>
                <input type="text" name="firstname" required/>
            </div>

            <div>
                <label for="lastname" id='lastname'>Last Name</label>
                <input type="text" name="lastname" required/>
            </div>

            <div>
                <label for="phone" id='phone'>Phone</label>
                <input type="number" name="lastname" required/>
            </div>
            <div>
                <label for="role" id="role">Role</label>
                <select name="role" className='role'>
                    <option value="others">Others</option>
                    <option value="teacher">Teacher</option>
                    <option value="student">Student</option>
                </select>
            </div>
            <div>
                <label for="message">Message</label>
                <textarea name="message" id="message" cols="15" rows="5"></textarea>
            </div>

            <button type='submit' id='send'>Send</button>
            </form>
        </div>
    );
};

export default Form;