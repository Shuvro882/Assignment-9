
import { Link } from "react-router";
import games from "../data/games.json";

const PopularGames = () => {
  // Sort by rating descending
  const sortedGames = [...games].sort((a, b) => b.ratings - a.ratings);

  // Top 3 games for homepage
  const topGames = sortedGames.slice(0, 3);

  return (
    <section className="px-6 py-10">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Popular Games
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 container mx-auto">
        {topGames.map((game) => (
          <div
            key={game.id}
            className="bg-gray-900 text-white rounded shadow hover:scale-105 transition transform"
          >
            <img
              src={game.coverPhoto}
              alt={game.title}
              className="h-60 w-full object-cover rounded-t"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{game.title}</h3>
              <p className="text-sm text-gray-400">
                Rating: ⭐ {game.ratings}
              </p>
              <p className="text-sm text-gray-400">
                Developer: {game.developer}
              </p>
              <Link to={`/games/${game.id}`}>
              <button className="mt-3 bg-green-500 px-4 py-2 rounded cursor-cell">
              View Details
              </button>
              </Link>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularGames;
