import { useEffect, useState } from 'react'
import './App.css'

const API_Key = 'OnAVlvu5fTUlsTWZIMuaeg==Gv0IwB00WOiHe4wj'

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {

      try {
        const res = await fetch(`https://api.api-ninjas.com/v2/quotes?categories=success%2Cwisdom`, {
          headers: {
            'X-Api-Key': API_Key
          }
        })
        const data = await res.json();
        setQuote(data[0].quote);
        setAuthor(data[0].author);
        setLoading(false);
      } catch (err) {
        setError("Unable to fetch data.", err);
        setLoading(true);
      }
    }
    fetchData()
  }, [])
  return (
    <>
      <h2>Quote Generator.</h2>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!error && (
        <>
          <p>"{quote}"</p>
          <p>- {author}</p>
        </>
      )}
    </>
  )
}

export default App