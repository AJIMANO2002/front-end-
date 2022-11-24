
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import './cs/card.css';


function Card() {


    const [data, setData] = useState([])


    useEffect(() => {
        axios.get("http://localhost:5000/productsDetails").then((response) => {
            setData(response.data);
            console.log(response.data)
        })

    }, [])

    return (
        <>


            <div className="row" >
                <div className="col d-flex justify-content-evenly align-item-center">
                    <div className="row row-cols-md-4 g-3 pb-2 p-5">

                        {data.map((productitems) => {
                            return (

                                <div className="Card">
                                    <Link to={{ pathname: "/product", data: productitems }}>
                                        <img className="products" src={productitems.image} />
                                        <div className="title">
                                            <h5 className="card-title">{productitems.name} </h5>
                                            <p className="price">{productitems.price} </p>
                                            <p className="card-tittle">{productitems.offer} </p>
                                            <button className="btn-1" >View</button>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card