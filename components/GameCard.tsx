import { Play, Star } from 'lucide-react';

interface GameCardProps {
  game: {
    id: number;
    name: string;
    provider: string;
    color: string;
  };
}

export default function GameCard({ game }: GameCardProps) {
  return (
    <div className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 hover:border-purple-500 transition-all hover:scale-[1.02]">
      <div className={`h-40 bg-gradient-to-r ${game.color} relative`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-black/30 backdrop-blur-sm rounded-full p-4">
            <Play className="h-12 w-12" fill="white" />
          </div>
        </div>
        <div className="absolute top-4 right-4 bg-yellow-500 text-black px-2 py-1 rounded-full text-sm font-bold flex items-center">
          <Star className="h-3 w-3 mr-1" />
          4.9
        </div>
      </div>
      <div className="p-4">
        <h4 className="font-bold text-lg mb-1">{game.name}</h4>
        <p className="text-gray-400 text-sm mb-4">{game.provider}</p>
        <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 py-2 rounded-lg font-semibold hover:opacity-90 transition">
          Oyna
        </button>
      </div>
    </div>
  );
}