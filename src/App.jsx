import { useEffect, useState } from "react";
import Formulario from "./components/Formulario";
import Todos from "./components/Todos";

const inicialTodos = JSON.parse(localStorage.getItem('Todos')) || [];

const App = () => {

  const [todos, setTodos] = useState(inicialTodos)
  useEffect(()=>{
    localStorage.setItem('Todos', JSON.stringify(todos))
  },[todos])

  const addTodos = (todo)=>{
    setTodos([...todos, todo])
  }
  const deleteTodos = id =>{
    const newArray = todos.filter(todo => todo.id != id );
    setTodos(newArray);
  }
  const updateTodos = id =>{
    const newArray = todos.map((todo)=>{
      if(todo.id === id){
        todo.state = !todo.state
      }
      return todo;
    })
    setTodos(newArray)
  }

  const orderTodos = (arrayTodos)=>{
    return arrayTodos.sort((a,b)=>{
      if(a.priority === b.priority) return 0;
      if(a.priority) return -1;
      if(!a.priority) return 1;
    })
  }
  
  return (
    <div className="container">
      <h1>Formulario</h1>
      <Formulario addTodos={addTodos}/>
      <Todos todos={orderTodos(todos)} deleteTodos={deleteTodos} updateTodos={updateTodos}/>
    </div>
  );
};

export default App;
