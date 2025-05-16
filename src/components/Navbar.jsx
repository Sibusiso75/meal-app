import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <h2 className="logo">Meal Recipes</h2>
    <div className="nav-links">
      <Link to="/">Home</Link>
      <Link to="/favorites">Favorites</Link>
    </div>
  </nav>
);

export default Navbar;
