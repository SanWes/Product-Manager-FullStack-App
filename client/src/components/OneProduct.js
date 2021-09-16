import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { useHistory, Link } from "react-router-dom";


const OneProduct = () => {

    const [oneProduct, setOneProduct] = useState([])

    const {id} = useParams()
    const history = useHistory();

    
    useEffect( () => {
        axios.get(`http://localhost:8000/api/products/${id}/`)
        .then(res=> {
            console.log("****** res is this", res);
            setOneProduct(res.data.results)
        })
        .catch(err => console.log("ERRORRRR-->", err))
    }, [id])


    
    const deleteHandler = (e) => {
        // e.preventDefault()

            axios.delete(`http://localhost:8000/api/products/delete/${id}`)
            .then(res=>{
                    console.log("response after successful axios post resquest-->", res);
                    history.push("/");

                    
            })
            .catch(err=>{
                    console.log("Error Occured -->",err);
            })
    }
    

    return (
        <div>
            <h3>Enjoy This Product</h3>

                 <div className="card">
                <div className="card-body">
                  <h4 className="card-title">
                  {oneProduct.title}
                  </h4>
                  <p className="card-text">Price: {oneProduct.price}</p>
                  <p className="card-text">Description: {oneProduct.description}</p>

                  <p> <Link className="btn btn-warning m-3" to={location => ({ ...location, pathname: `/products/${oneProduct._id}/edit` })}> Edit</Link>      </p>

                  <p><button className="btn-outline-danger" onClick={deleteHandler}>Delete</button></p>
                  
                </div>
              </div>

        </div>

    )



}

export default OneProduct