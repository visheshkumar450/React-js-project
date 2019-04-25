import React, { Component } from 'react';
import './App.css';
import Navb from "./components/Navbar";
import Imageslider from "./components/imageslider"
import Text from "./components/Text"
import Button1 from "./components/Button1"
import Footer from "./components/Footer"
import Articles from './components/Articles'
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/index"
class App extends Component {
  render() {
    return (
     <React.Fragment> 
        <Navb />
        <Imageslider/>
        <Text />
        <Button1 />
        <Articles />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
