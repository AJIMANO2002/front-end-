
import React from "react";
import './css/register.css';
import axios from 'axios';
import { useHistory } from "react-router-dom";

function Register() {

  const navigate = useHistory();

  const [user, setuser] = React.useState();
  const handleChange = ({ target: { name, value } }) => {
    setuser({ ...user, [name]: value });
  }
  const handlesubmit = async (e) => {
    e.preventDefault()
    try {
      const url = "http://localhost:5000/register";
      const res = await axios.post(url, user);
      console.log(res);
      navigate("/login")

    } catch {

    }

  }
  return (
    <>
      <div class="wrapper">
        <h2>Registration</h2>
        <form onSubmit={handlesubmit}>

          <div class="input-box">
            <label>Your Name<span className="text-danger">*</span></label>
            <input type="text"
              name="name"
              onChange={handleChange}
              placeholder="First and Last name"
              required />
          </div>

          <div class="input-box">
          <label>E-mail<span className="text-danger">*</span></label>
            <input type="text"
              name="email"
              onChange={handleChange}
              placeholder="Enter your email"
              required />
          </div>

          <div class="input-box">
          <label>Password<span className="text-danger">*</span></label>
            <input type="password"
              name="password"
              onChange={handleChange}
              placeholder="At least 6 characters"
              required />
          </div>
          <div class="input-box">
          <label>Confirm Password<span className="text-danger">*</span></label>
            <input type="password"
              name="conformpassword"
              onChange={handleChange}
              placeholder="Confirm password"
              required />
          </div>
          <div class="policy">
            <input onChange={handleChange} type="checkbox" />
            <h3>I accept all terms & condition</h3>
          </div>
          <div class="input-box button">
            <input onChange={handleChange} type="Submit" value="Register Now" />
          </div>

        </form>
      </div>
    </>
  )
}
export default Register
