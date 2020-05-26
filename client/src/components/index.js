import React from "react";
import Footer from "./footer-component";
import Navbar from './navbar-component';
import Slider from './slider-component';
const Index = (props) => {
    return (
        <div>
            <div className='navbar'><Navbar user={props.user} handleAccount={props.handleAccount}/></div>
            <div className='slider'><Slider/></div>
            <div className="footer"><Footer/></div>
        </div>
    );
}
export default Index