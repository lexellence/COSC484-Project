import React from 'react';
import Container from 'react-bootstrap/Container';

function About() {
  return (
    <div>
      <Container className="text-center mt-5 mb-5">
        <h1>About Us</h1>
        <div className="mt-4">
          <p>Nullam eget faucibus sem. Vestibulum ante ipsum primis in faucibus orci
          luctus et ultrices posuere cubilia curae; Aenean dictum commodo ullamcorper. 
          Pellentesque dignissim urna ut lectus venenatis, et ullamcorper ipsum egestas. 
          Nullam sollicitudin feugiat est ut molestie. Nulla vitae elit urna. Sed et felis eu 
          justo suscipit dictum quis a metus. Aenean in pharetra nunc.</p>
          <p>
          Duis sed massa in mi dictum euismod. Vestibulum sed risus nibh. In non posuere sapien. 
          Nulla scelerisque vehicula pharetra. Nam ullamcorper ut arcu vitae dapibus. Etiam rutrum consectetur justo. 
          Nullam eget augue justo. Quisque dictum id augue eu volutpat. Aliquam quis maximus augue. Donec ante mauris, 
          sagittis ut ipsum et, placerat condimentum mi. Cras vel mollis velit. Quisque consectetur vehicula imperdiet. 
          Etiam egestas laoreet ex, eget faucibus quam commodo eu. Pellentesque sed leo ligula. Phasellus sit amet 
          massa aliquam, malesuada odio id, volutpat mauris.
          </p>
        </div>
      </Container>
    </div>
  );
}

export default About;
