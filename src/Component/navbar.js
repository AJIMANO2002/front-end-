
import React from "react";
import { FaUserAlt, FaCartPlus } from 'react-icons/fa';
import "./cs/navbar.css";


function Navbar() {

  return (
    <>




      <nav className="navbar ">
        <div className="container-fluid">

          <h1 id="brand">TrendZone</h1>

          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
          <div className="icons">
            <div className="icon">
              <FaUserAlt />
            </div>

            <div className="icon">
              <FaCartPlus />
            </div>
          </div>

        </div>

      </nav>

    </>

  )
};

export default Navbar;