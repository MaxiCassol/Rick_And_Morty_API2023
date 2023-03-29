import { Link, useLocation } from "react-router-dom";
import style from "./Card.module.css";
import { connect, useDispatch } from "react-redux";
import { removeFavorite, getFavorites } from "../../redux/actions";
import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";

function Card({id, name, species, gender, image, onClose, myFavorites}) { //props, destructoring
   const [isFav, setIsFav] = useState(false);
   const dispatch = useDispatch();
   const { pathname } = useLocation();

   const addFavorite = (character) => {
      axios
      .post("http://localhost:3001/rickandmorty/fav", character)
      .then((res) => console.log("ok"));
   };

   const removeFavorite = async (id) => {
      await axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`)
      dispatch(getFavorites());
      alert("Se ha eliminado!")
   }

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         removeFavorite(id);
      }else{
         setIsFav(true);
         addFavorite({id, name, species, gender, image,});
      }
   };

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);


   return (
      <div className={style.div}>
         <div className={style.divButton}>
            {isFav ? (
            <button className={style.botonFav2} onClick={handleFavorite}>❤️</button> 
            ) : ( <button className={style.botonFav1} onClick={handleFavorite}>🤍</button>)}
            
            {pathname !== "/favorites" && <button className={style.botonX} onClick={() => onClose(id)}>X</button>}
         </div>
         
         <Link to={`/detail/${id}`}>
            <h2 className={style.name}>{name}</h2>
         </Link>
         <img className={style.imag} src={image} alt=""/> 
         <h2 className={style.Species}>Specie: {species}</h2>
         <h2 className={style.Genero}>Gender: {gender}</h2>
         
      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      removeFavorite: (id) => {
         dispatch(removeFavorite(id))
      }
   };
};

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites,
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);