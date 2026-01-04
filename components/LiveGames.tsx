import { Users, Zap } from 'lucide-react';

export default function LiveGames() {
  const liveGames = [
    { id: 1, name: 'Canlı Rulet', players: 124, dealer: 'Maria' },
    { id: 2, name: 'Canlı Blackjack', players: 89, dealer: 'John' },
    { id: 3, name: 'Canlı Poker', players: 256, dealer: 'David' },
  ];

  return (
    <section className="mt-8">
      <div className="flex items-center space-x-2 mb-6">
        <div className="bg-red-500 p-1 rounded">
          <Zap className="h-5 w-5" />
        </div>
        <h3 className="text-2xl font-bold">Canlı Casino</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {liveGames.map((game) => (
          <div key={game.id} className="bg-gray-800/50 rounded-xl overflow-hidden border border-red-500/30">
            <div className="h-40 bg-gradient-to-br from-red-900/50 to-gray-900 relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <h4 className="font-bold text-xl mb-1">{game.name}</h4>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span className="text-sm">{game.players} Oyuncu</span>
                  </div>
                  <span className="text-sm">Krupiye: {game.dealer}</span>
                </div>
              </div>
              <div className="absolute top-4 right-4">
                <span className="flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
              </div>
            </div>
            <button className="w-full bg-gradient-to-r from-red-600 to-orange-600 py-3 font-bold hover:opacity-90 transition">
              CANLI OYNA
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}