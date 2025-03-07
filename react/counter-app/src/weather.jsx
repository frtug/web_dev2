import React, { useEffect, useState } from 'react';
import './App.css'
function Weather() {
    const weatherData = {
        "New York": { temperature: "14°C", condition: "Partly Cloudy", humidity: "78%" },
        "London": { temperature: "10°C", condition: "Rainy", humidity: "82%" },
        "Tokyo": { temperature: "22°C", condition: "Sunny", humidity: "65%" },
        "Sydney": { temperature: "17°C", condition: "Cloudy", humidity: "71%" },
        "Paris": { temperature: "12°C", condition: "Clear", humidity: "77%" }
    };
    const [seachedCity,setSeachedCity] = useState("")
    const [data,setData] = useState(null);
    const [filterData,setFilterData] = useState(data);
    const [visitedCities,setVisitedCities] = useState([]);

    const handleClick = ()=>{
        const promise = new Promise(resolve=> resolve(weatherData))
        promise.then((d)=>{setData(d)})

    }
    const handleSearch = (city)=>{
        setSeachedCity(city)
        const promise = new Promise(resolve=> resolve(weatherData))
        promise.then((d)=>{setData(d)})
    }

    useEffect(()=>{
        if(data){
            console.log(data)
            setFilterData(data[seachedCity])
            setVisitedCities(prev => {
                prev = prev.slice(-1)
                console.log(prev)
                return !prev.includes(seachedCity) ? 
                [...prev,seachedCity] :
                 prev
            })
        }
    },[data])

    return (
        <div>
            <input
                type="text"
                value={seachedCity}
                onChange={(e) => setSeachedCity(e.target.value)}
                placeholder="Enter city name"
            />
            <button className="btn" onClick={handleClick} >Search</button>

            {filterData ? (
                <div>
                    <h2>{filterData.name}</h2>
                    <p>Temperature: {filterData.temperature}</p>
                    <p>Condition: {filterData.condition}</p>
                    <p>Humidity: {filterData.humidity}</p>
                </div>
            ) : (
                <p>Not a valid city</p>
            )}

            <div>
                <h3>Searched Cities:</h3>
                {visitedCities.length > 0 && visitedCities.map((cityName, index) => (
                    <button className="btn" key={index} onClick={()=>handleSearch(cityName)}>
                        {cityName}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Weather;