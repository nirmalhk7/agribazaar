import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import  Index from "./components/index"
import Login from "./components/login-component";
import SignUp from "./components/signup-component";
import Cart from "./components/cart-component";
import Error from "./components/error-component"
import Product from "./components/product-description-component"
function App() {
  return (<Router>
    <div className="App">
          <Switch>
            <Route exact path='/' component={Index} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/cart" component={Cart} />
            <Route path="/product/:id" component={Product}/>
            <Route exact path='*' component={Error} />
          </Switch>
    </div></Router>
  );
}

export default App;