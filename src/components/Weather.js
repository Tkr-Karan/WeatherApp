import React from "react";
import {useState, useEffect} from 'react';
import '../styles/Weather.css';
import {apiKey} from '../apis/utiils';

function Weather(){



    const [cityName, setCityName] = useState("");

    // Createing the hook that shows data when we fetch from api --- suitable Data
    const[mainTemp, setMainTemp] = useState('');
    const[description, setDescription] = useState('');
    const[iconId, setIconId] = useState('');
    const[main, setMain] = useState('');
    const[place, setPlace] = useState('');

    


    //Here we create the useEffect hook which will run when the ComponentIsMount --(ComponentDidMount) for the first time on the page.
    // useEffect(() => {
    //     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`)
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log("api data >> ", data);
    //             setMain(data.weather[0].main);
    //             setDescription(data.weather[0].description);
    //             setMainTemp(data.main.temp);
    //             setIconId(data.weather[0].icon);
    //             setPlace(data.name);
    //         })
    // }, [])


    // handle city Name
    const handleCityName = (e) => {
        e.preventDefault();

        setCityName(e.target.value);
        console.log(cityName);
    }

    return(
        <React.Fragment>
            <div className="container">
                <h1> Weather In</h1>
                
                <input 
                    className="searchInput"
                    placeholder="search for a city...." 
                    value={cityName}
                    onChange = {handleCityName}                
                />
                {/* <span>
                    <button>Search</button>
                </span> */}
                <h1>{place}</h1>
                <h2>Temp. : {mainTemp}<sup className="sup">.</sup> C</h2>
                <img className="weather-image" src={"http://openweathermap.org/img/wn/" + iconId + "@2x.png"} alt="weather-logo"/>
                <h2>Temprature Descripiton : {description} </h2>
                <h2>Weather Parameter : {main}</h2>
                {/* <h2>Main Temprature : {mainTemp}</h2> */}
            </div>
        </React.Fragment>
    )
}

export default Weather;