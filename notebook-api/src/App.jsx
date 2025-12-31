import { useState } from 'react'
import './App.css'

function App() {
  const [inputText, setInputText] = useState("");    // type input text
  const [addText, setAddText] = useState([]);       // button clicked => adding text to the list

  const addTodo = () => {
    if(inputText.trim() === "") return;  // if input field is an empty string -> return
    setAddText([...addText, {id: Date.now(), text: inputText}]);
    setInputText("");
  }

  const deleteTodo = (id) => {
    setAddText(addText.filter((item) => item.id !== id))
  }

  return(
    <>
      <h2>Notebook App</h2>
      <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} />
      <button onClick={addTodo}>Add</button>

      <ul>
        {addText.map((item) => (
          <li key={item.id}>{item.text}<button onClick={() => deleteTodo(item.id)}>Delete</button></li>
        ))}
        
      </ul>
    </>
  )
}

export default App
