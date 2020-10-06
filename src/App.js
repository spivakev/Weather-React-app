import React from 'react';
import Info from './components/Info';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = 'b3f605745d940130f539cb776defe2bb';

//'api.openweathermap.org / data / 2.5 / weather ? q = London & appid={ API key }'
//api.openweathermap.org/data/2.5/weather?q=Kiev,ua&appid=ВАШ_КЛЮЧ&units=metric

class App extends React.Component {

  gettingWeather = async (e) => { //event - для отслеживания событий
    e.preventDefault();
    let city = e.target.elements.city.value;
    const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`); //полностью читаем url и получаем из него данные
    const data = await api_url.json();
    console.log(data);
  }

  render() {
    return (
      <div>
        <Info />
        <Form weatherMethod={this.gettingWeather} />
        <Weather />
      </div>
    );
  }
}

export default App;