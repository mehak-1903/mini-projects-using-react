import React from 'react'

export default function TodoItem( { task, deleteTask }) {
  return (
    <div>
      <span>{task.text}</span>
      <button onClick={() => deleteTask(task.id)}>❌</button>
    </div>
  )
}
