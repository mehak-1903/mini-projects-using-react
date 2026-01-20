// todo logic

import { useState } from 'react';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';

export default function Home() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    if(text.trim() === "") return;
    setTasks([...tasks, {id: Date.now(), text}]);
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
  }

  return (
    <div>
        <h1>Welcome</h1>
        <TodoForm addTask={addTask} />
        <TodoList task={tasks} deleteTask={deleteTask}/>
    </div>
  )
}
