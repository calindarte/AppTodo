const Todo = ({ todo, deleteTodos, updateTodos }) => {
  const { id,title, descripcion, state, priority } = todo;
  return (
        <li className="list-group-item d-flex justify-content-between align-items-start">
        <div>
          <h3 className={`${state && "text-decoration-line-through"}`}>{title}</h3>
          <p className={`${state && "text-decoration-line-through"}`}>{descripcion}</p>
          <div className="d-flex gap-2">
            <button onClick={()=>deleteTodos(id)} className="btn btn-danger">Eliminar</button>
            <button onClick={()=> updateTodos(id)} className="btn btn-warning">Actualizar</button>
          </div>
        </div>
        <span className="badge bg-primary rounden-pill">
        {priority && "Prioridad"}
      </span>
        </li>
  );
};

export default Todo;
