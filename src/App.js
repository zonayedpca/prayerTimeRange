import React, { Component } from 'react';
import axios from 'axios';

import CurrentArea from './components/CurrentArea';
import CurrentInfo from './components/CurrentInfo';
import NextArea from './components/NextArea';
import Footer from './components/Footer';

import { getCurrent } from './utils/getCurrent';

import './App.css';

class App extends Component {
  state = {
    prayers: null,
    currentPrayer: null
  }

  componentDidMount() {
    this.getLocation();
  }

  getLocation = () => {
    navigator.geolocation.getCurrentPosition(async({coords: { latitude, longitude }, timestamp }) => {
      const time = (Math.floor(timestamp/1000));
      let { data: { data } } = await axios.get(`//api.aladhan.com/v1/timings/${time}?latitude=${latitude}&longitude=${longitude}`);
      let { data: { data: nextData } } = await axios.get(`//api.aladhan.com/v1/timings/${(time + (24 * 60 * 60))}?latitude=${latitude}&longitude=${longitude}`);
      data = data.timings;
      nextData = nextData.timings;
      const prayers = {
        today: data,
        tomorrow: nextData
      }
      const currentPrayer = getCurrent(prayers.today, prayers.tomorrow);
      this.setState({ prayers, currentPrayer });
    });
  }

  render() {
    const { prayers, currentPrayer } = this.state;
    if(!prayers) {
      return <p>Loading</p>;
    }

    return (
      <div className="App">
        <CurrentArea currentPrayer={currentPrayer} />
        <CurrentInfo currentPrayer={currentPrayer} />
        <NextArea prayers={prayers} />
        <Footer />
      </div>
    );
  }
}

export default App;
