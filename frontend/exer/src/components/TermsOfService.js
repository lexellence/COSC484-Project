import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Service from '../assets/termsOfService.jpg';

class TermsOfService extends Component {
  render() {
    return (
      <div>
        <Container className="text-center mt-5 mb-5">
          <hr></hr>
          <h1>Terms of Service</h1>
          <p className="termsservice-subtitle">
          <img height="200" width="280" src={Service}></img>
          <div className="mt-4">
            <p className="termsservice-subtitle">
              <a href="https://www.websitepolicies.com/blog/sample-terms-service-template">Click to view Terms of Service generic template</a>
              <br></br>
            Generic Terms of Service
            <br></br>
Conditions of Use
<br></br>
We will provide their services to you, which are subject to the conditions stated below in this document. Every time you visit this website, use its services or make a purchase, you accept the following conditions. This is why we urge you to read them carefully.
<br></br>
Privacy Policy
<br></br>
Before you continue using our website we advise you to read our privacy policy [link to privacy policy] regarding our user data collection. It will help you better understand our practices.
<br></br>
Copyright
<br></br>
Content published on this website (digital downloads, images, texts, graphics, logos) is the property of [name] and/or its content creators and protected by international copyright laws. The entire compilation of the content found on this website is the exclusive property of [name], with copyright authorship for this compilation by [name].
<br></br>
Communications
<br></br>
The entire communication with us is electronic. Every time you send us an email or visit our website, you are going to be communicating with us. You hereby consent to receive communications from us. If you subscribe to the news on our website, you are going to receive regular emails from us. We will continue to communicate with you by posting news and notices on our website and by sending you emails. You also agree that all notices, disclosures, agreements and other communications we provide to you electronically meet the legal requirements that such communications be in writing.
<br></br>
Applicable Law
<br></br>
By visiting this website, you agree that the laws of the [your location], without regard to principles of conflict laws, will govern these terms of service, or any dispute of any sort that might come between [name] and you, or its business partners and associates.
<br></br>
Disputes
<br></br>
Any dispute related in any way to your visit to this website or to products you purchase from us shall be arbitrated by state or federal court [your location] and you consent to exclusive jurisdiction and venue of such courts.
<br></br>
Comments, Reviews, and Emails
<br></br>
Visitors may post content as long as it is not obscene, illegal, defamatory, threatening, infringing of intellectual property rights, invasive of privacy or injurious in any other way to third parties. Content has to be free of software viruses, political campaign, and commercial solicitation.

We reserve all rights (but not the obligation) to remove and/or edit such content. When you post your content, you grant [name] non-exclusive, royalty-free and irrevocable right to use, reproduce, publish, modify such content throughout the world in any media.
<br></br>
License and Site Access
<br></br>
We grant you a limited license to access and make personal use of this website. You are not allowed to download or modify it. This may be done only with written consent from us.
<br></br>
User Account
<br></br>
If you are an owner of an account on this website, you are solely responsible for maintaining the confidentiality of your private user details (username and password). You are responsible for all activities that occur under your account or password.

We reserve all rights to terminate accounts, edit or remove content and cancel orders in their sole discretion.
            </p>
            <br></br>
          </div>
          </p>
        </Container>
      </div>
    );
  }
}
  
  export default TermsOfService;
  