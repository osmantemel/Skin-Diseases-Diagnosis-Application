import React, { Component } from 'react';
import Fotoload from './Components/Fotoload';
import Navbar from './Components/Navbar';
import PieChartComponent from './Components/PieChart';
import Footer from './Components/Footer';
import MyComponent from './Components/MyComponent';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        {/* <MyComponent/> */}
        <Fotoload />
        {/* <PieChartComponent/> */}
        <Footer/>
      </div>
    );
  }
}

export default App;
