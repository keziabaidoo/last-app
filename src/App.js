import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <WelcomeComponent name="Kezia" />
     
    </div>
  );
}

class WelcomeComponent extends React.Component{
  render(){
    return<h1>{this.props.name} is awesome,React Works!!!</h1>
  }
}

export default App;
