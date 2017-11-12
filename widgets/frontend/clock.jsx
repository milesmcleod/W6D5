import React from 'react';

class Clock extends React.Component{

  constructor(){
    super();
    this.state = {
      time: new Date()
    };
  }

  render(){
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    let weekDays = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
    let hours = String(this.state.time.getHours());
    if (hours.length === 1) hours = "0" + hours;
    let minutes = String(this.state.time.getMinutes());
    if (minutes.length === 1) minutes = "0" + minutes;
    let seconds = String(this.state.time.getSeconds());
    if (seconds.length === 1) seconds = "0" + seconds;
    let date = String(this.state.time.getDate());
    let year = String(this.state.time.getFullYear());
    let month = months[this.state.time.getMonth()];
    let day = weekDays[this.state.time.getDay()];
    return (
      <div className = "time-widget">
        <div className="flex-div">
          <h3>TIME: </h3>
          <h3>DATE: </h3>
        </div>

        <br/>
        <div className="flex-div">
          <div className = 'time-numbers'>
            <span>{hours}:</span>
            <span>{minutes}:</span>
            <span>{seconds}</span>
          </div>
          <div className = 'time-numbers'>
            <span>{day} </span>
            <span>{month} </span>
            <span>{date} </span>
            <span>{year}</span>
          </div>
        </div>
      </div>
    );
  }

  tick(){
    const time = new Date();
    this.setState({time});
  }

  componentDidMount() {
    this.handle = setInterval(this.tick.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.handle);
    this.handle = 0;
  }



}



module.exports = Clock;
