import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.css";

export default class FloatButton extends Component {
  componentDidMount() {
    let options = {
      direction: "left",
      hoverEnabled: false
    };
    let elems = document.querySelectorAll(".fixed-action-btn");
    M.FloatingActionButton.init(elems, options);
  }

  render() {
    return <div className="fixed-action-btn">
        <a className="btn-floating btn-large download-button">
          <i className="material-icons">file_download</i>
        </a>
        <ul>
          <li>
          <a className="btn-floating download-button">
              <i className="material-icons">looks_one</i>
            </a>
          </li>
          <li>
          <a className="btn-floating download-button">
              <i className="material-icons">looks_two</i>
            </a>
          </li>
          <li>
          <a className="btn-floating download-button">
              <i className="material-icons">looks_3</i>
            </a>
          </li>
        </ul>
      </div>;
  }
}
