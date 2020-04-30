import React, { Component } from 'react';
import Navbar from './components/navbar.js';
import './dark-mode-v2.css'
import 'bootstrap/dist/css/bootstrap.css';

import postList from './posts/postList';

function App() {
  return (
    <div>
    <Navbar />
      <div className="imgbox">
        <img className="center-fit" src="homepageGraphic.jpg" alt="EXER Homepage Collage Graphic"/>
      </div>

      <div className="footerScript">
        <script lang="javascript" type="text/javascript" src="footer.js"></script>
      </div>

    </div>
  );
}

export default App;
