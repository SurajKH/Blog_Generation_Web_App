import React, { useState , useEffect} from 'react';
import Bloglist from './Bloglist';
import useFetch from './useFetch';

const Home = () => {
   //lets consider the creation of hook over here
  //  const [blogs,setBlogs]=useState(null);
  //   const [isPending,setIspending]=useState(true);
    //now lets consider a special hook--useEffect over here
    //useEffect is a special function which basically runs for every rendering of the given component over here.

    const {data:blogs,isPending}=useFetch('http://localhost:8000/blogs');


    /*const handleDelete=(id) =>
    {
         //now we need to create new blogs over here
       //const ids=id
       const newblogs=blogs.filter(blog => blog.id !== id);
        setBlogs(newblogs);
    }*/
       

    //the hooks basically renders the component changes and its reflection.
    //by changes we basically mean the changes in the states of the component.

    //we basically consider an anonymous function over here
    /*
    Depedencies of useEffect():
    so []-->empty dependency array it basically determines the fact that it runs only for the intial render
    then it wont consider the concept of re-rendering changes within a dynamic website.
    */

   
    /*useEffect(()=>
    {
       this function is invoked for every other rendering 
       /so basically we consider the fact as changes in the website as well.
       /even the intial render is taken into considerations.

       console.log('UseEffect being invoked over here.');
    },[]);
    */

    /*
    ENDPOINTS:
    /blogs-->GET all the blogs
    /blogs/{id}--->Fetch a single blog
    /blogs-->POST-->add a new blog
    /blogs/{id}-->DELETE-->Delete a blogs



    */
    //how can we use the useEffect function to get invoked for the respective changes
    //here the dependency array basically determines the fact that whether useEffect has to be invoked or not.
    
    
    //const [name,setName]=useState('mario');
   /* useEffect(()=>
    {
     console.log('changes in the name');
     console.log(name);
    },[name]);
    */

   //now we basically use the map to iterate over each of the objects over here.

 //here we use the key attribute to basically iterate over the blog over here.
  return (
    <div className='home'>

   {/* Now we consider the concept of mapping over the contents of the react hooks(useState)*/}
   {/* {blogs.map((blog) => (
  <div>
     <h2>{blog.title}</h2>
     <h2>{blog.author}</h2>
  </div>
   ))} */}

   {/* we are basically using the concept of rendering the blogs details after the intial rendering of the file over here */}


{/* <button onClick={()=> setName('MARIO')}>Change Name</button> */}
   {/* we can reuse the bloglist component by basically passing the different parameters to the component over here
   the idea here is to utilize the concept of Component reusablily over here
    */}

    {isPending && <div>Loading......</div>}
   { blogs && <Bloglist blogs={blogs}/>}



   
    </div>
  )
}

export default Home;
