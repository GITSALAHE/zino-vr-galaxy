
import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "fr";

type Translations = {
  [key in Language]: {
    [key: string]: string;
  };
};

// Translations for the website
const translations: Translations = {
  en: {
    games: "Games",
    features: "Features",
    about: "About",
    contact: "Contact",
    vrCasino: "VR Casino",
    web3Integration: "Web3 Integration",
    cryptoPayments: "Crypto Payments",
    ourGames: "Our VR Casino Games",
    gamesDescription: "Experience the future of gambling with our immersive VR casino games, all powered by secure blockchain technology",
    blockchainPowered: "Blockchain Powered",
    blockchainDescription: "All games use smart contracts for provable fairness and transparent transactions",
    secureGameplay: "Secure Gameplay",
    secureDescription: "State-of-the-art encryption and blockchain verification for maximum security",
    crossPlatform: "Cross-Platform",
    crossPlatformDescription: "Seamlessly play across different VR platforms with consistent Web3 integration",
    cryptoPaymentsDesc: "Support for multiple cryptocurrencies with instant deposits and withdrawals",
    smartContracts: "Smart Contracts",
    smartContractsDesc: "Automated game logic with instant payouts and verifiable outcomes",
    nftIntegration: "NFT Integration",
    nftIntegrationDesc: "Collect and trade exclusive in-game assets as NFTs with real value",
    daoGovernance: "DAO Governance",
    daoGovernanceDesc: "Community-driven development and profit sharing for token holders"
  },
  fr: {
    games: "Jeux",
    features: "Fonctionnalités",
    about: "À propos",
    contact: "Contact",
    vrCasino: "Casino VR",
    web3Integration: "Intégration Web3",
    cryptoPayments: "Paiements Crypto",
    ourGames: "Nos Jeux de Casino VR",
    gamesDescription: "Découvrez le futur des jeux d'argent avec nos jeux de casino VR immersifs, tous alimentés par une technologie blockchain sécurisée",
    blockchainPowered: "Propulsé par Blockchain",
    blockchainDescription: "Tous les jeux utilisent des contrats intelligents pour une équité prouvable et des transactions transparentes",
    secureGameplay: "Gameplay Sécurisé",
    secureDescription: "Cryptage de pointe et vérification blockchain pour une sécurité maximale",
    crossPlatform: "Multi-Plateforme",
    crossPlatformDescription: "Jouez facilement sur différentes plateformes VR avec une intégration Web3 cohérente",
    cryptoPaymentsDesc: "Prise en charge de plusieurs crypto-monnaies avec dépôts et retraits instantanés",
    smartContracts: "Contrats Intelligents",
    smartContractsDesc: "Logique de jeu automatisée avec paiements instantanés et résultats vérifiables",
    nftIntegration: "Intégration NFT",
    nftIntegrationDesc: "Collectionnez et échangez des actifs de jeu exclusifs en tant que NFT avec une valeur réelle",
    daoGovernance: "Gouvernance DAO",
    daoGovernanceDesc: "Développement communautaire et partage des bénéfices pour les détenteurs de tokens"
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
