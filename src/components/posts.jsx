import React from 'react';

const Posts = (props) => {
    return (
        <div>
        <h2>My Notes:</h2>
          <ul>
            {props.data.map(note => <li key={note.id}><p>Firstname:</p>{note.firstname},<p>Lastname:</p>{note.lastname},<p>Phone:</p>{note.phone} ,<p>Role:</p>{note.role} ,<p>Message:</p>{note.message}</li>
            )}
            </ul> 
            
        </div>
    );
};

export default Posts;