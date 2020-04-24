import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from './components/footer-component'
import Login from "./components/login-component";
import SignUp from "./components/signup-component";
import Index from "./components/index";

function App() {
  return (<Router>
    <div>
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route exact path='/' component={Index} />
          </Switch>
        </div>
      </div>
    </div>
    <Footer/>
    </Router>
  );
}

export default App;