// import React from 'react';
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// function TodoItem({ todo, index, deleteTodo, toggleTodo }) {
//   return (
//     <li
//       style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}
//     >
//       {todo.text}
//       <button onClick={() => toggleTodo(index)}>✓</button>
//       <button onClick={() => deleteTodo(index)}>✕</button>
//     </li>
//   );
// }

// export default TodoItem;

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
