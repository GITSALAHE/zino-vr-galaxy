
import * as React from "react"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu, X, Gamepad2, Blocks, Wallet, ChevronDown, Languages } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Switch } from "@/components/ui/switch"
import { useLanguage } from "@/contexts/language-context"
import { useIsMobile } from "@/hooks/use-mobile"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()
  const isMobile = useIsMobile()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false)
    const section = document.getElementById(sectionId)
    if (section) {
      const yOffset = -80 // Adjust this value based on your header height
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "fr" : "en")
  }

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 transition-all duration-300",
        isScrolled ? "bg-zinovr-background/80 backdrop-blur-lg shadow-lg" : "bg-transparent"
      )}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold animated-gradient-text">ZinoVR</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:items-center space-x-8">
          <NavLink onClick={() => scrollToSection('games')}>{t('games')}</NavLink>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="link" className="text-zinovr-text hover:text-zinovr-gold flex items-center">
                {t('features')} <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48 bg-zinovr-surface border-zinovr-gold/20">
              <DropdownMenuItem className="hover:bg-zinovr-purple/20" onClick={() => scrollToSection('features')}>
                <Gamepad2 className="mr-2 h-4 w-4 text-zinovr-purple" /> {t('vrCasino')}
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-zinovr-teal/20" onClick={() => scrollToSection('features')}>
                <Blocks className="mr-2 h-4 w-4 text-zinovr-teal" /> {t('web3Integration')}
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-zinovr-gold/20" onClick={() => scrollToSection('features')}>
                <Wallet className="mr-2 h-4 w-4 text-zinovr-gold" /> {t('cryptoPayments')}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <NavLink onClick={() => scrollToSection('about')}>{t('about')}</NavLink>
          <NavLink onClick={() => scrollToSection('contact')}>{t('contact')}</NavLink>
        </div>

        {/* Language Switch */}
        <div className="hidden md:flex items-center space-x-3">
          <Languages className="h-4 w-4 text-zinovr-text" />
          <span className={language === "en" ? "text-zinovr-gold" : "text-zinovr-text"}>EN</span>
          <Switch checked={language === "fr"} onCheckedChange={toggleLanguage} />
          <span className={language === "fr" ? "text-zinovr-gold" : "text-zinovr-text"}>FR</span>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          {/* Mobile Language Toggle */}
          <Button 
            variant="ghost"
            size="sm"
            className="p-1"
            onClick={toggleLanguage}
          >
            <Languages className="h-5 w-5 text-zinovr-text" />
            <span className="ml-1 text-xs">{language.toUpperCase()}</span>
          </Button>
          
          <Button 
            variant="ghost" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-zinovr-text" />
            ) : (
              <Menu className="h-6 w-6 text-zinovr-text" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-zinovr-background/95 backdrop-blur-lg border-b border-zinovr-purple/20 p-4">
          <div className="flex flex-col space-y-4">
            <NavLink onClick={() => scrollToSection('games')} mobile>{t('games')}</NavLink>
            <NavLink onClick={() => scrollToSection('features')} mobile>{t('features')}</NavLink>
            <NavLink onClick={() => scrollToSection('about')} mobile>{t('about')}</NavLink>
            <NavLink onClick={() => scrollToSection('contact')} mobile>{t('contact')}</NavLink>
          </div>
        </div>
      )}
    </nav>
  )
}

interface NavLinkProps {
  onClick?: () => void
  children: React.ReactNode
  mobile?: boolean
  href?: string
}

function NavLink({ onClick, href, children, mobile = false }: NavLinkProps) {
  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault()
      onClick()
    }
  }
  
  return (
    <a 
      href={href || "#"} 
      onClick={handleClick}
      className={cn(
        "relative text-zinovr-text transition-colors",
        !mobile && "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-zinovr-gold after:transition-all hover:text-zinovr-gold hover:after:w-full",
        mobile && "text-lg font-medium hover:text-zinovr-gold"
      )}
    >
      {children}
    </a>
  )
}
