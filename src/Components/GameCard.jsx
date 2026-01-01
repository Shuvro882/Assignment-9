import { Link } from "react-router";


const GameCard = ({ game }) => {
  return (
    <div className="bg-gray-900 text-white rounded shadow hover:scale-105 transition">
      <img
        src={game.coverPhoto}
        className="h-40 w-full object-cover rounded-t"
        alt={game.title}
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{game.title}</h3>
        <p className="text-sm text-gray-400">
          Rating: ⭐ {game.ratings}
        </p>

        <Link
          to={`/games/${game.id}`}
          className="inline-block mt-3 text-green-400 hover:underline"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default GameCard;
