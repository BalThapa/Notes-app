import React from 'react';

const Posts = (props) => {
    return (
        <div>
        <h2>My Notes:</h2>
          <ul>
            {props.data.map(note => <li key={note.id}>
                <p>Firstname:<span>{note.firstname}</span></p>
                <p>Lastname:<span>{note.lastname}</span></p>
                 <p>Phone:<span>{note.phone}</span></p> 
                 <p>Role:<span>{note.role}</span></p> 
                 <p>Message:<span>{note.message}</span></p></li>
            )}
            </ul> 
            
        </div>
    );
};

export default Posts;