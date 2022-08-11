import React from "react";
import GlobalStyle from './components/GlobalStyle';

// Components e rotas
import Nav from './components/Nav';
import About from "./pages/About";
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import PortfolioDetail from "./components/PortfolioDetail";

// Navigation
import { Routes, Route } from 'react-router-dom';

// Icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

function App() {
  library.add(fab, faDatabase);
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path={"/portfolio"} element={<Portfolio />}>
          <Route path={"/portfolio/:slug"} element={<PortfolioDetail />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
