
import * as React from "react"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export interface VRCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description?: string
  icon?: React.ReactNode
  className?: string
  contentClassName?: string
  glowColor?: "gold" | "purple" | "teal" | "red"
  footer?: React.ReactNode
  hoverable?: boolean
}

export function VRCard({
  title,
  description,
  icon,
  children,
  className,
  contentClassName,
  glowColor = "purple",
  footer,
  hoverable = true,
  ...props
}: VRCardProps) {
  const glowClasses = {
    gold: "before:bg-zinovr-gold/20",
    purple: "before:bg-zinovr-purple/20",
    teal: "before:bg-zinovr-teal/20",
    red: "before:bg-zinovr-red/20",
  }

  const hoverClasses = hoverable ? "transition-transform hover:scale-[1.02] hover:shadow-lg" : ""

  return (
    <Card 
      className={cn(
        "glass-panel relative overflow-hidden",
        "before:absolute before:inset-0 before:-z-10 before:blur-md",
        glowClasses[glowColor],
        hoverClasses,
        className
      )}
      {...props}
    >
      <CardHeader className="pb-2">
        {icon && <div className="mb-2">{icon}</div>}
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        {description && (
          <CardDescription className="text-zinovr-textLight">{description}</CardDescription>
        )}
      </CardHeader>
      <CardContent className={cn("pt-2", contentClassName)}>{children}</CardContent>
      {footer && <CardFooter>{footer}</CardFooter>}
    </Card>
  )
}
