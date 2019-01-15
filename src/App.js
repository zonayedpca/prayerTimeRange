import React, { Component } from 'react';
import axios from 'axios';

import CurrentArea from './components/CurrentArea';
import CurrentInfo from './components/CurrentInfo';
import NextArea from './components/NextArea';
import Footer from './components/Footer';

import './App.css';

class App extends Component {
  state = {
    data: null
  }

  componentDidMount() {
    this.getLocation();
  }

  getLocation = () => {
    navigator.geolocation.getCurrentPosition(async({coords: { latitude, longitude }, timestamp }) => {
      const time = (Math.floor(timestamp/1000));
      console.log(latitude, longitude, time);
      const { data: { data } } = await axios.get(`http://api.aladhan.com/v1/timings/${time}?latitude=${latitude}&longitude=${longitude}`);
      this.setState({ data });
    });
  }

  render() {
    if(!this.state.data) {
      return <p>Loading</p>;
    }

    return (
      <div className="App">
        <CurrentArea data={this.state.data} />
        <CurrentInfo />
        <NextArea data={this.state.data} />
        <Footer />
      </div>
    );
  }
}

export default App;
