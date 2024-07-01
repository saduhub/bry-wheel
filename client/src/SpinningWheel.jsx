import React, { useState } from 'react';
import { Wheel } from 'react-custom-roulette';

const SpinningWheel = () => {
  const [movieTitle, setMovieTitle] = useState('');
  const [movies, setMovies] = useState([]);
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleAddMovie = () => {
    if (movieTitle.trim()) {
      setMovies([...movies, { option: movieTitle }]);
      setMovieTitle('');
    }
  };

  const handleRemoveMovie = (index) => {
    setMovies(movies.filter((_, i) => i !== index));
  };

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * movies.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };

  return (
    <div className="flex flex-col items-center gap-8 py-16 max-w-[1280px] mx-auto">
      <h1 className="text-4xl font-bold">Movie Picker Wheel</h1>
      <div className="flex flex-col items-center gap-6">
        <input
          type="text"
          value={movieTitle}
          onChange={(e) => setMovieTitle(e.target.value)}
          placeholder="Add a movie title"
          className="border-2 border-gray-300 p-2 rounded"
        />
        <button
          className="bg-sky-300 px-3 py-2 rounded hover:bg-sky-400"
          onClick={handleAddMovie}
        >
          Add Movie
        </button>
        <div className="flex flex-wrap gap-2">
          {movies.map((movie, index) => (
            <div key={index} className="flex items-center gap-2">
              <span>{movie.option}</span>
              <button
                onClick={() => handleRemoveMovie(index)}
                className="text-red-500 hover:text-red-700"
              >
                &times;
              </button>
            </div>
          ))}
        </div>
        <button
          className="bg-green-300 px-3 py-2 rounded hover:bg-green-400"
          onClick={handleSpinClick}
          disabled={movies.length === 0}
        >
          Spin
        </button>
        {movies.length > 0 && (
          <Wheel
            mustStartSpinning={mustSpin}
            prizeNumber={prizeNumber}
            data={movies}
            onStopSpinning={() => setMustSpin(false)}
            backgroundColors={['#3e3e3e', '#df3428']}
            textColors={['#ffffff']}
          />
        )}
      </div>
    </div>
  );
};

export default SpinningWheel;
