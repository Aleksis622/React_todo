import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import ToDo from './ToDo';
import DiariesList from './DiariesList';

function App() {
  const [todos,setTodos] = useState([
    { task: "Iemācīties React", completed: false },
    { task: "Iemācīties Laravel", completed: true },
    { task: "Nopirkt pienu", completed: false },

    function handleToggle(id) {
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      );
    }
  ]); 
  function handleAdd(event) {
      event.preventDefault();
      console.log("Added");
      const newTodo = {
      id: crypto.randomUUID(),
      task: newTask,
      completed: false,
      }
      setTodos([...todos, newTodo]);  
      setNewTask("");
      function handleDelete(id) {
        setTodos((prevTodos) => prevTodos.filter(todo => todo.id !== id));
      };
    }
 
  


  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/diariesList" element={<DiariesList />} />
        
          <Route
            path="/"
            element={
              <>
                <h1>Veicamie uzdevumi</h1>
                <div className="todo-container">
                  <div className="todo-list">
                    {todos.map((todo) => (
                      <ToDo key={todo.id} {...todo} toggleCompletion={toggleCompletion} />
                    ))}
                    
                    <label input
                      value={newTask}
                      onChange={(event) => setNewTask(event.target.value)}
                      >
                    <form onSubmit={handleAdd}>
                    
                      <button>Submit</button>
                      </form>
                      </label>
                  </div>
                </div>
                {/* Button linking to the diary page */}
                <Link to="/diariesList">
                  <button className="navigate-button">Uz dienagrāmatu!</button>
                </Link>
              </>
            }
          />
          

        </Routes>
      </div>
    </Router>
  );
}

export default App;

