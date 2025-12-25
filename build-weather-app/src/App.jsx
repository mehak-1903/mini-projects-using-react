import React, { useEffect, useState } from 'react'
import './App.css'

const API_KEY = '29fa8f727ad0597ae2b6348bad3233aa';
function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const fetchData = () => {
    if (!city) return;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
      .then((res) => res.json())
      .then((data) => {
        if (data.cod === 200) {
          setWeather(data);
          setError("");
        } else {
          setError(data.message);
          setWeather(null);
        }
      })
  }
  return (
    <div className='min-h-screen bg-slate-900 flex items-center justify-center'>
      <div className='bg-slate-800 text-white w-full max-w-md p-6 rounded-2xl shadow-lg'>
        <h2 className='text-3xl font-bold text-orange-600 mb-6 text-center'> 🌤 Weather App.</h2>
        <div className='flex gap-2 mb-4'>
          <input type="text" placeholder='Enter your city here.' value={city} onChange={(e) => setCity(e.target.value)} className='flex-1 px-4 py-2 rounded-lg text-white bg-slate-700 border border-slate-600 placeholder-gray-400 focus:border-orange-400 focus:ring-1 focus:ring-orange-400 focus:outline-none transition' />
          <button onClick={fetchData} className='bg-orange-500 hover:bg-orange-600 font-semibold px-6 rounded-full font-semibold cursor-pointer'>Search</button>
        </div>
        {error && (<p className='text-center mt-3 font-semibold text-red-400'>{error}</p>)}
        {weather && (
          <div className='mt-6 text-center space-y-2'>
            <h2 className='text-2xl font-bold'>City name: {weather.name}</h2>
            <h3 className='capitalize text-gray-300'>Weather Description: {weather.weather[0].description}</h3>
            <h3 className='text-4xl font-bold text-orange-400'>Temperature: {weather.main.temp}°C</h3>
          </div>
        )}

      </div>
    </div>
  )
}

export default App
