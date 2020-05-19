import React,{Component} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import  Index from "./components/index"
import Login from "./components/login-component";
import SignUp from "./components/signup-component";
import Cart from "./components/cart-component";
import Error from "./components/error-component"
export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        email: "nirmal",
        username: "nirmal"
    }
    this.handleAccount=this.handleAccount.bind(this)
  }
  handleAccount(user_email="",user_name=""){
    this.setState({
      email: user_email,
      username: user_name
    })
  }
  render(){
      return (<Router>
      <div className="App">
            <Switch>
              <Route path="/sign-in" component={() => <Login handler={this.handleAccount}/>} />
              <Route path="/sign-up" component={SignUp} />
              <Route path="/cart" component={Cart} />
              <Route exact path='/' component={() => <Index user={this.state} handler={this.handleAccount} />} />}  />
              <Route exact path='*' component={Error} />
            </Switch>
      </div></Router>
    );
  }
}
