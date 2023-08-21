// src/components/FavoritesPage.js

import React from 'react';
import { useFavorites } from '../context/FavoritesContext'; // Import useFavorites

const FavoritesPage = () => {
  const { favorites } = useFavorites(); // Use the favorites from the context

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h2 className="mb-3">My Favorites</h2>
          {favorites.map((favorite) => (
            <div key={favorite.imdbID} className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={favorite.Poster} className="img-fluid rounded-start" alt={`${favorite.Title} Poster`} />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{favorite.Title}</h5>
                    <p className="card-text">{favorite.Year}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FavoritesPage;
