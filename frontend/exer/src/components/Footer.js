import React, { Component } from 'react';
import '../App.css';

class Footer extends Component {
  render() {
    return (
      <div className="main-footer">
        <div className="container">
          <div className="row">
              {/*Column 1*/}
            <div className="col">
              <h4>Menu</h4>
                <ul className="list-unstyled">
                  <a href="/"> <li>Home</li> </a>
                  <a href="/"> <li>About</li> </a>
                  <a href="/Profile"> <li>Profile</li> </a>
                </ul>
            </div>

            {/*Column 2*/}
          <div className="col">
            <h4>Company</h4>
                <ul className="list-unstyled">
                <a href="/"> <li>Our Team</li> </a>
                <a href="/"> <li>Our Mission</li> </a>
                <a href="/"> <li>Our Vision</li> </a>
                </ul>
          </div>

            {/*Column 3*/}
          <div className="col-md-3 col-sm-6">
            <h4>Support</h4>
                <ul className="list-unstyled">
                <a href="/"> <li>Contact Support</li> </a>
                <a href="/"> <li>Terms of Service</li> </a>
                <a href="/"> <li>Privacy Policy</li> </a>
                </ul>
          </div>

              {/*Column 3*/}
            <div className="col-md-3 col-sm-6">
            <h4>Connect</h4>
                <ul className="list-unstyled">
                <a href="/"> <li>Facebook</li> </a>
                <a href="/"> <li>Twitter</li> </a>
                <a href="/"> <li>Instagram</li> </a>
                </ul>
            </div>
          </div>

            {/*Bottom of Footer*/}
          <div className="footer-bottom mt-1">
              <p className="text-xs-center" style={{textAlign: "center"}}>
                <small>Icons made by <a href="https://www.flaticon.com/authors/iconixar" title="iconixar">iconixar</a></small>
              </p>
              <p className="text-xs-center" style={{textAlign: "center"}}>
                &copy;{new Date().getFullYear()} E X E R. All Rights Reserved
              </p>
          </div>
        </div> 
      </div>
    );
  }
}

export default Footer;