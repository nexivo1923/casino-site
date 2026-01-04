import { Shield, CreditCard, Headphones, Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900/80 border-t border-gray-700 mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-bold text-lg mb-4">Güvenlik</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-green-400" />
                <span className="text-sm">SSL Şifreleme</span>
              </div>
              <div className="flex items-center space-x-2">
                <CreditCard className="h-5 w-5 text-blue-400" />
                <span className="text-sm">Güvenli Ödeme</span>
              </div>
              <div className="flex items-center space-x-2">
                <Headphones className="h-5 w-5 text-purple-400" />
                <span className="text-sm">7/24 Destek</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Oyunlar</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Slot Makineleri</li>
              <li>Rulet</li>
              <li>Blackjack</li>
              <li>Poker</li>
              <li>Canlı Casino</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Yardım</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Sıkça Sorulan Sorular</li>
              <li>Nasıl Oynanır?</li>
              <li>Ödeme Yöntemleri</li>
              <li>Bonuslar</li>
              <li>Şartlar ve Koşullar</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Bizi Takip Edin</h4>
            <div className="flex space-x-4 mb-6">
              <button className="p-2 bg-gray-800 rounded-full hover:bg-gray-700">
                <Facebook className="h-5 w-5" />
              </button>
              <button className="p-2 bg-gray-800 rounded-full hover:bg-gray-700">
                <Twitter className="h-5 w-5" />
              </button>
              <button className="p-2 bg-gray-800 rounded-full hover:bg-gray-700">
                <Instagram className="h-5 w-5" />
              </button>
            </div>
            <p className="text-gray-400 text-sm">
              18 yaşından büyükler içindir. Lütfen sorumlu oynayın.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>© 2024 Casino Royale. Tüm hakları saklıdır. Lisans No: 12345-789</p>
        </div>
      </div>
    </footer>
  );
}