import React, {Component} from 'react';
import { Parallax } from 'react-parallax';
import Slider from '../components/slider';

const img1 = require("../assets/img1.jpg");
const img2 = require("../assets/img2.jpg");
const img3 = require("../assets/img3.jpg");

class Homepage extends Component{

    render(){
        return(
            <div>
                <Parallax
                    bgImage={img1}
                    bgImageAlt="the cat"
                    strength={200}>  
                    <Slider />
                </Parallax>
            </div>
        );
    }
} export default Homepage;