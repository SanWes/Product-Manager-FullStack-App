import axios from 'axios';
import React, {useState} from 'react';
import { useHistory } from "react-router-dom";


const NewProductForm = () => {

    const history = useHistory(); //this is for redirecting when we submit the form

    let [formInfo, setFormInfo] = useState({
        title: null,
        price: null,
        description: null,
    })

    const [submitted, setSubmitted] = useState(false)

    const changeHandler = (e) => {
        console.log("Changing something");
        console.log(e.target.name, e.target.value);
        if(e.target.type === "checkbox" ) {
            setFormInfo({
                ...formInfo,
                isVeteran: !formInfo.isVeteran
            })
        } else {
            setFormInfo({
                ...formInfo,
                [ e.target.name]: e.target.value
            })
        }

    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("submitted with this info -->", formInfo);

        axios.post("http://localhost:8000/api/products", formInfo)
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
                <h4 className="m-2">Create a New Product Here!</h4>
                <form onSubmit={submitHandler} action="">
                    <div className="form-group">
                        <label htmlFor="">Title:</label>
                        <input onChange={changeHandler} type="text" name="title" id="" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Price:</label>
                        <input onChange={changeHandler} type="number" name="price" id="" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Description:</label>
                        <input onChange={changeHandler} type="text" name="description" id="" className="form-control" />
                    </div>
                  

                    <input className="btn btn-primary" type="submit" value="Create Product" />


                </form>
            </div>
        )




}



export default NewProductForm;