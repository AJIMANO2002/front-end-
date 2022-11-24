import React from "react";
import Navbar from "../Component/navbar";
import Footer from "../Component/footer";
import Carousel from "../Component/carousel";
import Card from "../Component/card";
import './css/home.css';
import Alert from "../Component/Alert";


function Home() {

  
    return (
        <>
        
            <Alert />
            <Navbar />
            <Carousel />
            <Card />
            <Footer />
        </>
    )
}
export default Home
