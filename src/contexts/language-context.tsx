
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
    daoGovernanceDesc: "Community-driven development and profit sharing for token holders",
    // About section
    aboutZinoVR: "About ZinoVR",
    aboutDescription: "We are pioneers at the intersection of virtual reality and blockchain technology, creating immersive casino experiences that revolutionize the gaming industry.",
    leadingStudio: "Leading VR casino game development studio",
    web3Payments: "Fully integrated Web3 payment systems",
    fairGaming: "Provably fair gaming algorithms",
    crossCompatibility: "Cross-platform VR compatibility",
    vrGames: "VR Games",
    support: "Support",
    secure: "Secure",
    // Contact section
    getInTouch: "Get In Touch",
    contactDescription: "Have questions about our VR casino games or Web3 integration? Reach out to our team.",
    emailUs: "Email Us",
    liveChat: "Live Chat",
    liveChatDesc: "Available 24/7 for support",
    office: "Office",
    name: "Name",
    yourName: "Your name",
    email: "Email",
    yourEmail: "Your email",
    subject: "Subject",
    howCanWeHelp: "How can we help?",
    message: "Message",
    tellUsMore: "Tell us more...",
    sendMessage: "Send Message",
    // Hero section
    nextGeneration: "Next Generation",
    vrCasinoGaming: "VR Casino Gaming",
    heroDescription: "Immersive Web3 experiences that combine cutting-edge virtual reality with blockchain technology for the ultimate casino gaming experience",
    exploreGames: "Explore Games",
    vrCasinoGames: "VR Casino Games",
    liveGaming: "Live Gaming",
    scrollToDiscover: "Scroll to discover",
    // Footer
    quickLinks: "Quick Links",
    legal: "Legal",
    termsOfService: "Terms of Service",
    privacyPolicy: "Privacy Policy",
    responsibleGaming: "Responsible Gaming",
    kycPolicy: "KYC Policy",
    stayUpdated: "Stay Updated",
    subscribeNewsletter: "Subscribe to our newsletter for updates",
    yourEmailAddress: "Your email",
    join: "Join",
    allRightsReserved: "All rights reserved",
    // Game titles and descriptions
    cryptoPoker: "Crypto Poker VR",
    pokerDescription: "Immersive poker with real crypto stakes",
    neonSlots: "NeonSlots",
    slotsDescription: "Web3 powered slots with provable fairness",
    blackjackMultiverse: "BlackJack Multiverse",
    blackjackDescription: "Multi-table VR blackjack experience"
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
    daoGovernanceDesc: "Développement communautaire et partage des bénéfices pour les détenteurs de tokens",
    // About section
    aboutZinoVR: "À propos de ZinoVR",
    aboutDescription: "Nous sommes des pionniers à l'intersection de la réalité virtuelle et de la technologie blockchain, créant des expériences de casino immersives qui révolutionnent l'industrie du jeu.",
    leadingStudio: "Studio leader en développement de jeux de casino VR",
    web3Payments: "Systèmes de paiement Web3 entièrement intégrés",
    fairGaming: "Algorithmes de jeu à équité prouvable",
    crossCompatibility: "Compatibilité VR multi-plateformes",
    vrGames: "Jeux VR",
    support: "Support",
    secure: "Sécurisé",
    // Contact section
    getInTouch: "Contactez-Nous",
    contactDescription: "Vous avez des questions sur nos jeux de casino VR ou l'intégration Web3 ? Contactez notre équipe.",
    emailUs: "Écrivez-nous",
    liveChat: "Chat en Direct",
    liveChatDesc: "Disponible 24/7 pour l'assistance",
    office: "Bureau",
    name: "Nom",
    yourName: "Votre nom",
    email: "Email",
    yourEmail: "Votre email",
    subject: "Sujet",
    howCanWeHelp: "Comment pouvons-nous vous aider ?",
    message: "Message",
    tellUsMore: "Dites-nous en plus...",
    sendMessage: "Envoyer le Message",
    // Hero section
    nextGeneration: "Nouvelle Génération",
    vrCasinoGaming: "Casino VR",
    heroDescription: "Des expériences Web3 immersives qui combinent la réalité virtuelle de pointe avec la technologie blockchain pour l'expérience de jeu de casino ultime",
    exploreGames: "Explorer les Jeux",
    vrCasinoGames: "Jeux de Casino VR",
    liveGaming: "Jeux en Direct",
    scrollToDiscover: "Défiler pour découvrir",
    // Footer
    quickLinks: "Liens Rapides",
    legal: "Mentions Légales",
    termsOfService: "Conditions d'Utilisation",
    privacyPolicy: "Politique de Confidentialité",
    responsibleGaming: "Jeu Responsable",
    kycPolicy: "Politique KYC",
    stayUpdated: "Restez Informé",
    subscribeNewsletter: "Abonnez-vous à notre newsletter pour les mises à jour",
    yourEmailAddress: "Votre email",
    join: "Rejoindre",
    allRightsReserved: "Tous droits réservés",
    // Game titles and descriptions
    cryptoPoker: "Poker Crypto VR",
    pokerDescription: "Poker immersif avec mises en crypto réelles",
    neonSlots: "Machines à Sous Néon",
    slotsDescription: "Machines à sous propulsées par Web3 avec équité prouvable",
    blackjackMultiverse: "Multivers Blackjack",
    blackjackDescription: "Expérience multi-tables de blackjack en VR"
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
