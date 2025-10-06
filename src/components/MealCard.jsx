import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {FaRegAngry, FaRegThumbsUp, FaSadCry, FaSmile, FaStar, FaStarAndCrescent, FaThumbsUp, FaThumbtack} from "react-icons/fa"
import { FaFaceLaughBeam, FaStarHalfStroke, FaStarOfDavid } from 'react-icons/fa6';
import { MdStarBorder } from 'react-icons/md';
const MealCard = ({ meal }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  
  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem('favorites')) || [];
    setIsFavorite(favs.some(m => m.idMeal === meal.idMeal));
  }, [meal]);

  const toggleFavorite = () => {
    let favs = JSON.parse(localStorage.getItem('favorites')) || [];
    if (isFavorite) {
      favs = favs.filter(m => m.idMeal !== meal.idMeal);
    } else {
      favs.push(meal);
    }
    localStorage.setItem('favorites', JSON.stringify(favs));
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="meal-card">
      <Link to={`/meal/${meal.idMeal}`} style={{color:"white", textDecoration:"none", textAlign:"center"}}>
        <img src={meal.strMealThumb}  alt={meal.strMeal} />
        <p>{meal.strMeal}</p>
      </Link>
      <button className={`favorite ${isFavorite ? 'active' : ''}`} onClick={toggleFavorite}>
        {isFavorite ? <FaStar/> : <MdStarBorder/>}
      </button>
    </div>
  );
};

export default MealCard;