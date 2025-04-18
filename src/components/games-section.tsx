
import { VRCard } from "./vr-card";
import { Dice5, Coins, DollarSign } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

export function GamesSection() {
  const { t } = useLanguage();
  
  const GAMES = [{
    title: t('cryptoPoker'),
    description: t('pokerDescription'),
    image: "poker-vr.jpg",
    icon: <Dice5 className="h-8 w-8 text-zinovr-gold" />,
    glowColor: "gold" as const
  }, {
    title: t('neonSlots'),
    description: t('slotsDescription'),
    image: "neon-slots.jpg",
    icon: <Coins className="h-8 w-8 text-zinovr-purple" />,
    glowColor: "purple" as const
  }, {
    title: t('blackjackMultiverse'),
    description: t('blackjackDescription'),
    image: "blackjack.jpg",
    icon: <DollarSign className="h-8 w-8 text-zinovr-teal" />,
    glowColor: "teal" as const
  }];

  return (
    <section id="games" className="relative py-24 px-4 md:px-6 overflow-x-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-1/4 w-60 h-60 bg-zinovr-purple/10 rounded-full blur-[80px]" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-zinovr-teal/10 rounded-full blur-[100px]" />
      </div>
      
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            {t('ourGames')}
          </h2>
          <p className="text-zinovr-textLight max-w-2xl mx-auto">
            {t('gamesDescription')}
          </p>
        </div>

        {/* Games Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {GAMES.map(game => (
            <VRCard 
              key={game.title} 
              title={game.title} 
              description={game.description} 
              icon={game.icon} 
              glowColor={game.glowColor} 
              className="h-full" 
              contentClassName="flex flex-col"
            >
              <div className="relative aspect-video mb-4 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-zinovr-surface via-transparent to-zinovr-surface/80 z-10" />
                <div className="absolute inset-0 bg-zinovr-surface flex items-center justify-center">
                  {/* Placeholder for game image */}
                  <span className="text-5xl">🎮</span>
                </div>
              </div>
            </VRCard>
          ))}
        </div>
      </div>
    </section>
  );
}
