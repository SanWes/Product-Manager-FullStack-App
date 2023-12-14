import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { useHistory, Link } from "react-router-dom";
require('dotenv').config();



const AllProducts = (props) => {

    const [allProducts, setAllProducts] = useState([])
    const {id} = useParams();
    const history = useHistory();

    const [deleteClicked, setDeleteClicked] = useState(false);

    useEffect( () => {
        axios.get( `http://localhost:8000/api/products` || `${process.env.REACT_APP_API_URL}/api/products`)
        .then(res=> {

            console.log("****** res is this", res);
            setAllProducts(res.data.results)
        })
        .catch(err => console.log("ERRORRRR-->", err))
    }, [id, deleteClicked, props.submittedClicked])



    const deleteHandler = (e, idOfProd) => {
        

            axios.delete(`${process.env.REACT_APP_API_URL}/api/products/delete/${idOfProd}`)
            .then(res=>{
                    console.log("response after successful axios DELETE resquest-->", res);
                    setDeleteClicked(!deleteClicked)
                    history.push("/");

            })
            .catch(err=>{
                    console.log("Error Occured -->",err);
            })
    }
    
    return (
        <div>
            <h3 className="mt-4">All The Products</h3>

            {allProducts.map( (product, i) => {
                return <div key = {i} className="card">
                <div className="card-body">

                  <h4 className="card-title"> {product.title} </h4>
                  <p className="card-text">price: {product.price}</p>
                  <p className="card-text">Description: {product.description}</p>
                  <p className="card-text">In Stock: {product.stock}</p>


                  <Link className="btn btn-info mr-3" to={location => ({ ...location, pathname: `/products/${product._id}` })}> Product Page</Link>
                  
                  <Link className="btn btn-warning m-3" to={location => ({ ...location, pathname: `/products/${product._id}/edit` })}> Edit</Link>
                  
                  {/* <Link className="btn btn-danger mr-3" to={location => ({ ...location, pathname: `/products/${product._id}` })}> Delete</Link> */}

                  
                    
                  <button className="btn-outline-danger" onClick={ (e)=> deleteHandler (e, product._id)}>Delete</button>
                  
                   

                </div>
              </div>
            })}

        </div>

    )


}

export default AllProducts;