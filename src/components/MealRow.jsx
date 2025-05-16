// import React, { useEffect, useState } from 'react';
// import MealCard from './MealCard';

// const MealRow = ({ title }) => {
//   const [meals, setMeals] = useState([]);

//   useEffect(() => {
//     fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${title}`)
//       .then((res) => res.json())
//       .then((data) => setMeals(data.meals || []));
//   }, [title]);

//   return (
//     <div className="meal-row">
//       <h2>{title}</h2>
//       <div className="meal-row__scroll">
//         {meals.map((meal) => (
//           <MealCard key={meal.idMeal} meal={{ title: meal.strMeal, image: meal.strMealThumb }} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MealRow;
