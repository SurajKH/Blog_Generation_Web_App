import React from 'react';
import { Link } from 'react-router-dom';
const Bloglist = ({blogs}) => {
    //so basically how can we acess the blogs over here.

   
    //props can be considered as the reusable components over here.


    console.log(blogs);
    
  return (
    <div className='blog-list'>
    {blogs.map((blog) => (
      <div className='blog-preview' key={blog.id}>
      <Link to={`/blogs/${blog.id}`} style={{textDecoration: 'none'}}> 
      <article style={{backgroundColor:"#B7FFBF"}}>
      <h2>{blog.title}</h2>
       <div style={{margin:"10px"}}>
       <h4>Authored by {blog.author}</h4>
       </div>
      </article>
      
       
        </Link>
       
        {/* <button onClick={() => handleDelete(blog.id)}>Delete Blog</button> */}
      </div>
    ))}
    </div>
  )
}

export default Bloglist;
