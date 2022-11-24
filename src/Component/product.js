import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../Component/navbar";
import './cs/product.css';
import StripeCheckout from "react-stripe-checkout";

function Details() {

    const data = useLocation();
    const details = data.data


     const buy = (token)=>{
       console.log(token);
     }

    return (
        <>
            <Navbar />

            <div className="container" id="product-page">
                <div className="row">
                    <div className="col-md-5 lg-2">
                        <img className="img1" src={details.image} alt="" />
                    </div>
                    <div className="col-md-7">
                        <p className="newarrival text-center">New</p>
                        <h2 className='detail-dress-name'>
                        </h2>
                        <p id="name" >{details.name}</p>
                        <p ><b>Price : {details.price}</b></p>

                        <p><b>{details.offer}</b></p>
                        <p><b>Availablity : {details.Availablity}</b></p>
                        <p><b>Color : {details.Color} </b></p>
                        <lable><b>Quantity :</b></lable>
                        <input type="number" />
                        {/* <button type="button" className="btn btn-default cartbtn">Add to cart</button><br /> */}
                        {/* <button type="button" className="btn btn-default buy">Buy Now
                        </button> */}
                        <br/><br/>
                        <StripeCheckout 
                         name="TrendZone"
                         token={buy}
                         stripeKey="pk_test_51M511ISGm6fplCIeTKwjeXRIdQWEoRIjBODKnIJdT6m4fSrJniSp9m6nux1LuBXBjNb4A5K5rPiRjoiKvSQ88zON00T2uObJSr"
                         />
                    </div>
                </div>
            </div>

        </>

    )
};

export default Details;