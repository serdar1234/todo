import React, { Component } from "react";

import './NewBtn.css'

export default class NewBtn extends Component {
  onCreate = this.props.onCreate;

  render() {
    return (
      <div className="new-btn">
        <button type="button" 
        className="btn btn-outline-warning btn-sm float-right"
        onClick={this.onCreate}
        >Add me</button>
      </div>
    )
  }
}