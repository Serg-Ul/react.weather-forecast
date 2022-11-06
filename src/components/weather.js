import '../styles/styles.css';
import React from "react";
import {Button} from "semantic-ui-react";
import moment from "moment";

const WeatherCard = ({weatherData}) => {
    // <Card>
    //     <Card.Content>
    //         <Card.Header className="header">
    //             { weatherData.name }
    //         </Card.Header>
    //         <p>Temperature: { weatherData.main.temp } &deg;C</p>
    //         <p>Sunrise: { new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString() }</p>
    //         <p>Sunset: { new Date(weatherData.sys.sunset * 1000).toLocaleTimeString() }</p>
    //         <p>Description: { weatherData.weather[0].main } &deg;C</p>
    //         <p>Humidity: { weatherData.main.humidity } &deg;C</p>
    //         <p>{ moment().format('dddd') }</p>
    //         <p>{ moment().format('LL') }</p>
    //     </Card.Content>
    // </Card>

    const refresh = () => {
        window.location.reload()
    }

    return (
        <div className="main">
            <div className="top flex">
                <p className="header">{weatherData.name}</p>
                <Button className="button" inverted color='blue' circular icon='refresh' onClick={refresh}/>
            </div>
            <div className="flex">
                <p className="day">{moment().format('dddd')}, <span>{moment().format('LL')}</span></p>
                <p className="description">{weatherData.weather[0].main}</p>
            </div>
            <div className="flex">
                <p className="temp">Temprature: {weatherData.main.temp} &deg;C</p>
                <p className="temp">Humidity: {weatherData.main.humidity} %</p>
            </div>
            <div className="flex">
                <p className="sunrise-sunset">Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
                <p className="sunrise-sunset">Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
            </div>
        </div>
    )
}

export default WeatherCard