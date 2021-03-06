import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.css";

const pc3 = require("../assets/pdf/PC3_PI.pdf");
const pc2 = require("../assets/pdf/PC2_PI.pdf");
const pc1 = require("../assets/pdf/PC1_PI.pdf");
const manual = require("../assets/pdf/MANUAL_V1.pdf");

export default class FloatButton extends Component {
  componentDidMount() {
    let options = {
      direction: "left",
      hoverEnabled: true
    };
    let elems = document.querySelectorAll(".fixed-action-btn");
    M.FloatingActionButton.init(elems, options);

    var elems2 = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(elems2);
  }

  render() {
    return <div className="fixed-action-btn">
        <a className="btn-floating btn-large download-button" href="javascript:void(0);">
          <i className="material-icons">file_download</i>
        </a>
        <ul>
          <li>
            <a 
              className="btn-floating download-button tooltipped"  
              href={pc1} 
              download="Ponto de Controle 1"
              data-position="top" 
              data-tooltip="Ponto de Controle 1"  
            >
            <i className="content-donwload">PC1</i>
            </a>
          </li>
          <li>
            <a 
              className="btn-floating download-button tooltipped" 
              href={pc2} 
              download="Ponto de Controle 2"
              data-position="top" 
              data-tooltip="Ponto de Controle 2"  
            >
              <i className="content-donwload">PC2</i>
            </a>
          </li>
          <li>
            <a 
              className="btn-floating download-button tooltipped" 
              href={pc3} 
              download="Ponto de Controle 3"
              data-position="top" 
              data-tooltip="Ponto de Controle 3" 
            >
              <i className="content-donwload">PC3</i>
            </a>
          </li>
          <li>
            <a 
              className="btn-floating download-button tooltipped" 
              href={manual} 
              download="Manual"
              data-position="top" 
              data-tooltip="Manual"
              >
            <i className="material-icons">insert_drive_file</i>
            </a>
          </li>
        </ul>
      </div>;
  }
}
