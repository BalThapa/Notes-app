import React from 'react';
import "../index.css"

const Form = (props) => {
    return (
        <div className='form'>
            <form onSubmit={props.submit} onChange={props.changeHandler}>
            <div>
                <label htmlFor="firstname" >FirstName</label>
                <input type="text" name="firstname" id='firstname' required/>
            </div>

            <div>
                <label htmlFor="lastname" >LastName</label>
                <input type="text" name="lastname" id='lastname' required/>
            </div>

            <div>
                <label htmlFor="phone" >Phone</label>
                <input type="number" name="phone" id='phone'required/>
            </div>
            <div>
                <label htmlFor="role" id="role">Role</label>
                <select name="role" className='role' id="role">
                    <option value="" invalid="true" hidden>Choose a role... </option>
                    <option value="others">Others</option>
                    <option value="teacher">Teacher</option>
                    <option value="student">Student</option>
                </select>
            </div>
            <div>
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" cols="15" rows="5"></textarea>
            </div>

            <button type='submit' id='send'>Send</button>
            </form>
        </div>
    );
};

export default Form;