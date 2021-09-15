import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { useHistory } from "react-router-dom";


const EditProduct = () => {

    const [oneProduct, setOneProduct] = useState([])

    const {id} = useParams()

    const history = useHistory(); //this is for redirecting when we submit the form

    let [formInfo, setFormInfo] = useState({
        title: null,
        price: null,
        description: null,
    })


    useEffect( () => {
        axios.get(`http://localhost:8000/api/products/${id}/`)
        .then(res=> {
            console.log("****** res is this", res);
            setOneProduct(res.data.results)
        })
        .catch(err => console.log("ERRORRRR-->", err))
    }, [id])



    const changeHandler = (e) => {
        console.log("Changing something");
        console.log(e.target.name, e.target.value);
        if(e.target.type === "checkbox" ) {
            setFormInfo({
                ...formInfo,
                isOnSale: !formInfo.isOnSale
            })
        } else {
            setFormInfo({
                ...formInfo,
                [ e.target.name]: e.target.value
            })
        }

    }

    //update our product with put call
    const submitHandler = (e) => {
        e.preventDefault()
        console.log("submitted with this info -->", formInfo);

        axios.put(`http://localhost:8000/api/products/${id}`, formInfo)
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
            <h4 className="m-2">Update The Product Here!</h4>
            <form onSubmit={submitHandler} action="">
                <div className="form-group">
                    <label htmlFor="">Title:</label>
                    <input onChange={changeHandler} type="text" name="title" id="" className="form-control" placeholder={oneProduct.title} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Price:</label>
                    <input onChange={changeHandler} type="number" name="price" id="" className="form-control" placeholder={oneProduct.price} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Description:</label>
                    <input onChange={changeHandler} type="text" name="description" id="" className="form-control" placeholder={oneProduct.description} />
                </div>
              

                <input className="btn btn-primary" type="submit" value="Update Product" />


            </form>
        </div>
    )

}

export default EditProduct