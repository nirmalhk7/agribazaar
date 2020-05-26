import React from "react";
import Footer from "./footer-component";
import Navbar from './navbar-component';
import Slider from './slider-component';
import Products from './products-component';
import Offer from "./offer-component";
import "../shared/stylesheets/index-style.css"
import slides from '../shared/data/slider-images'


const Index = (props) => {
    return (
        <div>
            <div className='navbar'><Navbar user={props.user} handleAccount={props.handleAccount}/></div>
            <div className='slider'><Slider/></div>
            <div className="offer"><Offer/></div>
            <div className="containers-fluid">
                <div className='products'>
                    <Products/>
                </div>
            </div>
            <div className="footer"><Footer/></div>
        </div>
    );
}
export default Index