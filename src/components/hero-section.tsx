
import * as React from "react"
import { ButtonGlow } from "@/components/ui/button-glow"
import { Gamepad2, Coins, Database, Radio } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-16">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-zinovr-gold/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-zinovr-purple/20 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-zinovr-teal/10 rounded-full blur-[120px]" />
      </div>

      {/* Hero Content */}
      <div className="max-w-5xl w-full mx-auto text-center space-y-8">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
          <span className="animated-gradient-text">{t('nextGeneration')} </span>
          <span className="block mt-2">{t('vrCasinoGaming')}</span>
        </h1>

        <p className="text-zinovr-textLight text-lg md:text-xl max-w-2xl mx-auto">
          {t('heroDescription')}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <ButtonGlow glowColor="purple" size="lg" className="bg-zinovr-purple text-zinovr-text">
            {t('exploreGames')}
          </ButtonGlow>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12 md:mt-16">
          <FeatureBox icon={<Gamepad2 />} text={t('vrCasinoGames')} />
          <FeatureBox icon={<Coins />} text={t('cryptoPayments')} />
          <FeatureBox icon={<Database />} text={t('web3Integration')} />
          <FeatureBox icon={<Radio />} text={t('liveGaming')} />
        </div>
      </div>

      {/* Scroll Indicator - Now responsive for mobile */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-zinovr-textLight text-sm mb-2 whitespace-nowrap">{t('scrollToDiscover')}</span>
        <div className="w-6 h-10 rounded-full border-2 border-zinovr-textLight flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-zinovr-textLight rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}

function FeatureBox({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="glass-panel p-4 flex flex-col items-center gap-2">
      <div className="text-zinovr-teal p-2">
        {React.cloneElement(icon as React.ReactElement, { 
          className: "h-6 w-6 md:h-8 md:w-8" 
        })}
      </div>
      <p className="text-sm md:text-base font-medium">{text}</p>
    </div>
  );
}
