import React, { Component } from "react";

export default class title extends Component {
  render() {
    return (
      <div className="identity">
        <center><div className="container">
          <h1 className="title">{this.props.title}</h1>
          <div>
            <img src={this.props.image} alt="Gambar" className="gambar" />
          </div>
          <div className="text">
            <h2 className="place">{this.props.title2}</h2>
            <h2 className="year">{this.props.subtitle}</h2>
            <tr />
          </div>
        </div></center>
      </div>
    );
  }
}