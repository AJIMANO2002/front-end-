import React, { useEffect, useState } from "react";
import axios from "axios";
import "./user.css";



function User() {


    const [user, setUser] = useState([])


    useEffect(() => {

        axios.get("http://localhost:5000/userDetails")
            .then((res) => {
                setUser(res.data);
                console.log(res.data)
            })
    }, [])



    return (

        <>

            <div class="container fluid">
                <div class="row ">
                    <h4>Users</h4>
                    <br />
                    <br />

                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>password</th>
                            </tr>
                        </thead>
                        <tbody>{user.map((details) => {
                            return (
                                <tr>
                                    <th>{details.name}</th>
                                    <th>{details.email}</th>
                                    <th>{details.conformpassword}</th>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>


            </div>







        </>
    )
}
export default User
