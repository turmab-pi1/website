import React, {Component} from 'react';
import { Parallax } from 'react-parallax';
import Slider from '../components/slider';
import Cards from '../components/cards';
import FloatButton from '../components/float-button';

import M from 'materialize-css/dist/js/materialize.min.js';
import 'materialize-css/dist/css/materialize.css';
import Team from '../components/team';
import Specifications from '../components/specifications';

const img1 = require("../assets/paralax/img1.jpg");
const gif1 = require("../assets/paralax/gif1.gif");
const gif2 = require("../assets/paralax/gif2.gif");

class Homepage extends Component{

    componentDidMount(){
        var elems = document.querySelectorAll('.materialboxed');
        M.Materialbox.init(elems);
    }

    render(){
        return(
            <div>
                <Parallax
                    bgImage={img1}
                    bgImageAlt="slider"
                    strength={200}>  
                    <Slider />
                </Parallax>

                <Team />

                <Parallax
                    bgImage={gif2}
                    bgImageAlt="the cat"
                    strength={200}>
                    <div style={{ height: '40em' }} />
                </Parallax>

                <Cards />

                <Parallax
                    bgImage={gif1}
                    bgImageAlt="the cat"
                    strength={200}>
                    <div style={{ height: '40em' }} />
                </Parallax>

                <Specifications />

                <FloatButton />
            </div>
        );
    }
} export default Homepage;