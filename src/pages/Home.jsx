import React, { useEffect, useState } from 'react';
import SearchBar from '../components/Searchbar';
import MealGrid from '../components/MealGrid';
import Pagination from '../components/Pagination';
import { Helmet } from 'react-helmet';

const Home = () => {
  const [meals, setMeals] = useState([]);
  const [filteredMeals, setFilteredMeals] = useState([]);
  const [page, setPage] = useState(1);

  const fetchMeals = (url) => {
    fetch(url)          
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then(data => {
        const results = data.meals || [];
        setMeals(results);
        setFilteredMeals(results.slice(0, 12));
        setPage(1);
      })
      .catch(error => {
        console.error('Error fetching meals:', error);
        setMeals([]);
        setFilteredMeals([]);
      });
  };

  useEffect(() => {
    fetchMeals('https://www.themealdb.com/api/json/v1/1/search.php?s=');
  }, []);

  const handleSearch = (query = '', ingredient = '', category = '') => {
    if (query) fetchMeals(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    else if (ingredient) fetchMeals(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    else if (category) fetchMeals(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
    else fetchMeals('https://www.themealdb.com/api/json/v1/1/search.php?s=');
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
    const start = (newPage - 1) * 12;
    setFilteredMeals(meals.slice(start, start + 12));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const totalPages = Math.ceil(meals.length / 12);

  return (
    <div>
      <br />      
      <br />
      <br />

      <Helmet>
  <title>Meal Recipe App</title>
  <meta name="description" content="Discover, search, and explore delicious meal recipes by category or ingredient." />
</Helmet>
      <SearchBar onSearch={handleSearch} />
      <MealGrid meals={filteredMeals} />
      <Pagination currentPage={page} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
};

export default Home;
