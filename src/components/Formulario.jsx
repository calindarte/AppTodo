import { useState } from "react";
import Swal from "sweetalert2";

const Formulario = ({addTodos}) => {

  const [todo, setTodo] = useState({
    title: "tarea #1",
    descripcion: "descripcion #1",
    state: "pendiente",
    priority:true
  });

  // const [error, setError] = useState('')

  const {title, descripcion,state, priority} = todo;

  const handleSubmit = (e) => {
    e.preventDefault();
    // setError('')
    if(!title.trim() || !descripcion.trim()){
      console.log("Datos incompletos");
      Swal.fire({
          title: "Error!",
          text: "Título y descripción son obligatorios",
          icon: "error",
      });
      return;
    }
    console.log(title, descripcion, state, priority);
    addTodos({
      id:Date.now(),
      ...todo,
      state: state === 'completado',
    });
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Tarea agregada con éxito",
      showConfirmButton: false,
      timer: 1500,
  });

  };

  const handleChange = (e) => {
    //setTodo({...todo, priority:e.target.checked})
    const {name, value, type,checked} = e.target
    setTodo({ ...todo, [name]: type === 'checkbox'? checked :value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ingrese todo"
        name="title"
        className="form-control mb-2"
        value={title}
        onChange={handleChange}
      />
      <textarea
        placeholder="Ingrese descripcion"
        name="descripcion"
        className="form-control mb-2"
        value={descripcion}
        onChange={handleChange}
      />
      <div className="form-check mb-2">
        <input
          type="checkbox"
          name="priority"
          className="form-check-input"
          id="inputCheck"
          checked={priority}
          onChange={handleChange}

        />
        <label htmlFor="inputCheck">Dar prioridad</label>
      </div>
      <select
        className="form-select mb-2"
        name="state"
        value={state}
        onChange={handleChange}
      >
        <option value="pendiente">pendiente</option>
        <option value="completado">completado</option>
      </select>
      <button type="submit" className="btn btn-primary">
        Agregar Todos
      </button>
    </form>
  );
};

export default Formulario;
