import React, { useEffect, useState } from 'react';
import { FaYoutube } from 'react-icons/fa';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';

const MealDetail = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(res => res.json())
      .then(data => setMeal(data.meals?.[0]));
  }, [id]);

  if (!meal) return <p>Loading...</p>;

  return (
    
      <>
      <Helmet>
    <title>{meal.strMeal} | Explore Meals</title>
    <meta name="description" content={`Recipe for ${meal.strMeal}, a delicious ${meal.strCategory} dish from ${meal.strArea}.`} />
    <meta property="og:title" content={meal.strMeal} />
    <meta property="og:image" content={meal.strMealThumb} />
  </Helmet>
  <main className="meal-detail">
    <img src={meal.strMealThumb} alt={meal.strMeal} className="meal-detail-img" />
    <section >
      <h2>{meal.strMeal}</h2>
      <p><strong>Category:</strong> {meal.strCategory}</p>
      <p><strong>Area:</strong> {meal.strArea}</p>
      <p><strong>Instructions:</strong></p>
      <p className="instructions">{meal.strInstructions}</p>
     
      <a className="youtube-link" href={meal.strYoutube}>
        Watch a Video <FaYoutube />  
		
	</a>
    </section>
  </main>
      </>
  );
};

export default MealDetail;
