
import * as React from "react"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ButtonGlow } from "@/components/ui/button-glow"
import { Menu, X, Gamepad2, Blocks, Wallet, ChevronDown } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
          <NavLink href="#games">Games</NavLink>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="link" className="text-zinovr-text hover:text-zinovr-gold flex items-center">
                Features <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48 bg-zinovr-surface border-zinovr-gold/20">
              <DropdownMenuItem className="hover:bg-zinovr-purple/20">
                <Gamepad2 className="mr-2 h-4 w-4 text-zinovr-purple" /> VR Casino
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-zinovr-teal/20">
                <Blocks className="mr-2 h-4 w-4 text-zinovr-teal" /> Web3 Integration
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-zinovr-gold/20">
                <Wallet className="mr-2 h-4 w-4 text-zinovr-gold" /> Crypto Payments
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <NavLink href="#about">About</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <ButtonGlow glowColor="purple" className="bg-zinovr-purple text-zinovr-text">
            Connect Wallet
          </ButtonGlow>
        </div>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          className="md:hidden" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-zinovr-text" />
          ) : (
            <Menu className="h-6 w-6 text-zinovr-text" />
          )}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-zinovr-background/95 backdrop-blur-lg border-b border-zinovr-purple/20 p-4">
          <div className="flex flex-col space-y-4">
            <NavLink href="#games" mobile>Games</NavLink>
            <NavLink href="#features" mobile>Features</NavLink>
            <NavLink href="#about" mobile>About</NavLink>
            <NavLink href="#contact" mobile>Contact</NavLink>
            <ButtonGlow glowColor="purple" className="bg-zinovr-purple text-zinovr-text w-full">
              Connect Wallet
            </ButtonGlow>
          </div>
        </div>
      )}
    </nav>
  )
}

interface NavLinkProps {
  href: string
  children: React.ReactNode
  mobile?: boolean
}

function NavLink({ href, children, mobile = false }: NavLinkProps) {
  return (
    <a 
      href={href} 
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
