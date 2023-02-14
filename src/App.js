import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/Weather";

const API_KEY = "fe959b6951bbb78880e33fcb4706872b";

class App extends React.Component {
  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    wind: undefined,
    visibility: undefined,
    pressure: undefined,
    sunset: undefined,
    error: undefined,
  };

  gettingWeather = async (e) => {
    e.preventDefault();
    var city = e.target.elements.city.value;

    if (city) {
      const api_url = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await api_url.json();
      console.log(data);
      if (data) {
        if (data.cod === "404") {
          this.setState({
            temp: undefined,
            city: undefined,
            country: undefined,
            wind: undefined,
            visibility: undefined,
            pressure: undefined,
            error: `${data.message}, please make sure you entered the city name correctly in english`,
          });
        } else {
          this.setState({
            temp: data.main.temp,
            city: data.name,
            country: data.sys.country,
            wind: data.wind.speed,
            visibility: data.visibility,
            pressure: data.main.pressure,
            error: undefined,
          });
        }
      }
    } else {
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        wind: undefined,
        visibility: undefined,
        pressure: undefined,
        error: "Please enter the city name",
      });
    }
  };

  render() {
    return (
      <div className=" wrapper">
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-sm-5 info">
                <Info />
              </div>
              <div className="col-sm-7 form">
                <Form weatherMethod={this.gettingWeather} className="submit" />
                <Weather
                  temp={this.state.temp}
                  city={this.state.city}
                  country={this.state.country}
                  wind={this.state.wind}
                  visibility={this.state.visibility}
                  pressure={this.state.pressure}
                  error={this.state.error}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
