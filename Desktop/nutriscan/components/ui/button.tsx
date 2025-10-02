import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-[var(--color-uno-primary)] to-[var(--color-uno-secondary)] text-white hover:shadow-lg hover:shadow-[var(--color-uno-secondary)]/30 hover:scale-105 font-semibold",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border-2 border-[var(--color-uno-secondary)]/50 bg-transparent text-[var(--color-uno-secondary)] hover:bg-[var(--color-uno-secondary)]/10 hover:border-[var(--color-uno-secondary)]",
        secondary:
          "bg-[var(--color-uno-secondary)]/10 text-[var(--color-uno-secondary)] border border-[var(--color-uno-secondary)]/30 hover:bg-[var(--color-uno-secondary)]/20",
        ghost: "hover:bg-muted hover:text-accent-foreground",
        link: "text-[var(--color-uno-secondary)] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 rounded-lg px-4",
        lg: "h-13 rounded-xl px-10",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
