const API_KEY = 'de26d68544e4fb8e272b852437ea6e3d';

export const getFormattedData = async(city) => {

    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    const data = await fetch(URL)
        .then((res) => res.json())
        .then((data) => data );


    console.log(data);

}