import React, { Component } from "react";
import "./Contact.scss";
class Contact extends Component {
  render() {
    return (
      <div className="body">
        <div className="Post">
          <link
            href="https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap"
            rel="stylesheet"
          ></link>
          <div className="Title"> Contact Us at </div>
          <div className="Content">Email at fetchyourweather@gmail.com</div>
          <div className="Author">Call on 9657186721 </div>
        </div>
      </div>
    );
  }
}
export default Contact;
