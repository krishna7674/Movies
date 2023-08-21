// src/components/SearchPage.js

import React, { useState } from 'react';
import axios from 'axios';
import { useFavorites } from '../context/FavoritesContext'; // Import useFavorites

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const { addFavorite, favorites } = useFavorites(); // Use the addFavorite function and favorites from the context

  const handleSearch = async () => {
    const apiKey = '2cbbaef2'; // Replace with your provided API key
    try {
      const response = await axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`);
      setResults(response.data.Search || []); // Ensure results is an array or initialize it as an empty array
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search movies or TV shows..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="btn btn-primary" onClick={handleSearch}>
              Search
            </button>
          </div>
          {results.length > 0 ? (
            <div className="row">
              {results.map((result) => (
                <div key={result.imdbID} className="col-md-4 mb-4">
                  <div className="card">
                    <img src={result.Poster} className="card-img-top" alt={`${result.Title} Poster`} />
                    <div className="card-body">
                      <h5 className="card-title">{result.Title}</h5>
                      <p className="card-text">{result.Year}</p>
                      <button
                        className={`btn btn-secondary favorite-button ${
                          favorites.some((fav) => fav.imdbID === result.imdbID) ? 'disabled' : ''
                        }`}
                        onClick={() => addFavorite(result)}
                        disabled={favorites.some((fav) => fav.imdbID === result.imdbID)}
                      >
                        {favorites.some((fav) => fav.imdbID === result.imdbID) ? 'Favorited' : 'Favorite'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No results found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
