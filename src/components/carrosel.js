import React, {Component} from 'react';
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.css";

const img1 = require('../assets/imgs/img1.jpg');
const img2 = require('../assets/imgs/img2.jpg');
const img3 = require('../assets/imgs/img3.png');

const btnNext = require('../assets/imgs/btn-next.png');
const btnPrev = require('../assets/imgs/btn-prev.png');


class Carrosel extends Component {
  static prevSlide() {
    const elem = document.getElementById('slider-fullscreen');
    const instance = M.Slider.getInstance(elem);
    instance.prev();
  }

  static nextSlide() {
    const elem = document.getElementById('slider-fullscreen');
    const instance = M.Slider.getInstance(elem);
    instance.next();
  }

  constructor() {
    super();
    this.state = {
      scrolled: false,
    };
    this.scrollHandler = this.scrollHandler.bind(this);
  }

  componentDidMount() {
    const elems = document.querySelectorAll('.slider');
    M.Slider.init(elems, {
      indicators: false,
    });

    window.addEventListener('scroll', this.scrollHandler, 300);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollHandler);
  }

  scrollHandler() {
    const offset = window.innerWidth > 600 ? 200 : 30;

    if (window.scrollY > offset) {
      this.setState({
        scrolled: true,
      });
    } else {
      this.setState({
        scrolled: false,
      });
    }
  }

  render() {
    const { scrolled } = this.state;
    return (
        <div>
            <div>
                <div className="content-offset" />
                <div className={`home-nav ${scrolled ? 'active' : ''}`}>
                </div>
                <div className="slider-pattern row">
                    <div className="col s5 m3 push-m6 l2 push-l10 buttons">
                    <button className="carrosel-btn" onClick={Carrosel.prevSlide}>
                        <img className="btn-img" src={btnPrev} alt="Button to previous slide" />
                    </button>
                    <button className="carrosel-btn" onClick={Carrosel.nextSlide}>
                        <img className="btn-img" src={btnNext} alt="Button to next slide" />
                    </button>
                    </div>
                </div>
                </div>
                <div className="slider-background" />
                <div className="slider fullscreen" id="slider-fullscreen">
                <ul className="slides">
                    <li>
                    <img src={img1} alt="First" />
                    </li>
                    <li>
                    <img src={img2} alt="Second" />
                    </li>
                    <li>
                    <img src={img3} alt="Third" />
                    </li>
                </ul>
                </div>
        </div>
    );
  }
}
export default Carrosel;