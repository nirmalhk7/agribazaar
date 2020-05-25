import React , {Component} from 'react'
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
          offerImages : [
            '/assets/images/offer1.jpg',
            '/assets/images/offer2.jpg',
            '/assets/images/offer3.jpg',
            '/assets/images/offer4.jpg',
          ]
        };
        
    }
    render()
    {
        const Slideshow = () => {
            return (
              <div className="wrapper">
              <div className="carousel slide" id="carouselExampleIndicators" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li className="active active" data-target="#carouselExampleIndicators" data-slide-to="0"></li>
                    <li className="active" data-target="#carouselExampleIndicators" data-slide-to="0"></li>
                    <li className="active" data-target="#carouselExampleIndicators" data-slide-to="0"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active"><img className="d-block w-100" src={this.state.slideImages[2]} alt="Carousel 1" /></div>
                    <div className="carousel-item"><img className="d-block w-100" src={this.state.slideImages[1]} alt="Carousel 2" /></div>
                    <div className="carousel-item"><img className="d-block w-100" src={this.state.slideImages[2]} alt="Carousel 3" /></div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                 <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                 <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                   <span className="carousel-control-next-icon" aria-hidden="true"></span>
                   <span className="sr-only">Next</span>
                </a>
              </div>
              <div className="containers-fluid">
              <div className="section-heading" >Affiliates and Sponsorors</div>
              <hr/>
              <div className="row">
                  <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                      <div className="card" ><img className="card-img-top" src={this.state.offerImages[0]} alt="" /></div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                      <div className="card" ><img className="card-img-top" src={this.state.offerImages[1]} alt="" /></div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                      <div className="card" ><img className="card-img-top" src={this.state.offerImages[2]} alt="" /></div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                      <div className="card" ><img className="card-img-top" src={this.state.offerImages[3]} alt="" /></div>
                  </div>
              </div>
              <div className="section-heading">Offers and Discounts</div>
              <hr/>
              </div>
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