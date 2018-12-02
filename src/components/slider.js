import React, {Component} from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import 'materialize-css/dist/css/materialize.css';

class Slider extends Component{

    componentDidMount() {
        var elems = document.querySelectorAll('.carousel');
        M.Carousel.init(elems, {fullWidth: true});

        const elems2 = document.querySelectorAll('.paralax-slider');
        M.Slider.init(elems2, {
        indicators: true,
        });

        const slider = document.getElementById('slider-paralax');
        const instance = M.Slider.getInstance(slider);
        instance.next();

    }

    render(){

        return(
            <div>
                <div class="slider paralax-slider" id="slider-paralax">
                    <ul class="slides">
                    <li>
                        <div class="caption left-align">
                        <h3 class="white-text slider-subtitles">
                            O <b>objetivo primordial</b> foi criar uma <b>estrutura</b> em que o <b>processo</b> fosse 
                            mais <b>rápido e efetivo</b>, levando o sistema a uma temperatura determinada pela resina
                            utilizada atraves do <b>aquecimento</b> feito por <b>resistências elétricas</b>.
                        </h3>
                        </div>
                    </li>
                    <li>
                        <div class="caption center-align">
                        <h1 className="slider-titles">Forno para Cura de Materiais Compositos </h1>
                        <h2 class="light white-text">TURMA B</h2>
                        </div>
                    </li>
                    <li>
                        <div class="caption left-align">
                        <h2 className="slider-titles">Objetivo</h2>
                        <h3 class="white-text slider-subtitles">
                            Fabricação de um forno para cura de fibra 
                            de carbono com o objetivo de facilitar 
                            o processo de cura para equipes de competição 
                            e pequenas empresas.
                        </h3>
                        </div>
                    </li>
                    <li>
                        <div class="caption left-align">
                        <h2 className="slider-titles">Material Compósito</h2>
                        <h3 class="white-text slider-subtitles">
                            Todo aquele composto que tem suas propriedades 
                            determinadas por duas ou mais fases quimicamente 
                            distintas que o constituem.  
                        </h3>
                        </div>
                    </li>
                    </ul>
                </div>
            </div>
        );
    }
}export default Slider;