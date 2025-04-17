
import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

export function AboutSection() {
  const { t } = useLanguage();
  
  return <section id="about" className="relative py-24 px-6">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-80 h-80 bg-zinovr-teal/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-zinovr-purple/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* About Content */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              {t('aboutZinoVR')} <span className="text-zinovr-teal glow-text">ZinoVR</span>
            </h2>
            
            <p className="text-zinovr-textLight mb-6">
              {t('aboutDescription')}
            </p>
            
            <div className="space-y-4 mb-8">
              <BenefitItem text={t('leadingStudio')} />
              <BenefitItem text={t('web3Payments')} />
              <BenefitItem text={t('fairGaming')} />
              <BenefitItem text={t('crossCompatibility')} />
            </div>

            
          </div>

          {/* About Visual */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden glass-panel neon-border p-8 flex items-center justify-center">
              <div className="text-9xl">🎲</div>
              
              {/* Stats Overlay */}
              <div className="absolute bottom-0 left-0 right-0 glass-panel m-4 p-4 rounded-xl">
                <div className="flex justify-between text-center">
                  <div>
                    <div className="text-2xl font-bold text-zinovr-gold">10+</div>
                    <div className="text-sm text-zinovr-textLight">{t('vrGames')}</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-zinovr-purple">24/7</div>
                    <div className="text-sm text-zinovr-textLight">{t('support')}</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-zinovr-teal">100%</div>
                    <div className="text-sm text-zinovr-textLight">{t('secure')}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}

function BenefitItem({
  text
}: {
  text: string;
}) {
  return <div className="flex items-center gap-3">
      <CheckCircle2 className="h-5 w-5 text-zinovr-gold flex-shrink-0" />
      <span>{text}</span>
    </div>;
}
