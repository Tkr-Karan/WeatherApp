import React from "react";
import {useState, useEffect} from 'react';

function Weather(){

    const apiKey = 'de26d68544e4fb8e272b852437ea6e3d';

    const cityName = "Delhi";

    // Createing the hook that shows data when we fetch from api --- suitable Data
    const[mainTemp, setMainTemp] = useState('');
    const[description, setDescription] = useState('');
    const[iconId, setIconId] = useState('');
    const[main, setMain] = useState('');

    


    //Here we create the useEffect hook which will run when the ComponentIsMount --(ComponentDidMount) for the first time on the page.
    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`)
            .then((res) => res.json())
            .then((data) => {
                console.log("api data >> ", data);
                setMain(data.weather[0].main);
                setDescription(data.weather[0].description);
                setMainTemp(data.main.temp -272.15);
                setIconId(data.weather[0].icon);
            })
    }, [])

    return(
        <React.Fragment>
            <h1>This is my Weather app</h1>
            <h2>Main Temprature : {mainTemp} Degree Celsius</h2>
            <h2>Temprature Descripiton : {description} </h2>
            <h2>Weather Parameter : {main}</h2>
            {/* <h2>Main Temprature : {mainTemp}</h2> */}
        </React.Fragment>
    )
}

export default Weather;