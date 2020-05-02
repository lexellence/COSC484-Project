import React from 'react';
import '../App.css';

function Footer() {
  return (
    <div className="main-footer">
     <div className="container">
       <div className="row">
                {/*Column 1*/}
         <div className="col">
           <h4>Menu</h4>
              <ul className="list-unstyled">
                <a href ="/"> <li>Home</li> </a>
                <a href ="/"> <li>About</li> </a>
                <a href ="/"> <li>Account</li> </a>
              </ul>
         </div>
                {/*Column 2*/}
         <div className="col">
           <h4>Company</h4>
              <ul className="list-unstyled">
              <a href ="/"> <li>Our Team</li> </a>
              <a href ="/"> <li>Our Mission</li> </a>
              <a href ="/"> <li>Our Vision</li> </a>
              </ul>
         </div>
                {/*Column 3*/}
         <div className="col-md-3 col-sm-6">
           <h4>Support</h4>
              <ul className="list-unstyled">
              <a href ="/"> <li>Contact Support</li> </a>
              <a href ="/"> <li>Terms of Service</li> </a>
              <a href ="/"> <li>Privacy Policy</li> </a>
              </ul>
         </div>
                {/*Column 3*/}
          <div className="col-md-3 col-sm-6">
           <h4>Connect</h4>
              <ul className="list-unstyled">
              <a href ="/"> <li>Facebook</li> </a>
              <a href ="/"> <li>Twitter</li> </a>
              <a href ="/"> <li>Instagram</li> </a>
              </ul>
         </div>
         </div>
         {/*Bottom of Footer*/}
         <div className="footer-bottom">
           <p className="text-xs-center">
              &copy;{new Date().getFullYear()}. All Rights Reserved
           </p>
         </div>
       </div> 
    </div>
  );
}

export default Footer;