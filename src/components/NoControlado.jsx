import { useRef, useState } from "react";

const NoControlado = () => {
    const form= useRef(null)
    const [error,setError] = useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        setError('');
        
        console.log('me diste click')
        //capturar los datos
        //toma los datos del form atraves de current
        const data = new FormData(form.current)

        //lo transformo en formato objeto y hago la desestructuracion
        const {title,descripcion,state} = Object.fromEntries([...data.entries()])
        
        //Validar los datos
        if(!title.trim() || !descripcion.trim() || !state.trim()) return (setError('llena todos los campos'));


        console.log(title,descripcion,state)
    }

  return (
    <form onSubmit={handleSubmit} ref={form}>
    <input type="text" placeholder="Ingrese todo" name="title" className="form-control mb-2"/>
    <textarea placeholder="Ingrese descripcion" name="descripcion" className="form-control mb-2"/>
    <select className="form-select mb-2" name="state" >
        <option value='pendiente'>pendiente</option>
        <option value="completado">completado</option>
    </select>
    <button type="submit" className="btn btn-primary">procesar</button>
    {
        error !== '' && error
    }
    </form>
  )
}

export default NoControlado
