import React, { Component } from "react";
import axios from 'axios';
export default class Login extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          user_email:'',
          user_password:''
        }
    
        this.handleChangeField = this.handleChangeField.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChangeField(key, event) {
        this.setState({
          [key]: event.target.value,
        });
    }
    handleSubmit(){
        const { user_email,user_password } = this.state;
        console.log("Posting "+user_email+"-"+user_password)
        return axios.post('http://localhost:9000/api/login', {
          user_email,
          user_password
        });
    }
    render() {
        const { user_email,user_password } = this.state;
        return (
            <form>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input required onChange={(ev) => this.handleChangeField('user_email', ev)} value={user_email} className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input required onChange={(ev) => this.handleChangeField('user_password', ev)} type="password" value={user_password} className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button onClick={this.handleSubmit} className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        );
    }
}