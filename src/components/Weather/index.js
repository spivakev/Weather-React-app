import React from 'react';

class Weather extends React.Component {
  render() {
    return (
      <div>
        {this.props.city &&
          <div>
            <p>Температура: {this.props.temp}</p>
            <p>Местоположение: {this.props.city}, {this.props.country}</p>
            <p>Давление: {this.props.pressure}</p>
            <p>Закат: {this.props.sunset}</p>
          </div>
        }
      </div>

    );
  }
}

export default Weather;