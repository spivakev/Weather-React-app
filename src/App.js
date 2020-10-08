import React from 'react';
import Info from './components/Info';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = 'b3f605745d940130f539cb776defe2bb';

class App extends React.Component {

  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    pressure: undefined,
    sunset: undefined,
    error: undefined
  }

  gettingWeather = async (e) => { //event - для отслеживания событий
    e.preventDefault();
    let city = e.target.elements.city.value;

    if (city) {
      const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`); //полностью читаем url и получаем из него данные
      const data = await api_url.json();
      console.log(data)

      if (data.cod !== '200') {
        let error_text;

        if (data.cod === '404') error_text = "Город не найден";
        else error_text = data.message;

        this.setState({
          temp: undefined,
          city: undefined,
          country: undefined,
          pressure: undefined,
          sunset: undefined,
          error: error_text
        })
      }
      else {
        let sunset = data.sys.sunset;
        let date = new Date();
        date.setTime(sunset);
        let sunset_time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

        this.setState({
          temp: data.main.temp,
          city: data.name,
          country: data.sys.contry,
          pressure: data.main.pressure,
          sunset: sunset_time,
          error: undefined
        });
      }
    } else {
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        pressure: undefined,
        sunset: undefined,
        error: "Введите название города"
      });
    }
  }

  render() {
    return (
      <div>
        <Info />
        <Form weatherMethod={this.gettingWeather} />
        <Weather
          temp={this.state.temp}
          city={this.state.city}
          country={this.state.country}
          pressure={this.state.pressure}
          sunset={this.state.sunset}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;