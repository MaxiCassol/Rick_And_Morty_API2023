import Card from '../Card/Card';
import style from './Cards.module.css'


export default function Cards({ characters, onClose}) {
   return(
   <div className={style.cardd}>
      {characters.map(({id, name, species, gender, image}) => {
         return(
            <div className={style.individual}>
               <Card
               key={id}
               name={name}
               species={species}
               gender={gender}
               image={image}
               id={id}
               onClose={onClose}// llamo a la function
               />
            </div>
         );
         })}
   </div>
   );
}
