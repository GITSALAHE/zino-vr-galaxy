
import * as React from "react"
import { VRCard } from "./vr-card"
import { Blocks, Shield, GitMerge, Wallet } from "lucide-react"

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 px-6 bg-zinovr-surface">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-zinovr-gold/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-zinovr-purple/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Web3 <span className="text-zinovr-purple glow-text">Integration</span>
          </h2>
          <p className="text-zinovr-textLight max-w-2xl mx-auto">
            Leveraging blockchain technology for secure, transparent, and decentralized gaming experiences
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <FeatureCard 
            icon={<Blocks />} 
            title="Blockchain Powered"
            description="All games use smart contracts for provable fairness and transparent transactions"
            color="purple"
          />
          
          <FeatureCard 
            icon={<Shield />} 
            title="Secure Gameplay"
            description="State-of-the-art encryption and blockchain verification for maximum security"
            color="teal"
          />
          
          <FeatureCard 
            icon={<GitMerge />} 
            title="Cross-Platform"
            description="Seamlessly play across different VR platforms with consistent Web3 integration"
            color="gold"
          />
          
          <FeatureCard 
            icon={<Wallet />} 
            title="Crypto Payments"
            description="Support for multiple cryptocurrencies with instant deposits and withdrawals"
            color="red"
          />
        </div>

        {/* Web3 Integration Visual */}
        <div className="mt-20 relative">
          <div className="glass-panel p-6 md:p-10 neon-border">
            <div className="grid md:grid-cols-3 gap-6 md:gap-10">
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold mb-2 text-zinovr-gold">Smart Contracts</h3>
                <p className="text-zinovr-textLight">Automated game logic with instant payouts and verifiable outcomes</p>
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2 text-zinovr-purple">NFT Integration</h3>
                <p className="text-zinovr-textLight">Collect and trade exclusive in-game assets as NFTs with real value</p>
              </div>
              
              <div className="text-center md:text-right">
                <h3 className="text-xl font-bold mb-2 text-zinovr-teal">DAO Governance</h3>
                <p className="text-zinovr-textLight">Community-driven development and profit sharing for token holders</p>
              </div>
            </div>
            
            {/* Connecting Lines (visible on md and up) */}
            <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-px bg-gradient-to-r from-zinovr-gold via-zinovr-purple to-zinovr-teal -translate-y-1/2" />
          </div>
        </div>
      </div>
    </section>
  )
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
  color: "purple" | "gold" | "teal" | "red" 
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
