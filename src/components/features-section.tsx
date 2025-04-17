
import * as React from "react";
import { VRCard } from "./vr-card";
import { Blocks, Shield, GitMerge, Wallet } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

export function FeaturesSection() {
  const { t } = useLanguage();
  
  return (
    <section id="features" className="relative py-24 px-4 md:px-6 overflow-x-hidden bg-zinovr-surface">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-zinovr-gold/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-zinovr-purple/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-zinovr-purple glow-text">{t('web3Integration')}</span>
          </h2>
          <p className="text-zinovr-textLight max-w-2xl mx-auto">
            Leveraging blockchain technology for secure, transparent, and decentralized gaming experiences
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <FeatureCard 
            icon={<Blocks />} 
            title={t('blockchainPowered')} 
            description={t('blockchainDescription')} 
            color="purple" 
          />
          
          <FeatureCard 
            icon={<Shield />} 
            title={t('secureGameplay')} 
            description={t('secureDescription')} 
            color="teal" 
          />
          
          <FeatureCard 
            icon={<GitMerge />} 
            title={t('crossPlatform')} 
            description={t('crossPlatformDescription')} 
            color="gold" 
          />
          
          <FeatureCard 
            icon={<Wallet />} 
            title={t('cryptoPayments')} 
            description={t('cryptoPaymentsDesc')} 
            color="red" 
          />
        </div>

        {/* Web3 Integration Visual */}
        <div className="mt-20 relative">
          <div className="glass-panel p-6 md:p-10 bg-gradient-to-br from-[#1E2055] to-[#3A1E55] border-[#2A2A42]">
            <div className="grid md:grid-cols-3 gap-6 md:gap-10">
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold mb-2 text-[#FFE1A0] glow-text">{t('smartContracts')}</h3>
                <p className="text-[#E5DEFF] text-opacity-90">{t('smartContractsDesc')}</p>
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2 text-[#B1A0FF] glow-text">{t('nftIntegration')}</h3>
                <p className="text-[#E5DEFF] text-opacity-90">{t('nftIntegrationDesc')}</p>
              </div>
              
              <div className="text-center md:text-right">
                <h3 className="text-xl font-bold mb-2 text-[#A0FFE1] glow-text">{t('daoGovernance')}</h3>
                <p className="text-[#E5DEFF] text-opacity-90">{t('daoGovernanceDesc')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  description,
  color
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: "purple" | "gold" | "teal" | "red";
}) {
  return (
    <VRCard 
      title={title} 
      description={description} 
      glowColor={color} 
      icon={React.cloneElement(icon as React.ReactElement, {
        className: `h-8 w-8 text-zinovr-${color}`
      })}
    >
      <p className="text-zinovr-textLight">{description}</p>
    </VRCard>
  );
}
