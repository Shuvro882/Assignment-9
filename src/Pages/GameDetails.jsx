// File: src/Pages/GameDetails.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router"; 
import { HashLoader } from "react-spinners";
import games from "../data/games.json";

const GameDetails = () => {
  const { id } = useParams(); 
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const selectedGame = games.find(
      (g) => g.id === id || g.id === parseInt(id)
    );
    setGame(selectedGame);
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <HashLoader color="#22c55e" />
      </div>
    );
  }

  if (!game) {
    return (
      <div className="min-h-screen flex justify-center items-center text-red-500 text-xl">
        Game Not Found 😢
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white py-10 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Game Image */}
        <img
          src={game.coverPhoto}
          alt={game.title}
          className="w-full h-[350px] object-cover rounded-lg shadow-lg"
        />

        {/* Game Details */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-green-400">{game.title}</h1>

          <p className="text-gray-300">{game.description}</p>

          <div className="space-y-1">
            <p>
              <span className="font-semibold">Category:</span> {game.category}
            </p>
            <p>
              <span className="font-semibold">Developer:</span> {game.developer}
            </p>
            <p>
              <span className="font-semibold">Rating:</span> ⭐ {game.ratings}
            </p>
          </div>

          <a
            href={game.downloadLink}
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-4 bg-green-500 hover:bg-green-600 px-6 py-3 rounded text-black font-semibold transition"
          >
            Download Game
          </a>
        </div>
      </div>
    </div>
  );
};

export default GameDetails;
