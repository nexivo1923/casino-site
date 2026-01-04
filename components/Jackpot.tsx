import { Trophy } from 'lucide-react';

export default function Jackpot() {
  return (
    <div className="bg-gradient-to-r from-yellow-900/30 via-amber-900/30 to-orange-900/30 rounded-2xl p-6 border border-yellow-500/30">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-3 rounded-full">
            <Trophy className="h-8 w-8" />
          </div>
          <div>
            <p className="text-gray-300 text-sm">JACKPOT</p>
            <h3 className="text-3xl font-bold animate-pulse text-yellow-400">12,458,752 ₺</h3>
          </div>
        </div>
        <div className="text-right">
          <p className="text-gray-300 text-sm">Bir sonraki çekiliş</p>
          <p className="text-2xl font-mono">23:45:12</p>
        </div>
      </div>
    </div>
  );
}