import { VRCard } from "./vr-card";
import { Dice5, Coins, DollarSign } from "lucide-react";
import { ButtonGlow } from "./ui/button-glow";
const GAMES = [{
  title: "Crypto Poker VR",
  description: "Immersive poker with real crypto stakes",
  image: "poker-vr.jpg",
  icon: <Dice5 className="h-8 w-8 text-zinovr-gold" />,
  glowColor: "gold" as const
}, {
  title: "NeonSlots",
  description: "Web3 powered slots with provable fairness",
  image: "neon-slots.jpg",
  icon: <Coins className="h-8 w-8 text-zinovr-purple" />,
  glowColor: "purple" as const
}, {
  title: "BlackJack Multiverse",
  description: "Multi-table VR blackjack experience",
  image: "blackjack.jpg",
  icon: <DollarSign className="h-8 w-8 text-zinovr-teal" />,
  glowColor: "teal" as const
}];
export function GamesSection() {
  return <section id="games" className="relative py-24 px-6">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-1/4 w-60 h-60 bg-zinovr-purple/10 rounded-full blur-[80px]" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-zinovr-teal/10 rounded-full blur-[100px]" />
      </div>
      
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Our <span className="text-zinovr-gold glow-text">VR Casino</span> Games
          </h2>
          <p className="text-zinovr-textLight max-w-2xl mx-auto">
            Experience the future of gambling with our immersive VR casino games, all powered by secure blockchain technology
          </p>
        </div>

        {/* Games Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {GAMES.map(game => <VRCard key={game.title} title={game.title} description={game.description} icon={game.icon} glowColor={game.glowColor} className="h-full" contentClassName="flex flex-col">
              <div className="relative aspect-video mb-4 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-zinovr-surface via-transparent to-zinovr-surface/80 z-10" />
                <div className="absolute inset-0 bg-zinovr-surface flex items-center justify-center">
                  {/* Placeholder for game image */}
                  <span className="text-5xl">🎮</span>
                </div>
              </div>
            </VRCard>)}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          
        </div>
      </div>
    </section>;
}