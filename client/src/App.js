import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {apiResponse:"this is static msg :( make sure backend server running on port:9000"};
  }

  callAPI(){
    fetch("http://localhost:9000/testApi/")
    .then(res =>res.text())
    .then(res => this.setState({apiResponse:res}));
  }

  componentWillMount(){
    this.callAPI();
  }
render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {this.state.apiResponse}
        </p>
      </header>
    </div>
  );
}
}

export default App;
