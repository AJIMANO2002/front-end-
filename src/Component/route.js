import React from "react";
import {Route} from "react-router-dom";
import Home from "../Homeneed/home";
import Register from "../Homeneed/register"; 
import Login from "../Homeneed/login";
import Product from "../Component/product"; 
import Admin from "../Adminpages/admin";
import User from "../Adminpages/user";
import adminuser from "../Adminpages/adminuser";    

function Routing() {
    return (
        <>                                                        
        <Route path="/home" component={Home} />
        <Route path="/" component={Login}/>
        <Route path="/register" component={Register} exact/>                           
        <Route path="/login" component={Login}/>               
        <Route path="/product" component={Product}/>
        <Route path="/user"  component={User}/>                
        <Route path="/admin"  component={Admin}/>                         
        <Route path="/adminuser"  component={adminuser}/>
        
     </>
    )                                                               
}

export default Routing
