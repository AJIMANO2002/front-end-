import React, { useState, useEffect } from "react";
import "../Component/cs/adminlist.css";
import axios from "axios";
// import Swal from 'sweetalert2';


// Swal.fire(
//     'Good job!',
//     'You clicked the button!',
//     'success'
// )


function Adminlist({ editdata }) {

   
    const [pro, setPro] = useState([])
    axios.get("http://localhost:5000/productsDetails")
        .then((res) => {
            setPro(res.data)
           
            
        })



      
    return (
        <>
            <div className="container-fluid">
                <div className="card">
                    <div className="card-body">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Availablity</th>
                                    <th>Color</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {pro.map((data) => {
                                    return (
                                        <tr>
                                            <img width={"100px"} src={data.image} />
                                            <td>{data.name}</td>
                                            <td>{data.price}</td>
                                            <td>{data.Availablity}</td>
                                            <td>{data.Color} </td>
                                            <td>
                                                <button className="btn btn-sm btn-primary " onClick={() => editdata(data)}>Edit</button>
                                                <button className="btn btn-sm btn-danger ">Delete</button>
                                            </td>

                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Adminlist