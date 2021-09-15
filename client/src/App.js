import './App.css';
import AllProducts from './components/AllProducts';
import NewProductForm from './components/NewProductForm'
import OneProduct from './components/OneProduct'
import EditProduct from './components/EditProduct'
import {
  BrowserRouter,
  Switch,
  Route, Link
} from "react-router-dom";


function App() {
  return (
<BrowserRouter> 
    <div className="App container">
    <nav>
      <h1 className="mt-2">Best Products Daily</h1>
      <Link className="btn btn-info m-3" to="/" >Home</Link> <br />
    </nav>
    <Switch>

    <Route exact path="/">

        <NewProductForm></NewProductForm>
      
        <AllProducts></AllProducts>
        
    </Route>

    <Route exact path="/products/:id">
    
        <OneProduct></OneProduct>

    </Route>
    
    <Route exact path="/products/:id/edit">
    
        <EditProduct></EditProduct>

    </Route>


    
    </Switch>
    </div>
</BrowserRouter>
  );
}

export default App;
