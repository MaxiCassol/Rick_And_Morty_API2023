import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import style from "./Detail.module.css"


const Detail = () => {
    const { detailId } = useParams();
    const [character, setCharacter] = useState({});


    //! useEffect usado asi es igual q el componentDidMount
    useEffect(() => {
        const URL_BASE = "https://be-a-rym.up.railway.app/api";
        const KEY = "b7da45408160.1c92e97ddeac70524dff";

        axios(`${URL_BASE}/character/${detailId}?key=${KEY}`).then((response) => 
            setCharacter(response.data)
        );
    }, []); //! si completamos dentro del [] se convierte en un componentDidUpdate



    return(
        <div className={style.Details}>
            {character.name ? (
                <>
                    <h2>{character.name}</h2>
                    <img src={character.image} alt="imagen" />
                    <h2>{character.status}</h2>
                    <h2>{character.species}</h2>
                    <h2>{character.gender}</h2>
                    <h2>{character.origin?.name}</h2>
                    
                </>
            ) : (
                <h3>Loading...</h3>
            )}
        </div>
    );
};

//!  ternario: pregunta ? respuesta positiva : respuesta negativa
export default Detail;