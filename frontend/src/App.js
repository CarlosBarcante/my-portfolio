import React from "react";

import GlobalStyle from './components/GlobalStyle';
import styled from 'styled-components';

// Components and pages
import Nav from './components/Nav';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from './components/Contact';
// import Admin from "./pages/Admin";
import PortfolioDetail from "./components/PortfolioDetail";

// Navigation
import { Routes, Route, useLocation } from 'react-router-dom';

// Icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { Container } from './styles';

function App() {
  const location = useLocation();
  library.add(fab, faDatabase);

  return (
    <div className="App">
      <GlobalStyle />
      {location.pathname !== '/admin' && <Nav />}
      <AppContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={"/portfolio"} element={<Portfolio />}>
            <Route path={"/portfolio/:slug"} element={<PortfolioDetail />} />
          </Route>
          {/* <Route path="/admin" element={<Admin />} /> */}
        </Routes>
        {location.pathname !== '/admin' && <Contact />}
      </AppContainer>
    </div>
  );
}

const AppContainer = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 2rem;

  main{
    flex:3;
  }
`;

export default App;
