import React, {Component} from 'react';

const img1 = require("../assets/imgs/frontal.jpg");
const img2 = require("../assets/imgs/lateral45.jpg");
const img3 = require("../assets/imgs/supLateral.jpg");
const img4 = require("../assets/imgs/explod.jpg");

class Homepage extends Component{

    render(){
        return(
            <div className="container ">
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner w-100" role="listbox" style={{ width:100, height: 650}}>
                        <div class="carousel-item active">
                             <img class="d-block w-100" src={img1} alt="First slide" />
                        </div>
                        <div class="carousel-item">
                             <img class="d-block w-100" src={img2} alt="Second slide" />
                        </div>
                        <div class="carousel-item">
                             <img class="d-block w-100" src={img3} alt="Third slide" />
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src={img4} alt="Third slide" />
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
             </div>
            </div>
        );
    }
}export default Homepage;