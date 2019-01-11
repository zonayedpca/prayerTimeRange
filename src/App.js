import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="current-area">
          <div className="navbar">
            <div className="brand">
              PrayerRange
            </div>
            <div className="search">
              <input className="input search" placeholder="Enter Your Location" />
            </div>
          </div>
          <div className="current-details">
            <div className="current-salaat">
              <p>It's time for</p>
              <h2>Fajr</h2>
            </div>
            <div className="time-remaining">
              <p>Time Remaining</p>
              <h2>00:00</h2>
            </div>
          </div>
        </div>
        <div className="current-info">
          <div className="current location">
            <p>Location</p>
            <h4>Kharar, Mohali</h4>
          </div>
          <div className="current started">
            <p>Started</p>
            <h4>00:00</h4>
          </div>
          <div className="current will-end">
            <p>Will End</p>
            <h4>00:00</h4>
          </div>
        </div>
        <div className="next-area">
          <div className="section-title">
            <h3>Next Prayers</h3>
          </div>
          <div className="prayers">
            <div className="prayer general">
              <h4>Johar</h4>
              <p>Will Start At 00:00</p>
            </div>
            <div className="prayer general">
              <h4>Achr</h4>
              <p>Will Start At 00:00</p>
            </div>
            <div className="prayer general done">
              <h4>Magrib</h4>
              <p>Finished</p>
            </div>
            <div className="prayer general">
              <h4>Esha</h4>
              <p>Will Start At 00:00</p>
            </div>
            <div className="prayer general">
              <h4>Johar</h4>
              <p>Will Start At 00:00</p>
            </div>
          </div>
        </div>
        <div className="footer-area">
          <div className="footer hadis">
            <blockquote>Consider if one of you had a river by his door in which he bathed five times a day. Would any filth remain on him?” They said, “No.” Then the Prophet replied: “Likewise, Allah wipes away sins with the five daily prayers.</blockquote>
          </div>
          <div className="footer credit">
            <p>With <strong>❤</strong> By
              <a href="#">Zonayed Ahmed</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
