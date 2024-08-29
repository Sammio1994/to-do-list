import React, { useState } from 'react';
import "./App.css"

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text, isCompleted: false }];
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <TodoForm addTodo={addTodo} />
      <ul>
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            index={index}
            todo={todo}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;

function TodoItem({ todo, index, deleteTodo, toggleTodo }) {
  return (
    <li
      style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}
    >
      {todo.text}
      <button onClick={() => toggleTodo(index)}>✓</button>
      <button onClick={() => deleteTodo(index)}>✕</button>
    </li>
  );
}

function TodoForm({addTodo}) {
    const [inputText, setInputText] = useState("");
    const handleInputChange = (e) => {
      setInputText(e.target.value);
    };
    return ( 
        <div>
        <input type="text" onChange={handleInputChange} />
        <h1>{inputText}</h1>
        <button onClick={
            () => addTodo (inputText)
        }>Add Items</button>
      </div>
    )
}


// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
