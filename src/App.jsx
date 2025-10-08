import {lazy, Suspense} from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Home = lazy(()=>import('./pages/Home'));
const MealDetails = lazy(()=>import('./pages/MealDetails'));
const Navbar = lazy(()=>import('./components/Navbar'));
const Favorites = lazy(()=>import('./components/Favorites'));

function App() {
  return (
    <BrowserRouter>
      <Navbar />
 <Suspense fallback={<h3 style={{margin:"50px"}}>Loading ...</h3>}>     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meal/:id" element={<MealDetails />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
  </Suspense>
        
    </BrowserRouter>
  );
}

export default App;
