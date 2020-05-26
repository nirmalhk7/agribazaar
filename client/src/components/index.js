import React, { Component } from "react";
import Footer from "./footer-component";
import Navbar from './navbar-component';
import Slider from './slider-component';
import Products from './products-component';
import Offer from "./offer-component";
import "../shared/stylesheets/index-style.css"
import slides from '../shared/data/slider-images'
export default class Index extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            username: "",
        }
        this.handleAccount=this.handleAccount.bind(this)
    }
    handleAccount(user_email="",user_name=""){
        this.setState = {
            email: user_email,
            username: user_name
        }
    }
    render() {
        return (
        <div>
            <div className='navbar'><Navbar user={this.state} handler={this.handleAccount}/></div>
            <div className='slider'><Slider images = {slides.images}/></div>
            <div className="offer"><Offer/></div>
            <div className="containers-fluid">
            <div className='products'><Products/></div>
            </div>
            <div className="footer"><Footer/></div>
        </div>
        );
    }
}