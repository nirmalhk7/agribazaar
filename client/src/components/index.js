import React, { Component } from "react";
import '../App.css';
import Footer from "./footer-component";
import Navbar from './navbar-component';
import Slider from './slider-component';
export default class Index extends Component {
    constructor(props) {
        super(props);
    }
    handleChangeField(key, event) {

    }
    handleSubmit(){

    }
    render() {
        return (
        <div>
            <div className='slider'><Navbar/></div>
            <div className='slider'><Slider/></div>
        </div>
        );
    }
}