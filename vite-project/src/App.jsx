import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import ToDo from './ToDo';
import DiariesList from './DiariesList';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, task: "Iemācīties React", completed: false },
    { id: 2, task: "Iemācīties Laravel", completed: true },
    { id: 3, task: "Nopirkt pienu", completed: false },
  ]);

  const toggleCompletion = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/DiariesList" element={<DiariesList />} />
        
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
                  </div>
                </div>
                {/* Button linking to the diary page */}
                <Link to="/diariesList">
                  <button className="navigate-button">Uz dienagrāmatu!</button>
                </Link>
              </>
            }
          />
           <Route
            path="/diariesList"
            element={<DiariesList />}
          />

        </Routes>
      </div>
    </Router>
  );
}

export default App;

