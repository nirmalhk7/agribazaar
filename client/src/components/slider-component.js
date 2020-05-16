import React , {Component} from 'react'
import { Slide } from 'react-slideshow-image';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../shared/stylesheets/slider-style.css"
class Slider extends Component
{
    constructor(props){
        super(props);
        this.state = {
          slideImages : [
            '/assets/images/image1.jpg',
            '/assets/images/image2.jpg',
            '/assets/images/image3.jpg',
          ],       
          properties : {
            duration: 5000,
            transitionDuration: 500,
            infinite: true,
            indicators: true,
            arrows: true,
            pauseOnHover: true
          }
        };
        
    }
    render()
    {
        const Slideshow = () => {
            return (
              <div className="slide-container">
                <Slide {...this.state.properties}>
                  <div className="each-slide">
                    <div style={{'backgroundImage': `url(${this.state.slideImages[0]})`}}>
                      <span>Slide 1</span>
                    </div>
                  </div>
                  <div className="each-slide">
                    <div style={{'backgroundImage': `url(${this.state.slideImages[1]})`}}>
                    </div>
                  </div>
                  <div className="each-slide">
                    <div style={{'backgroundImage': `url(${this.state.slideImages[2]})`}}>
                    </div>
                  </div>
                </Slide>
              </div>
            )
        }

        return(
            <div>
                {Slideshow()}
            </div>
        );
    }
}
export default Slider;