import React from 'react';


function Footer() {
  return (
    <div className="main-footer">
     <div className="container">
       <div className="row">
                {/*Column 1*/}
         <div className="col">
           <h4>EXER</h4>
              <ul className="list-unstyled">
                <a href ="/"> <li>Home</li> </a>
                <a href ="/"> <li>Account</li> </a>
                <a href ="/"> <li>Login/Register</li> </a>
              </ul>
         </div>
                {/*Column 2*/}
         <div className="col">
           <h4>WHO WE ARE</h4>
              <ul className="list-unstyled">
              <a href ="/"> <li>Our Team</li> </a>
              <a href ="/"> <li>Newsletter</li> </a>
              <a href ="/"> <li>Contact</li> </a>
              </ul>
         </div>
                {/*Column 3*/}
         <div className="col-md-3 col-sm-6">
           <h4>SUPPORT</h4>
              <ul className="list-unstyled">
              <a href ="/"> <li>Terms of Service</li> </a>
              <a href ="/"> <li>User Agreement</li> </a>
              <a href ="/"> <li>Privacy Policy</li> </a>
              </ul>
         </div>
                {/*Column 3*/}
          <div className="col-md-3 col-sm-6">
           <h4>CONNECT</h4>
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
              &copy;{new Date().getFullYear()} EXER 
           </p>
         </div>
       </div> 
    </div>
  );
}

export default Footer;