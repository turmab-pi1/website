import React, {Component} from 'react';


const img1 = require("../assets/cards/explod.jpg");
const img2 = require("../assets/cards/frontal.jpg");
const img3 = require("../assets/cards/lateral45.jpg");
const img4 = require("../assets/cards/sup.jpg");

class Cards extends Component {

    render(){
        return(
            <div>
                <div class="row">
                    <div className="col s12 team-title">
                        <h2>Estrutura Final do Projeto</h2>
                    </div>
                    <div class="col s12 m6 l3">
                        <div class="card hoverable">
                            <div class="card-image">
                                <img src={img1} alt="exp"/>
                            </div>
                            <span className="card-title">
                                Vista Explodida
                            </span>
                        </div>
                    </div>
                    <div class="col s12 m6 l3">
                        <div class="card hoverable">
                            <div class="card-image">
                                 <img src={img4} alt="sup"/>
                            </div>
                            <span className="card-title">
                                Vista Completa
                            </span>
                        </div>
                    </div>
                    <div class="col s12 m6 l3">
                        <div class="card hoverable">
                            <div class="card-image">
                                <img src={img3} alt="lat"/>
                            </div>
                            <span className="card-title">
                                Vista Lateral 
                                </span>
                        </div>
                    </div>
                    <div class="col s12 m6 l3">
                        <div class="card hoverable">
                            <div class="card-image">
                                <img src={img2} alt="front"/>
                            </div>
                            <span className="card-title">
                                Vista Frontal
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cards;