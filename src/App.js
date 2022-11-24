import React,{useContext ,useState} from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routing from "../src/Component/route";
// import { AppContext} from "./Context";

 
function App() {
     
    return (
       
            <Router >
                <Routing />
            </Router>
       
    );
}

export default App;