import GameCard from '@/components/GameCard';
import LiveGames from '@/components/LiveGames';
import Jackpot from '@/components/Jackpot';

export default function Home() {
  const popularGames = [
    { id: 1, name: 'Mega Fortune', provider: 'NetEnt', color: 'from-blue-500 to-cyan-400' },
    { id: 2, name: 'Gonzo\'s Quest', provider: 'NetEnt', color: 'from-green-500 to-emerald-400' },
    { id: 3, name: 'Starburst', provider: 'NetEnt', color: 'from-purple-500 to-pink-400' },
    { id: 4, name: 'Book of Dead', provider: 'Play\'n GO', color: 'from-yellow-500 to-orange-400' },
    { id: 5, name: 'Immortal Romance', provider: 'Microgaming', color: 'from-red-500 to-rose-400' },
    { id: 6, name: 'Mega Moolah', provider: 'Microgaming', color: 'from-indigo-500 to-purple-400' },
  ];

  return (
    <div className="space-y-8">
      {/* Jackpot Banner */}
      <Jackpot />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-2xl p-8 border border-purple-500/30">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-bold mb-4">
            Hoş Geldiniz! <span className="text-yellow-400">500₺ Bonus</span> Kazanın
          </h2>
          <p className="text-gray-300 mb-6">
            İlk yatırımınızda %100 bonus + 50 ücretsiz dönüş. Güvenli ödeme, hızlı çekim.
          </p>
          <button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold px-8 py-3 rounded-full hover:opacity-90 transition">
            Hemen Başlayın
          </button>
        </div>
      </section>

      {/* Popular Games */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold">Popüler Oyunlar</h3>
          <button className="text-purple-400 hover:text-purple-300">
            Tümünü Gör →
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </section>

      {/* Live Casino */}
      <LiveGames />

      {/* Promotion Banner */}
      <section className="bg-gradient-to-r from-emerald-900/50 to-teal-900/50 rounded-2xl p-8 border border-emerald-500/30">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-2">Haftanın Özel Teklifi</h3>
            <p className="text-gray-300">Çarkıfelek çevir, 10.000₺'ye kadar bonus kazan!</p>
          </div>
          <button className="mt-4 md:mt-0 bg-gradient-to-r from-emerald-500 to-teal-600 px-8 py-3 rounded-full font-bold hover:opacity-90 transition">
            Katılın
          </button>
        </div>
      </section>
    </div>
  );
}