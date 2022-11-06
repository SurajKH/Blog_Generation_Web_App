import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import useFetch from './useFetch';

const BlogDetails = () => {

  const {id}=useParams();
  const {data:blogs,isPending}=useFetch('http://localhost:8000/blogs/'+id);
  console.log(blogs);
  const history=useHistory();

  const handleDelete=() =>
  {
     fetch('http://localhost:8000/blogs/'+id,{
      method:'DELETE',
     }).then(()=>{
      history.push('/');
     })
  }
  
  return (
    <div className='blog-details'>
    {blogs && (
      <article>
        <h2>{blogs.title}</h2>
      <div>{blogs.author}</div>
        <p>{blogs.body}</p>
        <button onClick={handleDelete} style={{margin:"10px"}}>Delete Now</button>
      </article>
     )}
    </div>
  )
}

export default BlogDetails;
