import React from "react";
import {useState, useEffect} from 'react';
import '../styles/Weather.css';
import {apiKey} from '../apis/utiils';

function Weather(){



    const cityName = "Bangalore";

    // Createing the hook that shows data when we fetch from api --- suitable Data
    const[mainTemp, setMainTemp] = useState('');
    const[description, setDescription] = useState('');
    const[iconId, setIconId] = useState('');
    const[main, setMain] = useState('');
    const[place, setPlace] = useState('');

    


    //Here we create the useEffect hook which will run when the ComponentIsMount --(ComponentDidMount) for the first time on the page.
    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`)
            .then((res) => res.json())
            .then((data) => {
                console.log("api data >> ", data);
                setMain(data.weather[0].main);
                setDescription(data.weather[0].description);
                setMainTemp(data.main.temp);
                setIconId(data.weather[0].icon);
                setPlace(data.name);
            })
    }, [])

    return(
        <React.Fragment>
            <div className="container">
                <h1> Weather App</h1>
                
                <input 
                    placeholder="search for a city...."                 
                />
                {/* <span>
                    <button>Search</button>
                </span> */}
                <h1>{place}</h1>
                <h2>Main Temprature : {mainTemp} Degree Celsius</h2>
                <h2>Temprature Descripiton : {description} </h2>
                <h2>Weather Parameter : {main}</h2>
                <img src={"http://openweathermap.org/img/wn/" + iconId + "@2x.png"}/>
                {/* <h2>Main Temprature : {mainTemp}</h2> */}
            </div>
        </React.Fragment>
    )
}

export default Weather;