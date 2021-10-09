import React, { Component } from "react";
import "../../styles.css";

export default class title extends Component {
  render() {
    return (
      <div className="identity">
        <center><div>
          <h1 className="text">{this.props.title}</h1>
          <div>
            <img src={this.props.image} alt="Gambar" className="gambar" />
          </div>
          <div className="text">
            <h2 className="place">{this.props.title2}</h2>
            <h2 className="year">{this.props.subtitle}</h2>
            <tr />
          </div><br/>
        </div></center>
      </div>
    );
  }
}