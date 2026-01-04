import { Coins, User, Bell, Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-gray-800/90 backdrop-blur-md border-b border-purple-500/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-yellow-500 to-red-500 p-2 rounded-lg">
              <Coins className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
                CASINO ROYALE
              </h1>
              <p className="text-xs text-gray-400">%100 Güvenli Oyun</p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2 bg-gray-900/50 px-4 py-2 rounded-full">
              <Coins className="h-5 w-5 text-yellow-400" />
              <span className="font-bold">10,500</span>
              <button className="bg-gradient-to-r from-green-500 to-emerald-600 px-3 py-1 rounded-full text-sm font-semibold hover:opacity-90 transition">
                + Yükle
              </button>
            </div>

            <button className="relative p-2 hover:bg-gray-700/50 rounded-full">
              <Bell className="h-6 w-6" />
              <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
            </button>

            <button className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 rounded-full hover:opacity-90 transition">
              <User className="h-5 w-5" />
              <span>Giriş Yap</span>
            </button>
          </div>

          <button className="md:hidden p-2">
            <Menu className="h-6 w-6" />
          </button>
        </div>

        <nav className="mt-4 flex space-x-6 overflow-x-auto">
          {['Slot Makineleri', 'Rulet', 'Blackjack', 'Poker', 'Canlı Casino', 'Promosyonlar'].map((item) => (
            <button
              key={item}
              className="px-4 py-2 whitespace-nowrap hover:bg-purple-600/20 rounded-lg transition"
            >
              {item}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}