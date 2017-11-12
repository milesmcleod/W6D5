import React from 'react';

class Weather extends React.Component {

  constructor() {
    super();
    this.state = {
      name: undefined,
      temperature: undefined,
      conditions: undefined };
  }

  render() {
    return (
      <div className="weather-widget">
        <p>You are in: {this.state.name}</p>
        <p>Temperature: {this.state.temperature}ºF</p>
        <p>Conditions: {this.state.conditions}</p>
      </div>
    );
  }

  componentWillMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const long = position.coords.longitude;
      const request = new XMLHttpRequest();
      request.open(
        'GET',
        `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=88345fe0721896f40ce8992434081cb2`,
         true);

      request.onload = () => {
        if (request.status >= 200 && request.status < 400) {
          const response = JSON.parse(request.responseText);
          console.log(response);
          const name = response.name;
          const temperature = Math.floor(response.main.temp * 9/5 - 459.67);
          const conditions = response.weather[0].description;
          this.setState({name, temperature, conditions});
        } else {
          alert('problems with external weather API');
        }
      };
      request.onerror = function() {
        alert('problems with external weather API');
      };
      request.send();
    });
  }

}

module.exports = Weather;
