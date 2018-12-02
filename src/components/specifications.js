import React, {Component} from 'react';

class Specifications extends Component{

    render(){
        return(
            <div className="row specifications">
                <div className="col s12">
                    <h1 className="specifications-title">Especificações Técnicas</h1>
                </div>
                <div className="col s12 m4 l4 specifications-text">
                    <span>Código: <b>FMC586D2IN</b></span> 
                    <br />
                    <span>Descrição: <b>Forno MC DIM 586 IN 220</b></span> 
                    <br />
                    <span>Cor: <b>Prata</b></span> 
                    <br />
                    <span>Tipo de Apoio: <b>Solo</b></span>
                    <br />
                    <span>Material Principal: <b>Madeira</b></span>
                </div>
                <div className="col s12 m4 l4">
                    <span>Sistema de Controle: <b>Arduino Uno R3</b></span>
                    <br />
                    <span>Tempo recomendado de operação: <b>4-7h</b></span> 
                    <br />
                    <span>Tempo máximo de operação: <b>~7h</b></span>
                </div>
                <div className="col s12 m4 l4">
                    <span>Resistências (LxD mm): <br /> <b>4x Inox 304, 150W, 330x7,0</b></span> 
                    <br />
                    <span>Potência total: <b>~605W</b></span>
                    <br />
                    <span>Dimensão do produto (LxAxP mm): <br /><b>586 x 616 x 586</b></span>
                </div>
            </div>
        );
    }
}

export default Specifications;