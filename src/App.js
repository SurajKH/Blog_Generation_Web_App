import logo from './logo.svg';
import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import Notfound from './Notfound';
import {Helmet} from 'react-helmet';
//App Component is basically being exported and the JSX contents are being rendered on top of the root element over here.


function App() {
  const title="Component Title";

  const link="https://www.google.com";
  //now we can use the concept of {}.

  //{link}-->to extract the value of link over here.

 //dynamic value can be rendered over here.

  return (
    <Router>
        <div className="App">
        
        <Helmet>
                <style>{'body { background-color: #B7FFBF }'}</style>
            </Helmet>
    {/* Navbar Component */}
    <Navbar />
   
      <div className='content'>
      {/* Home Component 
      Important Note:Switch component works with the Route component over here.

      */}
      <Switch>

      {/* with exact parameter we can basically avoid the confusion of landing up onto the new webpage over here */}


           <Route exact path="/">
           <Home />
           </Route>

           <Route path="/create">
            <Create />
           </Route>

           <Route path="/blogs/:id">
            <BlogDetails/>
           </Route>

           <Route path="*">
           <Notfound />
           </Route>
      </Switch> 
        {/* <Home/> */}
        {/* <h2>{title}</h2>
        <a href={link}>google.com</a> */}
      </div>
    </div>
    </Router>
  );
}

//we are basically exporting the component over here(VVVIMP)

export default App;
