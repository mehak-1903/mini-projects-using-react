import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList( { task, deleteTask }) {
  return (
    <div>
      {task.map((todo) => (
        <TodoItem key={todo.id} task={todo} deleteTask={deleteTask}/>
      ))}
    </div>
  )
}
