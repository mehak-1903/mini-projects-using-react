import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if(isRunning){
      // start timer.
      timerRef.current = setInterval(() =>{
        setTime((prevTime) => prevTime + 10)
      }, 10)
    }else{
      // Stop timer.
      clearInterval(timerRef.current)
      timerRef.current = null;
    }
    // cleanup function
    return () => clearInterval(timerRef.current);
  }, [isRunning])

  // Reset Timer
  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  }

  // Formatting time
  const minutes = Math.floor(time / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  const milliseconds = Math.floor((time % 1000) / 10);
  return (
    <>
    <h2 className='text-2xl text-red-600'>Stopwatch Timer</h2>
    <h3>
      {String(minutes).padStart(2, "0")};
      {String(seconds).padStart(2, "0")};
      {String(milliseconds).padStart(2, "0")};  
    </h3>
    <button onClick={() => setIsRunning(true)}>Start</button>
    <button onClick={() => setIsRunning(false)}>Stop</button>
    <button onClick={handleReset}>Reset</button>
    </>
  )
}

export default App
