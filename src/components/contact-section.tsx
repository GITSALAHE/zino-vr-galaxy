
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { ButtonGlow } from "./ui/button-glow"
import { Mail, MessageSquare, MapPin } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function ContactSection() {
  const { t } = useLanguage();
  
  return (
    <section id="contact" className="relative py-24 px-6 bg-zinovr-surface">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-zinovr-gold/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-zinovr-purple/10 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            {t('getInTouch')} <span className="text-zinovr-red glow-text">Touch</span>
          </h2>
          <p className="text-zinovr-textLight max-w-2xl mx-auto">
            {t('contactDescription')}
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 md:gap-12">
          {/* Contact Information */}
          <div className="md:col-span-2 space-y-8">
            <ContactCard
              icon={<Mail className="h-6 w-6" />}
              title={t('emailUs')}
              description="contact@zinovr.com"
              color="gold"
            />
            
            <ContactCard
              icon={<MessageSquare className="h-6 w-6" />}
              title={t('liveChat')}
              description={t('liveChatDesc')}
              color="purple"
            />
            
            <ContactCard
              icon={<MapPin className="h-6 w-6" />}
              title={t('office')}
              description="100 Innovation Drive, Crypto Valley"
              color="teal"
            />
          </div>

          {/* Contact Form */}
          <div className="md:col-span-3">
            <div className="glass-panel p-6 md:p-8 neon-border">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm">{t('name')}</label>
                    <Input 
                      id="name" 
                      placeholder={t('yourName')} 
                      className="bg-zinovr-background border-zinovr-purple/20 focus:border-zinovr-purple"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm">{t('email')}</label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder={t('yourEmail')} 
                      className="bg-zinovr-background border-zinovr-purple/20 focus:border-zinovr-purple"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm">{t('subject')}</label>
                  <Input 
                    id="subject" 
                    placeholder={t('howCanWeHelp')} 
                    className="bg-zinovr-background border-zinovr-purple/20 focus:border-zinovr-purple"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm">{t('message')}</label>
                  <Textarea 
                    id="message" 
                    placeholder={t('tellUsMore')} 
                    rows={5}
                    className="bg-zinovr-background border-zinovr-purple/20 focus:border-zinovr-purple"
                  />
                </div>
                
                <ButtonGlow 
                  type="submit" 
                  glowColor="red" 
                  className="w-full bg-zinovr-red text-zinovr-text"
                >
                  {t('sendMessage')}
                </ButtonGlow>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactCard({ 
  icon, 
  title, 
  description, 
  color 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  color: "gold" | "purple" | "teal" 
}) {
  return (
    <div className="glass-panel p-5 flex items-start gap-4">
      <div className={`p-2 rounded-full bg-zinovr-${color}/20 text-zinovr-${color}`}>
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-zinovr-textLight">{description}</p>
      </div>
    </div>
  );
}
