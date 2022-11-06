import './App.css';
import React, {useState, useEffect} from "react";
import Weather from "./components/weather";
import {Dimmer, Loader} from "semantic-ui-react";

export default function App() {

    const [lat, setLat] = useState(0);
    const [long, setLong] = useState(0);
    const [data, setData] = useState({});

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => {
            setLat(position.coords.latitude);
            setLong(position.coords.latitude);
        });

        (async () => {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/weather?lat=${lat}&lon=${long}&appid=${process.env.REACT_APP_API_KEY}`);
            setData(await response.json())
        })()
    }, [lat, long]);

    useEffect(() => {
        console.log(data)
    }, [data])

    return (
        <div className="App">
            {
                data.main !== undefined
                    ? <Weather weatherData={data}/>
                    : <Dimmer>
                        <Loader>
                            Loading...
                        </Loader>
                      </Dimmer>
            }
        </div>
    );
}