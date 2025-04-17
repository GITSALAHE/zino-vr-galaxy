
import * as React from "react";
import { ButtonGlow } from "@/components/ui/button-glow";
import { Gamepad2, Coins, Database, Radio } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { useState } from "react";
import { CyberpunkBackground } from "./cyberpunk-background";

export function HeroSection() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -80; // Adjust this value based on your header height
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-16">
      {/* Three.js Cyberpunk Background */}
      <CyberpunkBackground />

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
          <ButtonGlow onClick={() => scrollToSection('games')} glowColor="purple" size="lg" className="bg-zinovr-purple text-zinovr-text">
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
    </section>;
}

function FeatureBox({
  icon,
  text
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return <div className="glass-panel p-4 flex flex-col items-center gap-2">
      <div className="text-zinovr-teal p-2">
        {React.cloneElement(icon as React.ReactElement, {
        className: "h-6 w-6 md:h-8 md:w-8"
      })}
      </div>
      <p className="text-sm md:text-base font-medium">{text}</p>
    </div>;
}
