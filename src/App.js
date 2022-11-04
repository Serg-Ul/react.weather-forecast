import './App.css';
import React, {useState, useEffect} from "react";

export default function App() {

    const [lat, setLat] = useState(0);
    const [long, setLong] = useState(0);
    const [data, setData] = useState({});

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => {
            setLat(position.coords.latitude);
            setLong(position.coords.longitude);
        });

        (async () => {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/weather?lat=${lat}&lon=${long}&appid=${process.env.REACT_APP_API_KEY}`);
            setData(await response.json())
        })()

        console.log(data)
    }, [lat, long]);

    return (
        <div className="App">

        </div>
    );
}