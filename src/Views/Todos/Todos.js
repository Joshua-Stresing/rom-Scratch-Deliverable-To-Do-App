import './Todos.css';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { fetchTodos, addTodo, toggleComplete } from '../../services/fetchtodos';


export default function Todos() {
  const [todo, setTodos] = useState([]);
  const [makeTodo, setMakeTodo] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  useEffect(() => {

    const fetchData = async () => {
      try {
        const data = await fetchTodos();
        setTodos(data);

      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, []);

  const handleClick = async (data) => {
    try {
      await toggleComplete(data);
    } catch (e) {
      setError('Ya broke it dummy.Click Testing');  
    }
  };

//   setTodos((prevState) => ([…prevState, newTodo])

  const handleSubmit = async () => { 
      
    try {  
      const submit = await addTodo({ todo:makeTodo, complete:false });
      setTodos((prevState) => [...prevState, submit]);
    } catch (e) {
      setError('Ya broke it dummy.');  
    }
  };

  return (

    <div className='Todos Container'>
      {error && (
        <p>
          {error} <span onClick={() => setError('')}>Testing Error</span>
        </p>
      )}

      <h1>Todo List</h1>
      <input type="text" value={makeTodo} onChange={(e) => setMakeTodo(e.target.value)}></input>
      <button onClick={ handleSubmit }>Add</button>

      { todo.map((todo) => (
        <div className='TodoList' key={todo.id}>
          <p className={todo.complete ? 'completed' : 'incomplete'} onClick={()=>handleClick(todo)}>{todo.todo}</p>
        </div>
      ))}
    </div>

  );
}
