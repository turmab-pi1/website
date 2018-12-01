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
                        <div class="caption center-align">
                        <h3>This is our big Tagline!</h3>
                        <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
                        </div>
                    </li>
                    <li>
                        <div class="caption left-align">
                        <h3>Left Aligned Caption</h3>
                        <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
                        </div>
                    </li>
                    <li>
                        <div class="caption right-align">
                        <h3>Right Aligned Caption</h3>
                        <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
                        </div>
                    </li>
                    <li>
                        <div class="caption center-align">
                        <h3>This is our big Tagline!</h3>
                        <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
                        </div>
                    </li>
                    </ul>
                </div>
            </div>
        );
    }
}export default Slider;