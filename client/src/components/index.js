import React, { Component } from "react";
import Footer from "./footer-component";
import Navbar from './navbar-component';
import Slider from './slider-component';
export default class Index extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            username: ""
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
            <div className='slider'><Slider/></div>
            <div className="footer"><Footer/></div>
        </div>
        );
    }
}