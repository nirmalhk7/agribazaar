import React , {Component} from 'react'
import { Slide } from 'react-slideshow-image';
import 'bootstrap/dist/css/bootstrap.min.css';
class Slider extends Component
{
    constructor(props){
        super(props);
        this.state = {
          slideImages : [
            '/assets/images/image1.jpg',
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
            pauseOnHover: true,
            onChange: (oldIndex, newIndex) => {
              console.log(`slide transition from ${oldIndex} to ${newIndex}`);
            }
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
                      <span>Slide 2</span>
                    </div>
                  </div>
                  <div className="each-slide">
                    <div style={{'backgroundImage': `url(${this.state.slideImages[2]})`}}>
                      <span>Slide 3</span>
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