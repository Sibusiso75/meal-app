import MealCard from './MealCard';

const MealGrid = ({ meals }) => {

  return (
    <div className="meal-grid">
      {
        meals.length > 0 ? (
          meals.map(meal => <MealCard key={meal.idMeal} meal={meal} />)
        ) : (
          <p style={{ textAlign: 'center', padding: '2rem' }}>No meals found.</p>
        )
      }
     
    </div>
  );
};

export default MealGrid;
