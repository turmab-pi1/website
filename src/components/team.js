import React, {Component} from 'react';

const cal = require("../assets/team/calculus.png");
const elet = require("../assets/team/eletronics.png");
const soft = require("../assets/team/software.png");
const struc = require("../assets/team/structure.png");

class Team extends Component{

    render(){ 
        return(
            <div className="row team-imgs">
                <div className="col s12">
                    <h1 className="team-title">TIMES</h1>
                </div>
                <div className="col s12 m6 l3">
                    <img src={cal} className="team-img" alt="cálculo"/> 
                    <h3>Cálculo</h3>
                </div>
                <div className="col s12 m6 l3">
                    <img src={elet} className="team-img" alt="eletrônica"/> 
                    <h3>Eletrônica</h3>
                </div>
                <div className="col s12 m6 l3">
                    <img src={struc} className="team-img" alt="estrutura"/> 
                    <h3>Estrutura</h3>
                </div>
                <div className="col s12 m6 l3">
                    <img src={soft} className="team-img" alt="software"/> 
                    <h3>Software</h3>
                </div>
            </div>
        );
    }
}

export default Team;