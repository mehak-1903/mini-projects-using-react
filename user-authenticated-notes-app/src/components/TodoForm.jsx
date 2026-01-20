import React, { useState } from 'react'

export default function TodoForm({ addTask }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(text);
    setText("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' placeholder='Enter todo' value={text} onChange={(e) => setText(e.target.value)}/>
      <button>Add</button>
    </form>
  )
}
