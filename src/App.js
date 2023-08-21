// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SearchPage from './components/SearchPage';
import FavoritesPage from './components/FavoritesPage';
import { FavoritesProvider } from './context/FavoritesContext'; // Import the FavoritesProvider

const App = () => {
  return (
    <Router>
      <FavoritesProvider> {/* Wrap your App with the FavoritesProvider */}
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Search</Link>
              </li>
              <li>
                <Link to="/favorites">Favorites</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<SearchPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
          </Routes>
        </div>
      </FavoritesProvider>
    </Router>
  );
};

export default App;
