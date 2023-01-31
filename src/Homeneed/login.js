import React from "react";
import './css/login.css';
import axios from 'axios';
import { useHistory } from "react-router-dom"


function Login(props) {

  const navigate = useHistory();
  const [user, setuser] = React.useState();
  const handleChange = ({ target: { name, value } }) => {
    setuser({ ...user, [name]: value });
  }
  const handlesubmit = async (e) => {
    e.preventDefault()
    try {
      const url = "http://localhost:5000/login";
      const res = await axios.post(url, user);
      localStorage.setItem("auth", JSON.stringify(res));
      console.log(res)
      navigate.push("/home")

    } catch {
      console.log()
    }

  }
  return (
    <>
      <div className="wrappers">
        <h2>Login</h2>
        <form onSubmit={handlesubmit}>

          <div className="input-box">
            <label>E-mail<span className="text-danger">*</span></label>
            <input type="text"
              name="email"
              onChange={handleChange}
              placeholder="Enter your Email" required />
          </div>

          <div className="input-box">
            <label style={{marginTop:"15px"}}>Password<span className="text-danger">*</span></label>
            <input type="password"
              name="password"
              onChange={handleChange}
              placeholder="Enter your password"
              required />
          </div>

          <div className="input-box button">
            <input style={{marginTop:"33px"}} onChange={handleChange} type="Submit" value="Continue" />
          </div>

        <h3 style={{fontSize:"20px", marginTop:"70px"}}><a href="./register">Sign Up</a></h3>  
        </form>
      </div>
    </>


  )
}
export default Login

