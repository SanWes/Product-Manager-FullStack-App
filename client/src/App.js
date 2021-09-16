import './App.css';
import AllProducts from './components/AllProducts';
import NewProductForm from './components/NewProductForm'
import OneProduct from './components/OneProduct'
import EditProduct from './components/EditProduct'
import { useState } from 'react';

import {
  BrowserRouter,
  Switch,
  Route, Link
} from "react-router-dom";


function App() {

  const [submittedClicked, setSubmitClicked] = useState(false)


  return (
<BrowserRouter> 
    <div className="App container">
    <nav>
      <h1 className="mt-2">Best Products Daily</h1>
      <Link className="btn btn-info m-3" to="/" >Home</Link> <br />
    </nav>

    
    <Switch>

        <Route exact path="/">

            {/* Pass in submitClicked Prop to communicate between components that the var has changed. Pass this prop var into dependency array of axios call to refresh */}
            
            <NewProductForm  submittedClicked={submittedClicked} setSubmitClicked={setSubmitClicked} />
          
            <AllProducts submittedClicked={submittedClicked} setSubmitClicked={setSubmitClicked} />
            
        </Route>

        <Route exact path="/products/:id">
        
            <OneProduct/>

        </Route>
        
        <Route exact path="/products/:id/edit">
        
            <EditProduct/>

        </Route>


    
    </Switch>
    </div>
</BrowserRouter>
  );
}

export default App;
