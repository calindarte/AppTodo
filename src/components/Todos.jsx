import Todo from "./Todo"
const Todos = ({todos, deleteTodos, updateTodos}) => {
  return (
    <div className="my-4">
      <h1 className="text-center">Todos</h1>
      <ul className="list-group gap-3">
        {
            todos.map((todo) => (
            <Todo key={todo.id} todo={todo} deleteTodos={deleteTodos} updateTodos={updateTodos}/>
            ))
        }
        {
          todos.length === 0 && (<li className="list-group-item text-center">Sin valores</li>)
        }
        
      </ul>
    </div>
  )
}

export default Todos
