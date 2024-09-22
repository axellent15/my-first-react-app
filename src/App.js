// import Latihan from "./components/Latihan";
// import Greeting from "./components/Greeting";
// import Welcome from "./components/Welcome";
// import Counter from "./components/Counter";

// function App() {
//   return (
//     <div className="App">
//       <Latihan usia ="21"/>
//       <Greeting />
//       <Counter />
//       <Welcome name="alice"/>
//     </div>
//   );
// }

// export default App;

import React, {useState} from 'react';
import TodoItem from "./components/Todo";
function App(){
  const [Todos, setTodos] = useState([]);
  const [newTodo, setNewToDo] = useState('');

  const addTodo = () => {
    setTodos([...Todos, newTodo]);
    setNewToDo('');
  };

  return (
    <div>
      <h1> My To Do List</h1>
      <input type="text"
      value={newTodo}
      onChange={(e) => setNewToDo (e.target.value)}
      placeholder='Add new to do'
      />
      <button onClick={addTodo}>Add</button> 
      <ul>
        {Todos.map((todo, index) => (
          <TodoItem key={index} item={todo}/>
        ))}  
        </ul>
    </div>
  );
}

/// .map untuk looping

export default App