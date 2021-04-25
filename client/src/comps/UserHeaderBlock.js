import React from 'react';
import '../css/App.css';

export default function UserHeaderBlock(props) {  
  const userLoggedIn = props.loggedIn || false;
  const profileSnippet = (
    <>
      <p>user profile snippet</p>
    </>
  );
  const logInBlock = (
    <>
      <p>log in / sign up block </p>
    </>
  );
  
  return (
    <div>
      {userLoggedIn ? profileSnippet : logInBlock}
    </div>
  );
}
