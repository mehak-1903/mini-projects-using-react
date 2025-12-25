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
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 text-white p-8 rounded-xl shadow-lg w-80 text-center">
        
        <h2 className="text-3xl font-bold mb-6 text-red-500">
          Stopwatch
        </h2>

        <div className="text-4xl font-mono mb-8">
          {String(minutes).padStart(2, "0")}:
          {String(seconds).padStart(2, "0")}:
          {String(milliseconds).padStart(2, "0")}
        </div>

        <div className="flex justify-between gap-3">
          <button
            onClick={() => setIsRunning(true)}
            className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg transition"
          >
            Start
          </button>

          <button
            onClick={() => setIsRunning(false)}
            className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-lg transition"
          >
            Stop
          </button>

          <button
            onClick={handleReset}
            className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition"
          >
            Reset
          </button>
        </div>

      </div>
    </div>
  )
}

export default App
