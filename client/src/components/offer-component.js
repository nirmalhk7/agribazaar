import React , {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../shared/stylesheets/slider-style.css"
import offerdata  from '../shared/data/offer-data'
class Offer extends Component
{
    
    render()
    {
        const Offers = () => {
            return (
              <div className="containers-fluid">
              <div className="section-heading" >Affiliates and Sponsorors</div>
              <hr/>
              <div className="row">
              {
                  offerdata.offers.map( offer=>
                    <div key={offer.id} className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                      <div className="card" ><img className="card-img-top" src={offer.image} alt="" /></div>
                    </div>
                    )
              }
              </div>
              <div className="section-heading">Offers and Discounts</div>
              <hr/>
              </div>
            )
        }

        return(
            <div>
                {Offers()}
            </div>
        );
    }
}
export default Offer;