
import * as React from "react"
import { cn } from "@/lib/utils"
import { Button, ButtonProps } from "@/components/ui/button"

export interface GlowButtonProps extends ButtonProps {
  glowColor?: "gold" | "purple" | "teal" | "red"
  hoverScale?: boolean
}

export const ButtonGlow = React.forwardRef<HTMLButtonElement, GlowButtonProps>(
  ({ className, glowColor = "gold", hoverScale = true, ...props }, ref) => {
    const glowClasses = {
      gold: "before:bg-zinovr-gold/40",
      purple: "before:bg-zinovr-purple/40",
      teal: "before:bg-zinovr-teal/40",
      red: "before:bg-zinovr-red/40",
    }
    
    const hoverScaleClass = hoverScale ? "transition-transform hover:scale-105" : ""

    return (
      <Button
        className={cn(
          "relative",
          "before:absolute before:inset-0 before:-z-10 before:blur-xl",
          glowClasses[glowColor],
          hoverScaleClass,
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)

ButtonGlow.displayName = "ButtonGlow"
