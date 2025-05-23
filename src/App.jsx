
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MealDetails from './pages/MealDetails';
import Navbar from './components/Navbar';
import Favorites from './components/Favorites';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meal/:id" element={<MealDetails />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
