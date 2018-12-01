import React, {Component} from 'react';

class Carrosel extends Component{

    render(){
        return(
            <div className="container">
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner w-100" role="listbox" style={{ width:100, height: 650}}>
                        <div class="carousel-item active">
                             teste1
                        </div>
                        <div class="carousel-item">
                            teste2
                        </div>
                        <div class="carousel-item">
                            teste3
                        </div>
                        <div class="carousel-item">
                            teste4
                        </div>
                    </div>
             </div>
            </div>
        );
    }
}export default Carrosel;