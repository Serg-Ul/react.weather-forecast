import '../styles/styles.css';
import React from "react";
import {Card} from "semantic-ui-react";

const WeatherCard = ({weatherData}) => (
    <Card>
        <Card.Content>
            <Card.Header className="header">
                { weatherData.name }
            </Card.Header>
        </Card.Content>
    </Card>
)

export default WeatherCard