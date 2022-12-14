import React from "react";
import "./cs/footer.css";

function Footer() {
  return (
    <>
      <div className="site-footer  ">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h6>About</h6>
              <p className="text-justify">India's fastest growing audio & wearables brand.
                The most incredible range of wireless earphones, earbuds, headphones, smart watches, and home audio.
                From workouts to adventures, boAt will get you sailing!</p>
            </div>
            <div className="col-xs-6 col-md-3">
              <h6>Help</h6>
              <ul className="footer-links">


                <li><a href=" ">Track Your Order</a></li>
                <li><a href=" ">Warranty & Support</a></li>
                <li><a href=" ">Return Policy</a></li>
                <li><a href=" ">Service Centers</a></li>
                <li><a href=" ">Bulk Orders</a></li>
                <li><a href=" ">FAQsWhy Buy Direct</a></li>
              </ul>
            </div>

           
           

            <div className="col-xs-6 col-md-3">
              <h6> COMPANY
              </h6>
              <ul className="footer-links">
                <li><a href=" ">About TrendZone</a></li>
                <li><a href=" "> Careers</a></li>
                <li><a href=" "> Security</a></li>
                <li><a href=" ">Privacy Policy</a></li>
                <li><a href=" ">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">Copyright &copy; 2017 All Rights Reserved by
                <a href="#"> Scanfcode</a>.
              </p>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
                <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
                <li><a className="dribbble" href="#"><i className="fa fa-instagram"></i></a></li>
                <li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Footer;