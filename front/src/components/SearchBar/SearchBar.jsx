import { useState } from 'react';
import style from './SearchBar.module.css'

export default function SearchBar(props) {
   const [id, setId] = useState(""); //guardo el imput '2', solo ese numero
   const handleChange = (evento) => {  // si cambia el imput actualiza este estado
      setId(evento.target.value) //setId modifica el id, segun lo q reciba en el imput
   } 

   return (
      <div className={style.div}>
         <input className={style.input} type='search' onChange={handleChange}/>
         <button className={style.botonSearch} onClick={() => props.onSearch(id)}>Search</button> 
      </div>
   );
}
