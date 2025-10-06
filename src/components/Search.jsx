import { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
      .then(res => res.json())
      .then(data => setIngredients(data.meals));

    fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
      .then(res => res.json())
      .then(data => setCategories(data.meals));
  }, []);

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search meals..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <select onChange={(e) => onSearch(query, e.target.value, '')}>
        <option value="">All Ingredients</option>
        {ingredients.map(i => (
          <option key={i.strIngredient} value={i.strIngredient}>{i.strIngredient}</option>
        ))}
      </select>
      <select onChange={(e) => onSearch(query, '', e.target.value)}>
        <option value="">All Categories</option>
        {categories.map(c => (
          <option key={c.strCategory} value={c.strCategory}>{c.strCategory}</option>
        ))}
      </select>
      <FaSearch style={{padding:"10px",background:"teal", color:"white"}} onClick={() => onSearch(query)}/>
    </div>
  );
};

export default Search;