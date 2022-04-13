// Les methodes de react router dom(BrowserRouter, Routes et Route) permettent de creer l'arborescence(differentes pages) de notre single page application react
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import des differentes pages
import Home from "./pages/Home";
import About from "./pages/About";
import Rental from "./pages/Rental";
import Error from "./pages/Error";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/rental" element={<Rental />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;