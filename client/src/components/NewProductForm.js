import axios from 'axios';
import React, {useState} from 'react';
import { useHistory } from "react-router-dom";



const NewProductForm = (props) => {
    
    const history = useHistory(); //this is for redirecting when we submit the form

    let [formInfo, setFormInfo] = useState({
        title: null,
        price: null,
        description: null,
        stock:0
    })
    
 

    let [validationErrors, setValidationErrors] = useState({})



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

        axios.post(`${process.env.REACT_APP_API_URL}/api/products`, formInfo)

            .then(res=>{
                    console.log("response after successful axios post resquest-->", res);
                    

                    // if response gets an error when submitting we do not want to redirect, we want to display err msgs
                    if(res.data.err){
                    //store errors object from backend into a front end state variable to display on page 
                        setValidationErrors(res.data.err.errors)
                        
                    } else { // form is successful NO ERRORS Redirect to home route
                        console.log("Data has been successfully sent to database");
                        props.setSubmitClicked(!props.submittedClicked)
                        history.push("/");
                        
                    }
                    
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

                        {/* Validation Messages  */}
                        <p className="text-danger"> { validationErrors.title? validationErrors.title.message : "" }  </p>

                    </div>
                    <div className="form-group">
                        <label htmlFor="">Price:</label>
                        <input onChange={changeHandler} type="number" name="price" id="" className="form-control" />

                        <p className="text-danger"> {validationErrors.price?.message}  </p>

                    </div>
                    <div className="form-group">
                        <label htmlFor="">Description:</label>
                        <input onChange={changeHandler} type="text" name="description" id="" className="form-control" />

                        <p className="text-danger"> {validationErrors.description?.message}  </p>
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="">How Many in Stock:</label>
                        <input onChange={changeHandler} type="text" name="stock" id="" className="form-control" />

                        <p className="text-danger"> {validationErrors.stock?.message}  </p>
                    </div>

                    <input className="btn btn-primary" type="submit" value="Create Product" />


                </form>
                <hr />
            </div>
        )




}



export default NewProductForm;