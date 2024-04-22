import React from "react";

const Welcome = ({ username }) => {
  return (
    <div>
      <h1>Welcome {username}!</h1>
      <p>You are now logged in.</p>
    </div>
  );
};

export default Welcome;
