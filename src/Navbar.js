import React from 'react';
import { Link } from 'react-router-dom';

//now we are eventually building the Navbar component over here.


const Navbar = () => {
  return (
   <nav className='navbar'>
    <h1>Blog Generation Web App</h1>
    <div className='links'>
    {/*Link Tag basically uses the component of SPA rendering Principle of a react applications.
     */}
    <Link to='/'>Home</Link>
    <Link to='/create'>Create</Link>
        {/* <a href="/" style={{color:"white",
    backgroundColor:"#0CAC76",
    borderRadius:'8px'}}>Home</a>
        <a href="/create" style={{color:"white",
        backgroundColor:"#0CAC76",
        borderRadius:'8px'}}>Create A New Blog</a> */}
    </div>
   </nav>
  )
}

//we are trying to export the Navbar component over here.

export default Navbar;
