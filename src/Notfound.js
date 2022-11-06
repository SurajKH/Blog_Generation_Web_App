import React from 'react';
import { Link } from 'react-router-dom';

const Notfound = () => {
  return (
    <div>
      <h2>Oops!!!</h2>
      <br/>
      <h3>Error 404 Page not Found.</h3>
      <Link to="/">Return to the Home Page.</Link>
    </div>
  )
}

export default Notfound;
