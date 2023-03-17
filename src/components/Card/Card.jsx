import { Link } from "react-router-dom";
import style from "./Card.module.css";
import { connect } from "react-redux";
import { addFavorite, removeFavorite } from "../../redux/actions";
import { useState, useEffect } from "react";

function Card({id, name, species, gender, image, onClose, addFavorite, removeFavorite, myFavorites}) { //props, destructoring
   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         removeFavorite(id);
      }else{
         setIsFav(true);
         addFavorite({id, name, species, gender, image, onClose, addFavorite, removeFavorite});
      }
   };

   // useEffect(() => {
   //    myFavorites.forEach((fav) => {
   //       if (fav.id === id) {
   //          setIsFav(true);
   //       }
   //    });
   // }, [id, myFavorites,setIsFav]);


   return (
      <div className={style.div}>
         {isFav ? (
      <button onClick={handleFavorite}>❤️</button>
   ) : ( <button onClick={handleFavorite}>🤍</button>)}
         <button className={style.boton} onClick={() => onClose(id)}>X</button>
         
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
      addFavorite: (character) => {
         dispatch(addFavorite(character))
      },
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