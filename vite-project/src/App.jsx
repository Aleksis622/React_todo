import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import ToDo from './ToDo';
import DiariesList from './DiariesList';

function App() {
  const [pets, setPets] = useState([
    { id: 1, species: "Kaķis", name: "Muris" },
    { id: 1, species: "Suns", name: "Duksis" },
  ]);

  setTodos([...todos, newTodo]);
  setNewTask("");

  function handleAdd(event) {
    event.preventDefault();
    console.log("Added");

    const newTodo = {
      id: crypto.randomUUID(),
      task: newTask,
      completed: false,
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
                    <form onSubmit={handleAdd}>
                    <input
                      value={newTask}
                      onChange={(event) => setNewTask(event.target.value)}
                      />
                      <button>Submit</button>
                      </form>
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

