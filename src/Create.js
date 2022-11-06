import React from 'react';
import { useState } from 'react';

const Create = () => {
  //creating react states for tracking purposes
  const [title,setTitle]=useState('');
  const [body,setBody]=useState('');
  const [author,setAuthor]=useState('surajkh');

  const handleSubmit=(e)=>{
      e.preventDefault();
      const blogs={title,body,author};
     // console.log(blogs);
      fetch('http://localhost:8000/blogs',
  {
    method:'POST',
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(blogs)
  }).then(()=>{
    console.log('new blog added!!!!')
  })
  
  }
  
  return (
    <div>
      <div className='create'>
        <h2>Add a New Blog</h2>
        <form onSubmit={handleSubmit}>
          <label>Blog Title:</label>
          <input type="text" required value={title}
          onChange={(e)=>{setTitle(e.target.value)}}></input>

          <label>Blog Body:</label>
          <textarea required value={body}
          onChange={(e)=>{setBody(e.target.value)}}></textarea>

          <label>Blog Author:</label>
          <select value={author} 
            onChange={(e)=>setAuthor(e.target.value)}>
            <option>Suraj KH</option>
            <option value="geekycoder">Developer</option>
          </select>
          <button>Add A New Blog</button>
          <p>{title}</p>
          <p>{body}</p>
          <p>{author}</p>
        </form>
      </div>
    </div>
  )
}

export default Create;
