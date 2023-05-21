import React, { useState, useEffect } from 'react';
import './ShowList.css';
 

const ShowList = ({ onSelectShow }) => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then(response => response.json())
      .then(data => setShows(data.map(item => item.show)));
  }, []);

  return (
    <div className="container show-list">
      <h1 className="mt-4">TV Shows</h1>
      <div className="row">
        {shows.map(show => (
          <div key={show.id} className="col-lg-4 mb-4">
            <div className="card">
              <img src={show.image?.medium} alt={show.name} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{show.name}</h5>
                <p className="card-text">Language: {show.language}</p>
                <p className="card-text">Genres: {show.genres.join(', ')}</p>
                <p className="card-text">Rating: {show.rating?.average || 'N/A'}</p>
                <p className="card-text">Premiered: {show.premiered}</p>
                <button onClick={() => onSelectShow(show)} className="btn btn-primary">View Summary</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowList;
