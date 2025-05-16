import { useEffect, useState } from 'react';
import MealCard from '../components/MealCard';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(favs);
  }, []);

  return (
    <div className="meal-grid">
      {favorites.length > 0 ? (
        favorites.map(meal => <MealCard key={meal.idMeal} meal={meal} />)
      ) : (
        <p style={{ textAlign: 'center', padding: '2rem' }}>No favorite meals yet.</p>
      )}
    </div>
  );
};

export default Favorites;