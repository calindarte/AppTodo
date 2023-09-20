import { useState } from "react";

const Cat =()=>{

    const [cat,setCat]= useState({name:'dexter', year: 2})

    const handleClick =()=>{
        
        setCat({...cat, year: cat.year +1})
    }


    return (
        <>
        <h1>{cat.name} - {cat.year}</h1>
        <button className="btn btn-dark" onClick={handleClick}>Actualizar</button>
        </>
    )
}

export default Cat;