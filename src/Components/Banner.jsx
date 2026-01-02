import { useState, useEffect } from "react";
import games from "../data/games.json";

const Banner = () => {
  const [current, setCurrent] = useState(0);
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    // Top 3 rated games from JSON
    const sorted = [...games].sort((a, b) => b.ratings - a.ratings);
    setSlides(sorted.slice(0, 3));
  }, []);

  if (slides.length === 0) return null; // wait for data

  const game = slides[current];

  const nextSlide = () => setCurrent((current + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((current - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full h-[480px] md:h-[520px] overflow-hidden">
  <img
    src={game.coverPhoto}
    alt={game.title}
    className="
      w-full h-full 
      object-cover 
      brightness-110 
      contrast-110 
      saturate-125
    "
  />

  {/* Dark gradient for text readability */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

      {/* Overlay Text */}
      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
          {game.title}
        </h1>
        <p className="text-gray-300 text-lg md:text-xl">
          {game.category} • {game.developer}
        </p>
      </div>

      {/* Previous & Next Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 text-white px-3 py-2 rounded hover:bg-black/80"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 text-white px-3 py-2 rounded hover:bg-black/80"
      >
        ❯
      </button>
    </div>
  );
};

export default Banner;
